import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Showdown from 'showdown';

import Projects from '../../datas/projects'

const StudyCase = () => {
    const { projectSlug } = useParams();
    const [currentProject, setCurrentProject] = useState("");
    const converter = new Showdown.Converter();

    function createMarkup(txt) {
        return { __html: converter.makeHtml(txt) };
    }

    useEffect(() => {
        const foundProject = Projects.studyCase.find((project) => project.client === projectSlug);
        setCurrentProject(foundProject);
    }, [projectSlug])

    return (
        <>
            <h1 >{currentProject.client}</h1>
            <h2 dangerouslySetInnerHTML={createMarkup(currentProject.study)}></h2>
            <p dangerouslySetInnerHTML={createMarkup(currentProject.description)}></p>
        </>
    )
}

export default StudyCase;
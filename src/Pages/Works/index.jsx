import React from 'react'
import Projects from '../../datas/projects'
import { Link } from 'react-router-dom';

const Works = () => {
    Projects.studyCase.map((projectLink, i) =>
        console.log(projectLink.client)
    )
    return (
        <>
            <div>
                <p>Au fil des années, nous avons pu accompagner les meilleurs.Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.</p>

                {Projects.studyCase.map((projectLink, i) =>
                    <p key={i}>
                        <Link to={"/works/" + projectLink.client + "-study-case"}>{projectLink.client}</Link>
                    </p>
                )}

            </div>


        </>
    )
}
export default Works;
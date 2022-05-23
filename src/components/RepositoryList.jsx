import { ReppositoryItem } from "./RepositoryItem";
import { useState, useEffect } from "react";

import '../styles/repositories.scss'

const repository ={
    name: 'unform2',
    description: 'Forms is React',
    link: 'https://github.com/unform/unform'
}

function RepositoryList() {
    const [repository, setRepository] = useState<repository>([])

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepository(data))
    },[])
    return (
        <section className="repository-list">
            <h1>Lista de reporitório</h1>

            <ul>
                <ReppositoryItem repository={repository}/>
                <ReppositoryItem repository={repository}/>
                <ReppositoryItem repository={repository}/>
            </ul>
        </section>
    )
}

export default RepositoryList

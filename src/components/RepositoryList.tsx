import { ReppositoryItem } from "./RepositoryItem";
import { useState, useEffect } from "react";

import '../styles/repositories.scss'

interface RepositoryListState {
    name: string;
    description: string;
    html_url: string;
}

function RepositoryList() {
    const [rep, setRep] = useState<RepositoryListState[]>([]);
    console.log(rep, 'rep');

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRep(data))
    }, [])
    
    return (
        <section className="repository-list">
            <h1>Lista de reporitório</h1>

            <ul>
                {rep.map(repository => {
                    return <ReppositoryItem key={repository.name} repository={repository} />
                })}
            </ul>
        </section>
    )
}

export default RepositoryList
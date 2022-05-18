import { ReppositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'

const repository ={
    name: 'unform2',
    description: 'Forms is React',
    link: 'https://github.com/unform/unform'
}

function RepositoryList() {
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
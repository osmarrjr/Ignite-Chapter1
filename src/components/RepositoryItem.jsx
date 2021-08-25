
export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository?.name}</strong>
            <p>{props.repository?.description ?? 'sem descrição'}</p>

            <a href={props.repository.html_url}>
                Acessar repositório
            </a>
        </li>
    )
}
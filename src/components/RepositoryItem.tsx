interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}


export function RepositoryItem(props: RepositoryItemProps) {
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
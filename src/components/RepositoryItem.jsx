
export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository?.name ?? 'default'}</strong>
            <p>{props.repository?.description ?? 'sem descrição'}</p>

            <a href={props.repository?.link ?? 'sem link'}>
                Acessar repositório
            </a>
        </li>
    
        
    )
}
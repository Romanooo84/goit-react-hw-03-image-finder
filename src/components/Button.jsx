export const SearchButton = ({onClick}) => {
    return (
        <button type='button' onClick={onClick}>
            <svg id='search' stroke='#808080' fill="#808080" width="18" height="20" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 13.024q0-2.624 1.024-5.056t2.784-4.16 4.16-2.752 5.056-1.056q2.656 0 5.056 1.056t4.16 2.752 2.784 4.16 1.024 5.056q0 3.616-1.984 6.816l7.072 7.040q0.864 0.896 0.864 2.144t-0.864 2.112-2.144 0.864-2.112-0.864l-7.040-7.040q-3.2 1.952-6.816 1.952-2.656 0-5.056-1.024t-4.16-2.784-2.784-4.128-1.024-5.088zM4 13.024q0 2.464 1.216 4.544t3.296 3.264 4.512 1.216q1.824 0 3.488-0.704t2.88-1.92 1.92-2.88 0.736-3.52-0.736-3.52-1.92-2.848-2.88-1.92-3.488-0.736q-2.432 0-4.512 1.216t-3.296 3.296-1.216 4.512z"></path>
            </svg>
            </button>

    )
}

export const PaginationButton = ({onClick2 }) => {
    return (
        <button type='button' onClick={onClick2}>Load more</button>
    )
}
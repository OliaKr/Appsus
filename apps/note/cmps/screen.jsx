const { useNavigate, useParams, Link } = ReactRouterDOM
export function Screen() {
    const navigate = useNavigate()

    return <section className="screen" onClick={() => navigate('/note')}></section>
}
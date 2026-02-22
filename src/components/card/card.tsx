import './card.css';

function Card({title, description, icon}: { title: string, description: string, icon: string }) {
    return (
        <section className={'card'}>
            <div className={'card--icon-pill'}>
                <div style={{'--icon-url': `url(${icon})`} as React.CSSProperties} className={'card--icon'}/>
            </div>
            <h4>{title}</h4>
            <p className={'card--description'}>{description}</p>
        </section>
    )
}

export default Card

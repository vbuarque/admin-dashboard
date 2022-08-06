import '../styles/card.scss';

type Props = {
    title: string;
    description: string;
}

export function Cards({ title, description }: Props) {
    return (
        <div className="card">
            <h1>{title}</h1>
            <span>{description}</span>
        </div>
    );
}
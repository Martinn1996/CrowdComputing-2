import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <Container>
            <h1>Home</h1>
            <p><Link to="/task1">Interface 1</Link></p>
            <p><Link to="/task2">Interface 2</Link></p>
            <p><Link to="/task3">Interface 3</Link></p>
            <p><Link to="/task4">Interface 4</Link></p>
            <p><Link to="/task5">Interface 5/benchmark</Link></p>
        </Container>
    )
}


import { useState } from 'react'
import { useSignUp } from '../hooks/useSignUp'
import { Container, Row, Col } from 'react-bootstrap'


const SignUp = () => {
    const [fname, setFName] = useState('')
    const [mname, setMName] = useState('')
    const [lname, setLName] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [age, setAge] = useState('')
    const [phone_num, setPhoneNum] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signup, isLoading, error } = useSignUp()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password)
    }

    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Sign Up</h3>

            <Container>
                <Row>
                    <Col>
                        <label>First Name</label>
                        <input type="text" onChange={(e) => setFName(e.target.value)} value={fname}/>
                    </Col>
                    <Col>
                        <label>Middle Name</label>
                        <input type="text" onChange={(e) => setMName(e.target.value)} value={mname}/>
                    </Col>
                    <Col>
                        <label>Last Name</label>
                        <input type="text" onChange={(e) => setLName(e.target.value)} value={lname}/>
                    </Col>
                </Row>
            </Container>
            
            <Container>
                <Row>
                    <Col xs={9}>
                        <label>Birth Date</label>
                        <input type="date" onChange={(e) => setBirthdate(e.target.value)} value={birthdate}/>
                    </Col>
                    <Col>
                        <label>Age</label>
                        <input type="text" onChange={(e) => setAge(e.target.value)} value={age}/>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                        <label>Phone Number</label>
                        <input type="text" onChange={(e) => setPhoneNum(e.target.value)} value={phone_num}/>
                    </Col>
                    <Col>
                        <label>Email</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    </Col>
                </Row>
            </Container>
        
            <label>Password:</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
            
            <button disabled={isLoading}>Sign Up</button>
            { error && <div className="error">{error}</div> }
        </form>
    )
}

export default SignUp
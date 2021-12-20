import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import './postblog.css'

function PostBlog() {

    let data = JSON.parse(localStorage.getItem('blogData'));
    const [blogData, setBlogData] = useState(data || [])
    console.log(blogData)

    const handleSubmitBlog = (e) => {
        e.preventDefault()
        let blog = {
            id: Math.random().toString(36).substr(2, 9),
            title: e.target.title.value,
            content: e.target.content.value
        }
        setBlogData([...blogData,blog])
        e.target.title.value = "";
        e.target.content.value = "";
        console.log(blog)
    }

    useEffect(() => {
        localStorage.setItem('blogData', JSON.stringify(blogData))
    },)

    return (
        <div>
            <Container>
                <Form className='registration-form' onSubmit={handleSubmitBlog}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name='title' placeholder="Enter Blog Title" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={5} type="text" name='content' placeholder="Enter Blog Details" />
                </Form.Group>
                    <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </Container>
        </div>
    )
}

export default PostBlog

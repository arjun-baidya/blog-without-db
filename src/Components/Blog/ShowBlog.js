import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './showblog.css'

function ShowBlog() {

    // get data from local storage
    let data = JSON.parse(localStorage.getItem('blogData'));
    console.log(data)

    return (
        <div>
            <Container>
                <div className='show-blog'>
                    <h1>Blog</h1>
                </div>
                { data && data.map((blog, index) => {
                        return (
                            <Row key={index} className='blog-show-row'>
                                <div className='show-blog-title'>
                                    <h2>{blog.title}</h2>
                                </div>
                                <div className='show-blog-content'>
                                    <p>{blog.content}</p>
                                </div>
                            </Row>
                        )
                    })
                }
            </Container>
        </div>
    )
}

export default ShowBlog

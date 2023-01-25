import React from 'react';
import './blog.css';
import { Article } from "../../component";
import { blog01, blog02, blog03, blog04, blog05 } from './import';

const Blog = () => {
    return (
        <div className="gpt3__blog" id='blog'>
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">
                    A lot is happening we are blog about it.
                </h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupA">
                    <Article imgurl={blog01} date="22 feb 2023" title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem cumque autem velit qui quisquam, cupiditate fuga nisi ipsam odit enim." />
                </div>
                <div className="gpt3__blog-container_groupB">
                    <Article imgurl={blog02} date="22 feb 2023" title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem cumque autem velit qui quisquam, cupiditate fuga nisi ipsam odit enim." />
                    <Article imgurl={blog03} date="22 feb 2023" title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem cumque autem velit qui quisquam, cupiditate fuga nisi ipsam odit enim." />
                    <Article imgurl={blog04} date="22 feb 2023" title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem cumque autem velit qui quisquam, cupiditate fuga nisi ipsam odit enim." />
                    <Article imgurl={blog05} date="22 feb 2023" title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem cumque autem velit qui quisquam, cupiditate fuga nisi ipsam odit enim." />
                </div>
            </div>
        </div>
    )
}

export default Blog
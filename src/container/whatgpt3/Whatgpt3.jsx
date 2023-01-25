import React from 'react';
import { Feature } from '../../component';
import './whatgpt3.css';

const Whatgpt3 = () => {
    return (
        <div className="gpt3__whatgpt3  section__margin" id='wgpt3'>
            <div className="gpt3__whatgpt3-feature">
                <Feature title="What is Gpt3" text="Generative Pre-trained Transformer 3 (GPT-3) is an autoregressive language model that uses deep learning to produce human-like text. Given an initial text as prompt, it will produce text that continues the prompt" />
            </div>
            <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>Explore the Library</p>
            </div>
            <div className="gpt3__whatgpt3-container">
                <Feature title="Chatbots" text="A chatbot or chatterbot is a software application used to conduct an on-line chat conversation via text or text-to-speech, in lieu of providing direct contact with a live human agent" />
                <Feature title="Knowledgebase" text="A knowledge base is a self-serve online library of information about a product, service, department, or topic" />
                <Feature title="Education" text="Artificial Intelligence in education can help generate bit-size learning through low-storage study materials and other lessons in digital format" />
            </div>
        </div>
    )
}

export default Whatgpt3;
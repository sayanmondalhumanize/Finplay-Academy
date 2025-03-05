import React, { useState } from "react";
import "./KnowledgeBase.css";
import { financialTopics } from "../../dummyData";

export default function KnowledgeBase() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredTopics = financialTopics.filter(topic =>
        topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        topic.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
        topic.contributors.some(contributor => contributor.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="knowledge-container">
            <h1>Financial Literacy Knowledge Base</h1>
            <p>Explore various topics to enhance your financial literacy.</p>
            <input 
                type="text" 
                placeholder="Search topics..." 
                className="search-bar" 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <div className="topics-grid">
                {filteredTopics.map((topic, index) => (
                    <a 
                        key={index} 
                        className="topic-card" 
                        href={topic.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <h2>{topic.title}</h2>
                        <p>{topic.description}</p>
                        <div className="topic-tags">
                            {topic.tags.map((tag, i) => (
                                <span key={i} className="tag">{tag}</span>
                            ))}
                        </div>
                        <div className="topic-footer">
                            <span>Views: {topic.views}</span>
                            <span>Contributors: {topic.contributors.join(", ")}</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

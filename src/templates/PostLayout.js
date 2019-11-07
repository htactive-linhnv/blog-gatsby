import React from 'react';
import { Link } from "gatsby"
import { Button, Tag } from 'antd'
const slug = require(`slug`);

const PostLayout = (props) => {
    const { node,nextPost,prevPost } = props
    console.log(props,"??????");
    
    const bgUrl = `url("${node.frontmatter.thumbnail}")`
    return (
        <div className='post--wrapper'>'
            <div className="post--image"
                style={{ backgroundImage: bgUrl }}>
            </div>
            <div className="post--write">
                <Link className='post--category' to={node.fields.slug}>
                    {
                        node.frontmatter.categories.map((item, index) => {
                            let colon = index === node.frontmatter.categories.length - 1 ? "" : ", "
                            return <Link key={index}
                                className="category"
                                to={`/category/${slug(item.replace(/\s+/g, '-').toLowerCase())}`} >
                                {item.toUpperCase()}{colon}
                            </Link>
                        }
                        )}
                    <div className='post--title' >
                        {node.frontmatter.title}
                    </div>
                </Link>
                {
                    node.frontmatter.tags.map((item, index) =>
                        <Tag key={index} className='post--content' >
                            <Link
                                to={`/tag/${slug(item.replace(/\s+/g, '-').toLowerCase())}`}>
                                #{item}
                            </Link>
                        </Tag>
                    )}

                <div className='post--content' >
                    {node.excerpt}
                </div>
                <Button type="Primary">
                    <Link to={node.fields.slug}>
                        Read more
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default PostLayout;
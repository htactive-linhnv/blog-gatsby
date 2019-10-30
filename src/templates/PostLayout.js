import React from 'react';
import { Link } from "gatsby"
import { Button, Tag } from 'antd'
const PostLayout = (props) => {
    const { node } = props
    return (
        <div className='post--wrapper'>
            <div className="post--image">
            </div>
            <div className="post--write">
                <Link className='post--category' to={node.fields.slug}>
                    {
                        node.frontmatter.categories.map((item, index) => {
                            let colon = index === node.frontmatter.categories.length - 1 ? "" : ", "
                            return <span key={index} className="category" >{item.toUpperCase()}{colon}</span>
                        }
                        )}
                    <div className='post--title' >
                        {node.frontmatter.title}

                    </div>
                </Link>
                {
                    node.frontmatter.tags.map((item,index) =>
                        <Tag key= {index} className='post--content' >#{item}</Tag>
                    )}

                <div className='post--content' >{node.excerpt}</div>
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
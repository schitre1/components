import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
                
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()} 
                    author="Hermione" 
                    timeAgo="Today at 4.48 pm" 
                    content="Nice blog post! Informative~" 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()} 
                    author="Harry" 
                    timeAgo="Today at 1.00 am" 
                    content="A good read."
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()} 
                    author="Ron" 
                    timeAgo="Yesterday at 2.00 pm" 
                    content="Interesting post!"
                />
            </ApprovalCard>
            
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'))
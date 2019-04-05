import React from 'react';

function MainContent() {
    return (
        <main>
            <div className='todo-main-div'>
                <ul>
                    <li>
                        <label>
                            <input type="checkbox"/>
                            Cleaning
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox"/>
                            Making Food
                        </label>
                    </li>
                </ul>
            </div>
        </main>
    )
};
export default MainContent;
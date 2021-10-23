import React from 'react';

export default function WorkModal({ shown }){
    return (
        <div className={`modal-container bg-green-300 ${shown && 'active'}`}>
            <div className={`modal-content}`}>
                <p className="text-white">Test</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan consectetur velit at congue. Donec porta et ligula at hendrerit. Ut tincidunt dui eu justo molestie pellentesque. Curabitur sit amet blandit ex. Quisque porta auctor euismod. Cras pharetra sit amet neque sed rutrum. Mauris faucibus porttitor rhoncus. Donec elementum, tortor sit amet hendrerit tempus, lorem velit porttitor neque, nec bibendum orci ligula a neque. Nulla accumsan mi et turpis laoreet malesuada.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan consectetur velit at congue. Donec porta et ligula at hendrerit. Ut tincidunt dui eu justo molestie pellentesque. Curabitur sit amet blandit ex. Quisque porta auctor euismod. Cras pharetra sit amet neque sed rutrum. Mauris faucibus porttitor rhoncus. Donec elementum, tortor sit amet hendrerit tempus, lorem velit porttitor neque, nec bibendum orci ligula a neque. Nulla accumsan mi et turpis laoreet malesuada.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan consectetur velit at congue. Donec porta et ligula at hendrerit. Ut tincidunt dui eu justo molestie pellentesque. Curabitur sit amet blandit ex. Quisque porta auctor euismod. Cras pharetra sit amet neque sed rutrum. Mauris faucibus porttitor rhoncus. Donec elementum, tortor sit amet hendrerit tempus, lorem velit porttitor neque, nec bibendum orci ligula a neque. Nulla accumsan mi et turpis laoreet malesuada.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan consectetur velit at congue. Donec porta et ligula at hendrerit. Ut tincidunt dui eu justo molestie pellentesque. Curabitur sit amet blandit ex. Quisque porta auctor euismod. Cras pharetra sit amet neque sed rutrum. Mauris faucibus porttitor rhoncus. Donec elementum, tortor sit amet hendrerit tempus, lorem velit porttitor neque, nec bibendum orci ligula a neque. Nulla accumsan mi et turpis laoreet malesuada.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan consectetur velit at congue. Donec porta et ligula at hendrerit. Ut tincidunt dui eu justo molestie pellentesque. Curabitur sit amet blandit ex. Quisque porta auctor euismod. Cras pharetra sit amet neque sed rutrum. Mauris faucibus porttitor rhoncus. Donec elementum, tortor sit amet hendrerit tempus, lorem velit porttitor neque, nec bibendum orci ligula a neque. Nulla accumsan mi et turpis laoreet malesuada.</p>
                {/* <button onClick={toHome}>Back to Home</button> */}
            </div>
        </div>
    )
}
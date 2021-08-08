import React, { Component } from 'react';
import './video.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {videoitems} from './Data';

class VideoElements extends Component {

    state={videoitems: videoitems}

    onDragEnd = result => {
        const { destination, source, reason } = result;
        if (!destination || reason === 'CANCEL') {
          return;
        }
    
        if (
          destination.droppableId === source.droppableId &&
          destination.index === source.index
        ) {
          return;
        }
        const videoitems = Object.assign([], this.state.videoitems);
        const droppedVideo = this.state.videoitems[source.index];
        videoitems.splice(source.index, 1);
        videoitems.splice(destination.index, 0, droppedVideo);
        this.setState({
            videoitems
        });
      }
   
    renderVideos = (item, index) => {
        return <Draggable
            key={index}
            draggableId={index+' '}
            index={index}>

            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <div className='item'>
                        <div>{index+1}</div>
                        &nbsp;
                        <div><iframe src={item.avatar} alt='avatar' title="YouTube video player"/></div>
                        <div className='name'>
                            <div>{item.firstName}</div>
                            <div>{item.lastName}</div>
                        </div>
                    </div>
                </div>
            )}
        </Draggable>
    }
    render() {
        
        return (<DragDropContext onDragEnd={this.onDragEnd}>
            <div className='container'>
                <div className='videoitems'>

                    <Droppable droppableId="dp1">
                        {(provided) => (
                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                {this.state.videoitems.map(this.renderVideos)}
                                {provided.placeholder}
                            </div>
                        )}

                    </Droppable>

                </div>
                
            </div>
        </DragDropContext>);
    }
}

export default VideoElements;
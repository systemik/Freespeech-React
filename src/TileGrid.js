import React, { Component, useState } from 'react'
import Tile from './Tile.js';
import { tileGridData } from './resources/tileGridData.js';


function TileGrid(props) {

    const [currentTileNavigation, setNavigation] = useState(tileGridData['home']);

    function updateTileData(tileData) {
        if(tileData.hasOwnProperty('navigation')) {
            setNavigation(tileGridData[tileData['navigation']]);
        }
    }

    return (
        <div>
            <div className='tileGrid'>
                {currentTileNavigation.map(object => <Tile {...object} func={updateTileData} />) }
            </div>
        </div>
        
    )
}

export default TileGrid;

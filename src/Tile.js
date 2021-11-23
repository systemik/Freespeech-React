/*
Tile.js
Tile is a component which renders as the individual tiles in the
TileGrid component and SentenceBuilder component.

Props:
*required
*id (int) - ID of tile.
*name (str) - Name that displays on tile.
isFolder (bool) - Renders the tile with a folder icon, only cosmetic.
navigation (str) - Will update state of TileGrid to given TileGrid name.
hidden (bool) - Will hide the tile but it will still take up space. [Future]
*/

import React from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import './styles/Tile.css';

function Tile(props) {

    const isFolder = props.isFolder || false;
    const tileImage = 'https://img.icons8.com/fluency/96/000000/'+props.image+'.png';
    
    /* If input name > 10 characters, truncate with ... */
    /* This is prob a temp fix */
    let tileName = props.name;
    if(tileName.length > 10) {
        tileName = tileName.substring(0,7) + '...';
    }

    /* Handles folder/non-folder logic with icon display */
    let icon;
    if(isFolder) {
        icon = <div className='tileOverlap'>
                    <img className='tileIconOverlap' src={tileImage} alt='' />
                    <img className='tileFolderOverlap' src='https://img.icons8.com/fluency/96/000000/folder.png' alt='' />
                </div>;
    } else {
        icon = <img className='tileIcon' src={tileImage} alt='' />;
    }

    const sendDataToTileGrid = () => {
        props.func(props);
    }    

    return(
        <div className="Tile">
            <ButtonBase onClick={sendDataToTileGrid}>
                <div className='tileContent'>
                    {icon}
                    <p>{tileName || 'Untitled'}</p>
                </div>
            </ButtonBase>
        </div>
    );
}

export default Tile;
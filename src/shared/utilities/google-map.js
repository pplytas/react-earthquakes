export function generateMapImageUrl(markerLatitude, markerLongitude) {
    const center = '38.414418,24.739099';  // center of Greece
    const size = '420x420';
    const zoom = 6;
    const scale = 2;
    const mapType = 'roadmap';
    const markerColor = 'red';
    const markerLocation = `${markerLatitude},${markerLongitude}`;
    const googleApiKey = 'AIzaSyA51uA6AmqN6k2gpOF6TIGtCflCbzaCT_I';
    const mapImageUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${center}&zoom=${zoom}&size=${size}&scale=${scale}&maptype=${mapType}&markers=color:${markerColor}%7C${markerLocation}&key=${googleApiKey}`;

    return mapImageUrl;
}

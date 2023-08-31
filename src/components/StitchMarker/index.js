import "./style.css"

const StitchMarker = (point=0) =>{
    return /*html*/ `
    <div class="stitch-marker" data-point="${point}">
        <div class="point">
        </div>
        <div class="point">
        </div>
        <div class="point">
        </div>
    </div>
    `
};

export default StitchMarker;
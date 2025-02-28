export class GooeyBg {
    constructor(el) {
        this.DOM = {el: el};
        this.DOM.svg = this.DOM.el.querySelector('svg');
        this.DOM.circles = [...this.DOM.svg.querySelectorAll('circle')];
        this.DOM.circlesArr = [];
        
        this.mousePos = {x: 0, y: 0};
        this.lastMousePos = {x: 0, y: 0};
        
        this.circles = [];
        for (const circle of this.DOM.circles) {
            this.circles.push({
                el: circle,
                tx: 0,
                ty: 0,
                x: 0,
                y: 0
            });
        }
        
        this.initEvents();
        requestAnimationFrame(() => this.render());
    }
    
    initEvents() {
        window.addEventListener('mousemove', ev => this.mouseMove(ev));
    }
    
    mouseMove(ev) {
        this.mousePos.x = ev.clientX;
        this.mousePos.y = ev.clientY;
    }
    
    render() {
        let dx = this.mousePos.x - this.lastMousePos.x;
        let dy = this.mousePos.y - this.lastMousePos.y;
        
        this.lastMousePos.x = this.mousePos.x;
        this.lastMousePos.y = this.mousePos.y;
        
        this.circles.forEach((circle, i) => {
            circle.tx = this.lastMousePos.x;
            circle.ty = this.lastMousePos.y;
            circle.x += (circle.tx - circle.x) * 0.15;
            circle.y += (circle.ty - circle.y) * 0.15;
            
            circle.el.setAttribute('cx', circle.x);
            circle.el.setAttribute('cy', circle.y);
            
            if (i > 0) {
                const prev = this.circles[i-1];
                circle.tx = prev.x;
                circle.ty = prev.y;
            }
        });
        
        requestAnimationFrame(() => this.render());
    }
} 
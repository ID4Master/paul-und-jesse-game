(()=>{var Nf=1,wu=2,Di=3,cr=0,qt=1,Ot=2;var Cr=100;var Ch=204,Ph=205;var Tu=0,Sx=1,wx=2,or=0,Tx=1,Ax=2,Rx=3,Au=4,Cx=5,Px=6;var Of=300,Ds=301,Us=302,Lh=303,Ih=304,Gl=306,Sa=1e3,zi=1001,Dh=1002,sn=1003,op=1004;var Xc=1005;var Qn=1006,Lx=1007;var ll=1008;var Ir=1009;var Ru=1012,Hf=1013,rr=1014,sr=1015,wa=1016,Bf=1017,kf=1018,Dr=1020;var di=1023;var Ur=1026,zs=1027;var Ff=1029;var Gf=1031,Vf=1033,jc=33776,qc=33777,Yc=33778,Zc=33779,lp=35840,cp=35841,hp=35842,up=35843,Wf=36196,dp=37492,pp=37496,fp=37808,mp=37809,gp=37810,xp=37811,vp=37812,yp=37813,_p=37814,Mp=37815,Ep=37816,bp=37817,Sp=37818,wp=37819,Tp=37820,Ap=37821,Kc=36492,Rp=36494,Cp=36495;var Pp=36284,Lp=36285,Ip=36286;var cl=2300,hl=2301,Jc=2302,Dp=2400,Up=2401,zp=2402;var Xf=3e3,zr=3001;var pi="",tt="srgb",Hi="srgb-linear",Cu="display-p3",Vl="display-p3-linear",ul="linear",lt="srgb",dl="rec709",pl="p3";var cs=7680;var Uh=35044;var Np="300 es",zh=1035,Ns=2e3,fl=2001,hr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let i=t.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}},Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ol=Math.PI/180,Nh=180/Math.PI;function Oi(){let n=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(Xt[255&n]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]+"-"+Xt[255&e]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[63&t|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[255&i]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function Ht(n,e,t){return Math.max(e,Math.min(t,n))}function Ix(n,e){return(n%e+e)%e}function $c(n,e,t){return(1-t)*n+t*e}function Op(n){return(n&n-1)==0&&n!==0}function Oh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ni(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function it(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(4294967295*n);case Uint16Array:return Math.round(65535*n);case Uint8Array:return Math.round(255*n);case Int32Array:return Math.round(2147483647*n);case Int16Array:return Math.round(32767*n);case Int8Array:return Math.round(127*n);default:throw new Error("Invalid component type.")}}var ce=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Fe=class n{constructor(e,t,i,r,s,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],f=i[8],g=r[0],m=r[3],y=r[6],x=r[1],v=r[4],S=r[7],C=r[2],E=r[5],_=r[8];return s[0]=a*g+o*x+l*C,s[3]=a*m+o*v+l*E,s[6]=a*y+o*S+l*_,s[1]=c*g+h*x+u*C,s[4]=c*m+h*v+u*E,s[7]=c*y+h*S+u*_,s[2]=d*g+p*x+f*C,s[5]=d*m+p*v+f*E,s[8]=d*y+p*S+f*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,f=t*u+i*d+r*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/f;return e[0]=u*g,e[1]=(r*c-h*i)*g,e[2]=(o*i-r*a)*g,e[3]=d*g,e[4]=(h*t-r*l)*g,e[5]=(r*s-o*t)*g,e[6]=p*g,e[7]=(i*l-c*t)*g,e[8]=(a*t-i*s)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Qc.makeScale(e,t)),this}rotate(e){return this.premultiply(Qc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Qc=new Fe;function jf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ml(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Dx(){let n=ml("canvas");return n.style.display="block",n}var Hp={};function ya(n){n in Hp||(Hp[n]=!0,console.warn(n))}var Bp=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),kp=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ro={[Hi]:{transfer:ul,primaries:dl,toReference:n=>n,fromReference:n=>n},[tt]:{transfer:lt,primaries:dl,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Vl]:{transfer:ul,primaries:pl,toReference:n=>n.applyMatrix3(kp),fromReference:n=>n.applyMatrix3(Bp)},[Cu]:{transfer:lt,primaries:pl,toReference:n=>n.convertSRGBToLinear().applyMatrix3(kp),fromReference:n=>n.applyMatrix3(Bp).convertLinearToSRGB()}},Ux=new Set([Hi,Vl]),nt={enabled:!0,_workingColorSpace:Hi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Ux.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Ro[e].toReference;return(0,Ro[t].fromReference)(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ro[n].primaries},getTransfer:function(n){return n===pi?ul:Ro[n].transfer}};function Ls(n){return n<.04045?.0773993808*n:Math.pow(.9478672986*n+.0521327014,2.4)}function eh(n){return n<.0031308?12.92*n:1.055*Math.pow(n,.41666)-.055}var hs,gl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{hs===void 0&&(hs=ml("canvas")),hs.width=e.width,hs.height=e.height;let i=hs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=hs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ml("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=255*Ls(s[a]/255);return i.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*Ls(t[i]/255)):t[i]=Ls(t[i]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},zx=0,xl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=Oi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(th(r[a].image)):s.push(th(r[a]))}else s=th(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function th(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?gl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Nx=0,Un=class n extends hr{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=1001,r=1001,s=1006,a=1008,o=1023,l=1009,c=n.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nx++}),this.uuid=Oi(),this.name="",this.source=new xl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ya("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===zr?tt:pi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Of)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sa:e.x=e.x-Math.floor(e.x);break;case zi:e.x=e.x<0?0:1;break;case Dh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Sa:e.y=e.y-Math.floor(e.y);break;case zi:e.y=e.y<0?0:1;break;case Dh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ya("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===tt?zr:Xf}set encoding(e){ya("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===zr?tt:pi}};Un.DEFAULT_IMAGE=null,Un.DEFAULT_MAPPING=Of,Un.DEFAULT_ANISOTROPY=1;var at=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],f=l[9],g=l[2],m=l[6],y=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,S=(p+1)/2,C=(y+1)/2,E=(h+d)/4,_=(u+g)/4,D=(f+m)/4;return v>S&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=E/i,s=_/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=E/r,s=D/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=_/s,r=D/s),this.set(i,r,s,t),this}let x=Math.sqrt((m-f)*(m-f)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-f)/x,this.y=(u-g)/x,this.z=(d-h)/x,this.w=Math.acos((c+p+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Hh=class extends hr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);let r={width:e,height:t,depth:1};i.encoding!==void 0&&(ya("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===zr?tt:pi),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Un(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){this.width===e&&this.height===t&&this.depth===i||(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new xl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bi=class extends Hh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},vl=class extends Un{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bh=class extends Un{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zt=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3],d=s[a+0],p=s[a+1],f=s[a+2],g=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=f,void(e[t+3]=g);if(u!==g||l!==d||c!==p||h!==f){let m=1-o,y=l*d+c*p+h*f+u*g,x=y>=0?1:-1,v=1-y*y;if(v>Number.EPSILON){let C=Math.sqrt(v),E=Math.atan2(C,y*x);m=Math.sin(m*E)/C,o=Math.sin(o*E)/C}let S=o*x;if(l=l*m+d*S,c=c*m+p*S,h=h*m+f*S,u=u*m+g*S,m===1-o){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,a){let o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[a],d=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*u+l*p-c*d,e[t+1]=l*f+h*d+c*u-o*p,e[t+2]=c*f+h*p+o*d-l*u,e[t+3]=h*f-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),u=o(s/2),d=l(i/2),p=l(r/2),f=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"YZX":this._x=d*h*u+c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u-d*p*f;break;case"XZY":this._x=d*h*u-c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,a=this._w,o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*t-s*r),u=2*(s*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return nh.copy(this).projectOnVector(e),this.sub(nh)}reflect(e){return this.sub(nh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},nh=new w,Fp=new Zt,ti=class{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Kn):Kn.fromBufferAttribute(s,a),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Co.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Co.copy(i.boundingBox)),Co.applyMatrix4(e.matrixWorld),this.union(Co)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(la),Po.subVectors(this.max,la),us.subVectors(e.a,la),ds.subVectors(e.b,la),ps.subVectors(e.c,la),Qi.subVectors(ds,us),er.subVectors(ps,ds),Sr.subVectors(us,ps);let t=[0,-Qi.z,Qi.y,0,-er.z,er.y,0,-Sr.z,Sr.y,Qi.z,0,-Qi.x,er.z,0,-er.x,Sr.z,0,-Sr.x,-Qi.y,Qi.x,0,-er.y,er.x,0,-Sr.y,Sr.x,0];return!!ih(t,us,ds,ps,Po)&&(t=[1,0,0,0,1,0,0,0,1],!!ih(t,us,ds,ps,Po)&&(Lo.crossVectors(Qi,er),t=[Lo.x,Lo.y,Lo.z],ih(t,us,ds,ps,Po)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Kn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ri=[new w,new w,new w,new w,new w,new w,new w,new w],Kn=new w,Co=new ti,us=new w,ds=new w,ps=new w,Qi=new w,er=new w,Sr=new w,la=new w,Po=new w,Lo=new w,wr=new w;function ih(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){wr.fromArray(n,s);let o=r.x*Math.abs(wr.x)+r.y*Math.abs(wr.y)+r.z*Math.abs(wr.z),l=e.dot(wr),c=t.dot(wr),h=i.dot(wr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ox=new ti,ca=new w,rh=new w,ni=class{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Ox.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ca.subVectors(e,this.center);let t=ca.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=.5*(i-this.radius);this.center.addScaledVector(ca,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ca.copy(e.center).add(rh)),this.expandByPoint(ca.copy(e.center).sub(rh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ci=new w,sh=new w,Io=new w,tr=new w,ah=new w,Do=new w,oh=new w,Os=class{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){sh.copy(e).add(t).multiplyScalar(.5),Io.copy(t).sub(e).normalize(),tr.copy(this.origin).sub(sh);let s=.5*e.distanceTo(t),a=-this.direction.dot(Io),o=tr.dot(this.direction),l=-tr.dot(Io),c=tr.lengthSq(),h=Math.abs(1-a*a),u,d,p,f;if(h>0)if(u=a*l-o,d=a*o-l,f=s*h,u>=0)if(d>=-f)if(d<=f){let g=1/h;u*=g,d*=g,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(sh).addScaledVector(Io,d),p}intersectSphere(e,t){Ci.subVectors(e.center,this.origin);let i=Ci.dot(this.direction),r=Ci.dot(Ci)-i*i,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r?null:((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>r?null:((o>i||i!=i)&&(i=o),(l<r||r!=r)&&(r=l),r<0?null:this.at(i>=0?i:r,t)))}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,i,r,s){ah.subVectors(t,e),Do.subVectors(i,e),oh.crossVectors(ah,Do);let a,o=this.direction.dot(oh);if(o>0){if(r)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}tr.subVectors(this.origin,e);let l=a*this.direction.dot(Do.crossVectors(tr,Do));if(l<0)return null;let c=a*this.direction.dot(ah.cross(tr));if(c<0||l+c>o)return null;let h=-a*tr.dot(oh);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ce=class n{constructor(e,t,i,r,s,a,o,l,c,h,u,d,p,f,g,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,h,u,d,p,f,g,m)}set(e,t,i,r,s,a,o,l,c,h,u,d,p,f,g,m){let y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=r,y[1]=s,y[5]=a,y[9]=o,y[13]=l,y[2]=c,y[6]=h,y[10]=u,y[14]=d,y[3]=p,y[7]=f,y[11]=g,y[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/fs.setFromMatrixColumn(e,0).length(),s=1/fs.setFromMatrixColumn(e,1).length(),a=1/fs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,f=o*h,g=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+f*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=f+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,f=c*h,g=c*u;t[0]=d+g*o,t[4]=f*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,f=c*h,g=c*u;t[0]=d-g*o,t[4]=-a*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,f=o*h,g=o*u;t[0]=l*h,t[4]=f*c-p,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,f=o*l,g=o*c;t[0]=l*h,t[4]=g-d*u,t[8]=f*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+f,t[10]=d-g*u}else if(e.order==="XZY"){let d=a*l,p=a*c,f=o*l,g=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=a*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hx,e,Bx)}lookAt(e,t,i){let r=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),nr.crossVectors(i,Sn),nr.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),nr.crossVectors(i,Sn)),nr.normalize(),Uo.crossVectors(Sn,nr),r[0]=nr.x,r[4]=Uo.x,r[8]=Sn.x,r[1]=nr.y,r[5]=Uo.y,r[9]=Sn.y,r[2]=nr.z,r[6]=Uo.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],f=i[2],g=i[6],m=i[10],y=i[14],x=i[3],v=i[7],S=i[11],C=i[15],E=r[0],_=r[4],D=r[8],M=r[12],I=r[1],O=r[5],L=r[9],k=r[13],G=r[2],se=r[6],de=r[10],Q=r[14],Z=r[3],ee=r[7],F=r[11],K=r[15];return s[0]=a*E+o*I+l*G+c*Z,s[4]=a*_+o*O+l*se+c*ee,s[8]=a*D+o*L+l*de+c*F,s[12]=a*M+o*k+l*Q+c*K,s[1]=h*E+u*I+d*G+p*Z,s[5]=h*_+u*O+d*se+p*ee,s[9]=h*D+u*L+d*de+p*F,s[13]=h*M+u*k+d*Q+p*K,s[2]=f*E+g*I+m*G+y*Z,s[6]=f*_+g*O+m*se+y*ee,s[10]=f*D+g*L+m*de+y*F,s[14]=f*M+g*k+m*Q+y*K,s[3]=x*E+v*I+S*G+C*Z,s[7]=x*_+v*O+S*se+C*ee,s[11]=x*D+v*L+S*de+C*F,s[15]=x*M+v*k+S*Q+C*K,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*l*u-r*c*u-s*o*d+i*c*d+r*o*p-i*l*p)+e[7]*(+t*l*p-t*c*d+s*a*d-r*a*p+r*c*h-s*l*h)+e[11]*(+t*c*u-t*o*p-s*a*u+i*a*p+s*o*h-i*c*h)+e[15]*(-r*o*h-t*l*u+t*o*d+r*a*u-i*a*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],g=e[13],m=e[14],y=e[15],x=u*m*c-g*d*c+g*l*p-o*m*p-u*l*y+o*d*y,v=f*d*c-h*m*c-f*l*p+a*m*p+h*l*y-a*d*y,S=h*g*c-f*u*c+f*o*p-a*g*p-h*o*y+a*u*y,C=f*u*l-h*g*l-f*o*d+a*g*d+h*o*m-a*u*m,E=t*x+i*v+r*S+s*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let _=1/E;return e[0]=x*_,e[1]=(g*d*s-u*m*s-g*r*p+i*m*p+u*r*y-i*d*y)*_,e[2]=(o*m*s-g*l*s+g*r*c-i*m*c-o*r*y+i*l*y)*_,e[3]=(u*l*s-o*d*s-u*r*c+i*d*c+o*r*p-i*l*p)*_,e[4]=v*_,e[5]=(h*m*s-f*d*s+f*r*p-t*m*p-h*r*y+t*d*y)*_,e[6]=(f*l*s-a*m*s-f*r*c+t*m*c+a*r*y-t*l*y)*_,e[7]=(a*d*s-h*l*s+h*r*c-t*d*c-a*r*p+t*l*p)*_,e[8]=S*_,e[9]=(f*u*s-h*g*s-f*i*p+t*g*p+h*i*y-t*u*y)*_,e[10]=(a*g*s-f*o*s+f*i*c-t*g*c-a*i*y+t*o*y)*_,e[11]=(h*o*s-a*u*s-h*i*c+t*u*c+a*i*p-t*o*p)*_,e[12]=C*_,e[13]=(h*g*r-f*u*r+f*i*d-t*g*d-h*i*m+t*u*m)*_,e[14]=(f*o*r-a*g*r-f*i*l+t*g*l+a*i*m-t*o*m)*_,e[15]=(a*u*r-h*o*r+h*i*l-t*u*l-a*i*d+t*o*d)*_,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,f=s*u,g=a*h,m=a*u,y=o*u,x=l*c,v=l*h,S=l*u,C=i.x,E=i.y,_=i.z;return r[0]=(1-(g+y))*C,r[1]=(p+S)*C,r[2]=(f-v)*C,r[3]=0,r[4]=(p-S)*E,r[5]=(1-(d+y))*E,r[6]=(m+x)*E,r[7]=0,r[8]=(f+v)*_,r[9]=(m-x)*_,r[10]=(1-(d+g))*_,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=fs.set(r[0],r[1],r[2]).length(),a=fs.set(r[4],r[5],r[6]).length(),o=fs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Jn.copy(this);let l=1/s,c=1/a,h=1/o;return Jn.elements[0]*=l,Jn.elements[1]*=l,Jn.elements[2]*=l,Jn.elements[4]*=c,Jn.elements[5]*=c,Jn.elements[6]*=c,Jn.elements[8]*=h,Jn.elements[9]*=h,Jn.elements[10]*=h,t.setFromRotationMatrix(Jn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(i-r),u=(t+e)/(t-e),d=(i+r)/(i-r),p,f;if(o===Ns)p=-(a+s)/(a-s),f=-2*a*s/(a-s);else{if(o!==fl)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),f=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(i-r),u=1/(a-s),d=(t+e)*c,p=(i+r)*h,f,g;if(o===Ns)f=(a+s)*u,g=-2*u;else{if(o!==fl)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=s*u,g=-1*u}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},fs=new w,Jn=new Ce,Hx=new w(0,0,0),Bx=new w(1,1,1),nr=new w,Uo=new w,Sn=new w,Gp=new Ce,Vp=new Zt,Hs=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Gp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vp.setFromEuler(this),this.setFromQuaternion(Vp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Hs.DEFAULT_ORDER="XYZ";var yl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},kx=0,Wp=new w,ms=new Zt,Pi=new Ce,zo=new w,ha=new w,Fx=new w,Gx=new Zt,Xp=new w(1,0,0),jp=new w(0,1,0),qp=new w(0,0,1),Vx={type:"added"},Wx={type:"removed"},Yt=class n extends hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kx++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new w,t=new Hs,i=new Zt,r=new w(1,1,1);t._onChange((function(){i.setFromEuler(t,!1)})),i._onChange((function(){t.setFromQuaternion(i,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ce},normalMatrix:{value:new Fe}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.multiply(ms),this}rotateOnWorldAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.premultiply(ms),this}rotateX(e){return this.rotateOnAxis(Xp,e)}rotateY(e){return this.rotateOnAxis(jp,e)}rotateZ(e){return this.rotateOnAxis(qp,e)}translateOnAxis(e,t){return Wp.copy(e).applyQuaternion(this.quaternion),this.position.add(Wp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xp,e)}translateY(e){return this.translateOnAxis(jp,e)}translateZ(e){return this.translateOnAxis(qp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?zo.copy(e):zo.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(ha,zo,this.up):Pi.lookAt(zo,ha,this.up),this.quaternion.setFromRotationMatrix(Pi),r&&(Pi.extractRotation(r.matrixWorld),ms.setFromRotationMatrix(Pi),this.quaternion.premultiply(ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Vx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wx)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,e,Fx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,Gx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++){let s=t[i];s.matrixWorldAutoUpdate!==!0&&e!==!0||s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++){let o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map((o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()}))),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),f.length>0&&(i.nodes=f)}return i.object=r,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Yt.DEFAULT_UP=new w(0,1,0),Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $n=new w,Li=new w,lh=new w,Ii=new w,gs=new w,xs=new w,Yp=new w,ch=new w,hh=new w,uh=new w,No=!1,ar=class n{constructor(e=new w,t=new w,i=new w){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),$n.subVectors(e,t),r.cross($n);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){$n.subVectors(r,t),Li.subVectors(i,t),lh.subVectors(e,t);let a=$n.dot($n),o=$n.dot(Li),l=$n.dot(lh),c=Li.dot(Li),h=Li.dot(lh),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,f=(a*h-o*l)*d;return s.set(1-p-f,f,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ii)!==null&&Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getUV(e,t,i,r,s,a,o,l){return No===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),No=!0),this.getInterpolation(e,t,i,r,s,a,o,l)}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ii.x),l.addScaledVector(a,Ii.y),l.addScaledVector(o,Ii.z),l)}static isFrontFacing(e,t,i,r){return $n.subVectors(i,t),Li.subVectors(e,t),$n.cross(Li).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),.5*$n.cross(Li).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return No===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),No=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,a,o;gs.subVectors(r,i),xs.subVectors(s,i),ch.subVectors(e,i);let l=gs.dot(ch),c=xs.dot(ch);if(l<=0&&c<=0)return t.copy(i);hh.subVectors(e,r);let h=gs.dot(hh),u=xs.dot(hh);if(h>=0&&u<=h)return t.copy(r);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(gs,a);uh.subVectors(e,s);let p=gs.dot(uh),f=xs.dot(uh);if(f>=0&&p<=f)return t.copy(s);let g=p*c-l*f;if(g<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(i).addScaledVector(xs,o);let m=h*f-p*u;if(m<=0&&u-h>=0&&p-f>=0)return Yp.subVectors(s,r),o=(u-h)/(u-h+(p-f)),t.copy(r).addScaledVector(Yp,o);let y=1/(m+g+d);return a=g*y,o=d*y,t.copy(i).addScaledVector(gs,a).addScaledVector(xs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},qf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},Oo={h:0,s:0,l:0};function dh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+6*(e-n)*(2/3-t):n}var be=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=nt.workingColorSpace){if(e=Ix(e,1),t=Ht(t,0,1),i=Ht(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=dh(a,s,e+1/3),this.g=dh(a,s,e),this.b=dh(a,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,t=tt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tt){let i=qf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}copyLinearToSRGB(e){return this.r=eh(e.r),this.g=eh(e.g),this.b=eh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tt){return nt.fromWorkingColorSpace(jt.copy(this),e),65536*Math.round(Ht(255*jt.r,0,255))+256*Math.round(Ht(255*jt.g,0,255))+Math.round(Ht(255*jt.b,0,255))}getHexString(e=tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(jt.copy(this),t);let i=jt.r,r=jt.g,s=jt.b,a=Math.max(i,r,s),o=Math.min(i,r,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=tt){nt.fromWorkingColorSpace(jt.copy(this),e);let t=jt.r,i=jt.g,r=jt.b;return e!==tt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*r)})`}offsetHSL(e,t,i){return this.getHSL(ir),this.setHSL(ir.h+e,ir.s+t,ir.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ir),e.getHSL(Oo);let i=$c(ir.h,Oo.h,t),r=$c(ir.s,Oo.s,t),s=$c(ir.l,Oo.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},jt=new be;be.NAMES=qf;var Xx=0,ki=class extends hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=Oi(),this.name="",this.type="Material",this.blending=1,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ch,this.blendDst=Ph,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==cr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ch&&(i.blendSrc=this.blendSrc),this.blendDst!==Ph&&(i.blendDst=this.blendDst),this.blendEquation!==Cr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Tn=class extends ki{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Tu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},bM=jx();function jx(){let n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[256|l]=32768,r[l]=24,r[256|l]=24):c<-14?(i[l]=1024>>-c-14,i[256|l]=1024>>-c-14|32768,r[l]=-c-1,r[256|l]=-c-1):c<=15?(i[l]=c+15<<10,i[256|l]=c+15<<10|32768,r[l]=13,r[256|l]=13):c<128?(i[l]=31744,i[256|l]=64512,r[l]=24,r[256|l]=24):(i[l]=31744,i[256|l]=64512,r[l]=13,r[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(8388608&c)==0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}var bt=new w,Ho=new ce,Nt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Uh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=sr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ho.fromBufferAttribute(this,t),Ho.applyMatrix3(e),this.setXY(t,Ho.x,Ho.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ni(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=it(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Uh&&(e.usage=this.usage),e}};var _l=class extends Nt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ml=class extends Nt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Re=class extends Nt{constructor(e,t,i){super(new Float32Array(e),t,i)}};var qx=0,Dn=new Ce,ph=new Yt,vs=new w,wn=new ti,ua=new ti,zt=new w,rt=class n extends hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qx++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jf(e)?Ml:_l)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,i){return Dn.makeTranslation(e,t,i),this.applyMatrix4(Dn),this}scale(e,t,i){return Dn.makeScale(e,t,i),this.applyMatrix4(Dn),this}lookAt(e){return ph.lookAt(e),ph.updateMatrix(),this.applyMatrix4(ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){let t=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Re(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];wn.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new w,1/0);if(e){let i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];ua.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(wn.min,ua.min),wn.expandByPoint(zt),zt.addVectors(wn.max,ua.max),wn.expandByPoint(zt)):(wn.expandByPoint(ua.min),wn.expandByPoint(ua.max))}wn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(zt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)zt.fromBufferAttribute(o,c),l&&(vs.fromBufferAttribute(e,c),zt.add(vs)),r=Math.max(r,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let I=0;I<o;I++)c[I]=new w,h[I]=new w;let u=new w,d=new w,p=new w,f=new ce,g=new ce,m=new ce,y=new w,x=new w;function v(I,O,L){u.fromArray(r,3*I),d.fromArray(r,3*O),p.fromArray(r,3*L),f.fromArray(a,2*I),g.fromArray(a,2*O),m.fromArray(a,2*L),d.sub(u),p.sub(u),g.sub(f),m.sub(f);let k=1/(g.x*m.y-m.x*g.y);isFinite(k)&&(y.copy(d).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(k),x.copy(p).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(k),c[I].add(y),c[O].add(y),c[L].add(y),h[I].add(x),h[O].add(x),h[L].add(x))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let I=0,O=S.length;I<O;++I){let L=S[I],k=L.start;for(let G=k,se=k+L.count;G<se;G+=3)v(i[G+0],i[G+1],i[G+2])}let C=new w,E=new w,_=new w,D=new w;function M(I){_.fromArray(s,3*I),D.copy(_);let O=c[I];C.copy(O),C.sub(_.multiplyScalar(_.dot(O))).normalize(),E.crossVectors(D,O);let L=E.dot(h[I])<0?-1:1;l[4*I]=C.x,l[4*I+1]=C.y,l[4*I+2]=C.z,l[4*I+3]=L}for(let I=0,O=S.length;I<O;++I){let L=S[I],k=L.start;for(let G=k,se=k+L.count;G<se;G+=3)M(i[G+0]),M(i[G+1]),M(i[G+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nt(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let r=new w,s=new w,a=new w,o=new w,l=new w,c=new w,h=new w,u=new w;if(e)for(let d=0,p=e.count;d<p;d+=3){let f=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(i,f),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(f,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,f=0;for(let g=0,m=l.length;g<m;g++){p=o.isInterleavedBufferAttribute?l[g]*o.data.stride+o.offset:l[g]*h;for(let y=0;y<h;y++)d[f++]=c[p++]}return new Nt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let o in r){let l=e(r[o],i);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zp=new Ce,Tr=new Os,Bo=new ni,Kp=new w,ys=new w,_s=new w,Ms=new w,fh=new w,ko=new w,Fo=new ce,Go=new ce,Vo=new ce,Jp=new w,$p=new w,Qp=new w,Wo=new w,Xo=new w,Ge=class extends Yt{constructor(e=new rt,t=new Tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){ko.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(fh.fromBufferAttribute(u,e),a?ko.addScaledVector(fh,h):ko.addScaledVector(fh.sub(t),h))}t.add(ko)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;if(r!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),Bo.copy(i.boundingSphere),Bo.applyMatrix4(s),Tr.copy(e.ray).recast(e.near),Bo.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(Bo,Kp)===null||Tr.origin.distanceToSquared(Kp)>(e.far-e.near)**2))return;Zp.copy(s).invert(),Tr.copy(e.ray).applyMatrix4(Zp),i.boundingBox!==null&&Tr.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,Tr)}}_computeIntersections(e,t,i){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,g=d.length;f<g;f++){let m=d[f],y=a[m.materialIndex];for(let x=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));x<v;x+=3)r=jo(this,y,e,i,c,h,u,o.getX(x),o.getX(x+1),o.getX(x+2)),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);f<g;f+=3)r=jo(this,a,e,i,c,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),r&&(r.faceIndex=Math.floor(f/3),t.push(r));else if(l!==void 0)if(Array.isArray(a))for(let f=0,g=d.length;f<g;f++){let m=d[f],y=a[m.materialIndex];for(let x=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));x<v;x+=3)r=jo(this,y,e,i,c,h,u,x,x+1,x+2),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);f<g;f+=3)r=jo(this,a,e,i,c,h,u,f,f+1,f+2),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}};function jo(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,ys),n.getVertexPosition(l,_s),n.getVertexPosition(c,Ms);let h=(function(u,d,p,f,g,m,y,x){let v;if(v=d.side===qt?f.intersectTriangle(y,m,g,!0,x):f.intersectTriangle(g,m,y,d.side===cr,x),v===null)return null;Xo.copy(x),Xo.applyMatrix4(u.matrixWorld);let S=p.ray.origin.distanceTo(Xo);return S<p.near||S>p.far?null:{distance:S,point:Xo.clone(),object:u}})(n,e,t,i,ys,_s,Ms,Wo);if(h){r&&(Fo.fromBufferAttribute(r,o),Go.fromBufferAttribute(r,l),Vo.fromBufferAttribute(r,c),h.uv=ar.getInterpolation(Wo,ys,_s,Ms,Fo,Go,Vo,new ce)),s&&(Fo.fromBufferAttribute(s,o),Go.fromBufferAttribute(s,l),Vo.fromBufferAttribute(s,c),h.uv1=ar.getInterpolation(Wo,ys,_s,Ms,Fo,Go,Vo,new ce),h.uv2=h.uv1),a&&(Jp.fromBufferAttribute(a,o),$p.fromBufferAttribute(a,l),Qp.fromBufferAttribute(a,c),h.normal=ar.getInterpolation(Wo,ys,_s,Ms,Jp,$p,Qp,new w),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new w,materialIndex:0};ar.getNormal(ys,_s,Ms,u.normal),h.face=u}return h}var ae=class n extends rt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;function f(g,m,y,x,v,S,C,E,_,D,M){let I=S/_,O=C/D,L=S/2,k=C/2,G=E/2,se=_+1,de=D+1,Q=0,Z=0,ee=new w;for(let F=0;F<de;F++){let K=F*O-k;for(let pe=0;pe<se;pe++){let A=pe*I-L;ee[g]=A*x,ee[m]=K*v,ee[y]=G,c.push(ee.x,ee.y,ee.z),ee[g]=0,ee[m]=0,ee[y]=E>0?1:-1,h.push(ee.x,ee.y,ee.z),u.push(pe/_),u.push(1-F/D),Q+=1}}for(let F=0;F<D;F++)for(let K=0;K<_;K++){let pe=d+K+se*F,A=d+K+se*(F+1),T=d+(K+1)+se*(F+1),H=d+(K+1)+se*F;l.push(pe,A,H),l.push(A,T,H),Z+=6}o.addGroup(p,Z,M),p+=Z,d+=Q}f("z","y","x",-1,-1,i,t,e,a,s,0),f("z","y","x",1,-1,i,t,-e,a,s,1),f("x","z","y",1,1,e,i,t,r,a,2),f("x","z","y",1,-1,e,i,-t,r,a,3),f("x","y","z",1,-1,e,t,i,r,s,4),f("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(h,3)),this.setAttribute("uv",new Re(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Bs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function rn(n){let e={};for(let t=0;t<n.length;t++){let i=Bs(n[t]);for(let r in i)e[r]=i[r]}return e}function Yf(n){return n.getRenderTarget()===null?n.outputColorSpace:nt.workingColorSpace}var Yx={clone:Bs,merge:rn},ii=class extends ki{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=(function(t){let i=[];for(let r=0;r<t.length;r++)i.push(t[r].clone());return i})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ta=class extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=Ns}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Bt=class extends Ta{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Nh*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*ol*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Nh*Math.atan(Math.tan(.5*ol*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*ol*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Es=-90,kh=class extends Yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Bt(Es,1,e,t);r.layers=this.layers,this.add(r);let s=new Bt(Es,1,e,t);s.layers=this.layers,this.add(s);let a=new Bt(Es,1,e,t);a.layers=this.layers,this.add(a);let o=new Bt(Es,1,e,t);o.layers=this.layers,this.add(o);let l=new Bt(Es,1,e,t);l.layers=this.layers,this.add(l);let c=new Bt(Es,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ns)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==fl)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},El=class extends Un{constructor(e,t,i,r,s,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:Ds,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Fh=class extends Bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(ya("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===zr?tt:pi),this.texture=new El(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ae(5,5,5),s=new ii({name:"CubemapFromEquirect",uniforms:Bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qt,blending:0});s.uniforms.tEquirect.value=t;let a=new Ge(r,s),o=t.minFilter;return t.minFilter===ll&&(t.minFilter=Qn),new kh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}},mh=new w,Zx=new w,Kx=new Fe,Ui=class{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=mh.subVectors(i,t).cross(Zx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(mh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Kx.getNormalMatrix(e),r=this.coplanarPoint(mh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ar=new ni,qo=new w,ks=class{constructor(e=new Ui,t=new Ui,i=new Ui,r=new Ui,s=new Ui,a=new Ui){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3){let i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],p=r[8],f=r[9],g=r[10],m=r[11],y=r[12],x=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,d-c,m-p,S-y).normalize(),i[1].setComponents(l+s,d+c,m+p,S+y).normalize(),i[2].setComponents(l+a,d+h,m+f,S+x).normalize(),i[3].setComponents(l-a,d-h,m-f,S-x).normalize(),i[4].setComponents(l-o,d-u,m-g,S-v).normalize(),t===Ns)i[5].setComponents(l+o,d+u,m+g,S+v).normalize();else{if(t!==fl)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);i[5].setComponents(o,u,g,v).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ar)}intersectsSprite(e){return Ar.center.set(0,0,0),Ar.radius=.7071067811865476,Ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(qo.x=r.normal.x>0?e.max.x:e.min.x,qo.y=r.normal.y>0?e.max.y:e.min.y,qo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Zf(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Jx(n,e){let t=e.isWebGL2,i=new WeakMap;return{get:function(r){return r.isInterleavedBufferAttribute&&(r=r.data),i.get(r)},remove:function(r){r.isInterleavedBufferAttribute&&(r=r.data);let s=i.get(r);s&&(n.deleteBuffer(s.buffer),i.delete(r))},update:function(r,s){if(r.isGLBufferAttribute){let o=i.get(r);return void((!o||o.version<r.version)&&i.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version}))}r.isInterleavedBufferAttribute&&(r=r.data);let a=i.get(r);if(a===void 0)i.set(r,(function(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=n.createBuffer(),p;if(n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback(),c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute){if(!t)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");p=n.HALF_FLOAT}else p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else{if(!(c instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);p=n.UNSIGNED_BYTE}return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}})(r,s));else if(a.version<r.version){if(a.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(o,l,c){let h=l.array,u=l._updateRange,d=l.updateRanges;if(n.bindBuffer(c,o),u.count===-1&&d.length===0&&n.bufferSubData(c,0,h),d.length!==0){for(let p=0,f=d.length;p<f;p++){let g=d[p];t?n.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count):n.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h.subarray(g.start,g.start+g.count))}l.clearUpdateRanges()}u.count!==-1&&(t?n.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count):n.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h.subarray(u.offset,u.offset+u.count)),u.count=-1),l.onUploadCallback()})(a.buffer,r,s),a.version=r.version}}}}var ft=class n extends rt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=t/l,p=[],f=[],g=[],m=[];for(let y=0;y<h;y++){let x=y*d-a;for(let v=0;v<c;v++){let S=v*u-s;f.push(S,-x,0),g.push(0,0,1),m.push(v/o),m.push(1-y/l)}}for(let y=0;y<l;y++)for(let x=0;x<o;x++){let v=x+c*y,S=x+c*(y+1),C=x+1+c*(y+1),E=x+1+c*y;p.push(v,S,E),p.push(S,C,E)}this.setIndex(p),this.setAttribute("position",new Re(f,3)),this.setAttribute("normal",new Re(g,3)),this.setAttribute("uv",new Re(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Ne={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},he={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},ui={basic:{uniforms:rn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:rn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new be(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:rn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:rn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:rn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new be(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:rn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:rn([he.points,he.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:rn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:rn([he.common,he.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:rn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:rn([he.sprite,he.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:rn([he.common,he.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:rn([he.lights,he.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};ui.physical={uniforms:rn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};var Yo={r:0,b:0,g:0};function $x(n,e,t,i,r,s,a){let o=new be(0),l,c,h=s===!0?0:1,u=null,d=0,p=null;function f(g,m){g.getRGB(Yo,Yf(n)),i.buffers.color.setClear(Yo.r,Yo.g,Yo.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(g,m=1){o.set(g),h=m,f(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(g){h=g,f(o,h)},render:function(g,m){let y=!1,x=m.isScene===!0?m.background:null;x&&x.isTexture&&(x=(m.backgroundBlurriness>0?t:e).get(x)),x===null?f(o,h):x&&x.isColor&&(f(x,1),y=!0);let v=n.xr.getEnvironmentBlendMode();v==="additive"?i.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Gl)?(c===void 0&&(c=new Ge(new ae(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:Bs(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,C,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=nt.getTransfer(x.colorSpace)!==lt,u===x&&d===x.version&&p===n.toneMapping||(c.material.needsUpdate=!0,u=x,d=x.version,p=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ge(new ft(2,2),new ii({name:"BackgroundMaterial",uniforms:Bs(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=nt.getTransfer(x.colorSpace)!==lt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),u===x&&d===x.version&&p===n.toneMapping||(l.material.needsUpdate=!0,u=x,d=x.version,p=n.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}}}function Qx(n,e,t,i){let r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null),c=l,h=!1;function u(C){return i.isWebGL2?n.bindVertexArray(C):s.bindVertexArrayOES(C)}function d(C){return i.isWebGL2?n.deleteVertexArray(C):s.deleteVertexArrayOES(C)}function p(C){let E=[],_=[],D=[];for(let M=0;M<r;M++)E[M]=0,_[M]=0,D[M]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:_,attributeDivisors:D,object:C,attributes:{},index:null}}function f(){let C=c.newAttributes;for(let E=0,_=C.length;E<_;E++)C[E]=0}function g(C){m(C,0)}function m(C,E){let _=c.newAttributes,D=c.enabledAttributes,M=c.attributeDivisors;_[C]=1,D[C]===0&&(n.enableVertexAttribArray(C),D[C]=1),M[C]!==E&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,E),M[C]=E)}function y(){let C=c.newAttributes,E=c.enabledAttributes;for(let _=0,D=E.length;_<D;_++)E[_]!==C[_]&&(n.disableVertexAttribArray(_),E[_]=0)}function x(C,E,_,D,M,I,O){O===!0?n.vertexAttribIPointer(C,E,_,M,I):n.vertexAttribPointer(C,E,_,D,M,I)}function v(){S(),h=!0,c!==l&&(c=l,u(c.object))}function S(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(C,E,_,D,M){let I=!1;if(a){let O=(function(L,k,G){let se=G.wireframe===!0,de=o[L.id];de===void 0&&(de={},o[L.id]=de);let Q=de[k.id];Q===void 0&&(Q={},de[k.id]=Q);let Z=Q[se];return Z===void 0&&(Z=p(i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()),Q[se]=Z),Z})(D,_,E);c!==O&&(c=O,u(c.object)),I=(function(L,k,G,se){let de=c.attributes,Q=k.attributes,Z=0,ee=G.getAttributes();for(let F in ee)if(ee[F].location>=0){let K=de[F],pe=Q[F];if(pe===void 0&&(F==="instanceMatrix"&&L.instanceMatrix&&(pe=L.instanceMatrix),F==="instanceColor"&&L.instanceColor&&(pe=L.instanceColor)),K===void 0||K.attribute!==pe||pe&&K.data!==pe.data)return!0;Z++}return c.attributesNum!==Z||c.index!==se})(C,D,_,M),I&&(function(L,k,G,se){let de={},Q=k.attributes,Z=0,ee=G.getAttributes();for(let F in ee)if(ee[F].location>=0){let K=Q[F];K===void 0&&(F==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),F==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));let pe={};pe.attribute=K,K&&K.data&&(pe.data=K.data),de[F]=pe,Z++}c.attributes=de,c.attributesNum=Z,c.index=se})(C,D,_,M)}else{let O=E.wireframe===!0;c.geometry===D.id&&c.program===_.id&&c.wireframe===O||(c.geometry=D.id,c.program=_.id,c.wireframe=O,I=!0)}M!==null&&t.update(M,n.ELEMENT_ARRAY_BUFFER),(I||h)&&(h=!1,(function(O,L,k,G){if(i.isWebGL2===!1&&(O.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;f();let se=G.attributes,de=k.getAttributes(),Q=L.defaultAttributeValues;for(let Z in de){let ee=de[Z];if(ee.location>=0){let F=se[Z];if(F===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(F=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(F=O.instanceColor)),F!==void 0){let K=F.normalized,pe=F.itemSize,A=t.get(F);if(A===void 0)continue;let T=A.buffer,H=A.type,J=A.bytesPerElement,U=i.isWebGL2===!0&&(H===n.INT||H===n.UNSIGNED_INT||F.gpuType===Hf);if(F.isInterleavedBufferAttribute){let Y=F.data,z=Y.stride,N=F.offset;if(Y.isInstancedInterleavedBuffer){for(let V=0;V<ee.locationSize;V++)m(ee.location+V,Y.meshPerAttribute);O.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let V=0;V<ee.locationSize;V++)g(ee.location+V);n.bindBuffer(n.ARRAY_BUFFER,T);for(let V=0;V<ee.locationSize;V++)x(ee.location+V,pe/ee.locationSize,H,K,z*J,(N+pe/ee.locationSize*V)*J,U)}else{if(F.isInstancedBufferAttribute){for(let Y=0;Y<ee.locationSize;Y++)m(ee.location+Y,F.meshPerAttribute);O.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let Y=0;Y<ee.locationSize;Y++)g(ee.location+Y);n.bindBuffer(n.ARRAY_BUFFER,T);for(let Y=0;Y<ee.locationSize;Y++)x(ee.location+Y,pe/ee.locationSize,H,K,pe*J,pe/ee.locationSize*Y*J,U)}}else if(Q!==void 0){let K=Q[Z];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(ee.location,K);break;case 3:n.vertexAttrib3fv(ee.location,K);break;case 4:n.vertexAttrib4fv(ee.location,K);break;default:n.vertexAttrib1fv(ee.location,K)}}}}y()})(C,E,_,D),M!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(M).buffer))},reset:v,resetDefaultState:S,dispose:function(){v();for(let C in o){let E=o[C];for(let _ in E){let D=E[_];for(let M in D)d(D[M].object),delete D[M];delete E[_]}delete o[C]}},releaseStatesOfGeometry:function(C){if(o[C.id]===void 0)return;let E=o[C.id];for(let _ in E){let D=E[_];for(let M in D)d(D[M].object),delete D[M];delete E[_]}delete o[C.id]},releaseStatesOfProgram:function(C){for(let E in o){let _=o[E];if(_[C.id]===void 0)continue;let D=_[C.id];for(let M in D)d(D[M].object),delete D[M];delete _[C.id]}},initAttributes:f,enableAttribute:g,disableUnusedAttributes:y}}function ev(n,e,t,i){let r=i.isWebGL2,s;this.setMode=function(a){s=a},this.render=function(a,o){n.drawArrays(s,a,o),t.update(o,s,1)},this.renderInstances=function(a,o,l){if(l===0)return;let c,h;if(r)c=n,h="drawArraysInstanced";else if(c=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",c===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");c[h](s,a,o,l),t.update(o,s,l)},this.renderMultiDraw=function(a,o,l){if(l===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<l;h++)this.render(a[h],o[h]);else{c.multiDrawArraysWEBGL(s,a,0,o,0,l);let h=0;for(let u=0;u<l;u++)h+=o[u];t.update(h,s,1)}}}function tv(n,e,t){let i;function r(S){if(S==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",o=r(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=s||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),u=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),m=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=u>0,v=s||e.has("OES_texture_float");return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let S=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:r,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:x&&v,maxSamples:s?n.getParameter(n.MAX_SAMPLES):0}}function nv(n){let e=this,t=null,i=0,r=!1,s=!1,a=new Ui,o=new Fe,l={value:null,needsUpdate:!1};function c(h,u,d,p){let f=h!==null?h.length:0,g=null;if(f!==0){if(g=l.value,p!==!0||g===null){let m=d+4*f,y=u.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let x=0,v=d;x!==f;++x,v+=4)a.copy(h[x]).applyMatrix4(y,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,g}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||i!==0||r;return r=u,i=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,f=h.clipIntersection,g=h.clipShadows,m=n.get(h);if(!r||p===null||p.length===0||s&&!g)s?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0})();else{let y=s?0:i,x=4*y,v=m.clippingState||null;l.value=v,v=c(p,u,x,d);for(let S=0;S!==x;++S)v[S]=t[S];m.clippingState=v,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=y}}}function iv(n){let e=new WeakMap;function t(r,s){return s===Lh?r.mapping=Ds:s===Ih&&(r.mapping=Us),r}function i(r){let s=r.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping;if(s===Lh||s===Ih){if(e.has(r))return t(e.get(r).texture,r.mapping);{let a=r.image;if(a&&a.height>0){let o=new Fh(a.height/2);return o.fromEquirectangularTexture(n,r),e.set(r,o),r.addEventListener("dispose",i),t(o.texture,r.mapping)}return null}}}return r},dispose:function(){e=new WeakMap}}}var bl=class extends Ta{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ef=[.125,.215,.35,.446,.526,.582],da=20,gh=new bl,tf=new be,xh=null,vh=0,yh=0,Rr=(1+Math.sqrt(5))/2,bs=1/Rr,nf=[new w(1,1,1),new w(-1,1,1),new w(1,1,-1),new w(-1,1,-1),new w(0,Rr,bs),new w(0,Rr,-bs),new w(bs,0,Rr),new w(-bs,0,Rr),new w(Rr,bs,0),new w(-Rr,bs,0)],Sl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){xh=this._renderer.getRenderTarget(),vh=this._renderer.getActiveCubeFace(),yh=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=af(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xh,vh,yh),e.scissorTest=!1,Zo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ds||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xh=this._renderer.getRenderTarget(),vh=this._renderer.getActiveCubeFace(),yh=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:wa,format:di,colorSpace:Hi,depthBuffer:!1},r=rf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rf(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,u=a-4+1+ef.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);l.push(p);let f=1/p;d>a-4?f=ef[d-a+4-1]:d===0&&(f=0),c.push(f);let g=1/(p-2),m=-g,y=1+g,x=[m,m,y,m,y,y,m,m,y,y,m,y],v=6,S=6,C=3,E=2,_=1,D=new Float32Array(C*S*v),M=new Float32Array(E*S*v),I=new Float32Array(_*S*v);for(let L=0;L<v;L++){let k=L%3*2/3-1,G=L>2?0:-1,se=[k,G,0,k+2/3,G,0,k+2/3,G+1,0,k,G,0,k+2/3,G+1,0,k,G+1,0];D.set(se,C*S*L),M.set(x,E*S*L);let de=[L,L,L,L,L,L];I.set(de,_*S*L)}let O=new rt;O.setAttribute("position",new Nt(D,C)),O.setAttribute("uv",new Nt(M,E)),O.setAttribute("faceIndex",new Nt(I,_)),o.push(O),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}})(s)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(da),h=new w(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:da,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})})(s,e,t)}return r}_compileMaterial(e){let t=new Ge(this._lodPlanes[0],e);this._renderer.compile(t,gh)}_sceneToCubeUV(e,t,i,r){let s=new Bt(90,1,t,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(tf),l.toneMapping=or,l.autoClear=!1;let u=new Tn({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),d=new Ge(new ae,u),p=!1,f=e.background;f?f.isColor&&(u.color.copy(f),e.background=null,p=!0):(u.color.copy(tf),p=!0);for(let g=0;g<6;g++){let m=g%3;m===0?(s.up.set(0,a[g],0),s.lookAt(o[g],0,0)):m===1?(s.up.set(0,0,a[g]),s.lookAt(0,o[g],0)):(s.up.set(0,a[g],0),s.lookAt(0,0,o[g]));let y=this._cubeSize;Zo(r,m*y,g>2?y:0,y,y),l.setRenderTarget(r),p&&l.render(d,s),l.render(e,s)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=f}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Ds||e.mapping===Us;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=af()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sf());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ge(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;Zo(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,gh)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=nf[(r-1)%nf.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new Ge(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,f=s/p,g=isFinite(s)?1+Math.floor(3*f):da;g>da&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to 20`);let m=[],y=0;for(let S=0;S<da;++S){let C=S/f,E=Math.exp(-C*C/2);m.push(E),S===0?y+=E:S<g&&(y+=2*E)}for(let S=0;S<m.length;S++)m[S]=m[S]/y;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:x}=this;u.dTheta.value=p,u.mipInt.value=x-i;let v=this._sizeLods[r];Zo(t,3*v*(r>x-4?r-x+4:0),4*(this._cubeSize-v),3*v,2*v),l.setRenderTarget(t),l.render(h,gh)}};function rf(n,e,t){let i=new Bi(n,e,t);return i.texture.mapping=Gl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zo(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function sf(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function af(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Pu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rv(n){let e=new WeakMap,t=null;function i(r){let s=r.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping,a=s===Lh||s===Ih,o=s===Ds||s===Us;if(a||o){if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let l=e.get(r);return t===null&&(t=new Sl(n)),l=a?t.fromEquirectangular(r,l):t.fromCubemap(r,l),e.set(r,l),l.texture}if(e.has(r))return e.get(r).texture;{let l=r.image;if(a&&l&&l.height>0||o&&l&&(function(c){let h=0,u=6;for(let d=0;d<u;d++)c[d]!==void 0&&h++;return h===u})(l)){t===null&&(t=new Sl(n));let c=a?t.fromEquirectangular(r):t.fromCubemap(r);return e.set(r,c),r.addEventListener("dispose",i),c.texture}return null}}}return r},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function sv(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function av(n,e,t,i){let r={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);for(let u in c.morphAttributes){let d=c.morphAttributes[u];for(let p=0,f=d.length;p<f;p++)e.remove(d[p])}c.removeEventListener("dispose",a),delete r[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(h!==null){let g=h.array;d=h.version;for(let m=0,y=g.length;m<y;m+=3){let x=g[m+0],v=g[m+1],S=g[m+2];c.push(x,v,v,S,S,x)}}else{if(u===void 0)return;{let g=u.array;d=u.version;for(let m=0,y=g.length/3-1;m<y;m+=3){let x=m+0,v=m+1,S=m+2;c.push(x,v,v,S,S,x)}}}let p=new(jf(c)?Ml:_l)(c,1);p.version=d;let f=s.get(l);f&&e.remove(f),s.set(l,p)}return{get:function(l,c){return r[c.id]===!0||(c.addEventListener("dispose",a),r[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let u in c)e.update(c[u],n.ARRAY_BUFFER);let h=l.morphAttributes;for(let u in h){let d=h[u];for(let p=0,f=d.length;p<f;p++)e.update(d[p],n.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function ov(n,e,t,i){let r=i.isWebGL2,s,a,o;this.setMode=function(l){s=l},this.setIndex=function(l){a=l.type,o=l.bytesPerElement},this.render=function(l,c){n.drawElements(s,c,a,l*o),t.update(c,s,1)},this.renderInstances=function(l,c,h){if(h===0)return;let u,d;if(r)u=n,d="drawElementsInstanced";else if(u=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",u===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");u[d](s,c,a,l*o,h),t.update(c,s,h)},this.renderMultiDraw=function(l,c,h){if(h===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<h;d++)this.render(l[d]/o,c[d]);else{u.multiDrawElementsWEBGL(s,c,0,a,l,0,h);let d=0;for(let p=0;p<h;p++)d+=c[p];t.update(d,s,1)}}}function lv(n){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,r){switch(e.calls++,i){case n.TRIANGLES:e.triangles+=r*(t/3);break;case n.LINES:e.lines+=r*(t/2);break;case n.LINE_STRIP:e.lines+=r*(t-1);break;case n.LINE_LOOP:e.lines+=r*t;break;case n.POINTS:e.points+=r*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function cv(n,e){return n[0]-e[0]}function hv(n,e){return Math.abs(e[1])-Math.abs(n[1])}function uv(n,e,t){let i={},r=new Float32Array(8),s=new WeakMap,a=new at,o=[];for(let l=0;l<8;l++)o[l]=[l,0];return{update:function(l,c,h){let u=l.morphTargetInfluences;if(e.isWebGL2===!0){let d=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=d!==void 0?d.length:0,f=s.get(c);if(f===void 0||f.count!==p){let k=function(){O.dispose(),s.delete(c),c.removeEventListener("dispose",k)};f!==void 0&&f.texture.dispose();let y=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,v=c.morphAttributes.color!==void 0,S=c.morphAttributes.position||[],C=c.morphAttributes.normal||[],E=c.morphAttributes.color||[],_=0;y===!0&&(_=1),x===!0&&(_=2),v===!0&&(_=3);let D=c.attributes.position.count*_,M=1;D>e.maxTextureSize&&(M=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);let I=new Float32Array(D*M*4*p),O=new vl(I,D,M,p);O.type=sr,O.needsUpdate=!0;let L=4*_;for(let G=0;G<p;G++){let se=S[G],de=C[G],Q=E[G],Z=D*M*4*G;for(let ee=0;ee<se.count;ee++){let F=ee*L;y===!0&&(a.fromBufferAttribute(se,ee),I[Z+F+0]=a.x,I[Z+F+1]=a.y,I[Z+F+2]=a.z,I[Z+F+3]=0),x===!0&&(a.fromBufferAttribute(de,ee),I[Z+F+4]=a.x,I[Z+F+5]=a.y,I[Z+F+6]=a.z,I[Z+F+7]=0),v===!0&&(a.fromBufferAttribute(Q,ee),I[Z+F+8]=a.x,I[Z+F+9]=a.y,I[Z+F+10]=a.z,I[Z+F+11]=Q.itemSize===4?a.w:1)}}f={count:p,texture:O,size:new ce(D,M)},s.set(c,f),c.addEventListener("dispose",k)}let g=0;for(let y=0;y<u.length;y++)g+=u[y];let m=c.morphTargetsRelative?1:1-g;h.getUniforms().setValue(n,"morphTargetBaseInfluence",m),h.getUniforms().setValue(n,"morphTargetInfluences",u),h.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}else{let d=u===void 0?0:u.length,p=i[c.id];if(p===void 0||p.length!==d){p=[];for(let x=0;x<d;x++)p[x]=[x,0];i[c.id]=p}for(let x=0;x<d;x++){let v=p[x];v[0]=x,v[1]=u[x]}p.sort(hv);for(let x=0;x<8;x++)x<d&&p[x][1]?(o[x][0]=p[x][0],o[x][1]=p[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(cv);let f=c.morphAttributes.position,g=c.morphAttributes.normal,m=0;for(let x=0;x<8;x++){let v=o[x],S=v[0],C=v[1];S!==Number.MAX_SAFE_INTEGER&&C?(f&&c.getAttribute("morphTarget"+x)!==f[S]&&c.setAttribute("morphTarget"+x,f[S]),g&&c.getAttribute("morphNormal"+x)!==g[S]&&c.setAttribute("morphNormal"+x,g[S]),r[x]=C,m+=C):(f&&c.hasAttribute("morphTarget"+x)===!0&&c.deleteAttribute("morphTarget"+x),g&&c.hasAttribute("morphNormal"+x)===!0&&c.deleteAttribute("morphNormal"+x),r[x]=0)}let y=c.morphTargetsRelative?1:1-m;h.getUniforms().setValue(n,"morphTargetBaseInfluence",y),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}}}function dv(n,e,t,i){let r=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=i.render.frame,l=a.geometry,c=e.get(a,l);if(r.get(c)!==o&&(e.update(c),r.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),r.get(a)!==o&&(t.update(a.instanceMatrix,n.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,n.ARRAY_BUFFER),r.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;r.get(h)!==o&&(h.update(),r.set(h,o))}return c},dispose:function(){r=new WeakMap}}}var wl=class extends Un{constructor(e,t,i,r,s,a,o,l,c,h){if((h=h!==void 0?h:Ur)!==Ur&&h!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ur&&(i=rr),i===void 0&&h===zs&&(i=Dr),super(null,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Kf=new Un,Jf=new wl(1,1);Jf.compareFunction=515;var $f=new vl,Qf=new Bh,em=new El,of=[],lf=[],cf=new Float32Array(16),hf=new Float32Array(9),uf=new Float32Array(4);function Vs(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=of[r];if(s===void 0&&(s=new Float32Array(r),of[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Ct(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Wl(n,e){let t=lf[e];t===void 0&&(t=new Int32Array(e),lf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function pv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function fv(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2fv(this.addr,e),Pt(t,e)}}function mv(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;n.uniform3fv(this.addr,e),Pt(t,e)}}function gv(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4fv(this.addr,e),Pt(t,e)}}function xv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;uf.set(i),n.uniformMatrix2fv(this.addr,!1,uf),Pt(t,i)}}function vv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;hf.set(i),n.uniformMatrix3fv(this.addr,!1,hf),Pt(t,i)}}function yv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;cf.set(i),n.uniformMatrix4fv(this.addr,!1,cf),Pt(t,i)}}function _v(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Mv(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2iv(this.addr,e),Pt(t,e)}}function Ev(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3iv(this.addr,e),Pt(t,e)}}function bv(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4iv(this.addr,e),Pt(t,e)}}function Sv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function wv(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2uiv(this.addr,e),Pt(t,e)}}function Tv(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3uiv(this.addr,e),Pt(t,e)}}function Av(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4uiv(this.addr,e),Pt(t,e)}}function Rv(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s=this.type===n.SAMPLER_2D_SHADOW?Jf:Kf;t.setTexture2D(e||s,r)}function Cv(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Qf,r)}function Pv(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||em,r)}function Lv(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||$f,r)}function Iv(n,e){n.uniform1fv(this.addr,e)}function Dv(n,e){let t=Vs(e,this.size,2);n.uniform2fv(this.addr,t)}function Uv(n,e){let t=Vs(e,this.size,3);n.uniform3fv(this.addr,t)}function zv(n,e){let t=Vs(e,this.size,4);n.uniform4fv(this.addr,t)}function Nv(n,e){let t=Vs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ov(n,e){let t=Vs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Hv(n,e){let t=Vs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Bv(n,e){n.uniform1iv(this.addr,e)}function kv(n,e){n.uniform2iv(this.addr,e)}function Fv(n,e){n.uniform3iv(this.addr,e)}function Gv(n,e){n.uniform4iv(this.addr,e)}function Vv(n,e){n.uniform1uiv(this.addr,e)}function Wv(n,e){n.uniform2uiv(this.addr,e)}function Xv(n,e){n.uniform3uiv(this.addr,e)}function jv(n,e){n.uniform4uiv(this.addr,e)}function qv(n,e,t){let i=this.cache,r=e.length,s=Wl(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Kf,s[a])}function Yv(n,e,t){let i=this.cache,r=e.length,s=Wl(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Qf,s[a])}function Zv(n,e,t){let i=this.cache,r=e.length,s=Wl(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||em,s[a])}function Kv(n,e,t){let i=this.cache,r=e.length,s=Wl(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||$f,s[a])}var Gh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=(function(r){switch(r){case 5126:return pv;case 35664:return fv;case 35665:return mv;case 35666:return gv;case 35674:return xv;case 35675:return vv;case 35676:return yv;case 5124:case 35670:return _v;case 35667:case 35671:return Mv;case 35668:case 35672:return Ev;case 35669:case 35673:return bv;case 5125:return Sv;case 36294:return wv;case 36295:return Tv;case 36296:return Av;case 35678:case 36198:case 36298:case 36306:case 35682:return Rv;case 35679:case 36299:case 36307:return Cv;case 35680:case 36300:case 36308:case 36293:return Pv;case 36289:case 36303:case 36311:case 36292:return Lv}})(t.type)}},Vh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(r){switch(r){case 5126:return Iv;case 35664:return Dv;case 35665:return Uv;case 35666:return zv;case 35674:return Nv;case 35675:return Ov;case 35676:return Hv;case 5124:case 35670:return Bv;case 35667:case 35671:return kv;case 35668:case 35672:return Fv;case 35669:case 35673:return Gv;case 5125:return Vv;case 36294:return Wv;case 36295:return Xv;case 36296:return jv;case 35678:case 36198:case 36298:case 36306:case 35682:return qv;case 35679:case 36299:case 36307:return Yv;case 35680:case 36300:case 36308:case 36293:return Zv;case 36289:case 36303:case 36311:case 36292:return Kv}})(t.type)}},Wh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],i)}}},_h=/(\w+)(\])?(\[|\.)?/g;function df(n,e){n.seq.push(e),n.map[e.id]=e}function Jv(n,e,t){let i=n.name,r=i.length;for(_h.lastIndex=0;;){let s=_h.exec(i),a=_h.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===r){df(t,c===void 0?new Gh(o,n,e):new Vh(o,n,e));break}{let h=t.map[o];h===void 0&&(h=new Wh(o),df(t,h)),t=h}}}var Is=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r);Jv(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&i.push(a)}return i}};function pf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var $v=37297,Qv=0;function ff(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let f=p+1;h.push(`${f===l?">":" "} ${f}: ${c[p]}`)}return h.join(`
`)})(n.getShaderSource(e),a)}return r}function ey(n,e){let t=(function(i){let r=nt.getPrimaries(nt.workingColorSpace),s=nt.getPrimaries(i),a;switch(r===s?a="":r===pl&&s===dl?a="LinearDisplayP3ToLinearSRGB":r===dl&&s===pl&&(a="LinearSRGBToLinearDisplayP3"),i){case Hi:case Vl:return[a,"LinearTransferOETF"];case tt:case Cu:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[a,"LinearTransferOETF"]}})(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ty(n,e){let t;switch(e){case Tx:t="Linear";break;case Ax:t="Reinhard";break;case Rx:t="OptimizedCineon";break;case Au:t="ACESFilmic";break;case Px:t="AgX";break;case Cx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ss(n){return n!==""}function mf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ny=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xh(n){return n.replace(ny,ry)}var iy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ry(n,e){let t=Ne[e];if(t===void 0){let i=iy.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");t=Ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return Xh(t)}var sy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xf(n){return n.replace(sy,ay)}function ay(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function vf(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function oy(n,e,t,i){let r=n.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(L){let k="SHADOWMAP_TYPE_BASIC";return L.shadowMapType===Nf?k="SHADOWMAP_TYPE_PCF":L.shadowMapType===wu?k="SHADOWMAP_TYPE_PCF_SOFT":L.shadowMapType===Di&&(k="SHADOWMAP_TYPE_VSM"),k})(t),c=(function(L){let k="ENVMAP_TYPE_CUBE";if(L.envMap)switch(L.envMapMode){case Ds:case Us:k="ENVMAP_TYPE_CUBE";break;case Gl:k="ENVMAP_TYPE_CUBE_UV"}return k})(t),h=(function(L){let k="ENVMAP_MODE_REFLECTION";return L.envMap&&L.envMapMode===Us&&(k="ENVMAP_MODE_REFRACTION"),k})(t),u=(function(L){let k="ENVMAP_BLENDING_NONE";if(L.envMap)switch(L.combine){case Tu:k="ENVMAP_BLENDING_MULTIPLY";break;case Sx:k="ENVMAP_BLENDING_MIX";break;case wx:k="ENVMAP_BLENDING_ADD"}return k})(t),d=(function(L){let k=L.envMapCubeUVHeight;if(k===null)return null;let G=Math.log2(k)-2,se=1/k;return{texelWidth:1/(3*Math.max(Math.pow(2,G),112)),texelHeight:se,maxMip:G}})(t),p=t.isWebGL2?"":(function(L){return[L.extensionDerivatives||L.envMapCubeUVHeight||L.bumpMap||L.normalMapTangentSpace||L.clearcoatNormalMap||L.flatShading||L.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(L.extensionFragDepth||L.logarithmicDepthBuffer)&&L.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",L.extensionDrawBuffers&&L.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(L.extensionShaderTextureLOD||L.envMap||L.transmission)&&L.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ss).join(`
`)})(t),f=(function(L){return[L.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ss).join(`
`)})(t),g=(function(L){let k=[];for(let G in L){let se=L[G];se!==!1&&k.push("#define "+G+" "+se)}return k.join(`
`)})(s),m=r.createProgram(),y,x,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ss).join(`
`),y.length>0&&(y+=`
`),x=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ss).join(`
`),x.length>0&&(x+=`
`)):(y=[vf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),x=[p,vf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==or?"#define TONE_MAPPING":"",t.toneMapping!==or?Ne.tonemapping_pars_fragment:"",t.toneMapping!==or?ty("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,ey("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ss).join(`
`)),a=Xh(a),a=mf(a,t),a=gf(a,t),o=Xh(o),o=mf(o,t),o=gf(o,t),a=xf(a),o=xf(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,y=[f,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Np?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Np?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let S=v+y+a,C=v+x+o,E=pf(r,r.VERTEX_SHADER,S),_=pf(r,r.FRAGMENT_SHADER,C);function D(L){if(n.debug.checkShaderErrors){let k=r.getProgramInfoLog(m).trim(),G=r.getShaderInfoLog(E).trim(),se=r.getShaderInfoLog(_).trim(),de=!0,Q=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(de=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,E,_);else{let Z=ff(r,E,"vertex"),ee=ff(r,_,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+k+`
`+Z+`
`+ee)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):G!==""&&se!==""||(Q=!1);Q&&(L.diagnostics={runnable:de,programLog:k,vertexShader:{log:G,prefix:y},fragmentShader:{log:se,prefix:x}})}r.deleteShader(E),r.deleteShader(_),M=new Is(r,m),I=(function(k,G){let se={},de=k.getProgramParameter(G,k.ACTIVE_ATTRIBUTES);for(let Q=0;Q<de;Q++){let Z=k.getActiveAttrib(G,Q),ee=Z.name,F=1;Z.type===k.FLOAT_MAT2&&(F=2),Z.type===k.FLOAT_MAT3&&(F=3),Z.type===k.FLOAT_MAT4&&(F=4),se[ee]={type:Z.type,location:k.getAttribLocation(G,ee),locationSize:F}}return se})(r,m)}let M,I;r.attachShader(m,E),r.attachShader(m,_),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),this.getUniforms=function(){return M===void 0&&D(this),M},this.getAttributes=function(){return I===void 0&&D(this),I};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=r.getProgramParameter(m,$v)),O},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qv++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=_,this}var ly=0,jh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new qh(e),t.set(e,i)),i}},qh=class{constructor(e){this.id=ly++,this.code=e,this.usedTimes=0}};function cy(n,e,t,i,r,s,a){let o=new yl,l=new jh,c=[],h=r.isWebGL2,u=r.logarithmicDepthBuffer,d=r.vertexTextures,p=r.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(m){return m===0?"uv":`uv${m}`}return{getParameters:function(m,y,x,v,S){let C=v.fog,E=S.geometry,_=m.isMeshStandardMaterial?v.environment:null,D=(m.isMeshStandardMaterial?t:e).get(m.envMap||_),M=D&&D.mapping===Gl?D.image.height:null,I=f[m.type];m.precision!==null&&(p=r.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let O=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,L=O!==void 0?O.length:0,k,G,se,de,Q=0;if(E.morphAttributes.position!==void 0&&(Q=1),E.morphAttributes.normal!==void 0&&(Q=2),E.morphAttributes.color!==void 0&&(Q=3),I){let Vt=ui[I];k=Vt.vertexShader,G=Vt.fragmentShader}else k=m.vertexShader,G=m.fragmentShader,l.update(m),se=l.getVertexShaderID(m),de=l.getFragmentShaderID(m);let Z=n.getRenderTarget(),ee=S.isInstancedMesh===!0,F=S.isBatchedMesh===!0,K=!!m.map,pe=!!m.matcap,A=!!D,T=!!m.aoMap,H=!!m.lightMap,J=!!m.bumpMap,U=!!m.normalMap,Y=!!m.displacementMap,z=!!m.emissiveMap,N=!!m.metalnessMap,V=!!m.roughnessMap,ie=m.anisotropy>0,te=m.clearcoat>0,b=m.iridescence>0,re=m.sheen>0,W=m.transmission>0,X=ie&&!!m.anisotropyMap,oe=te&&!!m.clearcoatMap,fe=te&&!!m.clearcoatNormalMap,xe=te&&!!m.clearcoatRoughnessMap,ye=b&&!!m.iridescenceMap,De=b&&!!m.iridescenceThicknessMap,_e=re&&!!m.sheenColorMap,Me=re&&!!m.sheenRoughnessMap,Oe=!!m.specularMap,Ut=!!m.specularColorMap,Te=!!m.specularIntensityMap,Ze=W&&!!m.transmissionMap,We=W&&!!m.thicknessMap,Eo=!!m.gradientMap,os=!!m.alphaMap,bo=m.alphaTest>0,Pn=!!m.alphaHash,bn=!!m.extensions,ls=!!E.attributes.uv1,q=!!E.attributes.uv2,So=!!E.attributes.uv3,sa=or;return m.toneMapped&&(Z!==null&&Z.isXRRenderTarget!==!0||(sa=n.toneMapping)),{isWebGL2:h,shaderID:I,shaderType:m.type,shaderName:m.name,vertexShader:k,fragmentShader:G,defines:m.defines,customVertexShaderID:se,customFragmentShaderID:de,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:F,instancing:ee,instancingColor:ee&&S.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Hi,map:K,matcap:pe,envMap:A,envMapMode:A&&D.mapping,envMapCubeUVHeight:M,aoMap:T,lightMap:H,bumpMap:J,normalMap:U,displacementMap:d&&Y,emissiveMap:z,normalMapObjectSpace:U&&m.normalMapType===1,normalMapTangentSpace:U&&m.normalMapType===0,metalnessMap:N,roughnessMap:V,anisotropy:ie,anisotropyMap:X,clearcoat:te,clearcoatMap:oe,clearcoatNormalMap:fe,clearcoatRoughnessMap:xe,iridescence:b,iridescenceMap:ye,iridescenceThicknessMap:De,sheen:re,sheenColorMap:_e,sheenRoughnessMap:Me,specularMap:Oe,specularColorMap:Ut,specularIntensityMap:Te,transmission:W,transmissionMap:Ze,thicknessMap:We,gradientMap:Eo,opaque:m.transparent===!1&&m.blending===1,alphaMap:os,alphaTest:bo,alphaHash:Pn,combine:m.combine,mapUv:K&&g(m.map.channel),aoMapUv:T&&g(m.aoMap.channel),lightMapUv:H&&g(m.lightMap.channel),bumpMapUv:J&&g(m.bumpMap.channel),normalMapUv:U&&g(m.normalMap.channel),displacementMapUv:Y&&g(m.displacementMap.channel),emissiveMapUv:z&&g(m.emissiveMap.channel),metalnessMapUv:N&&g(m.metalnessMap.channel),roughnessMapUv:V&&g(m.roughnessMap.channel),anisotropyMapUv:X&&g(m.anisotropyMap.channel),clearcoatMapUv:oe&&g(m.clearcoatMap.channel),clearcoatNormalMapUv:fe&&g(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&g(m.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&g(m.iridescenceMap.channel),iridescenceThicknessMapUv:De&&g(m.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&g(m.sheenColorMap.channel),sheenRoughnessMapUv:Me&&g(m.sheenRoughnessMap.channel),specularMapUv:Oe&&g(m.specularMap.channel),specularColorMapUv:Ut&&g(m.specularColorMap.channel),specularIntensityMapUv:Te&&g(m.specularIntensityMap.channel),transmissionMapUv:Ze&&g(m.transmissionMap.channel),thicknessMapUv:We&&g(m.thicknessMap.channel),alphaMapUv:os&&g(m.alphaMap.channel),vertexTangents:!!E.attributes.tangent&&(U||ie),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,vertexUv1s:ls,vertexUv2s:q,vertexUv3s:So,pointsUvs:S.isPoints===!0&&!!E.attributes.uv&&(K||os),fog:!!C,useFog:m.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:S.isSkinnedMesh===!0,morphTargets:E.morphAttributes.position!==void 0,morphNormals:E.morphAttributes.normal!==void 0,morphColors:E.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:Q,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:n.shadowMap.enabled&&x.length>0,shadowMapType:n.shadowMap.type,toneMapping:sa,useLegacyLights:n._useLegacyLights,decodeVideoTexture:K&&m.map.isVideoTexture===!0&&nt.getTransfer(m.map.colorSpace)===lt,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===qt,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionDerivatives:bn&&m.extensions.derivatives===!0,extensionFragDepth:bn&&m.extensions.fragDepth===!0,extensionDrawBuffers:bn&&m.extensions.drawBuffers===!0,extensionShaderTextureLOD:bn&&m.extensions.shaderTextureLOD===!0,extensionClipCullDistance:bn&&m.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()}},getProgramCacheKey:function(m){let y=[];if(m.shaderID?y.push(m.shaderID):(y.push(m.customVertexShaderID),y.push(m.customFragmentShaderID)),m.defines!==void 0)for(let x in m.defines)y.push(x),y.push(m.defines[x]);return m.isRawShaderMaterial===!1&&((function(x,v){x.push(v.precision),x.push(v.outputColorSpace),x.push(v.envMapMode),x.push(v.envMapCubeUVHeight),x.push(v.mapUv),x.push(v.alphaMapUv),x.push(v.lightMapUv),x.push(v.aoMapUv),x.push(v.bumpMapUv),x.push(v.normalMapUv),x.push(v.displacementMapUv),x.push(v.emissiveMapUv),x.push(v.metalnessMapUv),x.push(v.roughnessMapUv),x.push(v.anisotropyMapUv),x.push(v.clearcoatMapUv),x.push(v.clearcoatNormalMapUv),x.push(v.clearcoatRoughnessMapUv),x.push(v.iridescenceMapUv),x.push(v.iridescenceThicknessMapUv),x.push(v.sheenColorMapUv),x.push(v.sheenRoughnessMapUv),x.push(v.specularMapUv),x.push(v.specularColorMapUv),x.push(v.specularIntensityMapUv),x.push(v.transmissionMapUv),x.push(v.thicknessMapUv),x.push(v.combine),x.push(v.fogExp2),x.push(v.sizeAttenuation),x.push(v.morphTargetsCount),x.push(v.morphAttributeCount),x.push(v.numDirLights),x.push(v.numPointLights),x.push(v.numSpotLights),x.push(v.numSpotLightMaps),x.push(v.numHemiLights),x.push(v.numRectAreaLights),x.push(v.numDirLightShadows),x.push(v.numPointLightShadows),x.push(v.numSpotLightShadows),x.push(v.numSpotLightShadowsWithMaps),x.push(v.numLightProbes),x.push(v.shadowMapType),x.push(v.toneMapping),x.push(v.numClippingPlanes),x.push(v.numClipIntersection),x.push(v.depthPacking)})(y,m),(function(x,v){o.disableAll(),v.isWebGL2&&o.enable(0),v.supportsVertexTextures&&o.enable(1),v.instancing&&o.enable(2),v.instancingColor&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),x.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.skinning&&o.enable(4),v.morphTargets&&o.enable(5),v.morphNormals&&o.enable(6),v.morphColors&&o.enable(7),v.premultipliedAlpha&&o.enable(8),v.shadowMapEnabled&&o.enable(9),v.useLegacyLights&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),x.push(o.mask)})(y,m),y.push(n.outputColorSpace)),y.push(m.customProgramCacheKey),y.join()},getUniforms:function(m){let y=f[m.type],x;if(y){let v=ui[y];x=Yx.clone(v.uniforms)}else x=m.uniforms;return x},acquireProgram:function(m,y){let x;for(let v=0,S=c.length;v<S;v++){let C=c[v];if(C.cacheKey===y){x=C,++x.usedTimes;break}}return x===void 0&&(x=new oy(n,y,m,s),c.push(x)),x},releaseProgram:function(m){if(--m.usedTimes==0){let y=c.indexOf(m);c[y]=c[c.length-1],c.pop(),m.destroy()}},releaseShaderCache:function(m){l.remove(m)},programs:c,dispose:function(){l.dispose()}}}function hy(){let n=new WeakMap;return{get:function(e){let t=n.get(e);return t===void 0&&(t={},n.set(e,t)),t},remove:function(e){n.delete(e)},update:function(e,t,i){n.get(e)[t]=i},dispose:function(){n=new WeakMap}}}function uy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function yf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function _f(){let n=[],e=0,t=[],i=[],r=[];function s(a,o,l,c,h,u){let d=n[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:u},n[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=c,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:i,transparent:r,init:function(){e=0,t.length=0,i.length=0,r.length=0},push:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?i.push(d):l.transparent===!0?r.push(d):t.push(d)},unshift:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?i.unshift(d):l.transparent===!0?r.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=n.length;a<o;a++){let l=n[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||uy),i.length>1&&i.sort(o||yf),r.length>1&&r.sort(o||yf)}}}function dy(){let n=new WeakMap;return{get:function(e,t){let i=n.get(e),r;return i===void 0?(r=new _f,n.set(e,[r])):t>=i.length?(r=new _f,i.push(r)):r=i[t],r},dispose:function(){n=new WeakMap}}}function py(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new be};break;case"SpotLight":t={position:new w,direction:new w,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new w,halfWidth:new w,halfHeight:new w}}return n[e.id]=t,t}}}var fy=0;function my(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function gy(n,e){let t=new py,i=(function(){let l={};return{get:function(c){if(l[c.id]!==void 0)return l[c.id];let h;switch(c.type){case"DirectionalLight":case"SpotLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3}}return l[c.id]=h,h}}})(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)r.probe.push(new w);let s=new w,a=new Ce,o=new Ce;return{setup:function(l,c){let h=0,u=0,d=0;for(let I=0;I<9;I++)r.probe[I].set(0,0,0);let p=0,f=0,g=0,m=0,y=0,x=0,v=0,S=0,C=0,E=0,_=0;l.sort(my);let D=c===!0?Math.PI:1;for(let I=0,O=l.length;I<O;I++){let L=l[I],k=L.color,G=L.intensity,se=L.distance,de=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=k.r*G*D,u+=k.g*G*D,d+=k.b*G*D;else if(L.isLightProbe){for(let Q=0;Q<9;Q++)r.probe[Q].addScaledVector(L.sh.coefficients[Q],G);_++}else if(L.isDirectionalLight){let Q=t.get(L);if(Q.color.copy(L.color).multiplyScalar(L.intensity*D),L.castShadow){let Z=L.shadow,ee=i.get(L);ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,r.directionalShadow[p]=ee,r.directionalShadowMap[p]=de,r.directionalShadowMatrix[p]=L.shadow.matrix,x++}r.directional[p]=Q,p++}else if(L.isSpotLight){let Q=t.get(L);Q.position.setFromMatrixPosition(L.matrixWorld),Q.color.copy(k).multiplyScalar(G*D),Q.distance=se,Q.coneCos=Math.cos(L.angle),Q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Q.decay=L.decay,r.spot[g]=Q;let Z=L.shadow;if(L.map&&(r.spotLightMap[C]=L.map,C++,Z.updateMatrices(L),L.castShadow&&E++),r.spotLightMatrix[g]=Z.matrix,L.castShadow){let ee=i.get(L);ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,r.spotShadow[g]=ee,r.spotShadowMap[g]=de,S++}g++}else if(L.isRectAreaLight){let Q=t.get(L);Q.color.copy(k).multiplyScalar(G),Q.halfWidth.set(.5*L.width,0,0),Q.halfHeight.set(0,.5*L.height,0),r.rectArea[m]=Q,m++}else if(L.isPointLight){let Q=t.get(L);if(Q.color.copy(L.color).multiplyScalar(L.intensity*D),Q.distance=L.distance,Q.decay=L.decay,L.castShadow){let Z=L.shadow,ee=i.get(L);ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,ee.shadowCameraNear=Z.camera.near,ee.shadowCameraFar=Z.camera.far,r.pointShadow[f]=ee,r.pointShadowMap[f]=de,r.pointShadowMatrix[f]=L.shadow.matrix,v++}r.point[f]=Q,f++}else if(L.isHemisphereLight){let Q=t.get(L);Q.skyColor.copy(L.color).multiplyScalar(G*D),Q.groundColor.copy(L.groundColor).multiplyScalar(G*D),r.hemi[y]=Q,y++}}m>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=u,r.ambient[2]=d;let M=r.hash;M.directionalLength===p&&M.pointLength===f&&M.spotLength===g&&M.rectAreaLength===m&&M.hemiLength===y&&M.numDirectionalShadows===x&&M.numPointShadows===v&&M.numSpotShadows===S&&M.numSpotMaps===C&&M.numLightProbes===_||(r.directional.length=p,r.spot.length=g,r.rectArea.length=m,r.point.length=f,r.hemi.length=y,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=v,r.pointShadowMap.length=v,r.spotShadow.length=S,r.spotShadowMap.length=S,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=v,r.spotLightMatrix.length=S+C-E,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=E,r.numLightProbes=_,M.directionalLength=p,M.pointLength=f,M.spotLength=g,M.rectAreaLength=m,M.hemiLength=y,M.numDirectionalShadows=x,M.numPointShadows=v,M.numSpotShadows=S,M.numSpotMaps=C,M.numLightProbes=_,r.version=fy++)},setupView:function(l,c){let h=0,u=0,d=0,p=0,f=0,g=c.matrixWorldInverse;for(let m=0,y=l.length;m<y;m++){let x=l[m];if(x.isDirectionalLight){let v=r.directional[h];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),h++}else if(x.isSpotLight){let v=r.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),d++}else if(x.isRectAreaLight){let v=r.rectArea[p];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),o.identity(),a.copy(x.matrixWorld),a.premultiply(g),o.extractRotation(a),v.halfWidth.set(.5*x.width,0,0),v.halfHeight.set(0,.5*x.height,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(x.isPointLight){let v=r.point[u];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),u++}else if(x.isHemisphereLight){let v=r.hemi[f];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(g),f++}}},state:r}}function Mf(n,e){let t=new gy(n,e),i=[],r=[];return{init:function(){i.length=0,r.length=0},state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:function(s){t.setup(i,s)},setupLightsView:function(s){t.setupView(i,s)},pushLight:function(s){i.push(s)},pushShadow:function(s){r.push(s)}}}function xy(n,e){let t=new WeakMap;return{get:function(i,r=0){let s=t.get(i),a;return s===void 0?(a=new Mf(n,e),t.set(i,[a])):r>=s.length?(a=new Mf(n,e),s.push(a)):a=s[r],a},dispose:function(){t=new WeakMap}}}var Yh=class extends ki{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Zh=class extends ki{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function vy(n,e,t){let i=new ks,r=new ce,s=new ce,a=new at,o=new Yh({depthPacking:3201}),l=new Zh,c={},h=t.maxTextureSize,u={[cr]:qt,[qt]:cr,2:2},d=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new rt;f.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Ge(f,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nf;let y=this.type;function x(E,_){let D=e.update(g);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Bi(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(_,null,D,d,g,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(_,null,D,p,g,null)}function v(E,_,D,M){let I=null,O=D.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(O!==void 0)I=O;else if(I=D.isPointLight===!0?l:o,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0){let L=I.uuid,k=_.uuid,G=c[L];G===void 0&&(G={},c[L]=G);let se=G[k];se===void 0&&(se=I.clone(),G[k]=se,_.addEventListener("dispose",C)),I=se}return I.visible=_.visible,I.wireframe=_.wireframe,I.side=M===Di?_.shadowSide!==null?_.shadowSide:_.side:_.shadowSide!==null?_.shadowSide:u[_.side],I.alphaMap=_.alphaMap,I.alphaTest=_.alphaTest,I.map=_.map,I.clipShadows=_.clipShadows,I.clippingPlanes=_.clippingPlanes,I.clipIntersection=_.clipIntersection,I.displacementMap=_.displacementMap,I.displacementScale=_.displacementScale,I.displacementBias=_.displacementBias,I.wireframeLinewidth=_.wireframeLinewidth,I.linewidth=_.linewidth,D.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(n.properties.get(I).light=D),I}function S(E,_,D,M,I){if(E.visible===!1)return;if(E.layers.test(_.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&I===Di)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,E.matrixWorld);let L=e.update(E),k=E.material;if(Array.isArray(k)){let G=L.groups;for(let se=0,de=G.length;se<de;se++){let Q=G[se],Z=k[Q.materialIndex];if(Z&&Z.visible){let ee=v(E,Z,M,I);E.onBeforeShadow(n,E,_,D,L,ee,Q),n.renderBufferDirect(D,null,L,ee,E,Q),E.onAfterShadow(n,E,_,D,L,ee,Q)}}}else if(k.visible){let G=v(E,k,M,I);E.onBeforeShadow(n,E,_,D,L,G,null),n.renderBufferDirect(D,null,L,G,E,null),E.onAfterShadow(n,E,_,D,L,G,null)}}let O=E.children;for(let L=0,k=O.length;L<k;L++)S(O[L],_,D,M,I)}function C(E){E.target.removeEventListener("dispose",C);for(let _ in c){let D=c[_],M=E.target.uuid;M in D&&(D[M].dispose(),delete D[M])}}this.render=function(E,_,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let M=n.getRenderTarget(),I=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),L=n.state;L.setBlending(0),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let k=y!==Di&&this.type===Di,G=y===Di&&this.type!==Di;for(let se=0,de=E.length;se<de;se++){let Q=E[se],Z=Q.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;r.copy(Z.mapSize);let ee=Z.getFrameExtents();if(r.multiply(ee),s.copy(Z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ee.x),r.x=s.x*ee.x,Z.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ee.y),r.y=s.y*ee.y,Z.mapSize.y=s.y)),Z.map===null||k===!0||G===!0){let K=this.type!==Di?{minFilter:sn,magFilter:sn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Bi(r.x,r.y,K),Z.map.texture.name=Q.name+".shadowMap",Z.camera.updateProjectionMatrix()}n.setRenderTarget(Z.map),n.clear();let F=Z.getViewportCount();for(let K=0;K<F;K++){let pe=Z.getViewport(K);a.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),L.viewport(a),Z.updateMatrices(Q,K),i=Z.getFrustum(),S(_,D,Z.camera,Q,this.type)}Z.isPointLightShadow!==!0&&this.type===Di&&x(Z,D),Z.needsUpdate=!1}y=this.type,m.needsUpdate=!1,n.setRenderTarget(M,I,O)}}function yy(n,e,t){let i=t.isWebGL2,r=new function(){let b=!1,re=new at,W=null,X=new at(0,0,0,0);return{setMask:function(oe){W===oe||b||(n.colorMask(oe,oe,oe,oe),W=oe)},setLocked:function(oe){b=oe},setClear:function(oe,fe,xe,ye,De){De===!0&&(oe*=ye,fe*=ye,xe*=ye),re.set(oe,fe,xe,ye),X.equals(re)===!1&&(n.clearColor(oe,fe,xe,ye),X.copy(re))},reset:function(){b=!1,W=null,X.set(-1,0,0,0)}}},s=new function(){let b=!1,re=null,W=null,X=null;return{setTest:function(oe){oe?J(n.DEPTH_TEST):U(n.DEPTH_TEST)},setMask:function(oe){re===oe||b||(n.depthMask(oe),re=oe)},setFunc:function(oe){if(W!==oe){switch(oe){case 0:n.depthFunc(n.NEVER);break;case 1:n.depthFunc(n.ALWAYS);break;case 2:n.depthFunc(n.LESS);break;case 3:default:n.depthFunc(n.LEQUAL);break;case 4:n.depthFunc(n.EQUAL);break;case 5:n.depthFunc(n.GEQUAL);break;case 6:n.depthFunc(n.GREATER);break;case 7:n.depthFunc(n.NOTEQUAL)}W=oe}},setLocked:function(oe){b=oe},setClear:function(oe){X!==oe&&(n.clearDepth(oe),X=oe)},reset:function(){b=!1,re=null,W=null,X=null}}},a=new function(){let b=!1,re=null,W=null,X=null,oe=null,fe=null,xe=null,ye=null,De=null;return{setTest:function(_e){b||(_e?J(n.STENCIL_TEST):U(n.STENCIL_TEST))},setMask:function(_e){re===_e||b||(n.stencilMask(_e),re=_e)},setFunc:function(_e,Me,Oe){W===_e&&X===Me&&oe===Oe||(n.stencilFunc(_e,Me,Oe),W=_e,X=Me,oe=Oe)},setOp:function(_e,Me,Oe){fe===_e&&xe===Me&&ye===Oe||(n.stencilOp(_e,Me,Oe),fe=_e,xe=Me,ye=Oe)},setLocked:function(_e){b=_e},setClear:function(_e){De!==_e&&(n.clearStencil(_e),De=_e)},reset:function(){b=!1,re=null,W=null,X=null,oe=null,fe=null,xe=null,ye=null,De=null}}},o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],p=null,f=!1,g=null,m=null,y=null,x=null,v=null,S=null,C=null,E=new be(0,0,0),_=0,D=!1,M=null,I=null,O=null,L=null,k=null,G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),se=!1,de=0,Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(Q)[1]),se=de>=1):Q.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),se=de>=2);let Z=null,ee={},F=n.getParameter(n.SCISSOR_BOX),K=n.getParameter(n.VIEWPORT),pe=new at().fromArray(F),A=new at().fromArray(K);function T(b,re,W,X){let oe=new Uint8Array(4),fe=n.createTexture();n.bindTexture(b,fe),n.texParameteri(b,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(b,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let xe=0;xe<W;xe++)!i||b!==n.TEXTURE_3D&&b!==n.TEXTURE_2D_ARRAY?n.texImage2D(re+xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,oe):n.texImage3D(re,0,n.RGBA,1,1,X,0,n.RGBA,n.UNSIGNED_BYTE,oe);return fe}let H={};function J(b){c[b]!==!0&&(n.enable(b),c[b]=!0)}function U(b){c[b]!==!1&&(n.disable(b),c[b]=!1)}H[n.TEXTURE_2D]=T(n.TEXTURE_2D,n.TEXTURE_2D,1),H[n.TEXTURE_CUBE_MAP]=T(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(H[n.TEXTURE_2D_ARRAY]=T(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),H[n.TEXTURE_3D]=T(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),J(n.DEPTH_TEST),s.setFunc(3),V(!1),ie(1),J(n.CULL_FACE),N(0);let Y={[Cr]:n.FUNC_ADD,101:n.FUNC_SUBTRACT,102:n.FUNC_REVERSE_SUBTRACT};if(i)Y[103]=n.MIN,Y[104]=n.MAX;else{let b=e.get("EXT_blend_minmax");b!==null&&(Y[103]=b.MIN_EXT,Y[104]=b.MAX_EXT)}let z={200:n.ZERO,201:n.ONE,202:n.SRC_COLOR,[Ch]:n.SRC_ALPHA,210:n.SRC_ALPHA_SATURATE,208:n.DST_COLOR,206:n.DST_ALPHA,203:n.ONE_MINUS_SRC_COLOR,[Ph]:n.ONE_MINUS_SRC_ALPHA,209:n.ONE_MINUS_DST_COLOR,207:n.ONE_MINUS_DST_ALPHA,211:n.CONSTANT_COLOR,212:n.ONE_MINUS_CONSTANT_COLOR,213:n.CONSTANT_ALPHA,214:n.ONE_MINUS_CONSTANT_ALPHA};function N(b,re,W,X,oe,fe,xe,ye,De,_e){if(b!==0){if(f===!1&&(J(n.BLEND),f=!0),b===5)oe=oe||re,fe=fe||W,xe=xe||X,re===m&&oe===v||(n.blendEquationSeparate(Y[re],Y[oe]),m=re,v=oe),W===y&&X===x&&fe===S&&xe===C||(n.blendFuncSeparate(z[W],z[X],z[fe],z[xe]),y=W,x=X,S=fe,C=xe),ye.equals(E)!==!1&&De===_||(n.blendColor(ye.r,ye.g,ye.b,De),E.copy(ye),_=De),g=b,D=!1;else if(b!==g||_e!==D){if(m===Cr&&v===Cr||(n.blendEquation(n.FUNC_ADD),m=Cr,v=Cr),_e)switch(b){case 1:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case 2:n.blendFunc(n.ONE,n.ONE);break;case 3:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case 4:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b)}else switch(b){case 1:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case 2:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case 3:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case 4:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b)}y=null,x=null,S=null,C=null,E.set(0,0,0),_=0,g=b,D=_e}}else f===!0&&(U(n.BLEND),f=!1)}function V(b){M!==b&&(b?n.frontFace(n.CW):n.frontFace(n.CCW),M=b)}function ie(b){b!==0?(J(n.CULL_FACE),b!==I&&(b===1?n.cullFace(n.BACK):b===2?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):U(n.CULL_FACE),I=b}function te(b,re,W){b?(J(n.POLYGON_OFFSET_FILL),L===re&&k===W||(n.polygonOffset(re,W),L=re,k=W)):U(n.POLYGON_OFFSET_FILL)}return{buffers:{color:r,depth:s,stencil:a},enable:J,disable:U,bindFramebuffer:function(b,re){return h[b]!==re&&(n.bindFramebuffer(b,re),h[b]=re,i&&(b===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=re),b===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=re)),!0)},drawBuffers:function(b,re){let W=d,X=!1;if(b)if(W=u.get(re),W===void 0&&(W=[],u.set(re,W)),b.isWebGLMultipleRenderTargets){let oe=b.texture;if(W.length!==oe.length||W[0]!==n.COLOR_ATTACHMENT0){for(let fe=0,xe=oe.length;fe<xe;fe++)W[fe]=n.COLOR_ATTACHMENT0+fe;W.length=oe.length,X=!0}}else W[0]!==n.COLOR_ATTACHMENT0&&(W[0]=n.COLOR_ATTACHMENT0,X=!0);else W[0]!==n.BACK&&(W[0]=n.BACK,X=!0);X&&(t.isWebGL2?n.drawBuffers(W):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(W))},useProgram:function(b){return p!==b&&(n.useProgram(b),p=b,!0)},setBlending:N,setMaterial:function(b,re){b.side===2?U(n.CULL_FACE):J(n.CULL_FACE);let W=b.side===qt;re&&(W=!W),V(W),b.blending===1&&b.transparent===!1?N(0):N(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),s.setFunc(b.depthFunc),s.setTest(b.depthTest),s.setMask(b.depthWrite),r.setMask(b.colorWrite);let X=b.stencilWrite;a.setTest(X),X&&(a.setMask(b.stencilWriteMask),a.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),a.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),te(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?J(n.SAMPLE_ALPHA_TO_COVERAGE):U(n.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:V,setCullFace:ie,setLineWidth:function(b){b!==O&&(se&&n.lineWidth(b),O=b)},setPolygonOffset:te,setScissorTest:function(b){b?J(n.SCISSOR_TEST):U(n.SCISSOR_TEST)},activeTexture:function(b){b===void 0&&(b=n.TEXTURE0+G-1),Z!==b&&(n.activeTexture(b),Z=b)},bindTexture:function(b,re,W){W===void 0&&(W=Z===null?n.TEXTURE0+G-1:Z);let X=ee[W];X===void 0&&(X={type:void 0,texture:void 0},ee[W]=X),X.type===b&&X.texture===re||(Z!==W&&(n.activeTexture(W),Z=W),n.bindTexture(b,re||H[b]),X.type=b,X.texture=re)},unbindTexture:function(){let b=ee[Z];b!==void 0&&b.type!==void 0&&(n.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)},compressedTexImage2D:function(){try{n.compressedTexImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},compressedTexImage3D:function(){try{n.compressedTexImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texImage2D:function(){try{n.texImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texImage3D:function(){try{n.texImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},updateUBOMapping:function(b,re){let W=l.get(re);W===void 0&&(W=new WeakMap,l.set(re,W));let X=W.get(b);X===void 0&&(X=n.getUniformBlockIndex(re,b.name),W.set(b,X))},uniformBlockBinding:function(b,re){let W=l.get(re).get(b);o.get(re)!==W&&(n.uniformBlockBinding(re,W,b.__bindingPointIndex),o.set(re,W))},texStorage2D:function(){try{n.texStorage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texStorage3D:function(){try{n.texStorage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texSubImage2D:function(){try{n.texSubImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texSubImage3D:function(){try{n.texSubImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},compressedTexSubImage2D:function(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},compressedTexSubImage3D:function(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},scissor:function(b){pe.equals(b)===!1&&(n.scissor(b.x,b.y,b.z,b.w),pe.copy(b))},viewport:function(b){A.equals(b)===!1&&(n.viewport(b.x,b.y,b.z,b.w),A.copy(b))},reset:function(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},Z=null,ee={},h={},u=new WeakMap,d=[],p=null,f=!1,g=null,m=null,y=null,x=null,v=null,S=null,C=null,E=new be(0,0,0),_=0,D=!1,M=null,I=null,O=null,L=null,k=null,pe.set(0,0,n.canvas.width,n.canvas.height),A.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}}}function _y(n,e,t,i,r,s,a){let o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(A){}function f(A,T){return p?new OffscreenCanvas(A,T):ml("canvas")}function g(A,T,H,J){let U=1;if((A.width>J||A.height>J)&&(U=J/Math.max(A.width,A.height)),U<1||T===!0){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let Y=T?Oh:Math.floor,z=Y(U*A.width),N=Y(U*A.height);u===void 0&&(u=f(z,N));let V=H?f(z,N):u;return V.width=z,V.height=N,V.getContext("2d").drawImage(A,0,0,z,N),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+z+"x"+N+")."),V}return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A}return A}function m(A){return Op(A.width)&&Op(A.height)}function y(A,T){return A.generateMipmaps&&T&&A.minFilter!==sn&&A.minFilter!==Qn}function x(A){n.generateMipmap(A)}function v(A,T,H,J,U=!1){if(o===!1)return T;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Y=T;if(T===n.RED&&(H===n.FLOAT&&(Y=n.R32F),H===n.HALF_FLOAT&&(Y=n.R16F),H===n.UNSIGNED_BYTE&&(Y=n.R8)),T===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(Y=n.R8UI),H===n.UNSIGNED_SHORT&&(Y=n.R16UI),H===n.UNSIGNED_INT&&(Y=n.R32UI),H===n.BYTE&&(Y=n.R8I),H===n.SHORT&&(Y=n.R16I),H===n.INT&&(Y=n.R32I)),T===n.RG&&(H===n.FLOAT&&(Y=n.RG32F),H===n.HALF_FLOAT&&(Y=n.RG16F),H===n.UNSIGNED_BYTE&&(Y=n.RG8)),T===n.RGBA){let z=U?ul:nt.getTransfer(J);H===n.FLOAT&&(Y=n.RGBA32F),H===n.HALF_FLOAT&&(Y=n.RGBA16F),H===n.UNSIGNED_BYTE&&(Y=z===lt?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return Y!==n.R16F&&Y!==n.R32F&&Y!==n.RG16F&&Y!==n.RG32F&&Y!==n.RGBA16F&&Y!==n.RGBA32F||e.get("EXT_color_buffer_float"),Y}function S(A,T,H){return y(A,H)===!0||A.isFramebufferTexture&&A.minFilter!==sn&&A.minFilter!==Qn?Math.log2(Math.max(T.width,T.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?T.mipmaps.length:1}function C(A){return A===sn||A===op||A===Xc?n.NEAREST:n.LINEAR}function E(A){let T=A.target;T.removeEventListener("dispose",E),(function(H){let J=i.get(H);if(J.__webglInit===void 0)return;let U=H.source,Y=d.get(U);if(Y){let z=Y[J.__cacheKey];z.usedTimes--,z.usedTimes===0&&D(H),Object.keys(Y).length===0&&d.delete(U)}i.remove(H)})(T),T.isVideoTexture&&h.delete(T)}function _(A){let T=A.target;T.removeEventListener("dispose",_),(function(H){let J=H.texture,U=i.get(H),Y=i.get(J);if(Y.__webglTexture!==void 0&&(n.deleteTexture(Y.__webglTexture),a.memory.textures--),H.depthTexture&&H.depthTexture.dispose(),H.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(U.__webglFramebuffer[z]))for(let N=0;N<U.__webglFramebuffer[z].length;N++)n.deleteFramebuffer(U.__webglFramebuffer[z][N]);else n.deleteFramebuffer(U.__webglFramebuffer[z]);U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer[z])}else{if(Array.isArray(U.__webglFramebuffer))for(let z=0;z<U.__webglFramebuffer.length;z++)n.deleteFramebuffer(U.__webglFramebuffer[z]);else n.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&n.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let z=0;z<U.__webglColorRenderbuffer.length;z++)U.__webglColorRenderbuffer[z]&&n.deleteRenderbuffer(U.__webglColorRenderbuffer[z]);U.__webglDepthRenderbuffer&&n.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(H.isWebGLMultipleRenderTargets)for(let z=0,N=J.length;z<N;z++){let V=i.get(J[z]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),a.memory.textures--),i.remove(J[z])}i.remove(J),i.remove(H)})(T)}function D(A){let T=i.get(A);n.deleteTexture(T.__webglTexture);let H=A.source;delete d.get(H)[T.__cacheKey],a.memory.textures--}let M=0;function I(A,T){let H=i.get(A);if(A.isVideoTexture&&(function(J){let U=a.render.frame;h.get(J)!==U&&(h.set(J,U),J.update())})(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){let J=A.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(J.complete!==!1)return void de(H,A,T);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+T)}let O={[Sa]:n.REPEAT,[zi]:n.CLAMP_TO_EDGE,[Dh]:n.MIRRORED_REPEAT},L={[sn]:n.NEAREST,[op]:n.NEAREST_MIPMAP_NEAREST,[Xc]:n.NEAREST_MIPMAP_LINEAR,[Qn]:n.LINEAR,[Lx]:n.LINEAR_MIPMAP_NEAREST,[ll]:n.LINEAR_MIPMAP_LINEAR},k={512:n.NEVER,519:n.ALWAYS,513:n.LESS,515:n.LEQUAL,514:n.EQUAL,518:n.GEQUAL,516:n.GREATER,517:n.NOTEQUAL};function G(A,T,H){if(H?(n.texParameteri(A,n.TEXTURE_WRAP_S,O[T.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,O[T.wrapT]),A!==n.TEXTURE_3D&&A!==n.TEXTURE_2D_ARRAY||n.texParameteri(A,n.TEXTURE_WRAP_R,O[T.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,L[T.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,L[T.minFilter])):(n.texParameteri(A,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(A,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),A!==n.TEXTURE_3D&&A!==n.TEXTURE_2D_ARRAY||n.texParameteri(A,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),T.wrapS===zi&&T.wrapT===zi||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,n.TEXTURE_MAG_FILTER,C(T.magFilter)),n.texParameteri(A,n.TEXTURE_MIN_FILTER,C(T.minFilter)),T.minFilter!==sn&&T.minFilter!==Qn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,k[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let J=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===sn||T.minFilter!==Xc&&T.minFilter!==ll||T.type===sr&&e.has("OES_texture_float_linear")===!1||o===!1&&T.type===wa&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(n.texParameterf(A,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function se(A,T){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,T.addEventListener("dispose",E));let J=T.source,U=d.get(J);U===void 0&&(U={},d.set(J,U));let Y=(function(z){let N=[];return N.push(z.wrapS),N.push(z.wrapT),N.push(z.wrapR||0),N.push(z.magFilter),N.push(z.minFilter),N.push(z.anisotropy),N.push(z.internalFormat),N.push(z.format),N.push(z.type),N.push(z.generateMipmaps),N.push(z.premultiplyAlpha),N.push(z.flipY),N.push(z.unpackAlignment),N.push(z.colorSpace),N.join()})(T);if(Y!==A.__cacheKey){U[Y]===void 0&&(U[Y]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,H=!0),U[Y].usedTimes++;let z=U[A.__cacheKey];z!==void 0&&(U[A.__cacheKey].usedTimes--,z.usedTimes===0&&D(T)),A.__cacheKey=Y,A.__webglTexture=U[Y].texture}return H}function de(A,T,H){let J=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(J=n.TEXTURE_3D);let U=se(A,T),Y=T.source;t.bindTexture(J,A.__webglTexture,n.TEXTURE0+H);let z=i.get(Y);if(Y.version!==z.__version||U===!0){t.activeTexture(n.TEXTURE0+H);let N=nt.getPrimaries(nt.workingColorSpace),V=T.colorSpace===pi?null:nt.getPrimaries(T.colorSpace),ie=T.colorSpace===pi||N===V?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let te=(function(Me){return!o&&(Me.wrapS!==zi||Me.wrapT!==zi||Me.minFilter!==sn&&Me.minFilter!==Qn)})(T)&&m(T.image)===!1,b=g(T.image,te,!1,r.maxTextureSize);b=pe(T,b);let re=m(b)||o,W=s.convert(T.format,T.colorSpace),X,oe=s.convert(T.type),fe=v(T.internalFormat,W,oe,T.colorSpace,T.isVideoTexture);G(J,T,re);let xe=T.mipmaps,ye=o&&T.isVideoTexture!==!0&&fe!==Wf,De=z.__version===void 0||U===!0,_e=S(T,b,re);if(T.isDepthTexture)fe=n.DEPTH_COMPONENT,o?fe=T.type===sr?n.DEPTH_COMPONENT32F:T.type===rr?n.DEPTH_COMPONENT24:T.type===Dr?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT16:T.type===sr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Ur&&fe===n.DEPTH_COMPONENT&&T.type!==Ru&&T.type!==rr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=rr,oe=s.convert(T.type)),T.format===zs&&fe===n.DEPTH_COMPONENT&&(fe=n.DEPTH_STENCIL,T.type!==Dr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Dr,oe=s.convert(T.type))),De&&(ye?t.texStorage2D(n.TEXTURE_2D,1,fe,b.width,b.height):t.texImage2D(n.TEXTURE_2D,0,fe,b.width,b.height,0,W,oe,null));else if(T.isDataTexture)if(xe.length>0&&re){ye&&De&&t.texStorage2D(n.TEXTURE_2D,_e,fe,xe[0].width,xe[0].height);for(let Me=0,Oe=xe.length;Me<Oe;Me++)X=xe[Me],ye?t.texSubImage2D(n.TEXTURE_2D,Me,0,0,X.width,X.height,W,oe,X.data):t.texImage2D(n.TEXTURE_2D,Me,fe,X.width,X.height,0,W,oe,X.data);T.generateMipmaps=!1}else ye?(De&&t.texStorage2D(n.TEXTURE_2D,_e,fe,b.width,b.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,W,oe,b.data)):t.texImage2D(n.TEXTURE_2D,0,fe,b.width,b.height,0,W,oe,b.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ye&&De&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,fe,xe[0].width,xe[0].height,b.depth);for(let Me=0,Oe=xe.length;Me<Oe;Me++)X=xe[Me],T.format!==di?W!==null?ye?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,0,X.width,X.height,b.depth,W,X.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Me,fe,X.width,X.height,b.depth,0,X.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?t.texSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,0,X.width,X.height,b.depth,W,oe,X.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Me,fe,X.width,X.height,b.depth,0,W,oe,X.data)}else{ye&&De&&t.texStorage2D(n.TEXTURE_2D,_e,fe,xe[0].width,xe[0].height);for(let Me=0,Oe=xe.length;Me<Oe;Me++)X=xe[Me],T.format!==di?W!==null?ye?t.compressedTexSubImage2D(n.TEXTURE_2D,Me,0,0,X.width,X.height,W,X.data):t.compressedTexImage2D(n.TEXTURE_2D,Me,fe,X.width,X.height,0,X.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?t.texSubImage2D(n.TEXTURE_2D,Me,0,0,X.width,X.height,W,oe,X.data):t.texImage2D(n.TEXTURE_2D,Me,fe,X.width,X.height,0,W,oe,X.data)}else if(T.isDataArrayTexture)ye?(De&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,fe,b.width,b.height,b.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,b.width,b.height,b.depth,W,oe,b.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,fe,b.width,b.height,b.depth,0,W,oe,b.data);else if(T.isData3DTexture)ye?(De&&t.texStorage3D(n.TEXTURE_3D,_e,fe,b.width,b.height,b.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,b.width,b.height,b.depth,W,oe,b.data)):t.texImage3D(n.TEXTURE_3D,0,fe,b.width,b.height,b.depth,0,W,oe,b.data);else if(T.isFramebufferTexture){if(De)if(ye)t.texStorage2D(n.TEXTURE_2D,_e,fe,b.width,b.height);else{let Me=b.width,Oe=b.height;for(let Ut=0;Ut<_e;Ut++)t.texImage2D(n.TEXTURE_2D,Ut,fe,Me,Oe,0,W,oe,null),Me>>=1,Oe>>=1}}else if(xe.length>0&&re){ye&&De&&t.texStorage2D(n.TEXTURE_2D,_e,fe,xe[0].width,xe[0].height);for(let Me=0,Oe=xe.length;Me<Oe;Me++)X=xe[Me],ye?t.texSubImage2D(n.TEXTURE_2D,Me,0,0,W,oe,X):t.texImage2D(n.TEXTURE_2D,Me,fe,W,oe,X);T.generateMipmaps=!1}else ye?(De&&t.texStorage2D(n.TEXTURE_2D,_e,fe,b.width,b.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,W,oe,b)):t.texImage2D(n.TEXTURE_2D,0,fe,W,oe,b);y(T,re)&&x(J),z.__version=Y.version,T.onUpdate&&T.onUpdate(T)}A.__version=T.version}function Q(A,T,H,J,U,Y){let z=s.convert(H.format,H.colorSpace),N=s.convert(H.type),V=v(H.internalFormat,z,N,H.colorSpace);if(!i.get(T).__hasExternalTextures){let ie=Math.max(1,T.width>>Y),te=Math.max(1,T.height>>Y);U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?t.texImage3D(U,Y,V,ie,te,T.depth,0,z,N,null):t.texImage2D(U,Y,V,ie,te,0,z,N,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),K(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,U,i.get(H).__webglTexture,0,F(T)):(U===n.TEXTURE_2D||U>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&U<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,U,i.get(H).__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Z(A,T,H){if(n.bindRenderbuffer(n.RENDERBUFFER,A),T.depthBuffer&&!T.stencilBuffer){let J=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(H||K(T)){let U=T.depthTexture;U&&U.isDepthTexture&&(U.type===sr?J=n.DEPTH_COMPONENT32F:U.type===rr&&(J=n.DEPTH_COMPONENT24));let Y=F(T);K(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Y,J,T.width,T.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,Y,J,T.width,T.height)}else n.renderbufferStorage(n.RENDERBUFFER,J,T.width,T.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,A)}else if(T.depthBuffer&&T.stencilBuffer){let J=F(T);H&&K(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,J,n.DEPTH24_STENCIL8,T.width,T.height):K(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,J,n.DEPTH24_STENCIL8,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,A)}else{let J=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let U=0;U<J.length;U++){let Y=J[U],z=s.convert(Y.format,Y.colorSpace),N=s.convert(Y.type),V=v(Y.internalFormat,z,N,Y.colorSpace),ie=F(T);H&&K(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,V,T.width,T.height):K(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,V,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,V,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ee(A){let T=i.get(A),H=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!T.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");(function(J,U){if(U&&U.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,J),!U.depthTexture||!U.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");i.get(U.depthTexture).__webglTexture&&U.depthTexture.image.width===U.width&&U.depthTexture.image.height===U.height||(U.depthTexture.image.width=U.width,U.depthTexture.image.height=U.height,U.depthTexture.needsUpdate=!0),I(U.depthTexture,0);let Y=i.get(U.depthTexture).__webglTexture,z=F(U);if(U.depthTexture.format===Ur)K(U)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0);else{if(U.depthTexture.format!==zs)throw new Error("Unknown depthTexture format");K(U)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0)}})(T.__webglFramebuffer,A)}else if(H){T.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[J]),T.__webglDepthbuffer[J]=n.createRenderbuffer(),Z(T.__webglDepthbuffer[J],A,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=n.createRenderbuffer(),Z(T.__webglDepthbuffer,A,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function F(A){return Math.min(r.maxSamples,A.samples)}function K(A){let T=i.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function pe(A,T){let H=A.colorSpace,J=A.format,U=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===zh||H!==Hi&&H!==pi&&(nt.getTransfer(H)===lt?o===!1?e.has("EXT_sRGB")===!0&&J===di?(A.format=zh,A.minFilter=Qn,A.generateMipmaps=!1):T=gl.sRGBToLinear(T):J===di&&U===Ir||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),T}this.allocateTextureUnit=function(){let A=M;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),M+=1,A},this.resetTextureUnits=function(){M=0},this.setTexture2D=I,this.setTexture2DArray=function(A,T){let H=i.get(A);A.version>0&&H.__version!==A.version?de(H,A,T):t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+T)},this.setTexture3D=function(A,T){let H=i.get(A);A.version>0&&H.__version!==A.version?de(H,A,T):t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+T)},this.setTextureCube=function(A,T){let H=i.get(A);A.version>0&&H.__version!==A.version?(function(J,U,Y){if(U.image.length!==6)return;let z=se(J,U),N=U.source;t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture,n.TEXTURE0+Y);let V=i.get(N);if(N.version!==V.__version||z===!0){t.activeTexture(n.TEXTURE0+Y);let ie=nt.getPrimaries(nt.workingColorSpace),te=U.colorSpace===pi?null:nt.getPrimaries(U.colorSpace),b=U.colorSpace===pi||ie===te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,U.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,U.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,b);let re=U.isCompressedTexture||U.image[0].isCompressedTexture,W=U.image[0]&&U.image[0].isDataTexture,X=[];for(let Te=0;Te<6;Te++)X[Te]=re||W?W?U.image[Te].image:U.image[Te]:g(U.image[Te],!1,!0,r.maxCubemapSize),X[Te]=pe(U,X[Te]);let oe=X[0],fe=m(oe)||o,xe=s.convert(U.format,U.colorSpace),ye=s.convert(U.type),De=v(U.internalFormat,xe,ye,U.colorSpace),_e=o&&U.isVideoTexture!==!0,Me=V.__version===void 0||z===!0,Oe,Ut=S(U,oe,fe);if(G(n.TEXTURE_CUBE_MAP,U,fe),re){_e&&Me&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ut,De,oe.width,oe.height);for(let Te=0;Te<6;Te++){Oe=X[Te].mipmaps;for(let Ze=0;Ze<Oe.length;Ze++){let We=Oe[Ze];U.format!==di?xe!==null?_e?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ze,0,0,We.width,We.height,xe,We.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ze,De,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_e?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ze,0,0,We.width,We.height,xe,ye,We.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ze,De,We.width,We.height,0,xe,ye,We.data)}}}else{Oe=U.mipmaps,_e&&Me&&(Oe.length>0&&Ut++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Ut,De,X[0].width,X[0].height));for(let Te=0;Te<6;Te++)if(W){_e?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,X[Te].width,X[Te].height,xe,ye,X[Te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,De,X[Te].width,X[Te].height,0,xe,ye,X[Te].data);for(let Ze=0;Ze<Oe.length;Ze++){let We=Oe[Ze].image[Te].image;_e?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ze+1,0,0,We.width,We.height,xe,ye,We.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ze+1,De,We.width,We.height,0,xe,ye,We.data)}}else{_e?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,xe,ye,X[Te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,De,xe,ye,X[Te]);for(let Ze=0;Ze<Oe.length;Ze++){let We=Oe[Ze];_e?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ze+1,0,0,xe,ye,We.image[Te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ze+1,De,xe,ye,We.image[Te])}}}y(U,fe)&&x(n.TEXTURE_CUBE_MAP),V.__version=N.version,U.onUpdate&&U.onUpdate(U)}J.__version=U.version})(H,A,T):t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+T)},this.rebindTextures=function(A,T,H){let J=i.get(A);T!==void 0&&Q(J.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&ee(A)},this.setupRenderTarget=function(A){let T=A.texture,H=i.get(A),J=i.get(T);A.addEventListener("dispose",_),A.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=T.version,a.memory.textures++);let U=A.isWebGLCubeRenderTarget===!0,Y=A.isWebGLMultipleRenderTargets===!0,z=m(A)||o;if(U){H.__webglFramebuffer=[];for(let N=0;N<6;N++)if(o&&T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer[N]=[];for(let V=0;V<T.mipmaps.length;V++)H.__webglFramebuffer[N][V]=n.createFramebuffer()}else H.__webglFramebuffer[N]=n.createFramebuffer()}else{if(o&&T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer=[];for(let N=0;N<T.mipmaps.length;N++)H.__webglFramebuffer[N]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(Y)if(r.drawBuffers){let N=A.texture;for(let V=0,ie=N.length;V<ie;V++){let te=i.get(N[V]);te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&K(A)===!1){let N=Y?T:[T];H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let V=0;V<N.length;V++){let ie=N[V];H.__webglColorRenderbuffer[V]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[V]);let te=s.convert(ie.format,ie.colorSpace),b=s.convert(ie.type),re=v(ie.internalFormat,te,b,ie.colorSpace,A.isXRRenderTarget===!0),W=F(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,W,re,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+V,n.RENDERBUFFER,H.__webglColorRenderbuffer[V])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),Z(H.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(U){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),G(n.TEXTURE_CUBE_MAP,T,z);for(let N=0;N<6;N++)if(o&&T.mipmaps&&T.mipmaps.length>0)for(let V=0;V<T.mipmaps.length;V++)Q(H.__webglFramebuffer[N][V],A,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+N,V);else Q(H.__webglFramebuffer[N],A,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+N,0);y(T,z)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Y){let N=A.texture;for(let V=0,ie=N.length;V<ie;V++){let te=N[V],b=i.get(te);t.bindTexture(n.TEXTURE_2D,b.__webglTexture),G(n.TEXTURE_2D,te,z),Q(H.__webglFramebuffer,A,te,n.COLOR_ATTACHMENT0+V,n.TEXTURE_2D,0),y(te,z)&&x(n.TEXTURE_2D)}t.unbindTexture()}else{let N=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?N=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(N,J.__webglTexture),G(N,T,z),o&&T.mipmaps&&T.mipmaps.length>0)for(let V=0;V<T.mipmaps.length;V++)Q(H.__webglFramebuffer[V],A,T,n.COLOR_ATTACHMENT0,N,V);else Q(H.__webglFramebuffer,A,T,n.COLOR_ATTACHMENT0,N,0);y(T,z)&&x(N),t.unbindTexture()}A.depthBuffer&&ee(A)},this.updateRenderTargetMipmap=function(A){let T=m(A)||o,H=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let J=0,U=H.length;J<U;J++){let Y=H[J];if(y(Y,T)){let z=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,N=i.get(Y).__webglTexture;t.bindTexture(z,N),x(z),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(A){if(o&&A.samples>0&&K(A)===!1){let T=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],H=A.width,J=A.height,U=n.COLOR_BUFFER_BIT,Y=[],z=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,N=i.get(A),V=A.isWebGLMultipleRenderTargets===!0;if(V)for(let ie=0;ie<T.length;ie++)t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,N.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,N.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,N.__webglFramebuffer);for(let ie=0;ie<T.length;ie++){Y.push(n.COLOR_ATTACHMENT0+ie),A.depthBuffer&&Y.push(z);let te=N.__ignoreDepthValues!==void 0&&N.__ignoreDepthValues;if(te===!1&&(A.depthBuffer&&(U|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&(U|=n.STENCIL_BUFFER_BIT)),V&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,N.__webglColorRenderbuffer[ie]),te===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[z]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[z])),V){let b=i.get(T[ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,b,0)}n.blitFramebuffer(0,0,H,J,0,0,H,J,U,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Y)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),V)for(let ie=0;ie<T.length;ie++){t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,N.__webglColorRenderbuffer[ie]);let te=i.get(T[ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,N.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.TEXTURE_2D,te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,N.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=K}function My(n,e,t){let i=t.isWebGL2;return{convert:function(r,s=""){let a,o=nt.getTransfer(s);if(r===Ir)return n.UNSIGNED_BYTE;if(r===Bf)return n.UNSIGNED_SHORT_4_4_4_4;if(r===kf)return n.UNSIGNED_SHORT_5_5_5_1;if(r===1010)return n.BYTE;if(r===1011)return n.SHORT;if(r===Ru)return n.UNSIGNED_SHORT;if(r===Hf)return n.INT;if(r===rr)return n.UNSIGNED_INT;if(r===sr)return n.FLOAT;if(r===wa)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===1021)return n.ALPHA;if(r===di)return n.RGBA;if(r===1024)return n.LUMINANCE;if(r===1025)return n.LUMINANCE_ALPHA;if(r===Ur)return n.DEPTH_COMPONENT;if(r===zs)return n.DEPTH_STENCIL;if(r===zh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===1028)return n.RED;if(r===Ff)return n.RED_INTEGER;if(r===1030)return n.RG;if(r===Gf)return n.RG_INTEGER;if(r===Vf)return n.RGBA_INTEGER;if(r===jc||r===qc||r===Yc||r===Zc)if(o===lt){if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a===null)return null;if(r===jc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===qc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Yc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Zc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(a=e.get("WEBGL_compressed_texture_s3tc"),a===null)return null;if(r===jc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===qc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Yc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Zc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(r===lp||r===cp||r===hp||r===up){if(a=e.get("WEBGL_compressed_texture_pvrtc"),a===null)return null;if(r===lp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===cp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===hp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===up)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(r===Wf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===dp||r===pp){if(a=e.get("WEBGL_compressed_texture_etc"),a===null)return null;if(r===dp)return o===lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===pp)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}if(r===fp||r===mp||r===gp||r===xp||r===vp||r===yp||r===_p||r===Mp||r===Ep||r===bp||r===Sp||r===wp||r===Tp||r===Ap){if(a=e.get("WEBGL_compressed_texture_astc"),a===null)return null;if(r===fp)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===mp)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===gp)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===xp)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===vp)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===yp)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===_p)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Mp)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ep)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===bp)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Sp)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===wp)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Tp)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ap)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}if(r===Kc||r===Rp||r===Cp){if(a=e.get("EXT_texture_compression_bptc"),a===null)return null;if(r===Kc)return o===lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Rp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Cp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(r===36283||r===Pp||r===Lp||r===Ip){if(a=e.get("EXT_texture_compression_rgtc"),a===null)return null;if(r===Kc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Pp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Lp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ip)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return r===Dr?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}}}var Kh=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ge=class extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ey={type:"move"},_a=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,i),y=this._getHandJoint(c,g);m!==null&&(y.matrix.fromArray(m.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=m.radius),y.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ey)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ge;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Jh=class extends hr{constructor(e,t){super();let i=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,f=null,g=t.getContextAttributes(),m=null,y=null,x=[],v=[],S=new ce,C=null,E=new Bt;E.layers.enable(1),E.viewport=new at;let _=new Bt;_.layers.enable(2),_.viewport=new at;let D=[E,_],M=new Kh;M.layers.enable(1),M.layers.enable(2);let I=null,O=null;function L(F){let K=v.indexOf(F.inputSource);if(K===-1)return;let pe=x[K];pe!==void 0&&(pe.update(F.inputSource,F.frame,c||a),pe.dispatchEvent({type:F.type,data:F.inputSource}))}function k(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",G);for(let F=0;F<x.length;F++){let K=v[F];K!==null&&(v[F]=null,x[F].disconnect(K))}I=null,O=null,e.setRenderTarget(m),p=null,d=null,u=null,r=null,y=null,ee.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}function G(F){for(let K=0;K<F.removed.length;K++){let pe=F.removed[K],A=v.indexOf(pe);A>=0&&(v[A]=null,x[A].disconnect(pe))}for(let K=0;K<F.added.length;K++){let pe=F.added[K],A=v.indexOf(pe);if(A===-1){for(let H=0;H<x.length;H++){if(H>=v.length){v.push(pe),A=H;break}if(v[H]===null){v[H]=pe,A=H;break}}if(A===-1)break}let T=x[A];T&&T.connect(pe)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let K=x[F];return K===void 0&&(K=new _a,x[F]=K),K.getTargetRaySpace()},this.getControllerGrip=function(F){let K=x[F];return K===void 0&&(K=new _a,x[F]=K),K.getGripSpace()},this.getHand=function(F){let K=x[F];return K===void 0&&(K=new _a,x[F]=K),K.getHandSpace()},this.setFramebufferScaleFactor=function(F){s=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",k),r.addEventListener("inputsourceschange",G),g.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let K={antialias:r.renderState.layers!==void 0||g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Bi(p.framebufferWidth,p.framebufferHeight,{format:di,type:Ir,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,pe=null,A=null;g.depth&&(A=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=g.stencil?zs:Ur,pe=g.stencil?Dr:rr);let T={colorFormat:t.RGBA8,depthFormat:A,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(T),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Bi(d.textureWidth,d.textureHeight,{format:di,type:Ir,depthTexture:new wl(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0}),e.properties.get(y).__ignoreDepthValues=d.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ee.setContext(r),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};let se=new w,de=new w;function Q(F,K){K===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(K.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(r===null)return;M.near=_.near=E.near=F.near,M.far=_.far=E.far=F.far,I===M.near&&O===M.far||(r.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,O=M.far);let K=F.parent,pe=M.cameras;Q(M,K);for(let A=0;A<pe.length;A++)Q(pe[A],K);pe.length===2?(function(A,T,H){se.setFromMatrixPosition(T.matrixWorld),de.setFromMatrixPosition(H.matrixWorld);let J=se.distanceTo(de),U=T.projectionMatrix.elements,Y=H.projectionMatrix.elements,z=U[14]/(U[10]-1),N=U[14]/(U[10]+1),V=(U[9]+1)/U[5],ie=(U[9]-1)/U[5],te=(U[8]-1)/U[0],b=(Y[8]+1)/Y[0],re=z*te,W=z*b,X=J/(-te+b),oe=X*-te;T.matrixWorld.decompose(A.position,A.quaternion,A.scale),A.translateX(oe),A.translateZ(X),A.matrixWorld.compose(A.position,A.quaternion,A.scale),A.matrixWorldInverse.copy(A.matrixWorld).invert();let fe=z+X,xe=N+X,ye=re-oe,De=W+(J-oe),_e=V*N/xe*fe,Me=ie*N/xe*fe;A.projectionMatrix.makePerspective(ye,De,_e,Me,fe,xe),A.projectionMatrixInverse.copy(A.projectionMatrix).invert()})(M,E,_):M.projectionMatrix.copy(E.projectionMatrix),(function(A,T,H){H===null?A.matrix.copy(T.matrixWorld):(A.matrix.copy(H.matrixWorld),A.matrix.invert(),A.matrix.multiply(T.matrixWorld)),A.matrix.decompose(A.position,A.quaternion,A.scale),A.updateMatrixWorld(!0),A.projectionMatrix.copy(T.projectionMatrix),A.projectionMatrixInverse.copy(T.projectionMatrixInverse),A.isPerspectiveCamera&&(A.fov=2*Nh*Math.atan(1/A.projectionMatrix.elements[5]),A.zoom=1)})(F,M,K)},this.getCamera=function(){return M},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(F){l=F,d!==null&&(d.fixedFoveation=F),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=F)};let Z=null,ee=new Zf;ee.setAnimationLoop((function(F,K){if(h=K.getViewerPose(c||a),f=K,h!==null){let pe=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let A=!1;pe.length!==M.cameras.length&&(M.cameras.length=0,A=!0);for(let T=0;T<pe.length;T++){let H=pe[T],J=null;if(p!==null)J=p.getViewport(H);else{let Y=u.getViewSubImage(d,H);J=Y.viewport,T===0&&(e.setRenderTargetTextures(y,Y.colorTexture,d.ignoreDepthValues?void 0:Y.depthStencilTexture),e.setRenderTarget(y))}let U=D[T];U===void 0&&(U=new Bt,U.layers.enable(T),U.viewport=new at,D[T]=U),U.matrix.fromArray(H.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(H.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(J.x,J.y,J.width,J.height),T===0&&(M.matrix.copy(U.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),A===!0&&M.cameras.push(U)}}for(let pe=0;pe<x.length;pe++){let A=v[pe],T=x[pe];A!==null&&T!==void 0&&T.update(A,K,c||a)}Z&&Z(F,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),f=null})),this.setAnimationLoop=function(F){Z=F},this.dispose=function(){}}};function by(n,e){function t(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function i(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,t(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,t(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,t(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===qt&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,t(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===qt&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,t(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,t(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s).envMap;if(a&&(r.envMap.value=a,r.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap){r.lightMap.value=s.lightMap;let o=n._useLegacyLights===!0?Math.PI:1;r.lightMapIntensity.value=s.lightMapIntensity*o,t(s.lightMap,r.lightMapTransform)}s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,Yf(n)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?i(r,s):s.isMeshToonMaterial?(i(r,s),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(r,s)):s.isMeshPhongMaterial?(i(r,s),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(r,s)):s.isMeshStandardMaterial?(i(r,s),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),e.get(h).envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(r,s),s.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===qt&&c.clearcoatNormalScale.value.negate())),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(r,s,l)):s.isMeshMatcapMaterial?(i(r,s),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(r,s)):s.isMeshDepthMaterial?i(r,s):s.isMeshDistanceMaterial?(i(r,s),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(r,s)):s.isMeshNormalMaterial?i(r,s):s.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(r,s),s.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(r,s)):s.isPointsMaterial?(function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,s,a,o):s.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Sy(n,e,t,i){let r={},s={},a=[],o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(u,d,p,f){let g=u.value,m=d+"_"+p;if(f[m]===void 0)return f[m]=typeof g=="number"||typeof g=="boolean"?g:g.clone(),!0;{let y=f[m];if(typeof g=="number"||typeof g=="boolean"){if(y!==g)return f[m]=g,!0}else if(y.equals(g)===!1)return y.copy(g),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),n.deleteBuffer(r[d.id]),delete r[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;i.uniformBlockBinding(u,p)},update:function(u,d){let p=r[u.id];p===void 0&&((function(m){let y=m.uniforms,x=0,v=16;for(let C=0,E=y.length;C<E;C++){let _=Array.isArray(y[C])?y[C]:[y[C]];for(let D=0,M=_.length;D<M;D++){let I=_[D],O=Array.isArray(I.value)?I.value:[I.value];for(let L=0,k=O.length;L<k;L++){let G=c(O[L]),se=x%v;se!==0&&v-se<G.boundary&&(x+=v-se),I.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=x,x+=G.storage}}}let S=x%v;S>0&&(x+=v-S),m.__size=x,m.__cache={}})(u),p=(function(m){let y=(function(){for(let C=0;C<o;C++)if(a.indexOf(C)===-1)return a.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();m.__bindingPointIndex=y;let x=n.createBuffer(),v=m.__size,S=m.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,v,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,x),x})(u),r[u.id]=p,u.addEventListener("dispose",h));let f=d.program;i.updateUBOMapping(u,f);let g=e.render.frame;s[u.id]!==g&&((function(m){let y=r[m.id],x=m.uniforms,v=m.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let S=0,C=x.length;S<C;S++){let E=Array.isArray(x[S])?x[S]:[x[S]];for(let _=0,D=E.length;_<D;_++){let M=E[_];if(l(M,S,_,v)===!0){let I=M.__offset,O=Array.isArray(M.value)?M.value:[M.value],L=0;for(let k=0;k<O.length;k++){let G=O[k],se=c(G);typeof G=="number"||typeof G=="boolean"?(M.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,I+L,M.__data)):G.isMatrix3?(M.__data[0]=G.elements[0],M.__data[1]=G.elements[1],M.__data[2]=G.elements[2],M.__data[3]=0,M.__data[4]=G.elements[3],M.__data[5]=G.elements[4],M.__data[6]=G.elements[5],M.__data[7]=0,M.__data[8]=G.elements[6],M.__data[9]=G.elements[7],M.__data[10]=G.elements[8],M.__data[11]=0):(G.toArray(M.__data,L),L+=se.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,M.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)})(u),s[u.id]=g)},dispose:function(){for(let u in r)n.deleteBuffer(r[u]);a=[],r={},s={}}}}var Aa=class{constructor(e={}){let{canvas:t=Dx(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e,d;this.isWebGLRenderer=!0,d=i!==null?i.getContextAttributes().alpha:a;let p=new Uint32Array(4),f=new Int32Array(4),g=null,m=null,y=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tt,this._useLegacyLights=!1,this.toneMapping=or,this.toneMappingExposure=1;let v=this,S=!1,C=0,E=0,_=null,D=-1,M=null,I=new at,O=new at,L=null,k=new be(0),G=0,se=t.width,de=t.height,Q=1,Z=null,ee=null,F=new at(0,0,se,de),K=new at(0,0,se,de),pe=!1,A=new ks,T=!1,H=!1,J=null,U=new Ce,Y=new ce,z=new w,N={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function V(){return _===null?Q:1}let ie,te,b,re,W,X,oe,fe,xe,ye,De,_e,Me,Oe,Ut,Te,Ze,We,Eo,os,bo,Pn,bn,ls,q=i;function So(P,j){for(let $=0;$<P.length;$++){let le=P[$],ne=t.getContext(le,j);if(ne!==null)return ne}return null}try{let P={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",Xd,!1),t.addEventListener("webglcontextrestored",jd,!1),t.addEventListener("webglcontextcreationerror",qd,!1),q===null){let j=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&j.shift(),q=So(j,P),q===null)throw So(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}function sa(){ie=new sv(q),te=new tv(q,ie,e),ie.init(te),Pn=new My(q,ie,te),b=new yy(q,ie,te),re=new lv(q),W=new hy,X=new _y(q,ie,b,W,te,Pn,re),oe=new iv(v),fe=new rv(v),xe=new Jx(q,te),bn=new Qx(q,ie,xe,te),ye=new av(q,xe,re,bn),De=new dv(q,ye,xe,re),Eo=new uv(q,te,X),Te=new nv(W),_e=new cy(v,oe,fe,ie,te,bn,Te),Me=new by(v,W),Oe=new dy,Ut=new xy(ie,te),We=new $x(v,oe,fe,b,De,d,l),Ze=new vy(v,De,te),ls=new Sy(q,re,te,b),os=new ev(q,ie,re,te),bo=new ov(q,ie,re,te),re.programs=_e.programs,v.capabilities=te,v.extensions=ie,v.properties=W,v.renderLists=Oe,v.shadowMap=Ze,v.state=b,v.info=re}sa();let Vt=new Jh(v,q);function Xd(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function jd(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let P=re.autoReset,j=Ze.enabled,$=Ze.autoUpdate,le=Ze.needsUpdate,ne=Ze.type;sa(),re.autoReset=P,Ze.enabled=j,Ze.autoUpdate=$,Ze.needsUpdate=le,Ze.type=ne}function qd(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Yd(P){let j=P.target;j.removeEventListener("dispose",Yd),(function($){(function(le){let ne=W.get(le).programs;ne!==void 0&&(ne.forEach((function(me){_e.releaseProgram(me)})),le.isShaderMaterial&&_e.releaseShaderCache(le))})($),W.remove($)})(j)}function Zd(P,j,$){P.transparent===!0&&P.side===2&&P.forceSinglePass===!1?(P.side=qt,P.needsUpdate=!0,To(P,j,$),P.side=cr,P.needsUpdate=!0,To(P,j,$),P.side=2):To(P,j,$)}this.xr=Vt,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let P=ie.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=ie.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(P){P!==void 0&&(Q=P,this.setSize(se,de,!1))},this.getSize=function(P){return P.set(se,de)},this.setSize=function(P,j,$=!0){Vt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(se=P,de=j,t.width=Math.floor(P*Q),t.height=Math.floor(j*Q),$===!0&&(t.style.width=P+"px",t.style.height=j+"px"),this.setViewport(0,0,P,j))},this.getDrawingBufferSize=function(P){return P.set(se*Q,de*Q).floor()},this.setDrawingBufferSize=function(P,j,$){se=P,de=j,Q=$,t.width=Math.floor(P*$),t.height=Math.floor(j*$),this.setViewport(0,0,P,j)},this.getCurrentViewport=function(P){return P.copy(I)},this.getViewport=function(P){return P.copy(F)},this.setViewport=function(P,j,$,le){P.isVector4?F.set(P.x,P.y,P.z,P.w):F.set(P,j,$,le),b.viewport(I.copy(F).multiplyScalar(Q).floor())},this.getScissor=function(P){return P.copy(K)},this.setScissor=function(P,j,$,le){P.isVector4?K.set(P.x,P.y,P.z,P.w):K.set(P,j,$,le),b.scissor(O.copy(K).multiplyScalar(Q).floor())},this.getScissorTest=function(){return pe},this.setScissorTest=function(P){b.setScissorTest(pe=P)},this.setOpaqueSort=function(P){Z=P},this.setTransparentSort=function(P){ee=P},this.getClearColor=function(P){return P.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor.apply(We,arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha.apply(We,arguments)},this.clear=function(P=!0,j=!0,$=!0){let le=0;if(P){let ne=!1;if(_!==null){let me=_.texture.format;ne=me===Vf||me===Gf||me===Ff}if(ne){let me=_.texture.type,Pe=me===Ir||me===rr||me===Ru||me===Dr||me===Bf||me===kf,Ie=We.getClearColor(),ke=We.getClearAlpha(),Ve=Ie.r,Xe=Ie.g,qe=Ie.b;Pe?(p[0]=Ve,p[1]=Xe,p[2]=qe,p[3]=ke,q.clearBufferuiv(q.COLOR,0,p)):(f[0]=Ve,f[1]=Xe,f[2]=qe,f[3]=ke,q.clearBufferiv(q.COLOR,0,f))}else le|=q.COLOR_BUFFER_BIT}j&&(le|=q.DEPTH_BUFFER_BIT),$&&(le|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Xd,!1),t.removeEventListener("webglcontextrestored",jd,!1),t.removeEventListener("webglcontextcreationerror",qd,!1),Oe.dispose(),Ut.dispose(),W.dispose(),oe.dispose(),fe.dispose(),De.dispose(),bn.dispose(),ls.dispose(),_e.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",Kd),Vt.removeEventListener("sessionend",Jd),J&&(J.dispose(),J=null),_r.stop()},this.renderBufferDirect=function(P,j,$,le,ne,me){j===null&&(j=N);let Pe=ne.isMesh&&ne.matrixWorld.determinant()<0,Ie=(function(Rt,Ln,un,Ye,Ke){Ln.isScene!==!0&&(Ln=N),X.resetTextureUnits();let aa=Ln.fog,Fc=Ye.isMeshStandardMaterial?Ln.environment:null,mx=_===null?v.outputColorSpace:_.isXRRenderTarget===!0?_.texture.colorSpace:Hi,Ao=(Ye.isMeshStandardMaterial?fe:oe).get(Ye.envMap||Fc),gx=Ye.vertexColors===!0&&!!un.attributes.color&&un.attributes.color.itemSize===4,xx=!!un.attributes.tangent&&(!!Ye.normalMap||Ye.anisotropy>0),vx=!!un.morphAttributes.position,yx=!!un.morphAttributes.normal,_x=!!un.morphAttributes.color,ip=or;Ye.toneMapped&&(_!==null&&_.isXRRenderTarget!==!0||(ip=v.toneMapping));let rp=un.morphAttributes.position||un.morphAttributes.normal||un.morphAttributes.color,Mx=rp!==void 0?rp.length:0,$e=W.get(Ye),Ex=m.state.lights;if(T===!0&&(H===!0||Rt!==M)){let In=Rt===M&&Ye.id===D;Te.setState(Ye,Rt,In)}let Yn=!1;Ye.version===$e.__version?$e.needsLights&&$e.lightsStateVersion!==Ex.state.version||$e.outputColorSpace!==mx||Ke.isBatchedMesh&&$e.batching===!1?Yn=!0:Ke.isBatchedMesh||$e.batching!==!0?Ke.isInstancedMesh&&$e.instancing===!1?Yn=!0:Ke.isInstancedMesh||$e.instancing!==!0?Ke.isSkinnedMesh&&$e.skinning===!1?Yn=!0:Ke.isSkinnedMesh||$e.skinning!==!0?Ke.isInstancedMesh&&$e.instancingColor===!0&&Ke.instanceColor===null||Ke.isInstancedMesh&&$e.instancingColor===!1&&Ke.instanceColor!==null||$e.envMap!==Ao||Ye.fog===!0&&$e.fog!==aa?Yn=!0:$e.numClippingPlanes===void 0||$e.numClippingPlanes===Te.numPlanes&&$e.numIntersection===Te.numIntersection?($e.vertexAlphas!==gx||$e.vertexTangents!==xx||$e.morphTargets!==vx||$e.morphNormals!==yx||$e.morphColors!==_x||$e.toneMapping!==ip||te.isWebGL2===!0&&$e.morphTargetsCount!==Mx)&&(Yn=!0):Yn=!0:Yn=!0:Yn=!0:Yn=!0:(Yn=!0,$e.__version=Ye.version);let Er=$e.currentProgram;Yn===!0&&(Er=To(Ye,Ln,Ke));let sp=!1,oa=!1,Gc=!1,Wt=Er.getUniforms(),br=$e.uniforms;if(b.useProgram(Er.program)&&(sp=!0,oa=!0,Gc=!0),Ye.id!==D&&(D=Ye.id,oa=!0),sp||M!==Rt){Wt.setValue(q,"projectionMatrix",Rt.projectionMatrix),Wt.setValue(q,"viewMatrix",Rt.matrixWorldInverse);let In=Wt.map.cameraPosition;In!==void 0&&In.setValue(q,z.setFromMatrixPosition(Rt.matrixWorld)),te.logarithmicDepthBuffer&&Wt.setValue(q,"logDepthBufFC",2/(Math.log(Rt.far+1)/Math.LN2)),(Ye.isMeshPhongMaterial||Ye.isMeshToonMaterial||Ye.isMeshLambertMaterial||Ye.isMeshBasicMaterial||Ye.isMeshStandardMaterial||Ye.isShaderMaterial)&&Wt.setValue(q,"isOrthographic",Rt.isOrthographicCamera===!0),M!==Rt&&(M=Rt,oa=!0,Gc=!0)}if(Ke.isSkinnedMesh){Wt.setOptional(q,Ke,"bindMatrix"),Wt.setOptional(q,Ke,"bindMatrixInverse");let In=Ke.skeleton;In&&(te.floatVertexTextures?(In.boneTexture===null&&In.computeBoneTexture(),Wt.setValue(q,"boneTexture",In.boneTexture,X)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Ke.isBatchedMesh&&(Wt.setOptional(q,Ke,"batchingTexture"),Wt.setValue(q,"batchingTexture",Ke._matricesTexture,X));let Vc=un.morphAttributes;(Vc.position!==void 0||Vc.normal!==void 0||Vc.color!==void 0&&te.isWebGL2===!0)&&Eo.update(Ke,un,Er),(oa||$e.receiveShadow!==Ke.receiveShadow)&&($e.receiveShadow=Ke.receiveShadow,Wt.setValue(q,"receiveShadow",Ke.receiveShadow)),Ye.isMeshGouraudMaterial&&Ye.envMap!==null&&(br.envMap.value=Ao,br.flipEnvMap.value=Ao.isCubeTexture&&Ao.isRenderTargetTexture===!1?-1:1),oa&&(Wt.setValue(q,"toneMappingExposure",v.toneMappingExposure),$e.needsLights&&(Zn=Gc,(hi=br).ambientLightColor.needsUpdate=Zn,hi.lightProbe.needsUpdate=Zn,hi.directionalLights.needsUpdate=Zn,hi.directionalLightShadows.needsUpdate=Zn,hi.pointLights.needsUpdate=Zn,hi.pointLightShadows.needsUpdate=Zn,hi.spotLights.needsUpdate=Zn,hi.spotLightShadows.needsUpdate=Zn,hi.rectAreaLights.needsUpdate=Zn,hi.hemisphereLights.needsUpdate=Zn),aa&&Ye.fog===!0&&Me.refreshFogUniforms(br,aa),Me.refreshMaterialUniforms(br,Ye,Q,de,J),Is.upload(q,tp($e),br,X));var hi,Zn;if(Ye.isShaderMaterial&&Ye.uniformsNeedUpdate===!0&&(Is.upload(q,tp($e),br,X),Ye.uniformsNeedUpdate=!1),Ye.isSpriteMaterial&&Wt.setValue(q,"center",Ke.center),Wt.setValue(q,"modelViewMatrix",Ke.modelViewMatrix),Wt.setValue(q,"normalMatrix",Ke.normalMatrix),Wt.setValue(q,"modelMatrix",Ke.matrixWorld),Ye.isShaderMaterial||Ye.isRawShaderMaterial){let In=Ye.uniformsGroups;for(let Wc=0,bx=In.length;Wc<bx;Wc++)if(te.isWebGL2){let ap=In[Wc];ls.update(ap,Er),ls.bind(ap,Er)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Er})(P,j,$,le,ne);b.setMaterial(le,Pe);let ke=$.index,Ve=1;if(le.wireframe===!0){if(ke=ye.getWireframeAttribute($),ke===void 0)return;Ve=2}let Xe=$.drawRange,qe=$.attributes.position,xt=Xe.start*Ve,qn=(Xe.start+Xe.count)*Ve;me!==null&&(xt=Math.max(xt,me.start*Ve),qn=Math.min(qn,(me.start+me.count)*Ve)),ke!==null?(xt=Math.max(xt,0),qn=Math.min(qn,ke.count)):qe!=null&&(xt=Math.max(xt,0),qn=Math.min(qn,qe.count));let Ai=qn-xt;if(Ai<0||Ai===1/0)return;let Mr;bn.setup(ne,le,Ie,$,ke);let vt=os;if(ke!==null&&(Mr=xe.get(ke),vt=bo,vt.setIndex(Mr)),ne.isMesh)le.wireframe===!0?(b.setLineWidth(le.wireframeLinewidth*V()),vt.setMode(q.LINES)):vt.setMode(q.TRIANGLES);else if(ne.isLine){let Rt=le.linewidth;Rt===void 0&&(Rt=1),b.setLineWidth(Rt*V()),ne.isLineSegments?vt.setMode(q.LINES):ne.isLineLoop?vt.setMode(q.LINE_LOOP):vt.setMode(q.LINE_STRIP)}else ne.isPoints?vt.setMode(q.POINTS):ne.isSprite&&vt.setMode(q.TRIANGLES);if(ne.isBatchedMesh)vt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else if(ne.isInstancedMesh)vt.renderInstances(xt,Ai,ne.count);else if($.isInstancedBufferGeometry){let Rt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ln=Math.min($.instanceCount,Rt);vt.renderInstances(xt,Ai,Ln)}else vt.render(xt,Ai)},this.compile=function(P,j,$=null){$===null&&($=P),m=Ut.get($),m.init(),x.push(m),$.traverseVisible((function(ne){ne.isLight&&ne.layers.test(j.layers)&&(m.pushLight(ne),ne.castShadow&&m.pushShadow(ne))})),P!==$&&P.traverseVisible((function(ne){ne.isLight&&ne.layers.test(j.layers)&&(m.pushLight(ne),ne.castShadow&&m.pushShadow(ne))})),m.setupLights(v._useLegacyLights);let le=new Set;return P.traverse((function(ne){let me=ne.material;if(me)if(Array.isArray(me))for(let Pe=0;Pe<me.length;Pe++){let Ie=me[Pe];Zd(Ie,$,ne),le.add(Ie)}else Zd(me,$,ne),le.add(me)})),x.pop(),m=null,le},this.compileAsync=function(P,j,$=null){let le=this.compile(P,j,$);return new Promise((ne=>{function me(){le.forEach((function(Pe){W.get(Pe).currentProgram.isReady()&&le.delete(Pe)})),le.size!==0?setTimeout(me,10):ne(P)}ie.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)}))};let kc=null;function Kd(){_r.stop()}function Jd(){_r.start()}let _r=new Zf;function $d(P,j,$,le){if(P.visible===!1)return;if(P.layers.test(j.layers)){if(P.isGroup)$=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(j);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||A.intersectsSprite(P)){le&&z.setFromMatrixPosition(P.matrixWorld).applyMatrix4(U);let me=De.update(P),Pe=P.material;Pe.visible&&g.push(P,me,Pe,$,z.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||A.intersectsObject(P))){let me=De.update(P),Pe=P.material;if(le&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),z.copy(P.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),z.copy(me.boundingSphere.center)),z.applyMatrix4(P.matrixWorld).applyMatrix4(U)),Array.isArray(Pe)){let Ie=me.groups;for(let ke=0,Ve=Ie.length;ke<Ve;ke++){let Xe=Ie[ke],qe=Pe[Xe.materialIndex];qe&&qe.visible&&g.push(P,me,qe,$,z.z,Xe)}}else Pe.visible&&g.push(P,me,Pe,$,z.z,null)}}let ne=P.children;for(let me=0,Pe=ne.length;me<Pe;me++)$d(ne[me],j,$,le)}function Qd(P,j,$,le){let ne=P.opaque,me=P.transmissive,Pe=P.transparent;m.setupLightsView($),T===!0&&Te.setGlobalState(v.clippingPlanes,$),me.length>0&&(function(Ie,ke,Ve,Xe){if((Ve.isScene===!0?Ve.overrideMaterial:null)!==null)return;let xt=te.isWebGL2;J===null&&(J=new Bi(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")?wa:Ir,minFilter:ll,samples:xt?4:0})),v.getDrawingBufferSize(Y),xt?J.setSize(Y.x,Y.y):J.setSize(Oh(Y.x),Oh(Y.y));let qn=v.getRenderTarget();v.setRenderTarget(J),v.getClearColor(k),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear();let Ai=v.toneMapping;v.toneMapping=or,wo(Ie,Ve,Xe),X.updateMultisampleRenderTarget(J),X.updateRenderTargetMipmap(J);let Mr=!1;for(let vt=0,Rt=ke.length;vt<Rt;vt++){let Ln=ke[vt],un=Ln.object,Ye=Ln.geometry,Ke=Ln.material,aa=Ln.group;if(Ke.side===2&&un.layers.test(Xe.layers)){let Fc=Ke.side;Ke.side=qt,Ke.needsUpdate=!0,ep(un,Ve,Xe,Ye,Ke,aa),Ke.side=Fc,Ke.needsUpdate=!0,Mr=!0}}Mr===!0&&(X.updateMultisampleRenderTarget(J),X.updateRenderTargetMipmap(J)),v.setRenderTarget(qn),v.setClearColor(k,G),v.toneMapping=Ai})(ne,me,j,$),le&&b.viewport(I.copy(le)),ne.length>0&&wo(ne,j,$),me.length>0&&wo(me,j,$),Pe.length>0&&wo(Pe,j,$),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function wo(P,j,$){let le=j.isScene===!0?j.overrideMaterial:null;for(let ne=0,me=P.length;ne<me;ne++){let Pe=P[ne],Ie=Pe.object,ke=Pe.geometry,Ve=le===null?Pe.material:le,Xe=Pe.group;Ie.layers.test($.layers)&&ep(Ie,j,$,ke,Ve,Xe)}}function ep(P,j,$,le,ne,me){P.onBeforeRender(v,j,$,le,ne,me),P.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ne.onBeforeRender(v,j,$,le,P,me),ne.transparent===!0&&ne.side===2&&ne.forceSinglePass===!1?(ne.side=qt,ne.needsUpdate=!0,v.renderBufferDirect($,j,le,ne,P,me),ne.side=cr,ne.needsUpdate=!0,v.renderBufferDirect($,j,le,ne,P,me),ne.side=2):v.renderBufferDirect($,j,le,ne,P,me),P.onAfterRender(v,j,$,le,ne,me)}function To(P,j,$){j.isScene!==!0&&(j=N);let le=W.get(P),ne=m.state.lights,me=m.state.shadowsArray,Pe=ne.state.version,Ie=_e.getParameters(P,ne.state,me,j,$),ke=_e.getProgramCacheKey(Ie),Ve=le.programs;le.environment=P.isMeshStandardMaterial?j.environment:null,le.fog=j.fog,le.envMap=(P.isMeshStandardMaterial?fe:oe).get(P.envMap||le.environment),Ve===void 0&&(P.addEventListener("dispose",Yd),Ve=new Map,le.programs=Ve);let Xe=Ve.get(ke);if(Xe!==void 0){if(le.currentProgram===Xe&&le.lightsStateVersion===Pe)return np(P,Ie),Xe}else Ie.uniforms=_e.getUniforms(P),P.onBuild($,Ie,v),P.onBeforeCompile(Ie,v),Xe=_e.acquireProgram(Ie,ke),Ve.set(ke,Xe),le.uniforms=Ie.uniforms;let qe=le.uniforms;return(P.isShaderMaterial||P.isRawShaderMaterial)&&P.clipping!==!0||(qe.clippingPlanes=Te.uniform),np(P,Ie),le.needsLights=(function(xt){return xt.isMeshLambertMaterial||xt.isMeshToonMaterial||xt.isMeshPhongMaterial||xt.isMeshStandardMaterial||xt.isShadowMaterial||xt.isShaderMaterial&&xt.lights===!0})(P),le.lightsStateVersion=Pe,le.needsLights&&(qe.ambientLightColor.value=ne.state.ambient,qe.lightProbe.value=ne.state.probe,qe.directionalLights.value=ne.state.directional,qe.directionalLightShadows.value=ne.state.directionalShadow,qe.spotLights.value=ne.state.spot,qe.spotLightShadows.value=ne.state.spotShadow,qe.rectAreaLights.value=ne.state.rectArea,qe.ltc_1.value=ne.state.rectAreaLTC1,qe.ltc_2.value=ne.state.rectAreaLTC2,qe.pointLights.value=ne.state.point,qe.pointLightShadows.value=ne.state.pointShadow,qe.hemisphereLights.value=ne.state.hemi,qe.directionalShadowMap.value=ne.state.directionalShadowMap,qe.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,qe.spotShadowMap.value=ne.state.spotShadowMap,qe.spotLightMatrix.value=ne.state.spotLightMatrix,qe.spotLightMap.value=ne.state.spotLightMap,qe.pointShadowMap.value=ne.state.pointShadowMap,qe.pointShadowMatrix.value=ne.state.pointShadowMatrix),le.currentProgram=Xe,le.uniformsList=null,Xe}function tp(P){if(P.uniformsList===null){let j=P.currentProgram.getUniforms();P.uniformsList=Is.seqWithValue(j.seq,P.uniforms)}return P.uniformsList}function np(P,j){let $=W.get(P);$.outputColorSpace=j.outputColorSpace,$.batching=j.batching,$.instancing=j.instancing,$.instancingColor=j.instancingColor,$.skinning=j.skinning,$.morphTargets=j.morphTargets,$.morphNormals=j.morphNormals,$.morphColors=j.morphColors,$.morphTargetsCount=j.morphTargetsCount,$.numClippingPlanes=j.numClippingPlanes,$.numIntersection=j.numClipIntersection,$.vertexAlphas=j.vertexAlphas,$.vertexTangents=j.vertexTangents,$.toneMapping=j.toneMapping}_r.setAnimationLoop((function(P){kc&&kc(P)})),typeof self<"u"&&_r.setContext(self),this.setAnimationLoop=function(P){kc=P,Vt.setAnimationLoop(P),P===null?_r.stop():_r.start()},Vt.addEventListener("sessionstart",Kd),Vt.addEventListener("sessionend",Jd),this.render=function(P,j){if(j!==void 0&&j.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(S===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(j),j=Vt.getCamera()),P.isScene===!0&&P.onBeforeRender(v,P,j,_),m=Ut.get(P,x.length),m.init(),x.push(m),U.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),A.setFromProjectionMatrix(U),H=this.localClippingEnabled,T=Te.init(this.clippingPlanes,H),g=Oe.get(P,y.length),g.init(),y.push(g),$d(P,j,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(Z,ee),this.info.render.frame++,T===!0&&Te.beginShadows();let $=m.state.shadowsArray;if(Ze.render($,P,j),T===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),We.render(g,P),m.setupLights(v._useLegacyLights),j.isArrayCamera){let le=j.cameras;for(let ne=0,me=le.length;ne<me;ne++){let Pe=le[ne];Qd(g,P,Pe,Pe.viewport)}}else Qd(g,P,j);_!==null&&(X.updateMultisampleRenderTarget(_),X.updateRenderTargetMipmap(_)),P.isScene===!0&&P.onAfterRender(v,P,j),bn.resetDefaultState(),D=-1,M=null,x.pop(),m=x.length>0?x[x.length-1]:null,y.pop(),g=y.length>0?y[y.length-1]:null},this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(P,j,$){W.get(P.texture).__webglTexture=j,W.get(P.depthTexture).__webglTexture=$;let le=W.get(P);le.__hasExternalTextures=!0,le.__hasExternalTextures&&(le.__autoAllocateDepthBuffer=$===void 0,le.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),le.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,j){let $=W.get(P);$.__webglFramebuffer=j,$.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(P,j=0,$=0){_=P,C=j,E=$;let le=!0,ne=null,me=!1,Pe=!1;if(P){let Ie=W.get(P);Ie.__useDefaultFramebuffer!==void 0?(b.bindFramebuffer(q.FRAMEBUFFER,null),le=!1):Ie.__webglFramebuffer===void 0?X.setupRenderTarget(P):Ie.__hasExternalTextures&&X.rebindTextures(P,W.get(P.texture).__webglTexture,W.get(P.depthTexture).__webglTexture);let ke=P.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Pe=!0);let Ve=W.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(ne=Array.isArray(Ve[j])?Ve[j][$]:Ve[j],me=!0):ne=te.isWebGL2&&P.samples>0&&X.useMultisampledRTT(P)===!1?W.get(P).__webglMultisampledFramebuffer:Array.isArray(Ve)?Ve[$]:Ve,I.copy(P.viewport),O.copy(P.scissor),L=P.scissorTest}else I.copy(F).multiplyScalar(Q).floor(),O.copy(K).multiplyScalar(Q).floor(),L=pe;if(b.bindFramebuffer(q.FRAMEBUFFER,ne)&&te.drawBuffers&&le&&b.drawBuffers(P,ne),b.viewport(I),b.scissor(O),b.setScissorTest(L),me){let Ie=W.get(P.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ie.__webglTexture,$)}else if(Pe){let Ie=W.get(P.texture),ke=j||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ie.__webglTexture,$||0,ke)}D=-1},this.readRenderTargetPixels=function(P,j,$,le,ne,me,Pe){if(!P||!P.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=W.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ie=Ie[Pe]),Ie){b.bindFramebuffer(q.FRAMEBUFFER,Ie);try{let ke=P.texture,Ve=ke.format,Xe=ke.type;if(Ve!==di&&Pn.convert(Ve)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");let qe=Xe===wa&&(ie.has("EXT_color_buffer_half_float")||te.isWebGL2&&ie.has("EXT_color_buffer_float"));if(!(Xe===Ir||Pn.convert(Xe)===q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)||Xe===sr&&(te.isWebGL2||ie.has("OES_texture_float")||ie.has("WEBGL_color_buffer_float"))||qe))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");j>=0&&j<=P.width-le&&$>=0&&$<=P.height-ne&&q.readPixels(j,$,le,ne,Pn.convert(Ve),Pn.convert(Xe),me)}finally{let ke=_!==null?W.get(_).__webglFramebuffer:null;b.bindFramebuffer(q.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(P,j,$=0){let le=Math.pow(2,-$),ne=Math.floor(j.image.width*le),me=Math.floor(j.image.height*le);X.setTexture2D(j,0),q.copyTexSubImage2D(q.TEXTURE_2D,$,0,0,P.x,P.y,ne,me),b.unbindTexture()},this.copyTextureToTexture=function(P,j,$,le=0){let ne=j.image.width,me=j.image.height,Pe=Pn.convert($.format),Ie=Pn.convert($.type);X.setTexture2D($,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,$.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,$.unpackAlignment),j.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,le,P.x,P.y,ne,me,Pe,Ie,j.image.data):j.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,le,P.x,P.y,j.mipmaps[0].width,j.mipmaps[0].height,Pe,j.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,le,P.x,P.y,Pe,Ie,j.image),le===0&&$.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),b.unbindTexture()},this.copyTextureToTexture3D=function(P,j,$,le,ne=0){if(v.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");let me=P.max.x-P.min.x+1,Pe=P.max.y-P.min.y+1,Ie=P.max.z-P.min.z+1,ke=Pn.convert(le.format),Ve=Pn.convert(le.type),Xe;if(le.isData3DTexture)X.setTexture3D(le,0),Xe=q.TEXTURE_3D;else{if(!le.isDataArrayTexture&&!le.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");X.setTexture2DArray(le,0),Xe=q.TEXTURE_2D_ARRAY}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,le.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,le.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,le.unpackAlignment);let qe=q.getParameter(q.UNPACK_ROW_LENGTH),xt=q.getParameter(q.UNPACK_IMAGE_HEIGHT),qn=q.getParameter(q.UNPACK_SKIP_PIXELS),Ai=q.getParameter(q.UNPACK_SKIP_ROWS),Mr=q.getParameter(q.UNPACK_SKIP_IMAGES),vt=$.isCompressedTexture?$.mipmaps[ne]:$.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,vt.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,vt.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,P.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,P.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,P.min.z),$.isDataTexture||$.isData3DTexture?q.texSubImage3D(Xe,ne,j.x,j.y,j.z,me,Pe,Ie,ke,Ve,vt.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(Xe,ne,j.x,j.y,j.z,me,Pe,Ie,ke,vt.data)):q.texSubImage3D(Xe,ne,j.x,j.y,j.z,me,Pe,Ie,ke,Ve,vt),q.pixelStorei(q.UNPACK_ROW_LENGTH,qe),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,xt),q.pixelStorei(q.UNPACK_SKIP_PIXELS,qn),q.pixelStorei(q.UNPACK_SKIP_ROWS,Ai),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Mr),ne===0&&le.generateMipmaps&&q.generateMipmap(Xe),b.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?X.setTextureCube(P,0):P.isData3DTexture?X.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?X.setTexture2DArray(P,0):X.setTexture2D(P,0),b.unbindTexture()},this.resetState=function(){C=0,E=0,_=null,b.reset(),bn.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ns}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Cu?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===Vl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===tt?zr:Xf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===zr?tt:Hi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},$h=class extends Aa{};$h.prototype.isWebGL1Renderer=!0;var Tl=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new be(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Al=class extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Rl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Uh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Oi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},nn=new w,Ra=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ni(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Nt(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},An=class extends ki{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ws,pa=new w,Ts=new w,As=new w,Rs=new ce,fa=new ce,tm=new Ce,Ko=new w,ma=new w,Jo=new w,Ef=new ce,Mh=new ce,bf=new ce,zn=class extends Yt{constructor(e=new An){if(super(),this.isSprite=!0,this.type="Sprite",ws===void 0){ws=new rt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Rl(t,5);ws.setIndex([0,1,2,0,2,3]),ws.setAttribute("position",new Ra(i,3,0,!1)),ws.setAttribute("uv",new Ra(i,2,3,!1))}this.geometry=ws,this.material=e,this.center=new ce(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ts.setFromMatrixScale(this.matrixWorld),tm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),As.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ts.multiplyScalar(-As.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let a=this.center;$o(Ko.set(-.5,-.5,0),As,a,Ts,r,s),$o(ma.set(.5,-.5,0),As,a,Ts,r,s),$o(Jo.set(.5,.5,0),As,a,Ts,r,s),Ef.set(0,0),Mh.set(1,0),bf.set(1,1);let o=e.ray.intersectTriangle(Ko,ma,Jo,!1,pa);if(o===null&&($o(ma.set(-.5,.5,0),As,a,Ts,r,s),Mh.set(0,1),o=e.ray.intersectTriangle(Ko,Jo,ma,!1,pa),o===null))return;let l=e.ray.origin.distanceTo(pa);l<e.near||l>e.far||t.push({distance:l,point:pa.clone(),uv:ar.getInterpolation(pa,Ko,ma,Jo,Ef,Mh,bf,new ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function $o(n,e,t,i,r,s){Rs.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(fa.x=s*Rs.x-r*Rs.y,fa.y=r*Rs.x+s*Rs.y):fa.copy(Rs),n.copy(e),n.x+=fa.x,n.y+=fa.y,n.applyMatrix4(tm)}var SM=new w,wM=new w;var TM=new w,AM=new at,RM=new at,CM=new w,PM=new Ce,LM=new w,IM=new ni,DM=new Ce,UM=new Os;var zM=new Ce,NM=new Ce;var Nr=class extends Nt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Cs=new Ce,Sf=new Ce,Qo=[],wf=new ti,wy=new Ce,ga=new Ge,xa=new ni,Kt=class extends Ge{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Nr(new Float32Array(16*i),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,wy)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ti),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Cs),wf.copy(e.boundingBox).applyMatrix4(Cs),this.boundingBox.union(wf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ni),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Cs),xa.copy(e.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(xa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}raycast(e,t){let i=this.matrixWorld,r=this.count;if(ga.geometry=this.geometry,ga.material=this.material,ga.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xa.copy(this.boundingSphere),xa.applyMatrix4(i),e.ray.intersectsSphere(xa)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Cs),Sf.multiplyMatrices(i,Cs),ga.matrixWorld=Sf,ga.raycast(e,Qo);for(let a=0,o=Qo.length;a<o;a++){let l=Qo[a];l.instanceId=s,l.object=this,t.push(l)}Qo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Nr(new Float32Array(3*this.instanceMatrix.count),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Qh=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){let i=this.pool,r=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1});let s=i[this.index];r.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}};var OM=new Ce,HM=new Ce,BM=new Ce,kM=new Ce,FM=new ks,GM=new ti,VM=new ni,WM=new w,XM=new Qh,jM=new Ge;var qM=new w,YM=new w,ZM=new Ce,KM=new Os,JM=new ni;var $M=new w,QM=new w;var eE=new Ce,tE=new Os,nE=new ni,iE=new w;var kt=class extends Un{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Nn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),r=0,s=i.length,a;a=t||e*i[s-1];let o,l=0,c=s-1;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),o=i[r]-a,o<0)l=r+1;else{if(!(o>0)){c=r;break}c=r-1}if(r=c,i[r]===a)return r/(s-1);let h=i[r];return(r+(a-h)/(i[r+1]-h))/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new ce:new w);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new w,r=[],s=[],a=[],o=new w,l=new Ce;for(let p=0;p<=e;p++){let f=p/e;r[p]=this.getTangentAt(f,new w)}s[0]=new w,a[0]=new w;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(Ht(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Ht(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(l.makeRotationAxis(r[f],p*f)),a[f].crossVectors(r[f],s[f])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ca=class extends Nn{constructor(e=0,t=0,i=1,r=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let i=t||new ce,r=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(s=a?0:r),this.aClockwise!==!0||a||(s===r?s=-r:s-=r);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},eu=class extends Ca{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Lu(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,r(a,o,d,p)},calc:function(s){let a=s*s;return n+e*s+t*a+i*(a*s)}}}var el=new w,Eh=new Lu,bh=new Lu,Sh=new Lu,tu=class extends Nn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new w){let i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=r[(c-1)%s]:(el.subVectors(r[0],r[1]).add(r[0]),o=el);let u=r[c%s],d=r[(c+1)%s];if(this.closed||c+2<s?l=r[(c+2)%s]:(el.subVectors(r[s-1],r[s-2]).add(r[s-1]),l=el),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(l),p);g<1e-4&&(g=1),f<1e-4&&(f=g),m<1e-4&&(m=g),Eh.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,f,g,m),bh.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,f,g,m),Sh.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,f,g,m)}else this.curveType==="catmullrom"&&(Eh.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),bh.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),Sh.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return i.set(Eh.calc(h),bh.calc(h),Sh.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new w().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Tf(n,e,t,i,r){let s=.5*(i-e),a=.5*(r-t),o=n*n;return(2*t-2*i+s+a)*(n*o)+(-3*t+3*i-2*s-a)*o+s*n+t}function Ma(n,e,t,i){return(function(r,s){let a=1-r;return a*a*s})(n,e)+(function(r,s){return 2*(1-r)*r*s})(n,t)+(function(r,s){return r*r*s})(n,i)}function Ea(n,e,t,i,r){return(function(s,a){let o=1-s;return o*o*o*a})(n,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(n,t)+(function(s,a){return 3*(1-s)*s*s*a})(n,i)+(function(s,a){return s*s*s*a})(n,r)}var Cl=class extends Nn{constructor(e=new ce,t=new ce,i=new ce,r=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ce){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Ea(e,r.x,s.x,a.x,o.x),Ea(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},nu=class extends Nn{constructor(e=new w,t=new w,i=new w,r=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new w){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Ea(e,r.x,s.x,a.x,o.x),Ea(e,r.y,s.y,a.y,o.y),Ea(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Pl=class extends Nn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},iu=class extends Nn{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ll=class extends Nn{constructor(e=new ce,t=new ce,i=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ce){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Ma(e,r.x,s.x,a.x),Ma(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Il=class extends Nn{constructor(e=new w,t=new w,i=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new w){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Ma(e,r.x,s.x,a.x),Ma(e,r.y,s.y,a.y),Ma(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Dl=class extends Nn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return i.set(Tf(o,l.x,c.x,h.x,u.x),Tf(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new ce().fromArray(r))}return this}},Ul=Object.freeze({__proto__:null,ArcCurve:eu,CatmullRomCurve3:tu,CubicBezierCurve:Cl,CubicBezierCurve3:nu,EllipseCurve:Ca,LineCurve:Pl,LineCurve3:iu,QuadraticBezierCurve:Ll,QuadraticBezierCurve3:Il,SplineCurve:Dl}),ru=class extends Nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ul[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new Ul[r.type]().fromJSON(r))}return this}},Pa=class extends ru{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Pl(this.currentPoint.clone(),new ce(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new Ll(this.currentPoint.clone(),new ce(e,t),new ce(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){let o=new Cl(this.currentPoint.clone(),new ce(e,t),new ce(i,r),new ce(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Dl(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,r,s,a,o,l),this}absellipse(e,t,i,r,s,a,o,l){let c=new Ca(e,t,i,r,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},zl=class n extends rt{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,i=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=Ht(r,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new w,d=new ce,p=new w,f=new w,g=new w,m=0,y=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,y=e[x+1].y-e[x].y,p.x=1*y,p.y=-m,p.z=0*y,g.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:m=e[x+1].x-e[x].x,y=e[x+1].y-e[x].y,p.x=1*y,p.y=-m,p.z=0*y,f.copy(p),p.x+=g.x,p.y+=g.y,p.z+=g.z,p.normalize(),l.push(p.x,p.y,p.z),g.copy(f)}for(let x=0;x<=t;x++){let v=i+x*h*r,S=Math.sin(v),C=Math.cos(v);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*S,u.y=e[E].y,u.z=e[E].x*C,a.push(u.x,u.y,u.z),d.x=x/t,d.y=E/(e.length-1),o.push(d.x,d.y);let _=l[3*E+0]*S,D=l[3*E+1],M=l[3*E+0]*C;c.push(_,D,M)}}for(let x=0;x<t;x++)for(let v=0;v<e.length-1;v++){let S=v+x*e.length,C=S,E=S+e.length,_=S+e.length+1,D=S+1;s.push(C,E,D),s.push(_,D,E)}this.setIndex(s),this.setAttribute("position",new Re(a,3)),this.setAttribute("uv",new Re(o,2)),this.setAttribute("normal",new Re(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},On=class n extends zl{constructor(e=1,t=1,i=4,r=8){let s=new Pa;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(i),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:r}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},dn=class n extends rt{constructor(e=1,t=32,i=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new w,h=new ce;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=i+u/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Re(a,3)),this.setAttribute("normal",new Re(o,3)),this.setAttribute("uv",new Re(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ue=class n extends rt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],d=[],p=[],f=0,g=[],m=i/2,y=0;function x(v){let S=f,C=new ce,E=new w,_=0,D=v===!0?e:t,M=v===!0?1:-1;for(let O=1;O<=r;O++)u.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),f++;let I=f;for(let O=0;O<=r;O++){let L=O/r*l+o,k=Math.cos(L),G=Math.sin(L);E.x=D*G,E.y=m*M,E.z=D*k,u.push(E.x,E.y,E.z),d.push(0,M,0),C.x=.5*k+.5,C.y=.5*G*M+.5,p.push(C.x,C.y),f++}for(let O=0;O<r;O++){let L=S+O,k=I+O;v===!0?h.push(k,k+1,L):h.push(k+1,k,L),_+=3}c.addGroup(y,_,v===!0?1:2),y+=_}(function(){let v=new w,S=new w,C=0,E=(t-e)/i;for(let _=0;_<=s;_++){let D=[],M=_/s,I=M*(t-e)+e;for(let O=0;O<=r;O++){let L=O/r,k=L*l+o,G=Math.sin(k),se=Math.cos(k);S.x=I*G,S.y=-M*i+m,S.z=I*se,u.push(S.x,S.y,S.z),v.set(G,E,se).normalize(),d.push(v.x,v.y,v.z),p.push(L,1-M),D.push(f++)}g.push(D)}for(let _=0;_<r;_++)for(let D=0;D<s;D++){let M=g[D][_],I=g[D+1][_],O=g[D+1][_+1],L=g[D][_+1];h.push(M,I,L),h.push(I,O,L),C+=6}c.addGroup(y,C,0),y+=C})(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Re(u,3)),this.setAttribute("normal",new Re(d,3)),this.setAttribute("uv",new Re(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Je=class n extends ue{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Or=class n extends rt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],a=[];function o(d,p,f,g){let m=g+1,y=[];for(let x=0;x<=m;x++){y[x]=[];let v=d.clone().lerp(f,x/m),S=p.clone().lerp(f,x/m),C=m-x;for(let E=0;E<=C;E++)y[x][E]=E===0&&x===m?v:v.clone().lerp(S,E/C)}for(let x=0;x<m;x++)for(let v=0;v<2*(m-x)-1;v++){let S=Math.floor(v/2);v%2==0?(l(y[x][S+1]),l(y[x+1][S]),l(y[x][S])):(l(y[x][S+1]),l(y[x+1][S+1]),l(y[x+1][S]))}}function l(d){s.push(d.x,d.y,d.z)}function c(d,p){let f=3*d;p.x=e[f+0],p.y=e[f+1],p.z=e[f+2]}function h(d,p,f,g){g<0&&d.x===1&&(a[p]=d.x-1),f.x===0&&f.z===0&&(a[p]=g/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let p=new w,f=new w,g=new w;for(let m=0;m<t.length;m+=3)c(t[m+0],p),c(t[m+1],f),c(t[m+2],g),o(p,f,g,d)})(r),(function(d){let p=new w;for(let f=0;f<s.length;f+=3)p.x=s[f+0],p.y=s[f+1],p.z=s[f+2],p.normalize().multiplyScalar(d),s[f+0]=p.x,s[f+1]=p.y,s[f+2]=p.z})(i),(function(){let d=new w;for(let f=0;f<s.length;f+=3){d.x=s[f+0],d.y=s[f+1],d.z=s[f+2];let g=u(d)/2/Math.PI+.5,m=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(g,1-m)}var p;(function(){let f=new w,g=new w,m=new w,y=new w,x=new ce,v=new ce,S=new ce;for(let C=0,E=0;C<s.length;C+=9,E+=6){f.set(s[C+0],s[C+1],s[C+2]),g.set(s[C+3],s[C+4],s[C+5]),m.set(s[C+6],s[C+7],s[C+8]),x.set(a[E+0],a[E+1]),v.set(a[E+2],a[E+3]),S.set(a[E+4],a[E+5]),y.copy(f).add(g).add(m).divideScalar(3);let _=u(y);h(x,E+0,f,_),h(v,E+2,g,_),h(S,E+4,m,_)}})(),(function(){for(let f=0;f<a.length;f+=6){let g=a[f+0],m=a[f+2],y=a[f+4],x=Math.max(g,m,y),v=Math.min(g,m,y);x>.9&&v<.1&&(g<.2&&(a[f+0]+=1),m<.2&&(a[f+2]+=1),y<.2&&(a[f+4]+=1))}})()})(),this.setAttribute("position",new Re(s,3)),this.setAttribute("normal",new Re(s.slice(),3)),this.setAttribute("uv",new Re(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},su=class n extends Or{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},tl=new w,nl=new w,wh=new w,il=new ar,au=class extends rt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(ol*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let f=0;f<l;f+=3){a?(c[0]=a.getX(f),c[1]=a.getX(f+1),c[2]=a.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:g,b:m,c:y}=il;if(g.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),y.fromBufferAttribute(o,c[2]),il.getNormal(wh),u[0]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,u[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,u[2]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let x=0;x<3;x++){let v=(x+1)%3,S=u[x],C=u[v],E=il[h[x]],_=il[h[v]],D=`${S}_${C}`,M=`${C}_${S}`;M in d&&d[M]?(wh.dot(d[M].normal)<=s&&(p.push(E.x,E.y,E.z),p.push(_.x,_.y,_.z)),d[M]=null):D in d||(d[D]={index0:c[x],index1:c[v],normal:wh.clone()})}}for(let f in d)if(d[f]){let{index0:g,index1:m}=d[f];tl.fromBufferAttribute(o,g),nl.fromBufferAttribute(o,m),p.push(tl.x,tl.y,tl.z),p.push(nl.x,nl.y,nl.z)}this.setAttribute("position",new Re(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Hn=class extends Pa{constructor(e){super(e),this.uuid=Oi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Pa().fromJSON(r))}return this}},Ty=function(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=Af(n,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,p;if(i&&(s=(function(f,g,m,y){let x=[],v,S,C,E,_;for(v=0,S=g.length;v<S;v++)C=g[v]*y,E=v<S-1?g[v+1]*y:f.length,_=Af(f,C,E,y,!1),_===_.next&&(_.steiner=!0),x.push(Uy(_));for(x.sort(Ly),v=0;v<x.length;v++)m=Iy(x[v],m);return m})(n,e,s,t)),n.length>80*t){o=c=n[0],l=h=n[1];for(let f=t;f<r;f+=t)u=n[f],d=n[f+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return La(s,a,t,o,l,p,0),a};function Af(n,e,t,i,r){let s,a;if(r===(function(o,l,c,h){let u=0;for(let d=l,p=c-h;d<c;d+=h)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u})(n,e,t,i)>0)for(s=e;s<t;s+=i)a=Rf(s,n[s],n[s+1],a);else for(s=t-i;s>=e;s-=i)a=Rf(s,n[s],n[s+1],a);return a&&Xl(a,a.next)&&(Da(a),a=a.next),a}function Hr(n,e){if(!n)return n;e||(e=n);let t,i=n;do if(t=!1,i.steiner||!Xl(i,i.next)&&yt(i.prev,i,i.next)!==0)i=i.next;else{if(Da(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function La(n,e,t,i,r,s,a){if(!n)return;!a&&s&&(function(h,u,d,p){let f=h;do f.z===0&&(f.z=ou(f.x,f.y,u,d,p)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==h);f.prevZ.nextZ=null,f.prevZ=null,(function(g){let m,y,x,v,S,C,E,_,D=1;do{for(y=g,g=null,S=null,C=0;y;){for(C++,x=y,E=0,m=0;m<D&&(E++,x=x.nextZ,x);m++);for(_=D;E>0||_>0&&x;)E!==0&&(_===0||!x||y.z<=x.z)?(v=y,y=y.nextZ,E--):(v=x,x=x.nextZ,_--),S?S.nextZ=v:g=v,v.prevZ=S,S=v;y=x}S.nextZ=null,D*=2}while(C>1)})(f)})(n,i,r,s);let o,l,c=n;for(;n.prev!==n.next;)if(o=n.prev,l=n.next,s?Ry(n,i,r,s):Ay(n))e.push(o.i/t|0),e.push(n.i/t|0),e.push(l.i/t|0),Da(n),n=l.next,c=l.next;else if((n=l)===c){a?a===1?La(n=Cy(Hr(n),e,t),e,t,i,r,s,2):a===2&&Py(n,e,t,i,r,s):La(Hr(n),e,t,i,r,s,1);break}}function Ay(n){let e=n.prev,t=n,i=n.next;if(yt(e,t,i)>=0)return!1;let r=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=r<s?r<a?r:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=r>s?r>a?r:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c,f=i.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&Ps(r,o,s,l,a,c,f.x,f.y)&&yt(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Ry(n,e,t,i){let r=n.prev,s=n,a=n.next;if(yt(r,s,a)>=0)return!1;let o=r.x,l=s.x,c=a.x,h=r.y,u=s.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,f=h<u?h<d?h:d:u<d?u:d,g=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,y=ou(p,f,e,t,i),x=ou(g,m,e,t,i),v=n.prevZ,S=n.nextZ;for(;v&&v.z>=y&&S&&S.z<=x;){if(v.x>=p&&v.x<=g&&v.y>=f&&v.y<=m&&v!==r&&v!==a&&Ps(o,h,l,u,c,d,v.x,v.y)&&yt(v.prev,v,v.next)>=0||(v=v.prevZ,S.x>=p&&S.x<=g&&S.y>=f&&S.y<=m&&S!==r&&S!==a&&Ps(o,h,l,u,c,d,S.x,S.y)&&yt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;v&&v.z>=y;){if(v.x>=p&&v.x<=g&&v.y>=f&&v.y<=m&&v!==r&&v!==a&&Ps(o,h,l,u,c,d,v.x,v.y)&&yt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;S&&S.z<=x;){if(S.x>=p&&S.x<=g&&S.y>=f&&S.y<=m&&S!==r&&S!==a&&Ps(o,h,l,u,c,d,S.x,S.y)&&yt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Cy(n,e,t){let i=n;do{let r=i.prev,s=i.next.next;!Xl(r,s)&&nm(r,i,i.next,s)&&Ia(r,s)&&Ia(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),Da(i),Da(i.next),i=n=s),i=i.next}while(i!==n);return Hr(i)}function Py(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&zy(a,o)){let l=im(a,o);return a=Hr(a,a.next),l=Hr(l,l.next),La(a,e,t,i,r,s,0),void La(l,e,t,i,r,s,0)}o=o.next}a=a.next}while(a!==n)}function Ly(n,e){return n.x-e.x}function Iy(n,e){let t=(function(r,s){let a,o=s,l=-1/0,c=r.x,h=r.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let m=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(m<=c&&m>l&&(l=m,a=o.x<o.next.x?o:o.next,m===c))return a}o=o.next}while(o!==s);if(!a)return null;let u=a,d=a.x,p=a.y,f,g=1/0;o=a;do c>=o.x&&o.x>=d&&c!==o.x&&Ps(h<p?c:l,h,d,p,h<p?l:c,h,o.x,o.y)&&(f=Math.abs(h-o.y)/(c-o.x),Ia(o,r)&&(f<g||f===g&&(o.x>a.x||o.x===a.x&&Dy(a,o)))&&(a=o,g=f)),o=o.next;while(o!==u);return a})(n,e);if(!t)return e;let i=im(t,n);return Hr(i,i.next),Hr(t,t.next)}function Dy(n,e){return yt(n.prev,n,e.prev)<0&&yt(e.next,n,n.next)<0}function ou(n,e,t,i,r){return(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=(n-t)*r|0)|n<<8))|n<<4))|n<<2))|n<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Uy(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Ps(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function zy(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!(function(t,i){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==i.i&&r.next.i!==i.i&&nm(r,r.next,t,i))return!0;r=r.next}while(r!==t);return!1})(n,e)&&(Ia(n,e)&&Ia(e,n)&&(function(t,i){let r=t,s=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&a<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==t);return s})(n,e)&&(yt(n.prev,n,e.prev)||yt(n,e.prev,e))||Xl(n,e)&&yt(n.prev,n,n.next)>0&&yt(e.prev,e,e.next)>0)}function yt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Xl(n,e){return n.x===e.x&&n.y===e.y}function nm(n,e,t,i){let r=sl(yt(n,e,t)),s=sl(yt(n,e,i)),a=sl(yt(t,i,n)),o=sl(yt(t,i,e));return r!==s&&a!==o||!(r!==0||!rl(n,t,e))||!(s!==0||!rl(n,i,e))||!(a!==0||!rl(t,n,i))||!(o!==0||!rl(t,e,i))}function rl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function sl(n){return n>0?1:n<0?-1:0}function Ia(n,e){return yt(n.prev,n,n.next)<0?yt(n,e,n.next)>=0&&yt(n,n.prev,e)>=0:yt(n,e,n.prev)<0||yt(n,n.next,e)<0}function im(n,e){let t=new lu(n.i,n.x,n.y),i=new lu(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Rf(n,e,t,i){let r=new lu(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Da(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function lu(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var lr=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return .5*i}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];Cf(e),Pf(i,e);let a=e.length;t.forEach(Cf);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Pf(i,t[l]);let o=Ty(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Cf(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Pf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Fi=class n extends rt{constructor(e=new Hn([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,y=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:Ny,v,S,C,E,_,D=!1;y&&(v=y.getSpacedPoints(h),D=!0,d=!1,S=y.computeFrenetFrames(h,!1),C=new w,E=new w,_=new w),d||(m=0,p=0,f=0,g=0);let M=o.extractPoints(c),I=M.shape,O=M.holes;if(!lr.isClockWise(I)){I=I.reverse();for(let z=0,N=O.length;z<N;z++){let V=O[z];lr.isClockWise(V)&&(O[z]=V.reverse())}}let L=lr.triangulateShape(I,O),k=I;for(let z=0,N=O.length;z<N;z++){let V=O[z];I=I.concat(V)}function G(z,N,V){return N||console.error("THREE.ExtrudeGeometry: vec does not exist"),z.clone().addScaledVector(N,V)}let se=I.length,de=L.length;function Q(z,N,V){let ie,te,b,re=z.x-N.x,W=z.y-N.y,X=V.x-z.x,oe=V.y-z.y,fe=re*re+W*W,xe=re*oe-W*X;if(Math.abs(xe)>Number.EPSILON){let ye=Math.sqrt(fe),De=Math.sqrt(X*X+oe*oe),_e=N.x-W/ye,Me=N.y+re/ye,Oe=((V.x-oe/De-_e)*oe-(V.y+X/De-Me)*X)/(re*oe-W*X);ie=_e+re*Oe-z.x,te=Me+W*Oe-z.y;let Ut=ie*ie+te*te;if(Ut<=2)return new ce(ie,te);b=Math.sqrt(Ut/2)}else{let ye=!1;re>Number.EPSILON?X>Number.EPSILON&&(ye=!0):re<-Number.EPSILON?X<-Number.EPSILON&&(ye=!0):Math.sign(W)===Math.sign(oe)&&(ye=!0),ye?(ie=-W,te=re,b=Math.sqrt(fe)):(ie=re,te=W,b=Math.sqrt(fe/2))}return new ce(ie/b,te/b)}let Z=[];for(let z=0,N=k.length,V=N-1,ie=z+1;z<N;z++,V++,ie++)V===N&&(V=0),ie===N&&(ie=0),Z[z]=Q(k[z],k[V],k[ie]);let ee=[],F,K=Z.concat();for(let z=0,N=O.length;z<N;z++){let V=O[z];F=[];for(let ie=0,te=V.length,b=te-1,re=ie+1;ie<te;ie++,b++,re++)b===te&&(b=0),re===te&&(re=0),F[ie]=Q(V[ie],V[b],V[re]);ee.push(F),K=K.concat(F)}for(let z=0;z<m;z++){let N=z/m,V=p*Math.cos(N*Math.PI/2),ie=f*Math.sin(N*Math.PI/2)+g;for(let te=0,b=k.length;te<b;te++){let re=G(k[te],Z[te],ie);T(re.x,re.y,-V)}for(let te=0,b=O.length;te<b;te++){let re=O[te];F=ee[te];for(let W=0,X=re.length;W<X;W++){let oe=G(re[W],F[W],ie);T(oe.x,oe.y,-V)}}}let pe=f+g;for(let z=0;z<se;z++){let N=d?G(I[z],K[z],pe):I[z];D?(E.copy(S.normals[0]).multiplyScalar(N.x),C.copy(S.binormals[0]).multiplyScalar(N.y),_.copy(v[0]).add(E).add(C),T(_.x,_.y,_.z)):T(N.x,N.y,0)}for(let z=1;z<=h;z++)for(let N=0;N<se;N++){let V=d?G(I[N],K[N],pe):I[N];D?(E.copy(S.normals[z]).multiplyScalar(V.x),C.copy(S.binormals[z]).multiplyScalar(V.y),_.copy(v[z]).add(E).add(C),T(_.x,_.y,_.z)):T(V.x,V.y,u/h*z)}for(let z=m-1;z>=0;z--){let N=z/m,V=p*Math.cos(N*Math.PI/2),ie=f*Math.sin(N*Math.PI/2)+g;for(let te=0,b=k.length;te<b;te++){let re=G(k[te],Z[te],ie);T(re.x,re.y,u+V)}for(let te=0,b=O.length;te<b;te++){let re=O[te];F=ee[te];for(let W=0,X=re.length;W<X;W++){let oe=G(re[W],F[W],ie);D?T(oe.x,oe.y+v[h-1].y,v[h-1].x+V):T(oe.x,oe.y,u+V)}}}function A(z,N){let V=z.length;for(;--V>=0;){let ie=V,te=V-1;te<0&&(te=z.length-1);for(let b=0,re=h+2*m;b<re;b++){let W=se*b,X=se*(b+1);J(N+ie+W,N+te+W,N+te+X,N+ie+X)}}}function T(z,N,V){l.push(z),l.push(N),l.push(V)}function H(z,N,V){U(z),U(N),U(V);let ie=r.length/3,te=x.generateTopUV(i,r,ie-3,ie-2,ie-1);Y(te[0]),Y(te[1]),Y(te[2])}function J(z,N,V,ie){U(z),U(N),U(ie),U(N),U(V),U(ie);let te=r.length/3,b=x.generateSideWallUV(i,r,te-6,te-3,te-2,te-1);Y(b[0]),Y(b[1]),Y(b[3]),Y(b[1]),Y(b[2]),Y(b[3])}function U(z){r.push(l[3*z+0]),r.push(l[3*z+1]),r.push(l[3*z+2])}function Y(z){s.push(z.x),s.push(z.y)}(function(){let z=r.length/3;if(d){let N=0,V=se*N;for(let ie=0;ie<de;ie++){let te=L[ie];H(te[2]+V,te[1]+V,te[0]+V)}N=h+2*m,V=se*N;for(let ie=0;ie<de;ie++){let te=L[ie];H(te[0]+V,te[1]+V,te[2]+V)}}else{for(let N=0;N<de;N++){let V=L[N];H(V[2],V[1],V[0])}for(let N=0;N<de;N++){let V=L[N];H(V[0]+se*h,V[1]+se*h,V[2]+se*h)}}i.addGroup(z,r.length/3-z,0)})(),(function(){let z=r.length/3,N=0;A(k,N),N+=k.length;for(let V=0,ie=O.length;V<ie;V++){let te=O[V];A(te,N),N+=te.length}i.addGroup(z,r.length/3-z,1)})()}this.setAttribute("position",new Re(r,3)),this.setAttribute("uv",new Re(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i,r){if(r.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];r.shapes.push(o.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},i),i.extrudePath!==void 0&&(r.options.extrudePath=i.extrudePath.toJSON()),r})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Ul[r.type]().fromJSON(r)),new n(i,e.options)}},Ny={generateTopUV:function(n,e,t,i,r){let s=e[3*t],a=e[3*t+1],o=e[3*i],l=e[3*i+1],c=e[3*r],h=e[3*r+1];return[new ce(s,a),new ce(o,l),new ce(c,h)]},generateSideWallUV:function(n,e,t,i,r,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*i],h=e[3*i+1],u=e[3*i+2],d=e[3*r],p=e[3*r+1],f=e[3*r+2],g=e[3*s],m=e[3*s+1],y=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new ce(a,1-l),new ce(c,1-u),new ce(d,1-f),new ce(g,1-y)]:[new ce(o,1-l),new ce(h,1-u),new ce(p,1-f),new ce(m,1-y)]}},fi=class n extends Or{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Bn=class n extends Or{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},cu=class n extends rt{constructor(e=.5,t=1,i=32,r=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(r=Math.max(1,r)),p=new w,f=new ce;for(let g=0;g<=r;g++){for(let m=0;m<=i;m++){let y=s+m/i*a;p.x=u*Math.cos(y),p.y=u*Math.sin(y),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let g=0;g<r;g++){let m=g*(i+1);for(let y=0;y<i;y++){let x=y+m,v=x,S=x+i+1,C=x+i+2,E=x+1;o.push(v,S,E),o.push(S,C,E)}}this.setIndex(o),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(c,3)),this.setAttribute("uv",new Re(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ua=class n extends rt{constructor(e=new Hn([new ce(0,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=r.length/3,d=h.extractPoints(t),p=d.shape,f=d.holes;lr.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,y=f.length;m<y;m++){let x=f[m];lr.isClockWise(x)===!0&&(f[m]=x.reverse())}let g=lr.triangulateShape(p,f);for(let m=0,y=f.length;m<y;m++){let x=f[m];p=p.concat(x)}for(let m=0,y=p.length;m<y;m++){let x=p[m];r.push(x.x,x.y,0),s.push(0,0,1),a.push(x.x,x.y)}for(let m=0,y=g.length;m<y;m++){let x=g[m],v=x[0]+u,S=x[1]+u,C=x[2]+u;i.push(v,S,C),l+=3}}this.setIndex(i),this.setAttribute("position",new Re(r,3)),this.setAttribute("normal",new Re(s,3)),this.setAttribute("uv",new Re(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i){if(i.shapes=[],Array.isArray(t))for(let r=0,s=t.length;r<s;r++){let a=t[r];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i})(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];i.push(a)}return new n(i,e.curveSegments)}},Ee=class n extends rt{constructor(e=1,t=32,i=16,r=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new w,d=new w,p=[],f=[],g=[],m=[];for(let y=0;y<=i;y++){let x=[],v=y/i,S=0;y===0&&a===0?S=.5/t:y===i&&l===Math.PI&&(S=-.5/t);for(let C=0;C<=t;C++){let E=C/t;u.x=-e*Math.cos(r+E*s)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(r+E*s)*Math.sin(a+v*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(E+S,1-v),x.push(c++)}h.push(x)}for(let y=0;y<i;y++)for(let x=0;x<t;x++){let v=h[y][x+1],S=h[y][x],C=h[y+1][x],E=h[y+1][x+1];(y!==0||a>0)&&p.push(v,S,E),(y!==i-1||l<Math.PI)&&p.push(S,C,E)}this.setIndex(p),this.setAttribute("position",new Re(f,3)),this.setAttribute("normal",new Re(g,3)),this.setAttribute("uv",new Re(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},hu=class n extends Or{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Gi=class n extends rt{constructor(e=1,t=.4,i=12,r=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);let a=[],o=[],l=[],c=[],h=new w,u=new w,d=new w;for(let p=0;p<=i;p++)for(let f=0;f<=r;f++){let g=f/r*s,m=p/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(g),u.y=(e+t*Math.cos(m))*Math.sin(g),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(f/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let f=1;f<=r;f++){let g=(r+1)*p+f-1,m=(r+1)*(p-1)+f-1,y=(r+1)*(p-1)+f,x=(r+1)*p+f;a.push(g,m,x),a.push(m,y,x)}this.setIndex(a),this.setAttribute("position",new Re(o,3)),this.setAttribute("normal",new Re(l,3)),this.setAttribute("uv",new Re(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},uu=class n extends rt{constructor(e=1,t=.4,i=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:s,q:a},i=Math.floor(i),r=Math.floor(r);let o=[],l=[],c=[],h=[],u=new w,d=new w,p=new w,f=new w,g=new w,m=new w,y=new w;for(let v=0;v<=i;++v){let S=v/i*s*Math.PI*2;x(S,s,a,e,p),x(S+.01,s,a,e,f),m.subVectors(f,p),y.addVectors(f,p),g.crossVectors(m,y),y.crossVectors(g,m),g.normalize(),y.normalize();for(let C=0;C<=r;++C){let E=C/r*Math.PI*2,_=-t*Math.cos(E),D=t*Math.sin(E);u.x=p.x+(_*y.x+D*g.x),u.y=p.y+(_*y.y+D*g.y),u.z=p.z+(_*y.z+D*g.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(v/i),h.push(C/r)}}for(let v=1;v<=i;v++)for(let S=1;S<=r;S++){let C=(r+1)*(v-1)+(S-1),E=(r+1)*v+(S-1),_=(r+1)*v+S,D=(r+1)*(v-1)+S;o.push(C,E,D),o.push(E,_,D)}function x(v,S,C,E,_){let D=Math.cos(v),M=Math.sin(v),I=C/S*v,O=Math.cos(I);_.x=E*(2+O)*.5*D,_.y=E*(2+O)*M*.5,_.z=E*Math.sin(I)*.5}this.setIndex(o),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(c,3)),this.setAttribute("uv",new Re(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},du=class n extends rt{constructor(e=new Il(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new w,l=new w,c=new ce,h=new w,u=[],d=[],p=[],f=[];function g(m){h=e.getPointAt(m/t,h);let y=a.normals[m],x=a.binormals[m];for(let v=0;v<=r;v++){let S=v/r*Math.PI*2,C=Math.sin(S),E=-Math.cos(S);l.x=E*y.x+C*x.x,l.y=E*y.y+C*x.y,l.z=E*y.z+C*x.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let m=0;m<t;m++)g(m);g(s===!1?t:0),(function(){for(let m=0;m<=t;m++)for(let y=0;y<=r;y++)c.x=m/t,c.y=y/r,p.push(c.x,c.y)})(),(function(){for(let m=1;m<=t;m++)for(let y=1;y<=r;y++){let x=(r+1)*(m-1)+(y-1),v=(r+1)*m+(y-1),S=(r+1)*m+y,C=(r+1)*(m-1)+y;f.push(x,v,C),f.push(v,S,C)}})()})(),this.setIndex(f),this.setAttribute("position",new Re(u,3)),this.setAttribute("normal",new Re(d,3)),this.setAttribute("uv",new Re(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Ul[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},pu=class extends rt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new w,s=new w;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,f=d+u.count;p<f;p+=3)for(let g=0;g<3;g++){let m=o.getX(p+g),y=o.getX(p+(g+1)%3);r.fromBufferAttribute(a,m),s.fromBufferAttribute(a,y),Lf(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),Lf(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Re(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Lf(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)!==!0&&t.has(r)!==!0&&(t.add(i),t.add(r),!0)}var rE=Object.freeze({__proto__:null,BoxGeometry:ae,CapsuleGeometry:On,CircleGeometry:dn,ConeGeometry:Je,CylinderGeometry:ue,DodecahedronGeometry:su,EdgesGeometry:au,ExtrudeGeometry:Fi,IcosahedronGeometry:fi,LatheGeometry:zl,OctahedronGeometry:Bn,PlaneGeometry:ft,PolyhedronGeometry:Or,RingGeometry:cu,ShapeGeometry:Ua,SphereGeometry:Ee,TetrahedronGeometry:hu,TorusGeometry:Gi,TorusKnotGeometry:uu,TubeGeometry:du,WireframeGeometry:pu});var je=class extends ki{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Fs=class extends ki{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Tu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function al(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Oy(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Gs=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];t:{e:{let a;n:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break e}a=t.length;break n}if(e>=s)break t;{let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}a=i,i=0}}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},fu=class extends Gs{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dp,endingEnd:Dp}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Up:s=e,o=2*t-i;break;case zp:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Up:a=e,l=2*i-t;break;case zp:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=t}let c=.5*(i-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(i-t)/(r-t),g=f*f,m=g*f,y=-d*m+2*d*g-d*f,x=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*f+1,v=(-1-p)*m+(1.5+p)*g+.5*f,S=p*m-p*g;for(let C=0;C!==o;++C)s[C]=y*a[h+C]+x*a[c+C]+v*a[l+C]+S*a[u+C];return s}},mu=class extends Gs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(r-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},gu=class extends Gs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ei=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=al(t,this.TimeBufferType),this.values=al(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:al(e.times,Array),values:al(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new gu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case cl:t=this.InterpolantFactoryMethodDiscrete;break;case hl:t=this.InterpolantFactoryMethodLinear;break;case Jc:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return cl;case this.InterpolantFactoryMethodLinear:return hl;case this.InterpolantFactoryMethodSmooth:return Jc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&Oy(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Jc,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(r)l=!0;else{let h=o*i,u=h-i,d=h+i;for(let p=0;p!==i;++p){let f=t[h+p];if(f!==t[u+p]||f!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*i,u=a*i;for(let d=0;d!==i;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};ei.prototype.TimeBufferType=Float32Array,ei.prototype.ValueBufferType=Float32Array,ei.prototype.DefaultInterpolation=hl;var Pr=class extends ei{};Pr.prototype.ValueTypeName="bool",Pr.prototype.ValueBufferType=Array,Pr.prototype.DefaultInterpolation=cl,Pr.prototype.InterpolantFactoryMethodLinear=void 0,Pr.prototype.InterpolantFactoryMethodSmooth=void 0;var xu=class extends ei{};xu.prototype.ValueTypeName="color";var vu=class extends ei{};vu.prototype.ValueTypeName="number";var yu=class extends Gs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t),c=e*o;for(let h=c+o;c!==h;c+=4)Zt.slerpFlat(s,0,a,c-o,a,c,l);return s}},ba=class extends ei{InterpolantFactoryMethodLinear(e){return new yu(this.times,this.values,this.getValueSize(),e)}};ba.prototype.ValueTypeName="quaternion",ba.prototype.DefaultInterpolation=hl,ba.prototype.InterpolantFactoryMethodSmooth=void 0;var Lr=class extends ei{};Lr.prototype.ValueTypeName="string",Lr.prototype.ValueBufferType=Array,Lr.prototype.DefaultInterpolation=cl,Lr.prototype.InterpolantFactoryMethodLinear=void 0,Lr.prototype.InterpolantFactoryMethodSmooth=void 0;var _u=class extends ei{};_u.prototype.ValueTypeName="vector";var Mu=class{constructor(e,t,i){let r=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){l++,a===!1&&r.onStart!==void 0&&r.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,l),o===l&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],f=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}},Hy=new Mu,Eu=class{constructor(e){this.manager=e!==void 0?e:Hy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise((function(r,s){i.load(e,r,t,s)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Eu.DEFAULT_MATERIAL_NAME="__DEFAULT";var za=class extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Nl=class extends za{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Th=new Ce,If=new w,Df=new w,Ol=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ks,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;If.setFromMatrixPosition(e.matrixWorld),t.position.copy(If),Df.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Df),t.updateMatrixWorld(),Th.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Th),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Th)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Uf=new Ce,va=new w,Ah=new w,bu=class extends Ol{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),va.setFromMatrixPosition(e.matrixWorld),i.position.copy(va),Ah.copy(i.position),Ah.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ah),i.updateMatrixWorld(),r.makeTranslation(-va.x,-va.y,-va.z),Uf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uf)}},Hl=class extends za{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new bu}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Su=class extends Ol{constructor(){super(new bl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Bl=class extends za{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new Su}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var kl=class extends rt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var sE=new Ce,aE=new Ce,oE=new Ce;var Fl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=zf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function zf(){return(typeof performance>"u"?Date:performance).now()}var lE=new w,cE=new Zt,hE=new w,uE=new w;var dE=new w,pE=new Zt,fE=new w,mE=new w;var Iu="\\[\\]\\.:\\/",By=new RegExp("["+Iu+"]","g"),Rh="[^"+Iu+"]",ky="[^"+Iu.replace("\\.","")+"]",Fy=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Rh)+/(WCOD+)?/.source.replace("WCOD",ky)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rh)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rh)+"$"),Gy=["material","materials","bones","map"],pt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(By,"")}static parseTrackName(e){let t=Fy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);Gy.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[r];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pt.Composite=class{constructor(n,e,t){let i=t||pt.parseTrackName(e);this._targetGroup=n,this._bindings=n.subscribe_(e,i)}getValue(n,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(n,e)}setValue(n,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=t.length;i!==r;++i)t[i].setValue(n,e)}bind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].bind()}unbind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].unbind()}},pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray],pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gE=new Float32Array(1);var xE=new ce;var vE=new w,yE=new w;var _E=new w;var ME=new w,EE=new Ce,bE=new Ce;var SE=new w,wE=new be,TE=new be;var AE=new w,RE=new w,CE=new w;var PE=new w,LE=new Ta;var IE=new ti;var DE=new w;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var ct=300,rm=42,He=()=>(rm=rm*16807%2147483647)/2147483647;var B=(n,e={})=>new je({color:n,roughness:.9,metalness:0,...e}),Ft=n=>new je({color:n,roughness:.35,metalness:.8});function R(n,e,t=0,i=0,r=0){let s=new Ge(n,e);return s.position.set(t,i,r),s.castShadow=!0,s.receiveShadow=!0,s}var Na=(n,e)=>{let t=(n-e)%(Math.PI*2);return t>Math.PI?t-Math.PI*2:t<-Math.PI?t+Math.PI*2:t},Be=[],ur=[],jl=[];function an(n,e,t){if(Math.abs(n)>ct-2||Math.abs(e)>ct-2)return!0;for(let i of Be){let r=n-i.x,s=e-i.z;if(r*r+s*s<(i.r+t)**2)return!0}for(let i of ur)if(n+t>i.x1&&n-t<i.x2&&e+t>i.z1&&e-t<i.z2)return!0;for(let i of jl)if(i.hit(n,e,t))return!0;return!1}function Br(n,e){if(Math.abs(n)>ct||Math.abs(e)>ct)return!0;for(let t of ur)if(n>t.x1&&n<t.x2&&e>t.z1&&e<t.z2)return!0;for(let t of Be){if(t.r<1.5)continue;let i=n-t.x,r=e-t.z;if(i*i+r*r<t.r*t.r)return!0}for(let t of jl)if(t.solid(n,e))return!0;return!1}function kn(n,e,t,i){let r=n.position,s=!1;return an(r.x+e,r.z,i)||(r.x+=e,s=!0),an(r.x,r.z+t,i)||(r.z+=t,s=!0),s}function Oa(n,e,t=!0){let i=document.createElement("canvas");i.width=i.height=n,e(i.getContext("2d"),n);let r=new kt(i);return r.colorSpace=tt,t&&(r.wrapS=r.wrapT=Sa),r.anisotropy=4,r}var Fn=(()=>{let n=7;return()=>(n=n*16807%2147483647)/2147483647})();function ql(n,e,t,i,r){for(let s=0;s<t;s++){n.fillStyle=i[Math.floor(Fn()*i.length)];let a=.5+Fn()*r;n.beginPath(),n.arc(Fn()*e,Fn()*e,a,0,Math.PI*2),n.fill()}}var Ha=Oa(256,(n,e)=>{n.fillStyle="#8f8a80",n.fillRect(0,0,e,e);let t=8,i=e/t;for(let r=0;r<t;r++){let s=e/4,a=r%2?s/2:0;for(let o=-1;o<5;o++){let l=200+Math.floor(Fn()*45);n.fillStyle=`rgb(${l},${l-4},${l-12})`,n.fillRect(o*s+a+3,r*i+3,s-6,i-6),n.fillStyle="rgba(0,0,0,0.06)",n.fillRect(o*s+a+3,r*i+i-9,s-6,6)}}ql(n,e,500,["rgba(0,0,0,0.08)","rgba(255,255,255,0.1)"],1.5)}),Du=Oa(128,(n,e)=>{n.fillStyle="#9a9a9a",n.fillRect(0,0,e,e);let t=6,i=e/t,r=e/6;for(let s=0;s<t;s++)for(let a=-1;a<7;a++){let o=a*r+(s%2?r/2:0),l=s*i,c=215+Math.floor(Fn()*40);n.fillStyle=`rgb(${c},${c},${c})`,n.beginPath(),n.moveTo(o+1,l),n.lineTo(o+r-1,l),n.lineTo(o+r-1,l+i*.6),n.quadraticCurveTo(o+r/2,l+i+2,o+1,l+i*.6),n.fill()}}),Uu=Oa(256,(n,e)=>{n.fillStyle="#e8f0e0",n.fillRect(0,0,e,e),ql(n,e,2500,["#c9dbb8","#f6fbef","#b7cc9f","#ffffff"],1.8),n.strokeStyle="rgba(90,120,60,0.25)";for(let t=0;t<500;t++){let i=Fn()*e,r=Fn()*e;n.beginPath(),n.moveTo(i,r),n.lineTo(i+(Fn()-.5)*3,r-3-Fn()*4),n.stroke()}}),Ws=Oa(256,(n,e)=>{n.fillStyle="#c2a170",n.fillRect(0,0,e,e),ql(n,e,1800,["#b08e5e","#d4b585","#a8865a","#cfae7c"],2),ql(n,e,120,["#8c8c84","#a19f97","#76746c"],3.5)}),NE=Oa(128,(n,e)=>{for(let t=0;t<6;t++){let i=150+Math.floor(Fn()*40);n.fillStyle=`rgb(${i},${Math.floor(i*.72)},${Math.floor(i*.45)})`,n.fillRect(0,t*e/6,e,e/6-2),n.strokeStyle="rgba(60,35,15,0.25)";for(let r=0;r<4;r++){n.beginPath();let s=t*e/6+Fn()*(e/6);n.moveTo(0,s),n.bezierCurveTo(e*.3,s+2,e*.6,s-2,e,s+1),n.stroke()}}n.fillStyle="rgba(40,20,10,0.6)",n.fillRect(0,0,e,2)});function zu(n,e,t,i,r=4){let s=n.attributes.uv,a=[[i,t],[i,t],[e,i],[e,i],[e,t],[e,t]];for(let o=0;o<6;o++)for(let l=0;l<4;l++){let c=o*4+l;s.setXY(c,s.getX(c)*a[o][0]/r,s.getY(c)*a[o][1]/r)}return n}function Nu(n,e,t,i=4,r=4){let s=n.attributes.uv,a=Math.PI*2*e;for(let o=0;o<s.count;o++)s.setXY(o,s.getX(o)*a/i,s.getY(o)*t/r);return n}var on=4.2,sm=.75,am=.5,Vi=.45,fn={x:3.8,z:5.8},pn=12,Ba=1.3,Gn={r1:1.8,r2:2.3,phi0:Math.PI/2,span:Math.PI*3.5,rise:pn-on},Kl=1.1,Xs=[],Jl=[],om=!1,dr={x:0,z:0},Hu=n=>!n.on||n.on();function Vy(n,e,t,i){if(n.type==="rect")return e>=n.x1&&e<=n.x2&&t>=n.z1&&t<=n.z2?n.h:null;if(n.type==="ramp"){if(e<n.x1||e>n.x2||t<n.z1||t>n.z2)return null;let o=(t-n.z1)/(n.z2-n.z1);return Math.max(0,Math.min(n.h1,n.h0+(n.h1-n.h0)*o+n.lift))}let r=e-n.x,s=t-n.z,a=Math.hypot(r,s);if(n.type==="disc"){if(a>n.r)return null;if(a>n.gapR){let o=Math.atan2(Math.sin(Math.atan2(s,r)-n.gapAt),Math.cos(Math.atan2(s,r)-n.gapAt));if(o>-n.gap&&o<.05)return null}return n.h}if(n.type==="spiral"){if(a<n.r1||a>n.r2)return null;let o=Math.atan2(s,r)-n.phi0;o=(o%(Math.PI*2)+Math.PI*2)%(Math.PI*2);let l=null;for(let c=o;c<=n.span+1e-6;c+=Math.PI*2){let h=n.h0+n.rise*(c/n.span);(l===null||Math.abs(h-i)<Math.abs(l-i))&&(l=h)}return l}return null}function Wy(n,e,t){for(let i of Jl){if(!Hu(i)||i.top<=t+.3)continue;let r=n-i.x,s=e-i.z;if(r*r+s*s<(i.r+am)**2)return!0}return!1}function Wi(n,e,t){let i=null;t<=sm&&!an(n,e,am)&&(i=0);for(let r of Xs){if(!Hu(r))continue;let s=Vy(r,n,e,t);s===null||Math.abs(s-t)>sm||i!==null&&s<=i||Wy(n,e,s)||(i=s)}return i}function lm(n,e,t){let i=n.position,r=!1,s=Wi(i.x+e,i.z,i.y);return s!==null&&(i.x+=e,i.y=s,r=!0),s=Wi(i.x,i.z+t,i.y),s!==null&&(i.z+=t,i.y=s,r=!0),r}function cm(n,e,t){for(let i of Jl){if(!Hu(i)||i.top<=t)continue;let r=n-i.x,s=e-i.z;if(r*r+s*s<i.r*i.r)return!0}return!1}function Bu(n){om=n}var hm=[];function um(n,e){for(let t of hm)if(n>t.x1-.3&&n<t.x2+.3&&e>t.z1-.3&&e<t.z2+.3)return!0;return!1}var Xy=B(9067059,{roughness:.85}),$l=B(6109727,{roughness:.9}),Ou=B(12433062,{roughness:.95,map:Ha});function Yl(n,e,t,i,r,s=on){n.add(R(new ae(t-e,.3,r-i),Xy,(e+t)/2,s-.15,(i+r)/2)),Xs.push({type:"rect",x1:e+Vi,x2:t-Vi,z1:i+Vi,z2:r-Vi,h:s}),hm.push({x1:e,x2:t,z1:i,z2:r})}function kr(n,e,t,i,r,s=on){let a=Math.hypot(i-e,r-t),o=Math.max(1,Math.round(a/1.6));for(let c=0;c<=o;c++){let h=c/o;n.add(R(new ae(.14,1,.14),$l,e+(i-e)*h,s+.5,t+(r-t)*h))}let l=R(new ae(a,.1,.1),$l,(e+i)/2,s+1,(t+r)/2);l.rotation.y=-Math.atan2(r-t,i-e),n.add(l)}function Zl(n,e,t,i,r){let s=Math.hypot(i-e,r-t),a=Math.max(1,Math.round(s/3.2));for(let o=0;o<=a;o++){let l=o/a;n.add(R(new ae(.3,on-.3,.3),$l,e+(i-e)*l,(on-.3)/2,t+(r-t)*l))}}function dm(n,e,t){Yl(n,e-9.5,e-7.1,t-9.5,t+9.5),Yl(n,e+7.1,e+9.5,t-9.5,t+9.5),Yl(n,e-9.5,e+9.5,t-9.5,t-7.1),Yl(n,e-9.5,e+9.5,t+7.1,t+9.5);for(let[d,p]of[[-10,-10],[10,-10],[-10,10],[10,10]])Jl.push({x:e+d,z:t+p,r:2,top:8});kr(n,e-3,t-9.6,e+3,t-9.6),kr(n,e-7.1,t-7.1,e+7.1,t-7.1),kr(n,e-7.1,t-7.1,e-7.1,t+7.1),kr(n,e-7.1,t+7.1,e+fn.x-2.7,t+7.1),kr(n,e+fn.x+1.4,t+7.1,e+7.1,t+7.1),kr(n,e+7.1,t-7.1,e+7.1,t+1.8),kr(n,e+7.1,t+4.4,e+7.1,t+7.1),Zl(n,e-7.1,t-7.1,e+7.1,t-7.1),Zl(n,e-7.1,t-7.1+3,e-7.1,t+7.1),Zl(n,e+7.1,t-7.1+3,e+7.1,t+7.1-3),Zl(n,e-7.1+3,t+7.1,e+7.1,t+7.1);let s=e+4.9,a=e+7.1,o=t-6,l=t+2,c=14,h=(l-o)/c;for(let d=1;d<=c;d++){let p=on*d/c;n.add(R(new ae(a-s,p,h),Ou,(s+a)/2,p/2,o+(d-.5)*h))}n.add(R(new ae(a-s,on,2.2),Ou,(s+a)/2,on/2,l+1.1)),Xs.push({type:"ramp",x1:s+Vi,x2:a-Vi,z1:o,z2:l+.2,h0:0,h1:on,lift:on/c*.5}),Xs.push({type:"rect",x1:s+Vi,x2:e+9.5-Vi,z1:l,z2:l+2.2-Vi,h:on}),ur.push({x1:s,x2:a,z1:o+1.6,z2:l+2.2}),dr.x=e+fn.x,dr.z=t+fn.z;let u=()=>om;Jl.push({x:dr.x,z:dr.z,r:Ba,top:pn,on:u}),Xs.push({type:"spiral",x:dr.x,z:dr.z,r1:Gn.r1,r2:Gn.r2,phi0:Gn.phi0,span:Gn.span,h0:on,rise:Gn.rise,on:u}),Xs.push({type:"disc",x:dr.x,z:dr.z,r:2.25,h:pn,gapR:1.75,gapAt:Gn.phi0+Gn.span,gap:Kl,on:u})}function pm(){let n=Ou,e=new ge;e.add(R(new ue(Ba,Ba+.15,pn,18),n,0,pn/2,0));let t=Gn.phi0+Gn.span,r=(c=>Math.PI/2-c)(t-Kl);e.add(R(new ue(2.7,2.5,.4,28,1,!1,r,Math.PI*2-Kl-.05),n,0,pn-.2,0)),e.add(R(new ue(1.5,1.5,.4,18),n,0,pn-.2,0));let s=B(13938487,{metalness:.6,roughness:.3});for(let c=0;c<14;c++){let h=t+.25+c/14*(Math.PI*2-Kl-.4);e.add(R(new ae(.5,.7,.5),n,Math.cos(h)*2.5,pn+.35,Math.sin(h)*2.5))}let a=30;for(let c=1;c<=a;c++){let h=c/a,u=Gn.phi0+Gn.span*(h-.5/a),d=on+Gn.rise*h,p=(Ba+2.6)/2,f=R(new ae(2.6-Ba,.25,1),n,Math.cos(u)*p,d-.125,Math.sin(u)*p);f.rotation.y=-u,e.add(f),c%2===0&&e.add(R(new ae(.1,1,.1),$l,Math.cos(u)*2.55,d+.5,Math.sin(u)*2.55))}let o=Math.cos(t+Math.PI)*2.2,l=Math.sin(t+Math.PI)*2.2;return e.add(R(new ue(.06,.06,3.5),s,o,pn+1.75,l)),e.add(R(new ft(1.8,1.1),new je({color:16766287,emissive:16757504,emissiveIntensity:.6,side:Ot}),o+.9,pn+3,l)),e}var si=[{id:"muehle",name:"M\xFChlbach",x:-200,z:-60,r:34,dir:"im Westen, hinter den Bergen"},{id:"see",name:"Seedorf",x:200,z:-160,r:34,dir:"im Osten, an einem gro\xDFen See"},{id:"huegel",name:"H\xFCgelhausen",x:0,z:220,r:34,dir:"im S\xFCden, hinter eurer Burg"}],st={x:238,z:-150,r:17},pr=4,Fr=[[3,60,14,60],[14,60,14,97],[-14,97,42,97],[-14,97,-176,62],[-176,62,-198,-36],[42,97,182,62],[182,62,198,-136],[0,97,0,198]];function fm(n,e){let t=1/0;for(let[i,r,s,a]of Fr){let o=s-i,l=a-r,c=Math.max(0,Math.min(1,((n-i)*o+(e-r)*l)/(o*o+l*l)));t=Math.min(t,Math.hypot(n-(i+o*c),e-(r+l*c)))}return t}var mm=(n,e,t=0)=>si.some(i=>Math.hypot(n-i.x,e-i.z)<i.r+t)||Math.hypot(n-st.x,e-st.z)<st.r+3+t;var ai=n=>n.toFixed(1),jy=[...Fr.map(([n,e,t,i])=>`if (segD(p, vec2(${ai(n)}, ${ai(e)}), vec2(${ai(t)}, ${ai(i)})) < ${ai(pr/2+.2)}) return 0.0;`),...si.map(n=>`if (length(p - vec2(${ai(n.x)}, ${ai(n.z)})) < 11.0) return 0.0;`),`if (length(p - vec2(${ai(st.x)}, ${ai(st.z)})) < ${ai(st.r+2)}) return 0.0;`].join(`
  `),ka={uTime:{value:0},uFocus:{value:new ce(0,60)},uRocks:{value:Array.from({length:16},()=>new w(0,0,0))}},qy=`
uniform vec3 uRocks[16];
float segD(vec2 p, vec2 a, vec2 b) {
  vec2 ab = b - a;
  float t = clamp(dot(p - a, ab) / dot(ab, ab), 0.0, 1.0);
  return length(p - a - ab * t);
}
float grassMask(vec2 p) {
  // Am Spielfeldrand h\xF6rt die Wiese auf
  if (max(abs(p.x), abs(p.y)) > ${ai(ct-.3)}) return 0.0;
  for (int i = 0; i < 16; i++) {
    if (length(p - uRocks[i].xy) < uRocks[i].z) return 0.0;
  }
  ${jy}
  if (abs(p.x) < 3.4 && p.y > -83.0 && p.y < 71.0) return 0.0;
  if (p.x > -28.3 && p.x < -9.0 && p.y > 53.0 && p.y < 67.0) return 0.0;
  if (p.x > 16.0 && p.x < 32.0 && p.y > 64.0 && p.y < 80.0) return 0.0;
  if (abs(p.x - 8.0) < 2.4 && abs(p.y - 62.0) < 2.4) return 0.0;
  if (length(p - vec2(52.0, 38.0)) < 10.8) return 0.0;
  if (abs(p.x) < 10.0 && p.y > 69.5 && p.y < 90.5) return 0.0;
  if (abs(p.x) < 19.0 && p.y > -119.0 && p.y < -81.0) return 0.0;
  return 1.0;
}
float hash12(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
`;function Yy(n,e){let t=[],i=[],r=[],s=new be(3894054),a=new be(6793276),o=new be(12903034),l=new be;for(let h=0;h<n;h++){let u=(e()-.5)*.35,d=(e()-.5)*.35,p=.28+e()*.3,f=.04+e()*.025,g=e()*Math.PI*2,m=.12+e()*.2,y=Math.cos(g),x=Math.sin(g),v=t.length/3;[[0,1],[.45,.75],[.8,.4],[1,0]].forEach(([E,_],D)=>{let M=E*p,I=m*E*E;for(let O of D===3?[0]:[-1,1]){let L=O*f*_,k=I;t.push(u+L*y-k*x,M,d+L*x+k*y),l.copy(s).lerp(E<.5?a:o,E<.5?E*2:(E-.5)*2),E>.5&&l.lerpColors(a,o,(E-.5)*2),i.push(l.r,l.g,l.b)}});let C=v;r.push(C,C+1,C+2,C+1,C+3,C+2,C+2,C+3,C+4,C+3,C+5,C+4,C+4,C+5,C+6)}let c=new rt;return c.setAttribute("position",new Re(t,3)),c.setAttribute("color",new Re(i,3)),c.setIndex(r),c}function vm(n,{low:e=!1}={}){let t=e?22:32,i=gm(n,{seed:99,R:t,count:e?2600:7500,blades:e?4:5,grow:1,fadeIn:[-2,-1],fadeOut:[t*.65,t]}),r=gm(n,{seed:4242,R:t*2,count:e?2600:9e3,blades:3,grow:1.3,fadeIn:[t*.65,t],fadeOut:[t*1.6,t*2]});return[i,r]}function gm(n,{seed:e,R:t,count:i,blades:r,grow:s,fadeIn:a,fadeOut:o}){let l=()=>(e=e*16807%2147483647)/2147483647,c=Yy(r,l),h=new kl;h.index=c.index,h.setAttribute("position",c.attributes.position),h.setAttribute("color",c.attributes.color);let u=new Float32Array(i*4);for(let g=0;g<i;g++)u[g*4]=(l()-.5)*2*t,u[g*4+1]=(l()-.5)*2*t,u[g*4+2]=l()*Math.PI*2,u[g*4+3]=(.7+l()*.7)*s;h.setAttribute("offset",new Nr(u,4)),h.instanceCount=i;let d={uLayerR:{value:t},uFadeIn:{value:new ce(...a)},uFadeOut:{value:new ce(...o)}},p=new Fs({vertexColors:!0,side:Ot});p.onBeforeCompile=g=>{Object.assign(g.uniforms,ka,d),g.vertexShader=g.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 offset;
uniform float uTime;
uniform vec2 uFocus;
uniform float uLayerR;
uniform vec2 uFadeIn;
uniform vec2 uFadeOut;
`+qy).replace("#include <beginnormal_vertex>","vec3 objectNormal = vec3(0.0, 1.0, 0.0);").replace("#include <begin_vertex>",`
        vec2 rel = mod(offset.xy - uFocus + uLayerR, 2.0 * uLayerR) - uLayerR;
        vec2 wp = uFocus + rel;
        float d = length(rel);
        float s = offset.w * smoothstep(uFadeIn.x, uFadeIn.y, d) * (1.0 - smoothstep(uFadeOut.x, uFadeOut.y, d));
        if (s > 0.0) s *= grassMask(wp);   // Maske nur rechnen, wo das B\xFCschel \xFCberhaupt sichtbar ist
        float cr = cos(offset.z), sr = sin(offset.z);
        vec3 p = vec3(position.x * cr - position.z * sr, position.y, position.x * sr + position.z * cr) * s;
        float h2 = position.y * position.y;
        float wind = sin(uTime * 1.6 + wp.x * 0.32 + wp.y * 0.21) + 0.45 * sin(uTime * 3.1 + wp.x * 0.9 - wp.y * 0.6);
        p.x += wind * 0.16 * h2 * s;
        p.z += wind * 0.08 * h2 * s;
        vec3 transformed = vec3(wp.x, 0.0, wp.y) + p;
      `).replace("#include <color_vertex>",`#include <color_vertex>
vColor.rgb *= 0.85 + 0.3 * hash12(floor(offset.xy * 0.5));`),g.fragmentShader=g.fragmentShader.replace("#include <normal_fragment_begin>",`vec3 normal = normalize( vNormal );
vec3 nonPerturbedNormal = normal;`)};let f=new Ge(h,p);return f.frustumCulled=!1,f.receiveShadow=!0,n.add(f),f}function ym(n,{low:e=!1,isFree:t,rand:i}){let r=(()=>{let y=[],x=new ue(.012,.018,.5,3,1,!0);x.translate(0,.25,0);let v=new ft(.12,.05);v.rotateX(-Math.PI/2),v.rotateZ(.5),v.translate(.05,.16,0);let S=new Bn(.06);S.translate(0,.52,0);let C=(E,_)=>{let D=new be(_),M=E.attributes.position.count;return E.setAttribute("color",new Re(Array.from({length:M},()=>[D.r,D.g,D.b]).flat(),3)),E.toNonIndexed()};return y.push(C(x,6266682),C(v,7319619),C(S,16761095)),xm(y)})(),s=(()=>{let y=[];for(let x=0;x<6;x++){let v=new ft(.15,.085);v.rotateX(-Math.PI/2+.35),v.translate(.095,.53,0),v.rotateY(x/6*Math.PI*2),y.push(v.toNonIndexed())}return xm(y)})(),a=e?450:1300,o=new Kt(r,new Fs({vertexColors:!0,side:Ot}),a),l=new Kt(s,new Fs({color:16777215,side:Ot}),a),c=[16771899,16777215,15753874,12216520,16747109,6600182,16766287],h=new Ce,u=new Zt,d=new w,p=new w,f=new w(0,1,0),g=new be,m=0;for(let y=0;y<4e3&&m<a;y++){let x=(i()-.5)*280,v=(i()-.5)*280;if(!t(x,v))continue;let S=c[Math.floor(i()*c.length)],C=5+Math.floor(i()*8);for(let E=0;E<C&&m<a;E++){let _=x+(i()-.5)*3,D=v+(i()-.5)*3;t(_,D)&&(u.setFromAxisAngle(f,i()*6.28),d.setScalar(1.7+i()*.6),h.compose(p.set(_,0,D),u,d),o.setMatrixAt(m,h),l.setMatrixAt(m,h),l.setColorAt(m,g.setHex(S).offsetHSL(0,0,(i()-.5)*.08)),m++)}}o.count=l.count=m;for(let y of[o,l])y.material.onBeforeCompile=x=>{Object.assign(x.uniforms,ka),x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <beginnormal_vertex>","vec3 objectNormal = vec3(0.0, 1.0, 0.0);").replace("#include <begin_vertex>",`vec3 transformed = vec3(position);
          float sway = sin(uTime * 1.8 + instanceMatrix[3].x * 0.4 + instanceMatrix[3].z * 0.3);
          transformed.x += sway * 0.06 * position.y * position.y * 4.0;`),x.fragmentShader=x.fragmentShader.replace("#include <normal_fragment_begin>",`vec3 normal = normalize( vNormal );
vec3 nonPerturbedNormal = normal;`)},y.receiveShadow=!0,n.add(y)}function xm(n){let e=new rt;for(let t of["position","normal","color","uv"]){if(!n.every(a=>a.attributes[t]))continue;let i=n[0].attributes[t].itemSize,r=new Float32Array(n.reduce((a,o)=>a+o.attributes[t].count*i,0)),s=0;for(let a of n)r.set(a.attributes[t].array,s),s+=a.attributes[t].array.length;e.setAttribute(t,new Nt(r,i))}return e}function _m(n){ka.uTime.value+=n}function Mm(n){n.slice(0,16).forEach((e,t)=>ka.uRocks.value[t].set(e.x,e.z,e.r))}function Ql(n,e){ka.uFocus.value.set(n,e)}function bm(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},a={},o=n[0].morphTargetsRelative,l=new rt,c=0;for(let h=0;h<n.length;++h){let u=n[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(u.attributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,u=[];for(let d=0;d<n.length;++d){let p=n[d].index;for(let f=0;f<p.count;++f)u.push(p.getX(f)+h);h+=n[d].attributes.position.count}l.setIndex(u)}for(let h in s){let u=Em(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let g=0;g<a[h].length;++g)p.push(a[h][g][d]);let f=Em(p);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(f)}}return l}function Em(n){let e,t,i,r=-1,s=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.array.length}let a=new e(s),o=0;for(let c=0;c<n.length;++c)a.set(n[c].array,o),o+=n[c].array.length;let l=new Nt(a,t,i);return r!==void 0&&(l.gpuType=r),l}var mt={x:0,z:80},Wr={x:0,z:-100},Fu=[[-4,-94],[4,-94],[-10,-112],[10,-112],[-10,-58],[10,-58],[-4,-70],[4,-70]],Jt={x1:16,x2:32,z1:64,z2:80},fr=[[-3.5,-89,"cow"],[3.5,-89,"chicken"],[-12,-108,"deer"],[12,-108,"boar"],[-7,-51,"chicken"],[18,-56,"cow"]],Gu={x:0,z:-97},Vu=[[-7,-77],[7,-77],[0,-50]],Vr=B(13617336,{roughness:.95,map:Ha}),tc=B(10854032,{roughness:.95,map:Ha}),Wu=zu(new ae(1,.8,1),1,.8,1),nc=(n,e,t)=>zu(new ae(n,e,t),n,e,t),ku=(n,e,t,i)=>Nu(new ue(n,e,t,i),Math.max(n,e),t),wm=n=>B(n,{roughness:.7,map:Du}),Xu=(n,e,t)=>Nu(new Je(n,e,t),n,Math.hypot(n,e),2.2,1.4),ju=Du.clone();ju.repeat.set(.45,.45);ju.needsUpdate=!0;function Fa(n,e,t,i){ur.push({x1:Math.min(n,e),x2:Math.max(n,e),z1:Math.min(t,i),z2:Math.max(t,i)})}function mi(n,e,t,i,r,s=5,a=1,o=Vr){let l=Math.max(Math.abs(i-e),a),c=Math.max(Math.abs(r-t),a),h=(e+i)/2,u=(t+r)/2;n.add(R(nc(l,s,c),o,h,s/2,u));let d=Math.max(l,c);for(let p=-d/2+.5;p<=d/2-.5;p+=2)n.add(R(Wu,o,l>c?h+p:h,s+.4,l>c?u:u+p));Fa(h-l/2,h+l/2,u-c/2,u+c/2)}function Gr(n,e,t,i,r,s){n.add(R(ku(i,i*1.1,r,20),Vr,e,r/2,t)),n.add(R(ku(i*1.15,i*1.15,.6,20),tc,e,r+.3,t));for(let a=0;a<8;a++){let o=a/8*Math.PI*2;n.add(R(Wu,tc,e+Math.sin(o)*i*1.05,r+.95,t+Math.cos(o)*i*1.05))}n.add(R(Xu(i*1.35,i*1.8,20),s,e,r+.6+i*.9,t)),Be.push({x:e,z:t,r:i})}function js(n,e,t,i,r,s=1){n.add(R(new ue(.08,.08,4*s),B(6111287),e,t+2*s,i)),n.add(R(new ft(2*s,1.2*s),B(r,{side:Ot}),e+s,t+3.3*s,i))}function Zy(n){let e=wm(1991638),{x:t,z:i}=mt;mi(n,t-10,i+10,t+10,i+10),mi(n,t-10,i-10,t-10,i+10),mi(n,t+10,i-10,t+10,i+10),mi(n,t-10,i-10,t-3,i-10),mi(n,t+3,i-10,t+10,i-10);for(let[s,a]of[[-10,-10],[10,-10],[-10,10],[10,10]])Gr(n,t+s,i+a,2,8,e);n.add(R(nc(6,9,6),Vr,t,4.5,i));let r=R(Xu(5,4,4),e,t,11,i);r.rotation.y=Math.PI/4,n.add(r),js(n,t,13,i,1991638),Fa(t-3,t+3,i-3,i+3),dm(n,t,i)}function Ky(n){let e=wm(12000284),t=B(12986408,{side:Ot}),{x:i,z:r}=Wr,s=7,a=1.5,o=18,l=r+o;mi(n,i-o,r-o,i+o,r-o,s,a),mi(n,i-o,r-o,i-o,r+o,s,a),mi(n,i+o,r-o,i+o,r+o,s,a),mi(n,i-o,l,i-4,l,s,a),mi(n,i+4,l,i+o,l,s,a);for(let[h,u]of[[-o,-o],[o,-o],[-o,o],[o,o]])Gr(n,i+h,r+u,3,11,e);Gr(n,i-o,r,2.3,9,e),Gr(n,i+o,r,2.3,9,e),Gr(n,i,r-o,2.3,9,e),Gr(n,i-4.5,l+.5,2.4,10,e),Gr(n,i+4.5,l+.5,2.4,10,e),n.add(R(nc(9,2.5,3),Vr,i,7.5,l));for(let h=-1.8;h<=1.8;h+=.6)n.add(R(new ae(.12,2.2,.12),B(3355443),i+h,5.3,l+1.2));for(let h of[-7.5,7.5])n.add(R(new ft(1.6,3.5),t,i+h,4.5,l+a/2+.05));let c=r-7;n.add(R(nc(12,14,12),Vr,i,7,c)),Fa(i-6,i+6,c-6,c+6);for(let[h,u]of[[-6,-6],[6,-6],[-6,6],[6,6]])n.add(R(ku(1.4,1.4,17,16),Vr,i+h,8.5,c+u)),n.add(R(Xu(1.9,3,16),e,i+h,18.5,c+u));for(let h=-5.5;h<=5.5;h+=2)for(let[u,d]of[[h,-6],[h,6],[-6,h],[6,h]])n.add(R(Wu,Vr,i+u,14.4,c+d));for(let h of[5,9,12])for(let u of[-3,0,3])n.add(R(new ae(.8,1.4,.1),B(1710618),i+u,h,c+6.05));n.add(R(new ae(2.4,3.5,.15),B(5125166),i,1.75,c+6.05)),js(n,i,14.8,c,12986408,1.5),ln(n,i+11,r+8,6,8,9251627),ln(n,i-11,r+9,6,6,9251627),Ga(n,i-9,r-1)}var Jy=B(15260864),ec=B(4861984),Sm=B(1911347,{roughness:.3});function ln(n,e,t,i,r,s=8079918){n.add(R(new ae(i,3.2,r),Jy,e,3.2/2,t));for(let[c,h]of[[-i/2,-r/2],[i/2,-r/2],[-i/2,r/2],[i/2,r/2]])n.add(R(new ae(.25,3.2,.25),ec,e+c,3.2/2,t+h));for(let c of[-1,1])n.add(R(new ae(i+.1,.22,.12),ec,e,3.2*.55,t+c*(r/2+.02))),n.add(R(new ae(.12,.22,r+.1),ec,e+c*(i/2+.02),3.2*.55,t));let o=new Hn;o.moveTo(-i/2-.4,0),o.lineTo(i/2+.4,0),o.lineTo(0,i*.45),o.lineTo(-i/2-.4,0);let l=new Fi(o,{depth:r+.8,bevelEnabled:!1});l.translate(0,0,-(r+.8)/2),n.add(R(l,B(s,{roughness:.8,map:ju}),e,3.2,t)),n.add(R(new ae(1,1.9,.08),B(6109722),e,.95,t+r/2+.03));for(let c of[-i/3,i/3])n.add(R(new ae(.8,.8,.06),Sm,e+c,2,t+r/2+.03)),n.add(R(new ae(.8,.8,.06),Sm,e+c,2,t-r/2-.03));n.add(R(new ae(.6,1.8,.6),tc,e+i/4,3.2+i*.3,t-r/4)),Fa(e-i/2,e+i/2,t-r/2,t+r/2)}function Ga(n,e,t){n.add(R(new ue(1,1.05,.9,16,1,!0),tc,e,.45,t)),n.add(R(new dn(.95,16).rotateX(-Math.PI/2),B(2311774,{roughness:.2}),e,.5,t));for(let s of[-1,1])n.add(R(new ae(.15,2,.15),ec,e+s*.9,1.4,t));let i=new Je(1.5,.8,4),r=R(i,B(8079918),e,2.7,t);r.rotation.y=Math.PI/4,n.add(r),Be.push({x:e,z:t,r:1.1})}function gi(n,e,t){n.add(R(new ue(.8,.8,1.2,14),B(14202970),e,.6,t)),Be.push({x:e,z:t,r:.85})}function ic(n,e,t,i){let r=B(8018490);for(let s=e;s<=i;s+=1.5)n.add(R(new ae(.12,1,.12),r,s,.5,t));for(let s of[.4,.8])n.add(R(new ae(i-e,.08,.06),r,(e+i)/2,s,t));Fa(e,i,t-.1,t+.1)}function $y(n){let e=[[-13,-50,6,5],[-24,-57,7,6],[-13,-64,5,5],[-26,-70,6,5],[13,-52,6,6],[24,-60,6,5],[13,-67,6,5],[27,-48,5,5]],t=[8079918,9251627,7166522];e.forEach(([i,r,s,a],o)=>ln(n,i,r,s,a,t[o%3])),Ga(n,-7,-58),gi(n,19,-72),gi(n,20.5,-73.5),gi(n,-19,-46),ic(n,30,-54,36),ic(n,-36,-63,-31)}function Qy(n){let{x1:e,x2:t,z1:i,z2:r}=Jt,s=B(9071172),a=new ae(.15,1.1,.15),o=(c,h,u,d)=>{let p=Math.hypot(u-c,d-h);for(let f of[.45,.85]){let g=R(new ae(p,.08,.06),s,(c+u)/2,f,(h+d)/2);g.rotation.y=-Math.atan2(d-h,u-c),n.add(g)}for(let f=0;f<=p;f+=2)n.add(R(a,s,c+(u-c)*f/p,.55,h+(d-h)*f/p))};o(e,i,t,i),o(t,i,t,r),o(e,r,t,r),o(e,i,e,69),o(e,75,e,r);let l=R(new ft(t-e,r-i),B(13218426),(e+t)/2,.03,(i+r)/2);l.rotation.x=-Math.PI/2,n.add(l),n.add(R(new ae(3,.5,.8),s,24,.25,66)),ln(n,24,84.5,9,5,11022898),gi(n,30,78),gi(n,18.5,78.5)}var Xr=[];function e_(){for(let n of[-1,1])for(let e=0;e<6;e++){let t=14+He()*6,i=28+He()*22,r=n*(26+e*22),s=(He()-.5)*12;Xr.push({x:r,z:s,r:t,h:i,radiusAt:()=>t})}}var rc=(n,e)=>!(Math.abs(e)<26||Math.abs(n)<6||Math.abs(n)<18&&Math.abs(e-mt.z)<18||Math.abs(n)<10&&e>55&&e<70||n>10&&n<38&&e>56&&e<92||n>-28&&n<-6&&e>44&&e<72||Math.abs(n)<42&&e<-38&&e>-125||Math.hypot(n-52,e-38)<13||mm(n,e,4)||fm(n,e)<pr);function Tm(){for(let n=0;n<100;n++){let e=(Math.random()-.5)*(ct*2-30),t=(Math.random()-.5)*(ct*2-30);if(rc(e,t)&&!an(e,t,1.5))return{x:e,z:t}}return{x:40,z:50}}var qu=[],Vn=[],t_=new Ce().makeScale(0,0,0);function Va(n,e){for(let{im:i,i:r,m:s}of n.parts)i.setMatrixAt(r,e?s:t_),i.instanceMatrix.needsUpdate=!0;let t=Be.indexOf(n.circle);e&&t<0&&Be.push(n.circle),!e&&t>=0&&Be.splice(t,1)}function n_(n,e){let t=Vn;for(let _=0;_<2e3&&t.length<820;_++){let D=(He()-.5)*(ct*2-16),M=(He()-.5)*(ct*2-16);if(!rc(D,M))continue;let I=.8+He()*.6,O={x:D,z:M,r:.5*I};t.push({x:D,z:M,s:I,leafy:He()<.35,circle:O,parts:[]}),Be.push(O)}let i=(_,D,M)=>{let I=new Ce;D.getMatrixAt(M,I),_.parts.push({im:D,i:M,m:I})},r=new Ce,s=new Zt,a=new w,o=new w,l=new w(0,1,0),c=new be,h=_=>{_.castShadow=!0,_.receiveShadow=!0,n.add(_)},u=t.filter(_=>!_.leafy),d=new Kt(new ue(.22,.35,2.4,7),B(5979430),u.length),p=[new Je(2.2,3,9),new Je(1.7,2.6,9),new Je(1.1,2.2,9)],f=[3,4.4,5.6],g=p.map(_=>new Kt(_,B(16777215,{flatShading:!0}),u.length));u.forEach((_,D)=>{s.setFromAxisAngle(l,He()*6.28),a.setScalar(_.s),d.setMatrixAt(D,r.compose(o.set(_.x,1.2*_.s,_.z),s,a)),c.setHSL(.29+He()*.06,.45+He()*.15,.17+He()*.08),g.forEach((M,I)=>{M.setMatrixAt(D,r.compose(o.set(_.x,f[I]*_.s,_.z),s,a)),M.setColorAt(D,c)}),[d,...g].forEach(M=>i(_,M,D))}),[d,...g].forEach(h);let m=t.filter(_=>_.leafy),y=new Kt(new ue(.28,.42,3,8),B(7031344),m.length),x=new fi(2.1,1),v=[0,1,2].map(()=>new Kt(x,B(16777215,{flatShading:!0}),m.length)),S=[[0,4.4,0,1],[.9,3.8,.6,.7],[-.8,3.9,-.5,.75]];m.forEach((_,D)=>{s.setFromAxisAngle(l,He()*6.28),a.setScalar(_.s),y.setMatrixAt(D,r.compose(o.set(_.x,1.5*_.s,_.z),s,a)),c.setHSL(.2+He()*.08,.45+He()*.2,.25+He()*.1),v.forEach((M,I)=>{let[O,L,k,G]=S[I];a.setScalar(_.s*G),M.setMatrixAt(D,r.compose(o.set(_.x+O*_.s,L*_.s,_.z+k*_.s),s,a)),M.setColorAt(D,c)}),[y,...v].forEach(M=>i(_,M,D))}),[y,...v].forEach(h);let C=qu;for(let _=0;_<200&&C.length<70;_++){let D=(He()-.5)*280,M=(He()-.5)*280;rc(D,M)&&C.push({x:D,z:M,s:.3+He()*1})}let E=new Kt(new fi(1,0),B(9078656,{flatShading:!0}),C.length);C.forEach((_,D)=>{s.setFromAxisAngle(l,He()*6.28),a.set(_.s*(.8+He()*.5),_.s*(.5+He()*.3),_.s*(.8+He()*.5)),E.setMatrixAt(D,r.compose(o.set(_.x,_.s*.2,_.z),s,a)),_.s>.4&&(_.circle={x:_.x,z:_.z,r:Math.max(a.x,a.z)*.85},Be.push(_.circle)),Object.assign(_,{im:E,i:D})}),h(E)}var Yu={x:52,z:38,r:9};function i_(n){let{x:e,z:t,r:i}=Yu,r=R(new dn(i+1.6,40),B(14271642),e,.025,t);r.rotation.x=-Math.PI/2;let s=R(new dn(i,40),new je({color:3837904,roughness:.08,metalness:.35,transparent:!0,opacity:.88}),e,.05,t);s.rotation.x=-Math.PI/2,s.castShadow=!1,n.add(r,s);for(let o=0;o<9;o++){let l=He()*Math.PI*2,c=He()*(i-2),h=R(new dn(.45,10),B(5025616),e+Math.sin(l)*c,.07,t+Math.cos(l)*c);h.rotation.x=-Math.PI/2,n.add(h),o%3===0&&n.add(R(new Ee(.12,6,5),B(16301008),h.position.x,.14,h.position.z))}let a=B(7179066);for(let o=0;o<40;o++){let l=He()*Math.PI*2,c=i-.3+He()*1.4,h=.8+He()*.9;n.add(R(new ue(.03,.04,h,4),a,e+Math.sin(l)*c,h/2,t+Math.cos(l)*c))}Be.push({x:e,z:t,r:i-.5})}var Am=[];function r_(n,e){let t=new Ge(new Ee(700,32,16),new ii({side:qt,depthWrite:!1,fog:!1,uniforms:{top:{value:new be(4033504)},bottom:{value:new be(13625847)}},vertexShader:"varying vec3 vPos; void main(){ vPos = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 bottom; varying vec3 vPos; void main(){ float h = clamp(vPos.y * 1.6, 0.0, 1.0); gl_FragColor = vec4(mix(bottom, top, pow(h, 0.7)), 1.0); }"}));t.renderOrder=-10,n.add(t);let i=document.createElement("canvas");i.width=i.height=128;let r=i.getContext("2d"),s=r.createRadialGradient(64,64,4,64,64,64);s.addColorStop(0,"rgba(255,255,240,1)"),s.addColorStop(.25,"rgba(255,245,200,0.9)"),s.addColorStop(1,"rgba(255,230,160,0)"),r.fillStyle=s,r.fillRect(0,0,128,128);let a=new zn(new An({map:new kt(i),fog:!1,depthWrite:!1}));a.position.copy(e).multiplyScalar(600),a.scale.setScalar(110),n.add(a);let o=new je({color:16777215,emissive:14543088,emissiveIntensity:.35,flatShading:!0,fog:!1}),l=new fi(1,1);for(let c=0;c<16;c++){let h=new ge,u=4+Math.floor(He()*4);for(let d=0;d<u;d++){let p=new Ge(l,o),f=6+He()*7;p.scale.set(f*1.4,f*.7,f),p.position.set((d-u/2)*8+He()*4,He()*3,(He()-.5)*8),h.add(p)}h.position.set((He()-.5)*700,90+He()*50,(He()-.5)*700),n.add(h),Am.push(h)}}function Rm(n){_m(n);for(let e of Am)e.position.x+=n*2.5,e.position.x>380&&(e.position.x=-380)}function s_(n){let e=Ws.clone();e.repeat.set(1,1),e.needsUpdate=!0;let t=B(16777215,{map:e});Fr.forEach(([i,r,s,a],o)=>{let l=Math.hypot(s-i,a-r)+pr,c=new ft(pr,l),h=c.attributes.uv;for(let d=0;d<h.count;d++)h.setY(d,h.getY(d)*l/5);let u=R(c,t,(i+s)/2,.015+o*5e-4,(r+a)/2);u.rotation.order="YXZ",u.rotation.y=Math.atan2(s-i,a-r),u.rotation.x=-Math.PI/2,u.castShadow=!1,n.add(u)})}function Cm(n,{low:e=!1,sunDir:t=new w(.5,.8,.3),extra:i=null}={}){let r=new Set(n.children);r_(n,t.clone().normalize());let s=new ft(ct*2,ct*2,200,200),a=[],o=new be;for(let h=0;h<s.attributes.position.count;h++)o.setHSL(.27+He()*.04,.5,.3+He()*.06),a.push(o.r,o.g,o.b);s.setAttribute("color",new Re(a,3)),Uu.repeat.set(ct*140/300,ct*140/300);let l=R(s,B(16777215,{vertexColors:!0,map:Uu}));l.rotation.x=-Math.PI/2,n.add(l),Ws.repeat.set(1.5,38);let c=R(new ft(6,152),B(16777215,{map:Ws}));c.rotation.x=-Math.PI/2,c.position.set(0,.02,-6),n.add(c),Zy(n),Qy(n),Ky(n),$y(n),e_(),i_(n),s_(n),i==null||i(n),n_(n,e),a_(n,r),vm(n,{low:e}),ym(n,{low:e,rand:He,isFree:(h,u)=>rc(h,u)&&!an(h,u,.4)&&!(Math.abs(h)<3.5)})}function a_(n,e){let t=new Map;for(let i of[...n.children]){if(e.has(i)||!i.isMesh||i.isInstancedMesh||i.material.isShaderMaterial||i.material.transparent)continue;let r=Object.keys(i.geometry.attributes).sort().join(","),s=i.material.uuid+"|"+r;t.has(s)||t.set(s,[]),t.get(s).push(i)}for(let i of t.values()){if(i.length<2)continue;let r=i.map(o=>(o.updateMatrixWorld(!0),(o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone()).applyMatrix4(o.matrixWorld))),s=bm(r,!1);if(!s)continue;let a=new Ge(s,i[0].material);a.castShadow=a.receiveShadow=!0,i.forEach(o=>n.remove(o)),r.forEach(o=>o.dispose()),n.add(a)}}var ot=2,Wa=2.6,Pm=1.6;function o_(n){let e=n;return()=>(e=e*16807%2147483647)/2147483647}function Zu(n,e,t,i,r,s,a=!1){let o=new ae(n,e,t,i,i,i),l=o.attributes.position,c=(u,d,p)=>`${u.toFixed(3)},${d.toFixed(3)},${p.toFixed(3)}`,h=new Map;for(let u=0;u<l.count;u++){let d=l.getX(u),p=l.getY(u),f=l.getZ(u),g=c(d,p,f);if(!h.has(g)){let v=Math.abs(Math.abs(d)-n/2)<.001,S=Math.abs(Math.abs(f)-t/2)<.001,C=p>e/2-.001,E=p<-e/2+.001,_=0,D=0,M=0;!E&&(!a||C)&&(_=v?(s()-.3)*r*Math.sign(d):(s()-.5)*r*.5,M=S?(s()-.3)*r*Math.sign(f):(s()-.5)*r*.5,D=a?0:C?(s()-.4)*r*.4:(s()-.5)*r*.6),h.set(g,[_,D,M])}let[m,y,x]=h.get(g);l.setXYZ(u,d+m,p+y,f+x)}return o.computeVertexNormals(),o}var Xa=new Ce().makeScale(0,0,0),Lm=B(16777215,{flatShading:!0,roughness:.95}),l_=B(16054008,{flatShading:!0,roughness:.8}),c_=new Tn({color:16777215}),h_=B(7299667,{roughness:1}),Im=[4244735,16728193,6942894,16766784,11766015],mn=[];function Dm(n,e,t){let i=o_(t),r=Math.ceil(e.r*1.12/ot),s=2*r,a=2*r,o=e.x-r*ot,l=e.z-r*ot,c=[i()*6.28,i()*6.28,i()*6.28],h=M=>e.r*(.96+.07*Math.sin(2*M+c[0])+.05*Math.sin(3*M+c[1])+.03*Math.sin(5*M+c[2]));e.radiusAt=h;let u={m:e,x0:o,z0:l,W:s,K:a,grid:new Array(s*a).fill(null),cells:[],dug:0};for(let M=0;M<a;M++)for(let I=0;I<s;I++){let O=o+(I+.5)*ot,L=l+(M+.5)*ot,k=O-e.x,G=L-e.z,se=Math.hypot(k,G),de=h(Math.atan2(k,G));if(se>de)continue;let Q=1-se/de,Z=Math.max(Wa+.7,Math.round((e.h*Q**1.15+(i()-.5)*1.2)/Pm)*Pm),ee={i:I,k:M,x:O,z:L,t:Q,H:Z,solid:!0,hits:0,ore:!1,idx:u.cells.length};u.cells.push(ee),u.grid[I+M*s]=ee}u.radius=Math.max(...u.cells.map(M=>Math.hypot(M.x-e.x,M.z-e.z)))+ot*.75;let d=u.cells.filter(M=>M.t<.75);for(let M=0;M<9&&d.length;M++)d.splice(Math.floor(i()*d.length),1)[0].ore=!0;for(let M of Vn)Math.hypot(M.x-e.x,M.z-e.z)<u.radius&&(Va(M,!1),M.inRock=!0);for(let M of qu)Math.hypot(M.x-e.x,M.z-e.z)>u.radius||(M.im.setMatrixAt(M.i,Xa),M.im.instanceMatrix.needsUpdate=!0,M.circle&&Be.includes(M.circle)&&Be.splice(Be.indexOf(M.circle),1));let p=u.cells.length;u.low=new Kt(Zu(ot*1.08,Wa,ot*1.08,2,.2,i),Lm,p),u.top=new Kt(Zu(ot*1.1,1,ot*1.1,2,.3,i,!0),Lm,p);let f=u.cells.filter(M=>M.H>e.h*.6);u.snow=new Kt(Zu(ot*1.14,.6,ot*1.14,1,.15,i,!0),l_,Math.max(1,f.length));let g=u.cells.filter(M=>M.ore);u.crystals=new Kt(new Bn(.22),c_,Math.max(1,g.length*4));let m=new Ce,y=new Zt,x=new w,v=new w,S=new w(0,1,0),C=new be;u.cells.forEach(M=>{y.setFromAxisAngle(S,Math.floor(i()*4)*(Math.PI/2));let I=M.H-Wa;M.lowM=m.compose(x.set(M.x,Wa/2,M.z),y,v.set(1,1,1)).clone(),u.low.setMatrixAt(M.idx,M.lowM),u.top.setMatrixAt(M.idx,m.compose(x.set(M.x,Wa+I/2-.06,M.z),y,v.set(1,I+.06,1))),M.color=new be().setHSL(.07+i()*.03,.06+i()*.05,.36+i()*.1),u.low.setColorAt(M.idx,M.color),M.t<.07?C.setHSL(.2,.16,.32+i()*.05):C.copy(M.color).offsetHSL(0,0,Math.min(.12,M.t*.12)),u.top.setColorAt(M.idx,C)}),f.forEach((M,I)=>u.snow.setMatrixAt(I,m.compose(x.set(M.x,M.H+.2,M.z),y.identity(),v.set(1,1,1)))),f.length||u.snow.setMatrixAt(0,Xa),g.forEach((M,I)=>{M.crystals=[],M.crystalM=[];for(let O=0;O<4;O++){let L=O*Math.PI/2+i()*.6,k=ot*.55;y.setFromEuler(new Hs(i(),i(),i()));let G=m.compose(x.set(M.x+Math.sin(L)*k,.5+i()*1.5,M.z+Math.cos(L)*k),y,v.setScalar(.8+i()*.7)).clone(),se=I*4+O;u.crystals.setMatrixAt(se,G),u.crystals.setColorAt(se,C.setHex(Im[Math.floor(i()*Im.length)])),M.crystals.push(se),M.crystalM.push(G)}}),g.length||u.crystals.setMatrixAt(0,Xa);for(let M of[u.low,u.top,u.snow])M.castShadow=!0,M.receiveShadow=!0,n.add(M);n.add(u.crystals);let E=new Ge(new dn(u.radius,40),h_);E.rotation.x=-Math.PI/2,E.position.set(e.x,.025,e.z),E.receiveShadow=!0,n.add(E),u.hole={x:e.x,z:e.z,r:u.radius-.4};let _=o+s*ot,D=l+a*ot;return jl.push({hit:(M,I,O)=>{if(M+O<o||M-O>_||I+O<l||I-O>D)return!1;let L=Math.floor((M-O-o)/ot),k=Math.floor((M+O-o)/ot),G=Math.floor((I-O-l)/ot),se=Math.floor((I+O-l)/ot);for(let de=Math.max(0,L);de<=Math.min(s-1,k);de++)for(let Q=Math.max(0,G);Q<=Math.min(a-1,se);Q++){let Z=u.grid[de+Q*s];if(!Z||!Z.solid)continue;let ee=o+de*ot,F=l+Q*ot,K=Math.max(ee,Math.min(M,ee+ot)),pe=Math.max(F,Math.min(I,F+ot));if((M-K)**2+(I-pe)**2<O*O)return!0}return!1},solid:(M,I)=>!!Ku(u,M,I)}),mn.push(u),u}function Um(n,e,t){let i=Math.floor((e-n.x0)/ot),r=Math.floor((t-n.z0)/ot);return i<0||r<0||i>=n.W||r>=n.K?null:n.grid[i+r*n.W]}function Ku(n,e,t){let i=Um(n,e,t);return i&&i.solid?i:null}function Ju(n,e){for(let t of mn){let i=Um(t,n,e);if(i&&!i.solid)return!0}return!1}function zm(n,e,t,i){let r=n.m,s=Math.atan2(e,t),a=r.radiusAt(s),o=Math.max(ot,a-i),l=null,c=1/0;for(let h of n.cells){let u=Math.hypot(h.x-(r.x+Math.sin(s)*o),h.z-(r.z+Math.cos(s)*o));u<c&&(c=u,l=h)}return l}var Nm=(n,e)=>[[1,0],[-1,0],[0,1],[0,-1]].map(([t,i])=>e.i+t>=0&&e.i+t<n.W&&e.k+i>=0&&e.k+i<n.K?n.grid[e.i+t+(e.k+i)*n.W]:null).filter(Boolean);function $u(n,e){let t=e.lowM.clone().multiply(new Ce().makeScale(.95,.97,.95));n.low.setMatrixAt(e.idx,t),n.low.setColorAt(e.idx,e.color.clone().offsetHSL(0,0,-.12)),n.low.instanceMatrix.needsUpdate=!0,n.low.instanceColor.needsUpdate=!0}function sc(n,e,t){e.solid!==t&&(e.solid=t,e.hits=0,n.dug+=t?-1:1,n.low.setMatrixAt(e.idx,t?e.lowM:Xa),n.low.setColorAt(e.idx,e.color),n.low.instanceMatrix.needsUpdate=!0,n.low.instanceColor.needsUpdate=!0,e.crystals&&(e.crystals.forEach((i,r)=>n.crystals.setMatrixAt(i,t?e.crystalM[r]:Xa)),n.crystals.instanceMatrix.needsUpdate=!0))}function Qu(n){let e="";for(let t=0;t<n.cells.length;t+=4){let i=0;for(let r=0;r<4;r++)n.cells[t+r]&&!n.cells[t+r].solid&&(i|=1<<r);e+=i.toString(16)}return e.replace(/0+$/,"")}function ed(n,e){n.cells.forEach((t,i)=>{let r=parseInt((e||"")[i>>2]||"0",16)||0;sc(n,t,!(r&1<<(i&3)))})}function Om(n){for(let e of n.cells)sc(n,e,!0)}var cn={leg:new On(.085,.62,4,8),boot:new ae(.17,.14,.3),torso:new ue(.25,.2,.62,12),skirt:new ue(.22,.3,.32,12),belt:new ue(.225,.225,.06,12),neck:new ue(.06,.07,.12,8),head:new Ee(.15,16,12),eye:new Ee(.022,6,6),nose:new Ee(.03,6,6),hair:new Ee(.162,14,10,0,Math.PI*2,0,Math.PI*.55),arm:new On(.065,.46,4,8),hand:new Ee(.07,8,8),helmet:new Ee(.175,14,8,0,Math.PI*2,0,Math.PI/2)},mr=B(2236962);function Bm(){let n=new ge,e=B(9268810),t=Ft(7829367),i=R(new ue(.03,.03,1.9,6),e,0,0,.35);i.rotation.x=Math.PI/2,n.add(i,R(new ae(.32,.03,.03),t,0,0,1.3));for(let r of[-.14,0,.14]){let s=R(new ue(.012,.012,.4,5),t,r,0,1.5);s.rotation.x=Math.PI/2,n.add(s)}return n}function km(n=7162927){let e=new ge,t=R(new Gi(.55,.03,6,20,Math.PI),B(n));return t.rotation.set(0,-Math.PI/2,-Math.PI/2),t.position.z=-.05,e.add(t,R(new ue(.006,.006,1.1,4),B(15658734),0,0,-.05)),e}function td(n){let e=new ge,t=n?new je({color:16742938,emissive:16729088,emissiveIntensity:1.5,roughness:.3}):Ft(13685976);return e.add(R(new ae(.05,.1,n?1.2:.9),t,0,0,n?.7:.55)),e.add(R(new ae(.3,.05,.05),Ft(9071919),0,0,.08)),e}function Fm(){let n=new ge,e=Ft(2236962);n.add(R(new ae(.12,.16,.6),e,0,.05,.25));let t=R(new ue(.035,.035,.7,8),e,0,.07,.85);return t.rotation.x=Math.PI/2,n.add(t,R(new ae(.06,.25,.1),e,0,-.12,.2)),n.add(R(new ae(.1,.12,.3),B(7162927),0,.02,-.15)),n}var ja=(n,e=1.5)=>new je({color:n,emissive:n,emissiveIntensity:e,roughness:.3});function nd(n){let e=new Hn;for(let t=0;t<10;t++){let i=t/10*Math.PI*2,r=t%2?n*.45:n,s=Math.sin(i)*r,a=Math.cos(i)*r;t?e.lineTo(s,a):e.moveTo(s,a)}return new Fi(e,{depth:n*.3,bevelEnabled:!1}).center()}function Hm(n){let e=new ge,t=R(new ue(.025,.035,.9,8),B(8079918),0,0,.35);return t.rotation.x=Math.PI/2,e.add(t),n==="star"?e.add(R(nd(.14),ja(16766287),0,0,.85)):e.add(R(new Ee(.1,14,10),ja(4244735),0,0,.85)),e}function Gm(){let n=new ge,e=R(new ue(.035,.035,1.4,8),Ft(13938487),0,0,.55);return e.rotation.x=Math.PI/2,n.add(e,R(nd(.3),ja(16769154,2),0,0,1.3)),n}function Vm(){let n=new ge,e=R(new ue(.08,.1,.7,12),B(16747208),0,.05,.3);e.rotation.x=Math.PI/2;let t=R(new Gi(.16,.025,8,20),B(8317178),0,.05,.7),i=R(new Ee(.14,14,10),new je({color:12578815,transparent:!0,opacity:.45,roughness:.1}),0,.12,.85);return n.add(e,t,i,R(new ae(.08,.2,.1),B(16766287),0,-.1,.15)),n}function u_(){let n=new ge,e=R(new ae(.4,.14,.6),B(16118015),0,0,.45);return e.scale.set(1,1,1),n.add(e,R(new ae(.42,.04,.05),B(16747136),0,.05,.45)),n}function d_(){let n=new ge;return n.add(R(new Ee(.11,12,10),B(16777215),0,0,.06)),n}function Wm(){let n=new ge,e=R(new ue(.03,.035,.95,8),B(9268810),0,0,.42);e.rotation.x=Math.PI/2;let t=R(new ae(.04,.3,.22),Ft(11581116),0,.14,.82),i=R(new ae(.045,.06,.24),Ft(15265007),0,.3,.82);return n.add(e,t,i),n}function Xm(){let n=new ge,e=R(new ue(.03,.035,1,8),B(9268810),0,0,.45);e.rotation.x=Math.PI/2;let t=Ft(9080982),i=R(new ae(.06,.6,.07),t,0,0,.9),r=R(new Je(.045,.18,6),t,0,.38,.9),s=R(new Je(.045,.18,6),t,0,-.38,.9);return s.rotation.x=Math.PI,n.add(e,i,r,s),n}function jm(n){let e=B(4854924),t=ja(16766287,1),i=R(new Je(.26,.75,16),e,0,2.25,-.02);i.rotation.x=-.12,n.body.add(i,R(new ue(.36,.36,.03,20),e,0,1.9,0));for(let[s,a,o]of[[.12,2.15,.17],[-.1,2.35,.12],[.03,2.5,.08]]){let l=R(nd(.05),t,s,a,o);n.body.add(l)}let r=R(new Je(.13,.4,10),B(15658734),0,1.55,.12);r.rotation.x=Math.PI,n.body.add(r),n.body.add(R(new ue(.24,.42,1,14,1,!0),B(6174129,{side:Ot}),0,.5,0))}function id(){let n=new ge,e=B(7162927),t=Ft(6710886);n.add(R(new ae(2.2,.15,2.2),e,0,.075,0)),n.add(R(new ae(2.3,.15,2.3),e,0,2,0));for(let i=0;i<4;i++)for(let r=-1;r<=1;r+=.4){let s=R(new ue(.03,.03,1.9,5),t),a=[[r,1.05],[r,-1.05],[1.05,r],[-1.05,r]][i];s.position.set(a[0],1,a[1]),n.add(s)}return n.add(R(new ae(.3,.35,.12),ja(11766015,1.5),0,1,1.12)),n}function qm(){let n=new ge,e=B(5025616),t=B(16777215),i=R(new Ee(.3,14,10),e,0,.25,0);i.scale.set(1,.7,1.2),n.add(i);for(let s of[-1,1]){n.add(R(new Ee(.09,10,8),t,s*.12,.48,.2)),n.add(R(new Ee(.045,8,6),mr,s*.12,.5,.28));let a=R(new Ee(.12,10,8),e,s*.25,.1,-.15);a.scale.set(.7,.5,1.3),n.add(a)}let r=R(new ue(.08,.07,.07,8,1,!0),Ft(13938487),0,.5,.05);return n.add(r),n}function qs(n){let e=new ge,t=new ge;e.add(t);let i={skin:B(14724224),shirt:B(n.shirt),pants:B(n.pants),boots:B(3877406),belt:B(4861984),hair:B(n.hair)},r=[];for(let p of[-1,1]){let f=new ge;f.position.set(p*.11,.92,0),f.add(R(cn.leg,i.pants,0,-.42,0)),f.add(R(cn.boot,i.boots,0,-.85,.05)),t.add(f),r.push(f)}let s=R(cn.torso,i.shirt,0,1.27,0);s.scale.z=.75;let a=R(cn.skirt,i.shirt,0,.88,0);a.scale.z=.8;let o=R(cn.belt,i.belt,0,1,0);o.scale.z=.78,t.add(s,a,o,R(cn.neck,i.skin,0,1.62,0));let l=R(cn.head,i.skin,0,1.78,0);l.scale.y=1.1,t.add(l,R(cn.eye,mr,-.055,1.8,.135),R(cn.eye,mr,.055,1.8,.135),R(cn.nose,i.skin,0,1.76,.15));let c=R(cn.hair,i.hair,0,1.8,-.01);c.rotation.x=-.35,t.add(c);let h=[];for(let p of[-1,1]){let f=new ge;f.position.set(p*.3,1.52,0),f.add(R(cn.arm,i.shirt,0,-.27,0)),f.add(R(cn.hand,i.skin,0,-.58,0)),t.add(f),h.push(f)}let u={root:e,body:t,legs:r,arms:h,mats:i};if(n.strawHat){let p=B(14267482);u.strawHat=new ge,u.strawHat.add(R(new ue(.34,.36,.03,18),p,0,1.93,0)),u.strawHat.add(R(new ue(.12,.16,.15,14),p,0,2.01,0)),u.strawHat.add(R(new ue(.162,.162,.035,14),B(n.band),0,1.96,0)),t.add(u.strawHat)}if(n.helmet){let p=Ft(10133670);t.add(R(cn.helmet,p,0,1.83,0),R(new ae(.03,.12,.03),p,0,1.79,.17))}if(n.hood){let p=R(new Ee(.19,14,10,0,Math.PI*2,0,Math.PI*.6),B(n.hood),0,1.8,-.02);p.rotation.x=-.3,t.add(p)}n.armor&&f_(u,n.band),u.weapon=new ge,u.weapon.position.set(0,-.58,0),h[1].add(u.weapon),u.weapons={};let d=(p,f)=>{u.weapons[p]=f,f.visible=!1,u.weapon.add(f)};for(let p of n.weapons)p==="fork"&&d(p,Bm()),p==="bow"&&d(p,km()),p==="sword"&&d(p,td(!1)),p==="firesword"&&d(p,td(!0)),p==="gun"&&d(p,Fm()),p==="wand"&&d(p,Hm("star")),p==="orbwand"&&d(p,Hm("orb")),p==="starstaff"&&d(p,Gm()),p==="bubbler"&&d(p,Vm()),p==="pillow"&&d(p,u_()),p==="snowball"&&d(p,d_()),p==="axe"&&d(p,Wm()),p==="pickaxe"&&d(p,Xm());if(Xi(u,n.weapons[0]),n.shield){let p=R(new ue(.3,.3,.05,20),B(n.shirt),.05,-.38,.12);p.rotation.x=Math.PI/2,p.rotation.z=.2,h[0].add(p,R(new Ee(.06,8,8),Ft(12303291),.05,-.38,.16))}return Ym(u),u}function Ym(n){let e=new Set;n.root.traverse(t=>{t.material&&t.material!==mr&&t.material.emissive&&e.add(t.material)}),n.allMats=[...e].map(t=>({m:t,base:t.emissive.getHex()}))}function Xi(n,e){for(let[t,i]of Object.entries(n.weapons))i.visible=t===e;n.currentWeapon=e}var p_=[10133670,10133670,12107460,13160148,13686492,13938487,5597999];function f_(n,e){let t=new je({color:10133670,roughness:.35,metalness:.8}),i=Ft(13938487),r={mat:t};r.helmet=new ge,r.helmet.add(R(cn.helmet,t,0,1.83,0),R(new ae(.03,.13,.03),t,0,1.79,.17)),r.helmet.add(R(new Gi(.175,.02,6,20).rotateX(Math.PI/2),t,0,1.83,0)),r.chest=R(new ue(.28,.24,.6,14),t,0,1.28,0),r.chest.scale.z=.82,r.pauldrons=n.arms.map(s=>{let a=R(new Ee(.14,10,8,0,Math.PI*2,0,Math.PI/2),t,0,-.02,0);return a.scale.set(1.2,.9,1.2),s.add(a),a}),r.capeMat=B(e,{side:Ot}),r.cape=R(new ft(.5,1.1),r.capeMat,0,1,-.21),r.cape.rotation.x=.12,r.crown=new ge,r.crown.add(R(new ue(.17,.16,.12,14,1,!0),i,0,1.97,0));for(let s=0;s<6;s++){let a=s/6*Math.PI*2;r.crown.add(R(new Je(.03,.1,6),i,Math.sin(a)*.165,2.08,Math.cos(a)*.165))}n.body.add(r.helmet,r.chest,r.cape,r.crown),n.armor=r,rd(n,0)}function rd(n,e){let t=n.armor;t&&(t.mat.color.setHex(p_[e]),n.strawHat&&(n.strawHat.visible=e===0),t.helmet.visible=e>=1&&e!==4&&e!==5,t.chest.visible=e>=1,t.pauldrons.forEach(i=>i.visible=e>=2),t.cape.visible=e>=3,t.crown.visible=e===4||e===5,e===6&&t.capeMat.color.setHex(4083492))}function Ys(n,e,t,i,r){let s=t?Math.sin(e):0;n.legs[0].rotation.x=s*.7,n.legs[1].rotation.x=-s*.7,n.arms[0].rotation.x=r!=null?r:-s*.5,n.arms[1].rotation.x=i+(t?s*.2:0),n.body.position.y=t?Math.abs(Math.sin(e))*.05:0}function jr(n,e){for(let{m:t,base:i}of n.allMats)t.emissive.setHex(e===0?i:e)}function ac(n){let e=new ge,t=new ge;e.add(t);let i=[],r,s,a;if(n==="cow"){r=B(16119280);let l=B(2763306),c=B(16033456),h=R(new On(.42,.9,6,12),r,0,1.05,0);h.rotation.x=Math.PI/2,h.scale.set(1,1,.95),t.add(h);for(let[p,f,g]of[[.36,1.15,.2],[-.38,1,-.3],[.1,1.42,-.25],[-.3,1.25,.35]]){let m=R(new Ee(.2,10,8),l,p,f,g);m.scale.set(.35,1,1.2),m.lookAt(0,1.05,g),t.add(m)}let u=R(new ae(.42,.42,.5),r,0,1.3,.9),d=R(new ae(.44,.24,.2),c,0,1.18,1.18);t.add(u,d,R(new Ee(.16,10,8),c,0,.62,-.2));for(let p of[-1,1]){t.add(R(new Ee(.04,6,6),mr,p*.16,1.4,1.14));let f=R(new Je(.04,.2,6),B(15260864),p*.18,1.6,.85);f.rotation.z=-p*.5;let g=R(new ae(.2,.06,.12),r,p*.3,1.42,.82);t.add(f,g)}s=.75,a=.78;for(let[p,f]of[[-.24,.45],[.24,.45],[-.24,-.45],[.24,-.45]]){let g=new ge;g.position.set(p,a,f),g.add(R(new ue(.08,.07,s,8),r,0,-s/2,0)),g.add(R(new ue(.08,.08,.08,8),B(3877406),0,-s+.04,0)),t.add(g),i.push(g)}}else if(n==="chicken"){r=B(16448250);let l=B(15022389),c=B(16757504),h=R(new Ee(.25,14,10),r,0,.42,0);h.scale.set(.9,.9,1.15);let u=R(new Je(.12,.25,8),r,0,.55,-.27);u.rotation.x=-.9;let d=R(new Ee(.13,12,10),r,0,.72,.2),p=R(new Je(.04,.1,6),c,0,.7,.35);p.rotation.x=Math.PI/2,t.add(h,u,d,p,R(new ae(.03,.1,.14),l,0,.86,.2),R(new Ee(.035,6,6),l,0,.62,.3));for(let f of[-1,1]){t.add(R(new Ee(.025,6,6),mr,f*.09,.75,.29));let g=R(new Ee(.15,10,8),r,f*.21,.45,-.02);g.scale.set(.3,.7,1),t.add(g)}s=.2,a=.22;for(let f of[-.08,.08]){let g=new ge;g.position.set(f,a,0),g.add(R(new ue(.015,.015,s,5),c,0,-s/2,0)),g.add(R(new ae(.08,.02,.1),c,0,-s,.03)),t.add(g),i.push(g)}i.push(new ge,new ge)}else if(n==="deer"){r=B(10514495);let l=R(new On(.25,.8,6,12),r,0,.98,0);l.rotation.x=Math.PI/2;let c=R(new ue(.08,.11,.5,8),r,0,1.3,.5);c.rotation.x=.6;let h=R(new Ee(.13,12,10),r,0,1.55,.66);h.scale.set(.9,.9,1.6),t.add(l,c,h),t.add(R(new Ee(.03,6,6),mr,0,1.53,.86));for(let u of[-1,1]){let d=R(new Je(.05,.16,6),r,u*.1,1.7,.6);if(d.rotation.z=-u*.6,t.add(d),Math.random()<.5){let p=R(new ue(.015,.02,.4,5),B(14207144),u*.08,1.85,.58);p.rotation.z=-u*.4;let f=R(new ue(.012,.015,.2,5),B(14207144),u*.16,1.9,.66);f.rotation.x=.8,t.add(p,f)}}t.add(R(new Ee(.08,8,8),B(16052456),0,1.05,-.58)),s=.85,a=.88;for(let[u,d]of[[-.14,.38],[.14,.38],[-.14,-.38],[.14,-.38]]){let p=new ge;p.position.set(u,a,d),p.add(R(new ue(.035,.045,s,6),r,0,-s/2,0)),p.add(R(new ue(.04,.04,.06,6),B(2763306),0,-s+.03,0)),t.add(p),i.push(p)}}else{r=B(4863014);let l=R(new On(.34,.6,6,12),r,0,.65,0);l.rotation.x=Math.PI/2,l.scale.set(1,1,.9);let c=R(new Je(.28,.55,10),r,0,.62,.62);c.rotation.x=Math.PI/2;let h=R(new ue(.1,.1,.08,10),B(9071194),0,.6,.9);h.rotation.x=Math.PI/2,t.add(l,c,h);for(let d of[-1,1]){t.add(R(new Ee(.03,6,6),mr,d*.1,.72,.68));let p=R(new Je(.02,.14,5),B(16052456),d*.08,.6,.86);p.rotation.x=-.6,t.add(p);let f=R(new Je(.06,.16,5),r,d*.13,.86,.48);f.rotation.z=-d*.3,t.add(f)}let u=R(new ae(.06,.1,.8),B(3022872),0,1,0);t.add(u),s=.4,a=.42;for(let[d,p]of[[-.18,.3],[.18,.3],[-.18,-.3],[.18,-.3]]){let f=new ge;f.position.set(d,a,p),f.add(R(new ue(.06,.06,s,6),r,0,-s/2,0)),t.add(f),i.push(f)}}let o={root:e,body:t,legs:i,type:n};return Ym(o),o}function oc(n,e,t){let i=t?Math.sin(e)*.6:0;n.legs[0].rotation.x=i,n.legs[3].rotation.x=i,n.legs[1].rotation.x=-i,n.legs[2].rotation.x=-i}function sd(n){return n==="axe"?Wm():n==="pickaxe"?Xm():n==="starstaff"?Gm():n==="bubbler"?Vm():n==="gun"?Fm():n==="firesword"?td(!0):n==="bow"?km():Bm()}function Zs(n=2.35){let e=document.createElement("canvas");e.width=64,e.height=10;let t=new kt(e);t.colorSpace=tt;let i=new zn(new An({map:t,depthTest:!1}));return i.scale.set(1.1,.17,1),i.position.y=n,i.renderOrder=10,i.userData={cv:e,tex:t},i}var ad=n=>n>.5?"#3ecf4a":n>.25?"#f2c230":"#e53935";function xi(n,e){let{cv:t,tex:i}=n.userData,r=t.getContext("2d");r.fillStyle="#000",r.fillRect(0,0,64,10),r.fillStyle=ad(e),r.fillRect(2,2,60*Math.max(0,e),6),i.needsUpdate=!0}var lc=[];function qa(n,e,t,i,r=2.6){let s=document.createElement("canvas");s.width=320,s.height=96;let a=s.getContext("2d");a.font="bold 60px system-ui, sans-serif",a.textAlign="center",a.lineWidth=8,a.strokeStyle="#000",a.strokeText(e,160,70),a.fillStyle=t,a.fillText(e,160,70);let o=new kt(s);o.colorSpace=tt;let l=new zn(new An({map:o,depthTest:!1,transparent:!0}));l.scale.set(2,.6,1),l.position.set(i.x+(Math.random()-.5)*.6,r,i.z),l.renderOrder=11,n.add(l),lc.push({sp:l,t:0})}function Km(n,e){for(let t of[...lc])t.t+=e,t.sp.position.y+=e*1.3,t.sp.material.opacity=1-t.t,t.t>=1&&(n.remove(t.sp),t.sp.material.map.dispose(),t.sp.material.dispose(),lc.splice(lc.indexOf(t),1))}var qr;function ji(){qr||(qr=new AudioContext)}function hn(n,e,t="square",i=.06,r=0,s=0){if(!qr)return;let a=qr.currentTime+s,o=qr.createOscillator(),l=qr.createGain();o.type=t,o.frequency.setValueAtTime(n,a),r&&o.frequency.exponentialRampToValueAtTime(r,a+e),l.gain.setValueAtTime(i,a),l.gain.exponentialRampToValueAtTime(.001,a+e),o.connect(l).connect(qr.destination),o.start(a),o.stop(a+e)}var Ya={swing:()=>hn(500,.12,"triangle",.04,200),bow:()=>hn(900,.08,"triangle",.04,300),gun:()=>hn(120,.05,"square",.04,60),hit:()=>hn(200,.12,"square",.07,70),hurt:()=>hn(140,.3,"sawtooth",.07,50),windup:()=>hn(300,.25,"sine",.03,600),pickup:()=>[660,880].forEach((n,e)=>hn(n,.1,"square",.05,0,e*.08)),levelUp:()=>[523,659,784,1047].forEach((n,e)=>hn(n,.18,"square",.05,0,e*.12)),magic:()=>[880,1320,1760].forEach((n,e)=>hn(n,.08,"sine",.04,0,e*.04)),bubble:()=>hn(600,.08,"sine",.04,1200),plop:()=>hn(220,.15,"sine",.08,110),chop:()=>hn(170,.09,"square",.07,80),clink:()=>[1300,900].forEach((n,e)=>hn(n,.06,"square",.04,600,e*.05)),poof:()=>[523,784,1047,1568].forEach((n,e)=>hn(n,.12,"triangle",.05,0,e*.06)),lifeLost:()=>[392,330,262].forEach((n,e)=>hn(n,.25,"triangle",.06,0,e*.2))},Zm={};function qi(n,e,t=2500){let i=document.getElementById(n);i.textContent=e,i.style.opacity=1,clearTimeout(Zm[n]),Zm[n]=setTimeout(()=>i.style.opacity=0,t)}var m_="https://unpkg.com/peerjs@1.5.4/dist/peerjs.min.js",Jm="paul-jesse-game-",Za;function $m(){return window.Peer?Promise.resolve(window.Peer):(Za!=null||(Za=new Promise((n,e)=>{let t=document.createElement("script");t.src=m_,t.onload=()=>n(window.Peer),t.onerror=()=>e(new Error("PeerJS konnte nicht geladen werden")),document.head.appendChild(t)})),Za)}function Qm(){let n="ABCDEFGHJKLMNPQRSTUVWXYZ",e="";for(let t=0;t<4;t++)e+=n[Math.floor(Math.random()*n.length)];return e}async function e0(n,{onConnection:e,onError:t}){let i=await $m(),r=new i(Jm+n.toLowerCase());return r.on("connection",s=>s.on("open",()=>e(s))),r.on("error",s=>t(s)),r}async function t0(n,{onOpen:e,onError:t}){let i=await $m(),r=new i;return r.on("open",()=>{let s=r.connect(Jm+n.trim().toLowerCase(),{reliable:!0});s.on("open",()=>e(s)),s.on("error",a=>t(a))}),r.on("error",s=>t(s)),r}var g_={audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0,channelCount:1},video:!1},Rn=n=>document.getElementById(n),ld=null,r0=null,$t=null,cc=null,Wn=null,Ka=!1,Ja=!1,hc=!1,$a=!1,Yr=null,uc=null;async function s0(){if(Wn)return Wn;try{Wn=await navigator.mediaDevices.getUserMedia(g_),Ka=!0}catch(n){Ka=!1,Wn=new AudioContext().createMediaStreamDestination().stream}return a0(),Wn}function a0(){Wn==null||Wn.getAudioTracks().forEach(n=>n.enabled=Ka&&!Ja),c0()}function o0(n){$t&&$t!==n&&$t.close(),$t=n,Zr("connecting"),n.on("stream",e=>{let t=Rn("vAudio");t.srcObject=e,t.play().catch(()=>{}),x_(e),Zr("on")}),n.on("close",()=>{$t===n&&($t=null,Zr(hc?"off":"lost"))}),n.on("error",()=>{$t===n&&($t=null,Zr("lost"))})}async function n0(){let n=await s0();$a&&o0(ld.call(r0,n))}async function i0(n){cc=null,n.answer(await s0()),o0(n)}function x_(n){try{let e=new AudioContext;Yr=e.createAnalyser(),Yr.fftSize=256,uc=new Uint8Array(Yr.frequencyBinCount),e.createMediaStreamSource(n).connect(Yr)}catch(e){Yr=null}}function l0(){if(Yr&&Ks==="on"){Yr.getByteFrequencyData(uc);let n=uc.reduce((e,t)=>e+t,0)/uc.length;Rn("voice").classList.toggle("talking",n>18)}else Rn("voice").classList.remove("talking");requestAnimationFrame(l0)}var Ks="off",v_={connecting:"\u{1F399}\uFE0F Sprachchat verbindet \u2026",on:"\u{1F399}\uFE0F Sprachchat an",off:"\u{1F515} Sprachchat aus",lost:"\u26A0\uFE0F Sprachchat getrennt",ringing:"\u{1F4DE} Dein Mitspieler m\xF6chte sprechen"};function Zr(n){Ks=n,c0()}function c0(){if(!$a)return;Rn("vStatus").textContent=v_[Ks];let n=Ks==="on"||Ks==="connecting",e=Rn("vMute");e.hidden=!n,e.textContent=Ka?Ja?"\u{1F507} Stumm \u2013 antippen zum Sprechen":"\u{1F3A4} Mikro an":"\u{1F6AB} Kein Mikrofon (nur zuh\xF6ren)",e.classList.toggle("off",Ja||!Ka),Rn("vHang").hidden=!n,Rn("vCall").hidden=n,Rn("vCall").textContent=Ks==="ringing"?"\u{1F4DE} Annehmen":"\u{1F4DE} Wieder verbinden"}var od=n=>e=>{e.currentTarget.blur(),n()};function cd(n,e,t){ld=n,r0=e,$a=!0,Rn("voice").hidden=!1,Rn("vMute").onclick=od(()=>{Ja=!Ja,a0()}),Rn("vHang").onclick=od(()=>{hc=!0,$t==null||$t.close(),$t=null,Zr("off")}),Rn("vCall").onclick=od(()=>{hc=!1,cc?i0(cc):n0()}),ld.on("call",i=>{if(hc){cc=i,Zr("ringing");return}i0(i)}),l0(),t?n0():Zr("connecting")}function hd(){$a&&($t==null||$t.close(),$t=null,Wn==null||Wn.getTracks().forEach(n=>n.stop()),Wn=null,$a=!1,Rn("voice").hidden=!0)}var fd=Object.fromEntries(si.map(n=>[n.id,n])),Cn=fd.muehle,St=fd.see,_t=fd.huegel,oi=[{id:"cake",name:"Der Kuchendieb von M\xFChlbach",icon:"\u{1F370}"},{id:"colors",name:"Die Schatzkiste von Seedorf",icon:"\u{1F9F0}"},{id:"riddles",name:"Oma Rosis R\xE4tsel",icon:"\u{1F9E0}"},{id:"chickens",name:"Friedas H\xFChner",icon:"\u{1F414}"}],h0={berta:"cake",knut:"colors",rosi:"riddles",frieda:"chickens"},Ue={x1:_t.x+18,x2:_t.x+28,z1:_t.z+2,z2:_t.z+10,gate1:_t.z+4.5,gate2:_t.z+7.5},y_=(n,e)=>n>Ue.x1+.5&&n<Ue.x2-.5&&e>Ue.z1+.5&&e<Ue.z2-.5,to={x:St.x,z:St.z+1},fc=[{color:"red",name:"Rot",hex:15022389,x:St.x-4,z:St.z-3},{color:"blue",name:"Blau",hex:2001125,x:St.x+4,z:St.z-3},{color:"yellow",name:"Gelb",hex:16635957,x:St.x-4,z:St.z+5},{color:"green",name:"Gr\xFCn",hex:4431943,x:St.x+4,z:St.z+5}],mc=["blue","green","yellow","red"],__=[[_t.x-42,_t.z-18],[_t.x+40,_t.z+30],[_t.x-30,_t.z+44],[_t.x+46,_t.z-22]],gc={x:Cn.x+24,z:Cn.z};function md(n,e,t,i){let r=Ws.clone();r.repeat.set(i/3,i/3),r.needsUpdate=!0;let s=R(new dn(i,32),B(16777215,{map:r}),e,.018,t);s.rotation.x=-Math.PI/2,s.castShadow=!1,n.add(s)}var io=B(8018490);function Qa(n,e,t,i,r){let s=Math.hypot(i-e,r-t);for(let a of[.4,.8]){let o=R(new ae(s,.08,.06),io,(e+i)/2,a,(t+r)/2);o.rotation.y=-Math.atan2(r-t,i-e),n.add(o)}for(let a=0;a<=s+.01;a+=1.5)n.add(R(new ae(.12,1,.12),io,e+(i-e)*a/s,.5,t+(r-t)*a/s));ur.push({x1:Math.min(e,i)-.1,x2:Math.max(e,i)+.1,z1:Math.min(t,r)-.1,z2:Math.max(t,r)+.1})}function M_(n,e,t){n.add(R(new ue(.42,.42,1,12),B(9268810),e,.5,t)),Be.push({x:e,z:t,r:.45})}function E_(n){let{x:e,z:t}=Cn;md(n,e,t,11),ln(n,e-12,t-13,7,6,11887901),ln(n,e+12,t-13,6,6,6111287),ln(n,e-14,t+13,6,5,8079918),ln(n,e+10,t+15,6,5,9251627),ln(n,e-26,t-2,5,6,7166522),Ga(n,e-3,t+1),n.add(R(new ae(.9,.5,.5),B(3622735,{roughness:.4,metalness:.6}),e+15.5,.7,t-8.5)),n.add(R(new ae(.5,.45,.4),B(6111287),e+15.5,.22,t-8.5)),Be.push({x:e+15.5,z:t-8.5,r:.6});let{x:i,z:r}=gc;n.add(R(new ue(2.4,3.3,10,16),B(15655887),i,5,r)),n.add(R(new Je(3,3,16),B(7162945,{roughness:.8}),i,11.5,r)),n.add(R(new ae(1.2,2,.1),B(6109722),i-3.05,1,r).rotateY(Math.PI/2)),Be.push({x:i,z:r,r:3.3}),gi(n,i+6,r+4),gi(n,i+7.5,r+5.5),gi(n,i+6.5,r+6.8),n.add(R(new ue(.35,.3,.05,16),B(16777215,{roughness:.3}),i+5.2,.05,r+6.2)),n.add(R(new Ee(.06,6,5),B(15022389),i+5.25,.1,r+6.25)),ic(n,e-30,t+22,e-18),js(n,e-9,0,t-3,16757504,.8)}function b_(n){let{x:e,z:t}=St;md(n,e,t,11);let i=R(new dn(st.r+2,48),B(14271642),st.x,.022,st.z);i.rotation.x=-Math.PI/2,i.castShadow=!1,n.add(i),Be.push({x:st.x,z:st.z,r:st.r-.5});for(let r=0;r<6;r++)n.add(R(new ae(1.8,.12,.9),B(9268810),st.x-st.r+1.5+r,.35,st.z+4));n.add(R(new ae(3.4,.6,1.4),B(7162945),st.x-st.r+5,.25,st.z+7));for(let[r,s]of[[e-14,t-12],[e-14,t+14],[e+4,t-20],[e+10,t+22]])ln(n,r,s,6,5,3038858);for(let[r,s]of[[e+15,t-4],[e+15.8,t-3],[e+15,t-2.1],[e-9,t+9]])M_(n,r,s);for(let r of[0,3])n.add(R(new ae(.12,2.2,.12),io,e+12+r,1.1,t+9));n.add(R(new ae(3,1.5,.04),B(12364452,{roughness:1}),e+13.5,1.3,t+9)),js(n,e-6,0,t-8,2001125,.8)}function S_(n){let{x:e,z:t}=_t;md(n,e,t,11),ln(n,e-14,t-10,6,5,8079918),ln(n,e+13,t-12,6,5,7166522),ln(n,e-15,t+13,6,5,9251627),ln(n,e+2,t+19,7,5,6953882),Ga(n,e+3,t-2),Qa(n,Ue.x1,Ue.z1,Ue.x2,Ue.z1),Qa(n,Ue.x2,Ue.z1,Ue.x2,Ue.z2),Qa(n,Ue.x1,Ue.z2,Ue.x2,Ue.z2),Qa(n,Ue.x1,Ue.z1,Ue.x1,Ue.gate1),Qa(n,Ue.x1,Ue.gate2,Ue.x1,Ue.z2);let i=R(new ft(Ue.x2-Ue.x1,Ue.z2-Ue.z1),B(13218426),(Ue.x1+Ue.x2)/2,.03,(Ue.z1+Ue.z2)/2);i.rotation.x=-Math.PI/2,n.add(i),n.add(R(new ae(2.4,1.6,1.8),B(10586239),Ue.x2-1.8,.8,Ue.z2-1.5)),gi(n,e-20,t+2),js(n,e-6,0,t-6,4431943,.8)}function eo(n,e,t,i,r,s=3.6){let a=document.createElement("canvas");a.width=512,a.height=64+r.length*60;let o=a.getContext("2d");o.fillStyle="#6d4c41",o.beginPath(),o.roundRect(4,4,504,a.height-8,18),o.fill(),o.strokeStyle="#3e2723",o.lineWidth=6,o.stroke(),o.textAlign="center",r.forEach((u,d)=>{o.font=`bold ${d===0?50:40}px system-ui, sans-serif`,o.fillStyle=d===0?"#ffe082":"#fff8e1",o.fillText(u,256,72+d*60)});let l=new kt(a);l.colorSpace=tt;let c=s*a.height/512,h=new ge;h.add(R(new ae(.18,1.6+c,.18),io,0,(1.6+c)/2,-.06)),h.add(new Ge(new ft(s,c),new Tn({map:l})).translateY(1.6+c/2)),h.position.set(e,0,t),h.rotation.y=i,n.add(h),Be.push({x:e,z:t,r:.3})}function m0(n){E_(n),b_(n),S_(n)}var wt=null,ro=[],Qt=[],Jr=null,Lt=null,dc=null,g0=[],Se={solved:{},heard:new Set,seq:0,riddle:0},Kr=0,x0={npcs:ro,chickens:Qt,st:Se},so=()=>oi.filter(n=>Se.solved[n.id]).length,et=(n,e=[["Tsch\xFCss \u{1F44B}"]])=>({text:n,choices:e}),Yi=(n,e)=>et(n,[["Weiter \u25B6",e]]),w_=n=>si.filter(e=>e.id!==n).map(e=>`${e.name} liegt ${e.dir}`).join(". ")+".",ud=(n,e)=>et(e,[["Wo sind die anderen D\xF6rfer?",()=>et(`${w_(n)} Auf der kleinen Karte oben rechts siehst du alle D\xF6rfer als \u{1F3D8}\uFE0F, und ein \u2753 zeigt dir, wo noch ein R\xE4tsel auf dich wartet.`)],["Tsch\xFCss \u{1F44B}"]]);function yc(n,e){Se.solved[n]||(Se.solved[n]=!0,wt.reward(oi.find(t=>t.id===n),e,so(),oi.length))}var T_=[["max","M\xFCller Max"],["karl","Schmied Karl"],["hanna","Hirtin Hanna"],["leo","Leo"],["greta","Greta"]];function A_(n){return e=>n!=="leo"?et("Hmm, das glaube ich nicht. H\xF6r noch mal genau hin, was die Leute erz\xE4hlt haben! Wer hatte eine Kapuze, und wer ist so klein wie ein Kind?",[["Okay, ich frag noch mal \u{1F44D}"]]):Yi("Leo? Wirklich? \u2026 LEO! Komm sofort her! \u{1F620}",()=>(yc("cake",e),et("Leo hat es zugegeben! Er hatte so gro\xDFen Hunger. \u{1F604} Danke, du bist ein richtiger Detektiv! \u{1F575}\uFE0F")))}var v0={berta:n=>Se.solved.cake?et("Danke, dass du den Kuchendieb gefunden hast! Leo hilft mir jetzt jeden Morgen beim Backen. \u{1F370}"):Se.heard.has("berta")?Se.heard.has("max")&&Se.heard.has("karl")?et("Und? Wei\xDFt du jetzt, wer meinen Kuchen genommen hat?",[...T_.map(([e,t])=>[t,A_(e)]),["Wei\xDF ich noch nicht"]]):et("Hast du schon mit allen gesprochen? Der M\xFCller Max steht an der Windm\xFChle, der Schmied Karl an seinem Amboss. Die sind immer fr\xFCh auf den Beinen!",[["Mach ich! \u{1F44D}"]]):(Se.heard.add("berta"),Yi("Oh je, oh je! Mein gro\xDFer Erdbeerkuchen ist weg! \u{1F370} Er stand heute Morgen zum Abk\xFChlen auf dem Fensterbrett.",()=>et("Kannst du herausfinden, wer ihn genommen hat? Frag die Leute hier im Dorf, ob jemand etwas gesehen hat. Am besten den M\xFCller Max an der Windm\xFChle und den Schmied Karl. Dann komm zur\xFCck zu mir!",[["Mach ich! \u{1F575}\uFE0F"]]))),max:()=>(Se.heard.add("max"),Se.solved.cake?et("Die M\xFChle dreht sich, das Mehl ist gemahlen, der Dieb ist gefunden. Was f\xFCr ein sch\xF6ner Tag!"):Yi("Guten Tag! Ich bin Max, der M\xFCller. Von oben aus meiner Windm\xFChle sehe ich das ganze Dorf.",()=>et("Heute Morgen habe ich jemanden mit einer KAPUZE gesehen. Die Person ist mit etwas Rotem in der Hand hinter meine M\xFChle zu den Heuhaufen gerannt. Ich selbst trage nie eine Kapuze, nur meinen Strohhut!"))),karl:()=>(Se.heard.add("karl"),Se.solved.cake?et("Klong, klong! Gut gemacht, Detektiv!"):Yi("Klong, klong! Ich bin Karl, der Schmied. Ich stand heute Morgen die ganze Zeit hier an meinem Amboss.",()=>et("Ich habe kurz jemanden am Fenster der B\xE4ckerei gesehen. Die Person war ganz KLEIN, viel kleiner als ein Erwachsener. Ein Kind vielleicht?"))),hanna:()=>(Se.heard.add("hanna"),Yi("Hallo! Ich bin Hanna und passe auf die Schafe auf. Ja, ich trage eine Kapuze, aber ich war den ganzen Morgen mit Greta drau\xDFen auf der Wiese.",()=>et("\xDCbrigens: Leo wollte heute beim Mittagessen gar nichts essen. Er hatte \xFCberhaupt keinen Hunger. Komisch, oder?"))),greta:()=>(Se.heard.add("greta"),et("Ich war's nicht! Ich habe mit Hanna Schafe gez\xE4hlt: 1, 2, 3 \u2026 47 Schafe! Und eine Kapuze habe ich auch gar nicht.")),leo:()=>(Se.heard.add("leo"),Se.solved.cake?et("Tut mir leid wegen dem Kuchen. Jetzt helfe ich Berta beim Backen, und ich darf die Sch\xFCssel ausschlecken! \u{1F60B}"):et("Ich? Nein! Ich war \u2026 \xE4h \u2026 spazieren. Hinter der M\xFChle. Ganz allein. *Hicks* \u2026 Warum schaust du so auf meinen roten Mund?")),otto:()=>ud("muehle","Willkommen in M\xFChlbach! Ich bin Opa Otto. Unsere B\xE4ckerin Berta ist ganz traurig, frag sie mal, was los ist."),knut:()=>Se.solved.colors?et("Meine alte Schatzkiste ist offen! Danke, mein Freund. Ahoi! \u2693"):Yi("Ahoi! Ich bin Kapit\xE4n Knut. \u{1F9ED} Siehst du meine alte Schatzkiste und die vier bunten Steine davor?",()=>Yi("Die Kiste geht nur auf, wenn man nacheinander auf die vier Steine in der richtigen Reihenfolge tritt. Aber ich bin so alt, ich habe die Reihenfolge vergessen!",()=>et("Die Leute im Dorf wissen es noch: Fischer Fiete am See, Nele die Netzflickerin und der kleine Jan. Und wenn du auf den falschen Stein trittst, einfach noch mal von vorne anfangen!"))),fiete:()=>et("Moin! Ich bin Fiete, der Fischer. \u{1F3A3} Der Kapit\xE4n hat immer gesagt: Der ERSTE Stein hat die Farbe vom Wasser im See."),nele:()=>et("Hallo, ich bin Nele und flicke die Fischernetze. Ich wei\xDF noch: Der rote Stein kommt ganz zum SCHLUSS, so wie die rote Abendsonne. \u{1F305}"),jan:()=>et("Ich bin Jan! Ich wei\xDF was: Gelb kommt NICHT direkt nach Blau. Mehr verrate ich nicht! \u{1F92B}"),mia:()=>ud("see","Willkommen in Seedorf! Ich bin Mia. Kapit\xE4n Knut braucht Hilfe mit seiner Schatzkiste, er steht auf dem Dorfplatz."),rosi:()=>Se.solved.riddles?et("Du bist ein echter R\xE4tselmeister! \u{1F9E0} Komm mich mal wieder besuchen."):Se.riddle>0?xc():et(`Hallo, mein Kind! Ich bin Oma Rosi und ich liebe R\xE4tsel. Wenn du alle ${no.length} l\xF6st, bekommst du eine Belohnung!`,[["Los geht's! \u{1F9E0}",xc],["Sp\xE4ter"]]),frieda:()=>{if(Se.solved.chickens)return et("Alle meine H\xFChner sind wieder da! Gack gack, vielen Dank! \u{1F414}");let n=Qt.filter(e=>e.state==="pen").length;return n?et(`Schon ${n} von ${Qt.length} H\xFChnern sind wieder im Stall! Die anderen laufen noch auf den Wiesen rund ums Dorf herum.`):Yi(`Hilfe! Ein Fuchs hat meine H\xFChner erschreckt und jetzt sind alle ${Qt.length} weggelaufen! \u{1F414}`,()=>et("Lauf zu einem Huhn hin, dann l\xE4uft es dir hinterher. Bring es hier in den H\xFChnerstall mit dem Zaun, das Tor ist auf der Seite zum Dorfplatz. Die H\xFChner sind irgendwo auf den Wiesen rund um das Dorf."))},lina:()=>et("Ich bin Lina! Ich habe vorhin ein Huhn ganz weit im Westen gesehen, und eins hinter Oma Rosis Haus. Die rennen echt \xFCberall herum! \u{1F414}"),bodo:()=>ud("huegel","Willkommen in H\xFCgelhausen! Ich bin Bauer Bodo. Oma Rosi hat R\xE4tsel f\xFCr dich, und B\xE4uerin Frieda sucht ihre H\xFChner.")},no=[{q:"Es hat Z\xE4hne, aber es bei\xDFt nicht. Was ist das?",a:["Ein Hund","Ein Kamm","Ein Hai"],ok:1},{q:"Je mehr man davon wegnimmt, desto gr\xF6\xDFer wird es. Was ist das?",a:["Ein Loch","Ein Kuchen","Ein Berg"],ok:0},{q:"Es hat einen Hals, aber keinen Kopf. Was ist das?",a:["Eine Giraffe","Ein Baum","Eine Flasche"],ok:2},{q:"Es wird nass, w\xE4hrend es trocknet. Was ist das?",a:["Ein Handtuch","Der Regen","Ein Fisch"],ok:0}];function xc(){let n=no[Se.riddle];return et(`R\xE4tsel ${Se.riddle+1} von ${no.length}: ${n.q}`,[...n.a.map((e,t)=>[e,i=>t!==n.ok?et("Leider falsch! Denk noch mal nach. \u{1F914}",[["Noch mal versuchen",xc],["Sp\xE4ter"]]):(Se.riddle++,wt.sfx("pickup"),Se.riddle<no.length?Yi("Richtig! \u{1F389} Das war gar nicht so leicht.",xc):(yc("riddles",i),et("Alle R\xE4tsel richtig gel\xF6st! Du bist ja schlauer als eine Eule! \u{1F989}")))]),["Sp\xE4ter"]])}var R_=[["berta","B\xE4ckerin Berta",Cn,-12,-9.2,0,{shirt:16301008,pants:16448250,hair:9259551}],["max","M\xFCller Max",Cn,gc.x-Cn.x-4.5,2,-Math.PI/2,{shirt:16119285,pants:12434877,hair:5125166,strawHat:!0,band:15658734}],["karl","Schmied Karl",Cn,14,-8.8,-.4,{shirt:3622735,pants:4073251,hair:2171169}],["hanna","Hirtin Hanna",Cn,-8,8,2.6,{shirt:8505220,pants:6111287,hair:14267242,hood:5606191}],["leo","Leo",Cn,6,6,3.4,{shirt:16758605,pants:3754411,hair:7162945,hood:1402304,kid:!0,redMouth:!0}],["greta","Greta",Cn,-3,-5,.5,{shirt:12216520,pants:6174129,hair:16361509,kid:!0}],["otto","Opa Otto",Cn,4,22,Math.PI,{shirt:9268835,pants:5125166,hair:14737632}],["knut","Kapit\xE4n Knut",St,0,-2.5,0,{shirt:1713022,pants:2503224,hair:15658734}],["fiete","Fischer Fiete",St,st.x-st.r-3-St.x,st.z-St.z-3,Math.PI/2,{shirt:16763432,pants:3622735,hair:12550208,strawHat:!0,band:2001125}],["nele","Netzflickerin Nele",St,11,7,-1,{shirt:5099745,pants:4545124,hair:4073251}],["jan","Jan",St,-7,4,1.2,{shirt:15684432,pants:1402304,hair:16764032,kid:!0}],["mia","Mia",St,-3,20,Math.PI,{shirt:10275941,pants:3369246,hair:6111287}],["rosi","Oma Rosi",_t,3,14,Math.PI,{shirt:9315498,pants:4854924,hair:16119285}],["frieda","B\xE4uerin Frieda",_t,15.5,4,Math.PI/2,{shirt:10586239,pants:6111287,hair:15094016,strawHat:!0,band:15022389}],["lina","Lina",_t,-6,5,2.4,{shirt:16744619,pants:35195,hair:2171169,kid:!0}],["bodo","Bauer Bodo",_t,-3,-20,0,{shirt:7179066,pants:5125166,hair:7951688,strawHat:!0,band:7162945}]];function C_(n){let e=document.createElement("canvas");e.width=512,e.height=96;let t=e.getContext("2d");t.font="bold 46px system-ui, sans-serif",t.textAlign="center";let i=Math.min(500,t.measureText(n).width+40);t.fillStyle="rgba(0,0,0,0.55)",t.beginPath(),t.roundRect(256-i/2,14,i,68,22),t.fill(),t.fillStyle="#fff",t.fillText(n,256,64);let r=new kt(e);r.colorSpace=tt;let s=new zn(new An({map:r,depthTest:!1,transparent:!0}));return s.scale.set(2.6,.49,1),s.renderOrder=9,s}var pc=null;function P_(){if(!pc){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d");t.fillStyle="#ffd54f",t.strokeStyle="#5d4037",t.lineWidth=8,t.beginPath(),t.arc(64,64,54,0,7),t.fill(),t.stroke(),t.fillStyle="#4e2a10",t.font="bold 92px system-ui, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("?",64,70),pc=new kt(e),pc.colorSpace=tt}let n=new zn(new An({map:pc,transparent:!0,fog:!1}));return n.scale.set(.95,.95,1),n.renderOrder=8,n}function L_(n,e){for(let t=0;t<14;t+=.75)for(let i=0;i<6.28;i+=.4){let r=n+Math.sin(i)*t,s=e+Math.cos(i)*t;if(!an(r,s,.8))return{x:r,z:s}}return{x:n,z:e}}function y0(n,e){wt=e;for(let[s,a,o,l,c,h,u]of R_){let d=qs({weapons:[],...u}),p=o.x+l,f=o.z+c;d.root.position.set(p,0,f),d.root.rotation.y=h,u.kid&&d.root.scale.setScalar(.72),u.redMouth&&d.body.add(R(new ae(.09,.025,.02),B(13959168),0,1.71,.15));let g=C_("\u{1F4AC} "+a);g.position.y=u.kid?3.1:2.45,g.visible=!1,d.root.add(g),n.add(d.root),Be.push({x:p,z:f,r:.45});let m={id:s,name:a,h:d,root:d.root,face:h,yaw:h,label:g,phase:Math.random()*6};h0[s]&&(m.quest=h0[s],m.mark=P_(),d.root.add(m.mark)),ro.push(m)}Jr=new ge;let t=B(16775393,{side:Ot});for(let s=0;s<4;s++){let a=new ge;a.rotation.z=s*Math.PI/2,a.add(R(new ae(.2,7,.15),io,0,3.5,0),R(new ae(1.4,5.2,.05),t,.8,4.2,0)),Jr.add(a)}Jr.position.set(gc.x-3.2,9,gc.z),Jr.rotation.y=-Math.PI/2,n.add(Jr),dc=R(new dn(st.r,48),new je({color:3114696,roughness:.08,metalness:.35,transparent:!0,opacity:.88}),st.x,.05,st.z),dc.rotation.x=-Math.PI/2,dc.castShadow=!1,n.add(dc);for(let s of fc){let a=new je({color:s.hex,roughness:.5,emissive:s.hex,emissiveIntensity:0}),o=R(new ue(1.3,1.45,.16,20),a,s.x,.08,s.z);o.castShadow=!1,n.add(o),g0.push(a)}Lt=new ge;let i=B(9263659),r=new je({color:16766287,emissive:16752640,emissiveIntensity:.6,metalness:.5,roughness:.3});Lt.add(R(new ae(1.6,.9,1),i,0,.45,0),R(new ae(1.64,.12,1.04),r,0,.8,0)),Lt.lid=new ge,Lt.lid.position.set(0,.9,-.5),Lt.lid.add(R(new ae(1.6,.35,1),i,0,.17,.5),R(new ae(.25,.3,.06),r,0,.05,1.02)),Lt.add(Lt.lid),Lt.gems=new ge,[4244735,16728193,6942894,16766784,11766015].forEach((s,a)=>{Lt.gems.add(R(new Bn(.16),new je({color:s,emissive:s,emissiveIntensity:1.2}),-.5+a*.25,.95,a%2*.2-.1))}),Lt.gems.visible=!1,Lt.add(Lt.gems),Lt.position.set(to.x,0,to.z),n.add(Lt),Be.push({x:to.x,z:to.z,r:.9});for(let[s,a]of __){let{x:o,z:l}=L_(s,a),c=ac("chicken");c.root.position.set(o,0,l),n.add(c.root),Qt.push({h:c,root:c.root,home:{x:o,z:l},state:"wild",who:-1,walk:0,moving:!1,heading:Math.random()*6,t:0,tx:o,tz:l})}eo(n,17.6,60,-Math.PI/2,["\u{1F3D8}\uFE0F Zu den D\xF6rfern \u27A1","M\xFChlbach \xB7 Seedorf","H\xFCgelhausen"]),eo(n,17,100,Math.PI,["Wegweiser","\u27A1 M\xFChlbach","\u2B05 Seedorf","\u2B06 H\xFCgelhausen"]),eo(n,Cn.x+7,Cn.z+24,0,["M\xFChlbach","Wer hat den Kuchen geklaut?"]),eo(n,St.x+3,St.z+24,0,["Seedorf","Ahoi! \u2693"]),eo(n,_t.x+3,_t.z-24,Math.PI,["H\xFCgelhausen","R\xE4tsel und H\xFChner"])}var vi={},u0=n=>n.page.choices.length;function _c(n){let e=vi[n.index];wt.show(n.index,e?{n:e.npc.name,t:e.page.text,c:e.page.choices.map(t=>t[0]),s:e.sel}:null)}function vc(n){vi[n.index]&&(delete vi[n.index],n.holdAtk=!0,n.cooldown=Math.max(n.cooldown,.3),_c(n))}function gd(n,e=3.2){let t=null,i=e;for(let r of ro){let s=Math.hypot(r.root.position.x-n.x,r.root.position.z-n.z);s<i&&(t=r,i=s)}return t}function xd(n){if(vi[n.index])return!0;let e=gd(n.root.position);if(!e)return!1;let t=v0[e.id](n);return vi[n.index]={npc:e,page:t,sel:0},n.dlgPrev={a:!0,n:0},wt.sfx("pickup"),_c(n),!0}function ao(n,e){var s;let t=vi[n.index];if(!t)return;let i=t.page.choices[e];if(!i)return;let r=i[1]?i[1](n):null;r&&vi[n.index]===t?(t.page=r,t.sel=0,n.dlgPrev={a:!0,n:((s=n.dlgPrev)==null?void 0:s.n)||0},_c(n)):vc(n)}function _0(n){let e=vi[n.index];if(!e)return!1;let t=n.input,i=t.turn>.5||t.fwd>.5?-1:t.turn<-.5||t.fwd<-.5?1:0,r=n.dlgPrev||{a:!1,n:0};i&&i!==r.n&&(e.sel=(e.sel+i+u0(e))%u0(e),_c(n));let s=t.attack&&!r.a;return n.dlgPrev={a:t.attack,n:i},s&&ao(n,e.sel),!0}var I_=[0,1].map(n=>{let e=document.createElement("div");return e.className="dlg",e.id="dlg"+n,e.hidden=!0,e.innerHTML='<div class="dlgName"></div><div class="dlgText"></div><div class="dlgChoices"></div><div class="dlgHint"></div>',document.body.appendChild(e),e}),M0=()=>{},E0=n=>M0=n;function vd(n,e,t){let i=I_[n];if(!e){i.hidden=!0,i.dataset.key="";return}i.hidden=!1;let r=e.n+"|"+e.t+"|"+e.c.join("|");if(i.dataset.key!==r){i.dataset.key=r,i.querySelector(".dlgName").textContent=e.n,i.querySelector(".dlgText").textContent=e.t,i.querySelector(".dlgHint").textContent=t;let s=i.querySelector(".dlgChoices");s.innerHTML="",e.c.forEach((a,o)=>{let l=document.createElement("button");l.textContent=a,l.tabIndex=-1,l.addEventListener("pointerdown",c=>{c.preventDefault(),c.stopPropagation(),M0(n,o)}),s.appendChild(l)})}[...i.querySelectorAll(".dlgChoices button")].forEach((s,a)=>s.classList.toggle("sel",a===e.s))}var d0=new Set;function b0(n,e){for(let t of e){(t.dead>0||t.out)&&vi[t.index]&&vc(t),t.holdAtk&&!t.input.attack&&(t.holdAtk=!1);let i=vi[t.index];i&&Math.hypot(i.npc.root.position.x-t.root.position.x,i.npc.root.position.z-t.root.position.z)>6&&vc(t);for(let r of si){let s=t.index+r.id;!d0.has(s)&&Math.hypot(t.root.position.x-r.x,t.root.position.z-r.z)<r.r&&(d0.add(s),wt.msg(t.index,`\u{1F3D8}\uFE0F Willkommen in ${r.name}! Geh zu den Leuten hin und dr\xFCck ${wt.talkKey()}, um mit ihnen zu sprechen.`,5e3),wt.sfx("levelUp"))}}D_(e),U_(n,e)}var p0={};function D_(n){if(!Se.solved.colors)for(let e of n){if(e.dead>0||e.out||e.root.position.y>1)continue;let t=e.root.position,i=fc.findIndex(a=>Math.hypot(t.x-a.x,t.z-a.z)<1.35);if(i===p0[e.index]||(p0[e.index]=i,i<0))continue;let r=fc[i],s=mc.indexOf(r.color);s<Se.seq||(s===Se.seq?(Se.seq++,wt.sfx("clink"),wt.float(`${r.name}! \u2728`,"#ffffff",t),Se.seq>=mc.length&&(wt.sfx("poof"),wt.float("Die Kiste geht auf! \u{1F9F0}","#ffd54f",to),yc("colors",e))):(Se.seq=0,wt.sfx("plop"),wt.msg(e.index,"\u274C Falsche Reihenfolge! Alle Steine sind wieder aus. Fang noch mal von vorne an.",3500)))}}function U_(n,e){let t={};for(let i of Qt){i.t+=n;let r=i.root.position,s=null,a=null,o=2;if(i.state==="follow"){let u=e[i.who];if(!u||u.dead>0||u.out||Math.hypot(u.root.position.x-r.x,u.root.position.z-r.z)>30)i.state="wild",i.who=-1;else{let p=1.4+(t[i.who]=(t[i.who]||0)+1)*.9;if(s=u.root.position.x-Math.sin(u.heading)*p,a=u.root.position.z-Math.cos(u.heading)*p,o=10,Math.hypot(s-r.x,a-r.z)>9&&!an(s,a,.3)&&(r.x=s,r.z=a),y_(r.x,r.z)){i.state="pen",i.who=-1,wt.sfx("poof"),wt.float("Gack! Zu Hause! \u{1F414}","#ffe0b2",r);let f=Qt.filter(g=>g.state==="pen").length;f>=Qt.length?yc("chickens",u):wt.msg(u.index,`\u{1F414} Huhn zur\xFCck im Stall! Noch ${Qt.length-f} weggelaufen.`,3500)}}}if(i.state==="wild"){let u=e.find(d=>!(d.dead>0)&&!d.out&&d.root.position.y<1.5&&Math.hypot(d.root.position.x-r.x,d.root.position.z-r.z)<2.6);u&&(i.state="follow",i.who=u.index,wt.sfx("pickup"),wt.float("Gack gack! \u{1F414}","#ffe0b2",r),wt.msg(u.index,"\u{1F414} Das Huhn l\xE4uft dir hinterher! Bring es zu B\xE4uerin Frieda in den H\xFChnerstall in H\xFCgelhausen.",4e3))}if(s===null){if(i.t>2.5){i.t=0;let u=i.state==="pen"?{x:(Ue.x1+Ue.x2)/2,z:(Ue.z1+Ue.z2)/2,r:3}:{x:i.home.x,z:i.home.z,r:4},d=Math.random()*6.28,p=Math.random()*u.r;i.tx=u.x+Math.sin(d)*p,i.tz=u.z+Math.cos(d)*p}s=i.tx,a=i.tz,o=1.5}let l=s-r.x,c=a-r.z,h=Math.hypot(l,c);if(i.moving=h>.4,i.moving){let u=Math.min(o,h*3)*n;i.heading=Math.atan2(l,c),kn(i.root,l/h*u,c/h*u,.25)}}}function S0(n,e){Kr+=n,Jr&&(Jr.rotation.z-=n*.8);for(let t of ro){let i=null,r=9;for(let l of e){if(l.out)continue;let c=Math.hypot(l.root.position.x-t.root.position.x,l.root.position.z-t.root.position.z);c<r&&(i=l,r=c)}let a=((i&&r<6?Math.atan2(i.root.position.x-t.root.position.x,i.root.position.z-t.root.position.z):t.face)-t.yaw)%(Math.PI*2);a>Math.PI&&(a-=Math.PI*2),a<-Math.PI&&(a+=Math.PI*2),t.yaw+=a*Math.min(1,n*5),t.root.rotation.y=t.yaw,t.label.visible=!!i,t.mark&&(t.mark.visible=!Se.solved[t.quest],t.mark.position.y=(t.label.visible?3.25:2.75)+Math.sin(Kr*2.5+t.phase)*.12,t.mark.material.rotation=Math.sin(Kr*1.8+t.phase)*.15);let o=i&&r<3.2?Math.sin(Kr*6+t.phase)*.35-2.4:-.15+Math.sin(Kr*1.5+t.phase)*.05;Ys(t.h,0,!1,o,-.15)}if(fc.forEach((t,i)=>{let r=Se.solved.colors||mc.indexOf(t.color)<Se.seq;g0[i].emissiveIntensity=r?.9+Math.sin(Kr*4)*.2:.05}),Lt){let t=Se.solved.colors;Lt.lid.rotation.x+=((t?-1.9:0)-Lt.lid.rotation.x)*Math.min(1,n*3),Lt.gems.visible=t,t&&(Lt.gems.rotation.y+=n)}for(let t of Qt){t.moving&&(t.walk+=n*14),oc(t.h,t.walk,t.moving);let i=(t.heading-t.root.rotation.y)%(Math.PI*2);i>Math.PI&&(i-=Math.PI*2),i<-Math.PI&&(i+=Math.PI*2),t.root.rotation.y+=i*Math.min(1,n*10)}}var dd=n=>Math.round(n*100)/100,w0=()=>({s:oi.map(n=>Se.solved[n.id]?1:0),q:Se.seq,c:Qt.map(n=>[dd(n.root.position.x),dd(n.root.position.z),dd(n.heading),n.moving?1:0])});function T0(n){n&&(oi.forEach((e,t)=>Se.solved[e.id]=!!n.s[t]),Se.seq=n.q,n.c.forEach(([e,t,i,r],s)=>{let a=Qt[s];a&&(a.root.position.x+=(e-a.root.position.x)*.5,a.root.position.z+=(t-a.root.position.z)*.5,a.heading=i,a.moving=!!r)}))}var yd=()=>({solved:oi.filter(n=>Se.solved[n.id]).map(n=>n.id),heard:[...Se.heard],riddle:Se.riddle,pen:Qt.map((n,e)=>n.state==="pen"?e:-1).filter(n=>n>=0)});function A0(n){if(!n)return;for(let t of n.solved||[])oi.some(i=>i.id===t)&&(Se.solved[t]=!0);for(let t of n.heard||[])v0[t]&&Se.heard.add(t);Se.riddle=Math.max(0,Math.min(no.length-1,Math.round(Number(n.riddle)||0))),Se.solved.colors&&(Se.seq=mc.length);let e=Se.solved.chickens?Qt.map((t,i)=>i):n.pen||[];for(let t of e){let i=Qt[t];i&&(i.state="pen",i.root.position.set((Ue.x1+Ue.x2)/2+(Math.random()-.5)*4,0,(Ue.z1+Ue.z2)/2+(Math.random()-.5)*3),i.tx=i.root.position.x,i.tz=i.root.position.z)}}function R0(n){for(let e of n)vc(e);Se.solved={},Se.heard.clear(),Se.seq=0,Se.riddle=0;for(let e of Qt)e.state="wild",e.who=-1,e.root.position.set(e.home.x,0,e.home.z),e.tx=e.home.x,e.tz=e.home.z}var Zi=150,pd=null,gn=(n,e)=>[(n+ct)/(2*ct)*Zi,(e+ct)/(2*ct)*Zi];function z_(){let n=document.createElement("canvas");n.width=n.height=Zi*2;let e=n.getContext("2d");e.scale(2,2),e.fillStyle="#4f7f35",e.fillRect(0,0,Zi,Zi);let t=Zi/(2*ct);e.strokeStyle="#c8a46a",e.lineWidth=Math.max(1.5,pr*t),e.lineCap="round",e.beginPath(),e.moveTo(...gn(0,70)),e.lineTo(...gn(0,-82));for(let[r,s,a,o]of Fr)e.moveTo(...gn(r,s)),e.lineTo(...gn(a,o));e.stroke(),e.fillStyle="#9e9a92";for(let r of Xr)e.beginPath(),e.arc(...gn(r.x,r.z),r.r*t,0,7),e.fill();e.fillStyle="#3a8fd0";for(let r of[Yu,st])e.beginPath(),e.arc(...gn(r.x,r.z),r.r*t+1,0,7),e.fill();let i=(r,s,a,o)=>{e.fillStyle=a,e.beginPath(),e.arc(...gn(r,s),o,0,7),e.fill()};i(mt.x,mt.z,"#1e63d6",5),i(Wr.x,Wr.z,"#c62828",6),e.font="13px system-ui, sans-serif",e.textAlign="center",e.textBaseline="middle";for(let r of si)e.fillText("\u{1F3D8}\uFE0F",...gn(r.x,r.z));return e.fillText("\u{1F3F0}",...gn(mt.x,mt.z)),e.strokeStyle="#000a",e.lineWidth=3,e.strokeRect(0,0,Zi,Zi),n}var C0=[0,1].map(n=>{let e=document.createElement("canvas");return e.className="minimap",e.id="map"+n,e.width=e.height=Zi*2,document.body.appendChild(e),e}),f0=[0,0];function P0(n,e,t,i=[]){if((f0[n]-=t)>0)return;f0[n]=.15,pd||(pd=z_());let r=C0[n].getContext("2d");r.setTransform(1,0,0,1,0,0),r.drawImage(pd,0,0),r.scale(2,2);let s=ro.filter(l=>l.quest&&!Se.solved[l.quest]).map(l=>gn(l.root.position.x,l.root.position.z));for(let l=0;l<4;l++)for(let c=0;c<s.length;c++)for(let h=c+1;h<s.length;h++){let u=s[h][0]-s[c][0],d=s[h][1]-s[c][1],p=Math.hypot(u,d)||.01;if(p>=10)continue;let f=(10-p)/2;s[c]=[s[c][0]-u/p*f,s[c][1]-d/p*f],s[h]=[s[h][0]+u/p*f,s[h][1]+d/p*f]}let a=4.6+Math.sin(Kr*5)*.7;r.textBaseline="middle";for(let[l,c]of s)r.fillStyle="#ffd54f",r.strokeStyle="#3e2723",r.lineWidth=1.2,r.beginPath(),r.arc(l,c,a,0,7),r.fill(),r.stroke(),r.fillStyle="#3e2723",r.font="bold 8px system-ui, sans-serif",r.textAlign="center",r.fillText("?",l,c+.5);r.font="11px system-ui, sans-serif";for(let l of i)r.fillText(l.icon,...gn(l.x,l.z).map((c,h)=>c+(h?-9:9)));r.textBaseline="alphabetic",r.font="10px system-ui, sans-serif",r.textAlign="center";let o={muehle:Se.solved.cake,see:Se.solved.colors,huegel:Se.solved.riddles&&Se.solved.chickens};for(let l of si)o[l.id]&&r.fillText("\u2B50",gn(l.x,l.z)[0]+9,gn(l.x,l.z)[1]-8);for(let l of e){if(l.out)continue;let[c,h]=gn(l.root.position.x,l.root.position.z);r.save(),r.translate(c,h),r.rotate(Math.PI-l.heading),r.fillStyle=l.index===n?"#ffeb3b":"#ff9800",r.strokeStyle="#000",r.lineWidth=1,r.beginPath(),r.moveTo(0,-6),r.lineTo(4.5,5),r.lineTo(-4.5,5),r.closePath(),r.fill(),r.stroke(),r.restore()}}var L0=(n,e)=>C0[n].style.display=e?"block":"none";var N_=2.45,_d=17,U0=11,O_=85,It={x:mt.x+fn.x,z:mt.z+fn.z},oo=pn-1.25,z0=[{x:It.x,z:It.z+5.4,yaw:Math.PI},{x:It.x+5.4,z:It.z,yaw:-Math.PI/2}],H_=[{body:3055183,belly:15913323,wing:9167722,horn:16774102},{body:12986408,belly:16764032,wing:16747109,horn:16774102}],I0=(()=>{let n=si.find(e=>e.id==="muehle");return{x:n.x+24,z:n.z}})(),B_=[{x:mt.x,z:mt.z,r:17,h:17},{x:Wr.x,z:Wr.z,r:28,h:20},{x:I0.x,z:I0.z,r:7,h:15}],N0=["away","perch","fly","land","rest","return"],ht=null,Xn=[],Mc=0,Ec=!1,Md=!1,D0={};function k_(){let n=new Hn;return n.moveTo(0,.5),n.lineTo(2.2,1.3),n.lineTo(4.4,1.6),n.lineTo(5.6,.6),n.lineTo(4.6,-.2),n.lineTo(3.9,-1.1),n.lineTo(2.9,-.6),n.lineTo(2.1,-1.5),n.lineTo(1,-1),n.lineTo(0,-1.2),n.closePath(),new Ua(n)}function F_(n){let e=new ge,t=new ge;t.rotation.order="YXZ",e.add(t);let i=B(n.body,{roughness:.6}),r=B(n.belly,{roughness:.8}),s=B(n.horn,{roughness:.5}),a=R(new Ee(1,20,14),i,0,1.75,0);a.scale.set(1.05,.9,1.9),t.add(a);let o=R(new Ee(1,16,12),r,0,1.55,.15);o.scale.set(.85,.75,1.65),t.add(o);for(let M=0;M<6;M++){let I=-.7-M*.45;t.add(R(new Je(.16,.45,6),s,0,2.55-M*.12,I))}let l=R(new On(.42,1.3,6,12),i,0,2.55,2);l.rotation.x=.85,t.add(l);let c=new ge;c.position.set(0,3.25,2.75),t.add(c);let h=R(new Ee(.55,16,12),i,0,0,0);h.scale.set(1,.85,1.15),c.add(h),c.add(R(new ae(.62,.42,.85),i,0,-.12,.65)),c.add(R(new ae(.5,.12,.7),r,0,-.34,.6));for(let M of[-1,1]){let I=R(new Je(.1,.6,6),s,M*.28,.45,-.25);I.rotation.x=-.6,c.add(I),c.add(R(new Ee(.13,10,8),B(16777215,{roughness:.3}),M*.3,.12,.3)),c.add(R(new Ee(.07,8,6),B(1118481,{roughness:.2}),M*.33,.13,.4)),c.add(R(new Ee(.04,6,5),B(2236962),M*.14,.02,1.08))}let u=new ge;u.position.set(0,-.15,1.1);let d=(M,I)=>new Tn({color:M,transparent:!0,opacity:I,depthWrite:!1,fog:!1,userData:{fire:!0}}),p=new Ge(new Je(.9,5,14,1,!0),d(16733986,.8)),f=new Ge(new Je(.45,3.4,12,1,!0),d(16763432,.95));for(let M of[p,f])M.rotation.x=-Math.PI/2,M.position.z=M.geometry.parameters.height/2,u.add(M);u.visible=!1,c.add(u);let g=[],m=t,y=0,x=1.55,v=-1.7;for(let M=0;M<7;M++){let I=new ge;I.position.set(y,x,v),m.add(I);let O=.42-M*.05;I.add(R(new Ee(O,10,8),i,0,0,-.3)),g.push(I),m=I,y=0,x=-.06,v=-.55}let S=R(new Je(.3,.6,4),s,0,0,-.55);S.rotation.x=-Math.PI/2,S.scale.z=.35,m.add(S);let C=[];for(let[M,I]of[[-.6,.9],[.6,.9],[-.65,-.9],[.65,-.9]]){let O=new ge;O.position.set(M,1.15,I),O.add(R(new On(.2,.6,4,8),i,0,-.45,0)),O.add(R(new ae(.34,.14,.45),r,0,-.95,.1)),t.add(O),C.push(O)}let E=[],_=B(n.wing,{roughness:.7,side:Ot}),D=k_();for(let M of[1,-1]){let I=new ge;I.position.set(M*.8,2.35,.35);let O=new Ge(D,_);O.rotation.x=Math.PI/2,O.castShadow=!0;let L=new ge;L.scale.x=M,L.add(O);let k=R(new ue(.07,.05,4.6,6),i,2.3,.02,1.15);k.rotation.z=Math.PI/2,k.rotation.y=-.22,L.add(k),I.add(L),t.add(I),E.push({pivot:I,s:M})}return e.traverse(M=>{M.isMesh&&!M.material.userData.fire&&(M.castShadow=!0)}),{root:e,body:t,head:c,flame:u,tail:g,legs:C,wings:E}}function O0(n,e){ht=e,z0.forEach((t,i)=>{let r=F_(H_[i]);r.root.visible=!1,n.add(r.root),Xn.push({k:i,m:r,perch:t,state:"away",rider:-1,x:t.x,y:oo,z:t.z,yaw:t.yaw,bank:0,pitch:0,fire:0,flap:Math.random()*6,t:0,target:null,prevAtk:!0})})}var Sc=()=>ht.solvedAll()&&ht.towerBuilt(),H0=n=>n.root.position.y>pn-.4&&Math.hypot(n.root.position.x-It.x,n.root.position.z-It.z)<3;function Ed(n,e){let t=9;for(let i of Xr)Math.hypot(n-i.x,e-i.z)<i.r+7&&(t=Math.max(t,i.h+3));for(let i of B_)Math.hypot(n-i.x,e-i.z)<i.r&&(t=Math.max(t,i.h));return t}var B0=(n,e,t)=>Math.max(Ed(n,e),Ed(n+Math.sin(t)*14,e+Math.cos(t)*14));function k0(n,e){e.root.position.set(n.x+Math.sin(n.yaw)*.15,n.y+N_,n.z+Math.cos(n.yaw)*.15),e.heading=e.bodyYaw=n.yaw}function F0(n){if(!Sc()||n.riding!=null||n.dead>0||n.out)return!1;let e=null;return H0(n)?e=Xn.filter(t=>t.state==="perch").sort((t,i)=>Math.hypot(t.x-n.root.position.x,t.z-n.root.position.z)-Math.hypot(i.x-n.root.position.x,i.z-n.root.position.z))[0]:e=Xn.find(t=>t.state==="rest"&&n.root.position.y<1&&Math.hypot(t.x-n.root.position.x,t.z-n.root.position.z)<4.5),e?(e.state="fly",e.rider=n.index,e.prevAtk=!0,n.riding=e.k,e.y<1&&(e.y=.5),k0(e,n),ht.sfx("levelUp"),ht.float("\u{1F409} Los geht's!","#ffd54f",n.root.position),ht.msg(n.index,`\u{1F409} Festhalten! ${ht.flyHelp(n)}`,7e3),!0):!1}function bc(n,e,t,i,r){e.riding=null,n.rider=-1,e.root.position.set(t,i,r),e.holdAtk=!0,e.cooldown=Math.max(e.cooldown||0,.4),e.camInit=!1}function G_(n,e){for(let t=0;t<22;t+=1.5)for(let i=0;i<6.28;i+=.5){let r=n+Math.sin(i)*t,s=e+Math.cos(i)*t;if(!(Math.abs(r)>ct-6||Math.abs(s)>ct-6)&&Wi(r,s,0)===0&&Wi(r+1.5,s,0)===0&&Wi(r-1.5,s,0)===0&&Wi(r,s+1.5,0)===0&&Wi(r,s-1.5,0)===0)return{x:r,z:s}}return null}function V_(n,e){let t=e.root.position;if(Math.hypot(t.x-It.x,t.z-It.z)<28){n.state="land",n.target={x:n.perch.x,y:oo,z:n.perch.z,tower:!0},ht.msg(e.index,"\u{1F409} Zur\xFCck zum Festturm!",2500);return}let i=G_(t.x,t.z);if(!i){ht.msg(e.index,"\u{1F409} Hier ist kein Platz zum Landen. Flieg \xFCber eine freie Wiese!",3e3);return}n.state="land",n.target={x:i.x,y:0,z:i.z,tower:!1},ht.msg(e.index,"\u{1F409} Der Drache landet \u2026",2500)}function bd(n,e,t,i){let r=(e-n.yaw)%(Math.PI*2);r>Math.PI&&(r-=Math.PI*2),r<-Math.PI&&(r+=Math.PI*2);let s=Math.max(-t*i,Math.min(t*i,r));return n.yaw+=s,s/Math.max(i,1e-4)}function G0(n,e,t,i){let r=e.x-n.x,s=e.z-n.z,a=Math.hypot(r,s),o=0;if(a>.3){o=bd(n,Math.atan2(r,s),2.2,t);let h=Math.min(i,a*1.6+1.5)*t;n.x+=r/a*Math.min(h,a),n.z+=s/a*Math.min(h,a)}else e.yaw!==void 0&&bd(n,e.yaw,2.5,t);let l=a>9?Math.max(e.y,B0(n.x,n.z,n.yaw)):e.y,c=Math.max(-8,Math.min(U0,(l-n.y)*2.5));return n.y+=c*t,n.pitch+=(-c*.035-n.pitch)*Math.min(1,t*4),n.bank+=(-o*.25-n.bank)*Math.min(1,t*4),a<.3&&Math.abs(e.y-n.y)<.15}function V0(n,e){if(n.riding==null)return!1;let t=Xn[n.riding];if(!t||t.rider!==n.index)return n.riding=null,!1;let i=n.input;n.swapReq&&t.fire<=0&&(t.fire=1.4,ht.sfx("poof"));let r=i.attack&&!t.prevAtk;if(t.prevAtk=i.attack,t.state==="fly"){r&&V_(t,n);let s=i.turn*1.5;t.yaw+=s*e;let a=B0(t.x,t.z,t.yaw),o=i.fwd*U0;t.y=Math.min(O_,t.y+o*e),t.y<a&&(t.y+=(a-t.y)*Math.min(1,e*3)),t.x+=Math.sin(t.yaw)*_d*e,t.z+=Math.cos(t.yaw)*_d*e;let l=ct-8;(Math.abs(t.x)>l||Math.abs(t.z)>l)&&(t.x=Math.max(-l,Math.min(l,t.x)),t.z=Math.max(-l,Math.min(l,t.z)),(n.edgeT||0)<performance.now()&&(n.edgeT=performance.now()+4e3,ht.msg(n.index,"\u{1F409} Hier ist die Welt zu Ende. Dreh um!",2500))),t.bank+=(-s*.32-t.bank)*Math.min(1,e*4),t.pitch+=(-i.fwd*.3-t.pitch)*Math.min(1,e*4)}else if(t.state==="land"&&G0(t,t.target,e,_d)){if(t.target.tower)t.state="perch",t.yaw=t.perch.yaw,bc(t,n,It.x+(t.perch.x-It.x)*.2,pn,It.z+(t.perch.z-It.z)*.2);else{t.state="rest",t.t=0,t.y=0;let s=t.x+Math.cos(t.yaw)*2.6,a=t.z-Math.sin(t.yaw)*2.6;Wi(s,a,0)===0?bc(t,n,s,0,a):bc(t,n,t.x,0,t.z),ht.msg(n.index,"\u{1F409} Gelandet! Dr\xFCck noch mal neben dem Drachen, dann geht es wieder los. Sonst fliegt er gleich zur\xFCck zum Turm.",4500)}return ht.sfx("plop"),!0}return k0(t,n),!0}function W0(n,e){let t=Sc();for(let i of Xn){i.fire>0&&(i.fire-=n);let r=i.rider>=0?e[i.rider]:null;if(i.rider>=0&&(!r||r.riding!==i.k)&&(i.rider=-1,i.state="return"),!t){i.rider>=0&&r&&bc(i,r,r.root.position.x,0,r.root.position.z),i.state="away";continue}i.state==="away"&&(i.state="return",i.x=It.x+160*(i.k?-1:1),i.z=It.z+140,i.y=60,i.yaw=Math.atan2(It.x-i.x,It.z-i.z)),i.state==="rest"&&(i.t+=n)>6&&(i.state="return"),i.state==="return"&&G0(i,{x:i.perch.x,y:oo,z:i.perch.z,yaw:i.perch.yaw},n,13)&&(i.state="perch"),i.state==="perch"&&(bd(i,i.perch.yaw,2,n),i.y=oo,i.bank*=.9,i.pitch*=.9)}t&&!Ec&&(Ec=!0,ht.later(15,()=>ht.gmsg("\u{1F409} Zwei Drachen sind auf euren Festturm geflogen! Lauft die Wendeltreppe ganz nach oben und dr\xFCckt dort die Zauber-Taste zum Aufsteigen!",8e3))),t||(Ec=!1),ht.solvedAll()&&!ht.towerBuilt()&&ht.kid()&&!Md&&(Md=!0,ht.later(15,()=>ht.gmsg("\u{1F409} Ein Drache sucht einen Landeplatz! Baut in der Werkstatt den Festturm \u{1F3F0}, dann kommt er zu euch.",8e3)));for(let i of e)i.riding!=null||!H0(i)||(D0[i.index]||0)>performance.now()||(D0[i.index]=performance.now()+25e3,t?Xn.some(r=>r.state==="perch")&&ht.msg(i.index,`\u{1F409} Dr\xFCck ${ht.talkKey()}, um auf den Drachen zu steigen!`,4e3):ht.msg(i.index,`\u{1F409} Hier oben landet ein Drache, wenn ihr alle Dorfr\xE4tsel gel\xF6st habt (noch ${ht.missing()}). Schaut auf der kleinen Karte nach den \u2753!`,5e3))}function X0(n,e){Mc+=n;let t=Sc();for(let i of Xn){let{m:r}=i;if(!e&&i.tx!==void 0){let h=Math.min(1,n*15);Math.abs(i.tx-i.x)+Math.abs(i.tz-i.z)>20&&(i.x=i.tx,i.y=i.ty,i.z=i.tz),i.x+=(i.tx-i.x)*h,i.y+=(i.ty-i.y)*h,i.z+=(i.tz-i.z)*h,i.yaw+=((i.tyaw-i.yaw+Math.PI*3)%(Math.PI*2)-Math.PI)*h}if(r.root.visible=t&&i.state!=="away",!r.root.visible)continue;let s=i.state==="rest",a=i.state==="perch"?Math.sin(Mc*2+i.k)*.2:0;r.root.position.set(i.x,i.y+a,i.z),r.root.rotation.y=i.yaw,r.body.rotation.x=i.pitch,r.body.rotation.z=i.bank,i.flap+=n*(s?0:i.state==="perch"?5:i.pitch<-.1?8:4.5);let o=i.state==="fly"&&i.pitch>.1,l=s?.9:o?.1+Math.sin(i.flap)*.08:Math.sin(i.flap)*.6+.1;for(let h of r.wings)h.pivot.rotation.z=h.s*l;r.tail.forEach((h,u)=>{h.rotation.y=Math.sin(Mc*2.2-u*.6)*.18,h.rotation.x=s?.05:-.03});let c=!s;if(r.legs.forEach((h,u)=>h.rotation.x=c?.9:0),r.head.rotation.x=Math.sin(Mc*1.3+i.k)*.06,r.flame.visible=i.fire>0,i.fire>0){e||(i.fire-=n);let h=.8+Math.random()*.4;r.flame.scale.set(h,h,.9+Math.random()*.3)}}}function j0(n){n.riding!=null&&(n.h.legs[0].rotation.x=n.h.legs[1].rotation.x=-1.3,n.h.body.position.y=0)}var W_=new w;function q0(n,e,t){if(n.riding==null)return!1;let i=Xn[n.riding],r=i?i.yaw:n.heading,s=Math.sin(r),a=Math.cos(r),o=n.root.position,l=i&&(i.state==="land"||i.state==="rest")?.6:1;return e.set(o.x-s*11,o.y+3+1.5*l,o.z-a*11),t.copy(W_.set(o.x+s*10,o.y-1.5*l,o.z+a*10)),!0}var Y0=()=>Sc()?[{x:It.x,z:It.z,icon:"\u{1F409}"}]:[],$r=n=>Math.round(n*100)/100,Z0=()=>Xn.map(n=>[N0.indexOf(n.state),n.rider,$r(n.x),$r(n.y),$r(n.z),$r(n.yaw),$r(n.bank),$r(n.pitch),n.fire>0?$r(n.fire):0]);function K0(n,e){if(n){for(let t of e)t.riding=null;n.forEach(([t,i,r,s,a,o,l,c,h],u)=>{let d=Xn[u];d&&(d.state==="away"&&(d.x=r,d.y=s,d.z=a,d.yaw=o),d.state=N0[t]||"away",d.rider=i,d.tx=r,d.ty=s,d.tz=a,d.tyaw=o,d.bank=l,d.pitch=c,h>0&&d.fire<=0&&(d.fire=h),i>=0&&e[i]&&(e[i].riding=u))})}}function J0(n){for(let e of n)e.riding=null;for(let e of Xn)e.state="away",e.rider=-1,e.fire=0,e.x=e.perch.x,e.y=oo,e.z=e.perch.z,e.yaw=e.perch.yaw;Ec=!1,Md=!1}var $0={dragons:Xn,TOWER:It,PERCHES:z0,minAlt:Ed};var we=n=>document.getElementById(n),Si=matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>1&&/Mac|iPad/.test(navigator.platform||navigator.userAgent),fo=Si||/Android/i.test(navigator.userAgent);Si&&document.body.classList.add("touch");function wg(){Si||(Si=!0,document.body.classList.add("touch"))}addEventListener("touchstart",wg,{passive:!0,capture:!0});addEventListener("pointerdown",n=>{n.pointerType==="touch"&&wg()},{capture:!0});var Tt=new Aa({antialias:!fo}),Tg=()=>({w:Math.max(1,Math.round(innerWidth)),h:Math.max(1,Math.round(innerHeight))});function xo(){let{w:n,h:e}=Tg(),t=Math.min(devicePixelRatio||1,fo?1.5:2,Math.sqrt(35e5/(n*e))),i=Tt.domElement;i.width===Math.floor(n*t)&&i.height===Math.floor(e*t)||(Tt.setPixelRatio(t),Tt.setSize(n,e))}xo();Tt.shadowMap.enabled=!0;Tt.shadowMap.type=wu;Tt.toneMapping=Au;Tt.toneMappingExposure=1.1;document.body.prepend(Tt.domElement);addEventListener("resize",xo);addEventListener("orientationchange",()=>setTimeout(xo,300));visualViewport==null||visualViewport.addEventListener("resize",xo);Tt.domElement.addEventListener("webglcontextlost",n=>{n.preventDefault(),qi("msg","Grafik wird neu geladen \u2026",3e3),setTimeout(()=>location.reload(),1500)});var ve=new Al,Ag=13625847;ve.background=new be(Ag);ve.fog=new Tl(Ag,70,240);ve.add(new Nl(13625599,5929530,1.05));var Dd=new w(70,110,40).normalize(),_i=new Bl(16773328,2.4);_i.position.copy(Dd).multiplyScalar(150);ve.add(_i.target);_i.castShadow=!0;_i.shadow.mapSize.set(fo?1024:2048,fo?1024:2048);_i.shadow.bias=-5e-4;Object.assign(_i.shadow.camera,{left:-60,right:60,top:60,bottom:-60,far:400});ve.add(_i);Cm(ve,{low:fo,sunDir:Dd,extra:m0});var Rg=()=>Si?"Tippe auf eine Antwort":"\u25C0 \u25B6 ausw\xE4hlen \xB7 Leertaste / Enter: OK",Cg=()=>Si?"den Zauber-Knopf":"Leertaste oder Enter";y0(ve,{msg:(n,e,t)=>At(n,e,t),float:(n,e,t)=>dt(n,e,t),sfx:n=>Qe(n),talkKey:Cg,show:(n,e)=>{yr(n)&&vd(n,e,Rg()),Mn(["d",n,e])},reward:X_});O0(ve,{msg:(n,e,t)=>At(n,e,t),gmsg:(n,e)=>ci(n,e),float:(n,e,t)=>dt(n,e,t),sfx:n=>Qe(n),later:(n,e)=>$i(n,e),talkKey:Cg,kid:()=>Le,solvedAll:()=>so()>=oi.length,missing:()=>oi.length-so(),towerBuilt:()=>!!gt.tower,flyHelp:n=>{if(Si&&Mt!=="local")return"Joystick hoch/runter: h\xF6her/tiefer, links/rechts: lenken. \u{1F4AC}-Knopf: landen, \u{1F504}: Feuer!";let e=n.keymap===ts.p2?["Pfeil hoch/runter","Pfeil links/rechts","Enter","Shift rechts"]:n.keymap===ts.p1?["W/S","A/D","Leertaste","Q"]:["W/S oder Pfeile","A/D oder Pfeile","Leertaste/Enter","Q"];return`${e[0]}: h\xF6her/tiefer, ${e[1]}: lenken, ${e[2]}: landen, ${e[3]}: Feuer!`}});E0((n,e)=>{Mt==="client"?Et!=null&&Et.open&&Et.send({t:"dlg",k:e}):Ae[n]&&ao(Ae[n],e)});function X_(n,e,t,i){for(let r of Ae)r.lives=Math.min(5,r.lives+1),r.hp=100;Le&&(_n.star+=3,_n.soap+=2),ci(`\u{1F3C5} ${n.icon} ${n.name}: gel\xF6st! (${t} von ${i}) Belohnung: +1 Leben f\xFCr alle${Le?", \u27283 Sternenstaub und \u{1F9FC}2 Seife ins Burglager":""}!`,6500),Qe("levelUp"),dt("\u{1F3C5} Gel\xF6st!","#ffd54f",e.root.position),t>=i&&$i(7,()=>{ci("\u{1F389} Alle Dorfr\xE4tsel gel\xF6st! Ihr seid die Helden von M\xFChlbach, Seedorf und H\xFCgelhausen! \u{1F389}",7e3),Qe("levelUp")})}var Pg=["Bauer","Ritter","Schmied","Landherr","K\xF6nig","Kaiser","Milit\xE4r"],Lg=[9136957,8029584,4868682,3046706,6953882,9071903,5597999],Ad=3,vo=Pg.length-1,Ig=3,wc=()=>Le?25:15,yo={fork:{name:"Mistgabel",icon:"\u{1F531}",melee:!0,range:3.6,cone:.2,dmg:10,cd:.45},bow:{name:"Bogen",icon:"\u{1F3F9}",melee:!1,dmg:9,cd:.6,speed:32,projectile:"arrow"},firesword:{name:"Feuerschwert",icon:"\u{1F525}",melee:!0,range:4.4,cone:-.2,dmg:25,cd:.4,special:!0},gun:{name:"Maschinengewehr",icon:"\u{1F4A5}",melee:!1,dmg:5,cd:.1,speed:60,projectile:"bullet",special:!0}},Le=!0,Ud={fork:{name:"Zauberstab",icon:"\u{1FA84}",model:"wand"},bow:{name:"Zauberkugeln",icon:"\u2728",model:"orbwand"},firesword:{name:"Sternenstab",icon:"\u2B50",model:"starstaff"},gun:{name:"Seifenblasen-Kanone",icon:"\u{1FAE7}",model:"bubbler"}},Pc=n=>Le?Ud[n].name:yo[n].name,rs=n=>Le?Ud[n].icon:yo[n].icon,Ji=n=>Le?Ud[n].model:n,Rd=n=>Le&&n===vo?"Burgheld":Pg[n],$s=(n,e)=>Le?e:n,Mt=null,ss=0,li=!1,Et=null,Ae=[],Gt=[],en=[],Dt=[],ns=[],vr=1,is=[],$i=(n,e)=>is.push({t:n,fn:e}),xr=()=>Mt!=="client",Dg=[],Mn=n=>{Mt==="host"&&Dg.push(n)},yr=n=>Mt==="local"||n===ss;function dt(n,e,t){qa(ve,n,e,t),Mn(["f",n,e,t.x,t.z])}function Qe(n){Ya[n](),Mn(["s",n])}function At(n,e,t){Ug(n,e,t),Mn(["m",n,e,t])}function ci(n,e){qi("msg",n,e),Mn(["g",n,e])}function j_(n){zg(n),Mn(["h",n.index])}function q_(n){n.hit=.15,jr(n.h,16777215),Mn(["c",n.id])}function Y_(n,e){zd(n,e),Mn(["w",n,e])}function Ug(n,e,t){yr(n)&&qi("msg"+n,e,t)}function zd(n,e){if(!yr(n))return;let t=we("wait"+n);t.textContent=e||"",t.style.display=e?"flex":"none"}function zg(n){if(n.hurt=.25,jr(n.h,11141120),!yr(n.index))return;let e=we("hurt"+n.index);e.style.opacity=1,setTimeout(()=>e.style.opacity=0,250);let t=n.hud.querySelector(".bar");t.classList.remove("shake"),t.offsetWidth,t.classList.add("shake")}var Z_=[{pants:5917234,hair:3810324,band:1991638},{pants:4864554,hair:14267242,band:15690752}],ts={p1:{fwd:["KeyW"],back:["KeyS"],left:["KeyA"],right:["KeyD"],attack:["Space"],swap:["KeyQ","KeyE"]},p2:{fwd:["ArrowUp"],back:["ArrowDown"],left:["ArrowLeft"],right:["ArrowRight"],attack:["Enter","NumpadEnter","Numpad0"],swap:["ShiftRight","ControlRight","Numpad1"]}};ts.all=Object.fromEntries(Object.keys(ts.p1).map(n=>[n,[...ts.p1[n],...ts.p2[n]]]));var K_={p1:"W A S D laufen \xB7 Leertaste angreifen \xB7 Q Waffe wechseln",p2:"Pfeiltasten laufen \xB7 Enter angreifen \xB7 Shift rechts Waffe wechseln",all:"W A S D / Pfeile laufen \xB7 Leertaste / Enter angreifen \xB7 Q / Shift Waffe wechseln"};function Qr(n,e,t){let i={index:n,name:"Spieler "+(n+1),startX:n?2.5:-2.5,startWeapon:n?"bow":"fork",keymap:ts[e],source:t,input:{fwd:0,turn:0,attack:!1},swapReq:!1};return i.h=qs({shirt:Lg[0],...Z_[n],strawHat:!0,armor:!0,weapons:["fork","bow","firesword","gun","wand","orbwand","starstaff","bubbler","axe","pickaxe"]}),i.root=i.h.root,ve.add(i.root),i.bar=Zs(),i.root.add(i.bar),i.cam=new Bt(60,1,.1,1500),i.hud=we("hud"+n),i.hud.querySelector(".keys").textContent=(K_[e]||"").replace("angreifen",Le?"zaubern":"angreifen").replace("Waffe wechseln",Le?"Zauber wechseln":"Waffe wechseln"),i.hudCache="",i.walk=0,Ng(i),i}function Dc(n){rd(n.h,n.level),n.h.mats.shirt.color.setHex(Lg[n.level]),n.index===1&&n.h.mats.shirt.color.offsetHSL(0,0,.06)}function Ng(n){n.level=0,n.kills=0,n.lives=Ig,n.out=!1,n.special=null,n.apples=0,n.pack={wood:0,stone:0,soap:0,star:0},n.toolShow="",n.toolT=0,n.weapon=n.baseWeapon=n.startWeapon,Xi(n.h,Ji(n.weapon)),Dc(n),zd(n.index,null),Og(n)}function Og(n){n.riding=null,n.root.position.set(mt.x+n.startX,0,mt.z-16),n.root.visible=!0,n.h.body.rotation.x=0,n.heading=n.bodyYaw=Math.PI,n.faceT=0,n.hp=100,n.dead=0,n.attackT=0,n.attackDur=.35,n.cooldown=0,n.hurt=0,n.moving=0,n.camDist=7,n.camInit=!1}function J_(n){let e=Math.max(0,Math.round(n.hp)),t="\u2764\uFE0F".repeat(Math.max(0,n.lives))+"\u{1F5A4}".repeat(Math.max(0,Ig-n.lives)),i=`${rs(n.weapon)} ${Pc(n.weapon)}`+(n.special&&n.weapon===n.special.type?` (${Math.ceil(n.special.t)} s)`:"")+(n.special&&n.weapon!==n.special.type?` \xB7 ${rs(n.special.type)} bereit`:""),r=n.level>=vo?"H\xF6chster Rang erreicht!":`Noch ${Ad-n.kills%Ad} ${Le?"Schelme verzaubern":"Gegner"} bis ${Rd(n.level+1)}`,s=(Le?`\u{1F34E} ${n.apples} \xC4pfel \xB7 \u{1F43E} ${Ei}/${fr.length} Tiere befreit \xB7 \u{1F48E} ${bi}/${tn.length} Sch\xE4tze \xB7 ${r}`:r)+` \xB7 \u{1F3C5} ${so()}/${oi.length} Dorfr\xE4tsel`,a=[gt.axe?"\u{1FA93}":"",gt.pickaxe?"\u26CF\uFE0F":""].join(""),o=Le?`\u{1F392} Rucksack (${Bd(n)}/${Hd}): ${Bc(n.pack)||"leer"}${a?" \xB7 Werkzeug: "+a:""}`:"",l=[e,n.level,t,i,s,o].join("|");if(l===n.hudCache)return;n.hudCache=l;let c=n.hud.querySelector(".fill");c.style.width=e+"%",c.style.background=ad(e/100),n.hud.querySelector(".hpnum").textContent=e+" / 100",n.hud.querySelector(".level").textContent=`Level ${n.level+1}: ${Rd(n.level)}`,n.hud.querySelector(".lives").textContent=t,n.hud.querySelector(".weapon").textContent=i,n.hud.querySelector(".xp").textContent=s,n.hud.querySelector(".pack").textContent=o,xi(n.bar,e/100)}var Mi=()=>Ae.filter(n=>!n.dead&&!n.out);function Uc(n,e){let t=null,i=e;for(let r of Mi()){if(r.riding!=null)continue;let s=r.root.position.distanceTo(n);s<i&&(t=r,i=s)}return t}function Hg(n,e){if(n.dead||n.out||n.riding!=null)return;let t=Math.max(1,Math.round(e*(1-.08*n.level)));n.hp-=t,j_(n),dt("-"+t,"#ff5252",n.root.position),Qe($s("hurt","plop")),n.hp<=0&&$_(n)}function $_(n){if(n.hp=0,n.lives--,n.dead=3,n.special=null,yo[n.weapon].special&&(n.weapon=n.baseWeapon,Xi(n.h,Ji(n.weapon))),Qe("lifeLost"),n.lives>0){At(n.index,`Autsch! Noch ${n.lives} ${n.lives===1,"Leben"}. Gleich geht es in der Burg weiter.`,3e3);return}if(n.out=!0,Ae.every(e=>e.out))ci(Ae.length===1?"Keine Leben mehr! Neues Spiel als Bauer \u2026":"Beide sind besiegt! Neues Spiel als Bauern \u2026",4e3),$i(4,ox);else{let e=Ae.find(t=>t!==n);Y_(n.index,`Keine Leben mehr! Warte, bis ${e.name} auch fertig ist.`)}}function Q_(n){n.kills++;let e=Math.min(Math.floor(n.kills/Ad),vo);e>n.level&&(n.level=e,Dc(n),n.hp=100,At(n.index,`${n.name} ist jetzt ${Rd(e)}! Neue R\xFCstung!`,3e3),Qe("levelUp"))}function e1(n){if(n.dead||n.out)return;let e=["fork","bow",...n.special?[n.special.type]:[]];n.weapon=e[(e.indexOf(n.weapon)+1)%e.length],yo[n.weapon].special||(n.baseWeapon=n.weapon),Xi(n.h,Ji(n.weapon))}function Bg(n,e,t){let i=qs(n?{shirt:9315364,pants:3815994,hair:2824976,hood:5903380,weapons:[Le?"snowball":"bow"]}:{shirt:12000284,pants:3815994,hair:2824976,helmet:!0,shield:!Le,weapons:[Le?"pillow":"sword"]});i.root.position.set(e,0,t);let r=Zs();i.root.add(r),xi(r,1),ve.add(i.root);let s=n?20:30;return{kind:"enemy",archer:n,h:i,root:i.root,bar:r,hp:s,maxHp:s,wind:0,strike:0,hit:0,dying:0,walk:0,moving:!1}}function zc(n,e,t){let i=ac(n);i.root.position.set(e,0,t);let r=Zs({deer:2,cow:2,chicken:1.1}[n]||1.4);r.visible=!1,i.root.add(r),ve.add(i.root);let s=n==="deer"?10:20;return{kind:"animal",type:n,h:i,root:i.root,bar:r,hp:s,maxHp:s,hit:0,dying:0,walk:0,spd:0}}var Nd=()=>(Le?[...Gt,...yn]:[...Gt,...en]).filter(n=>!n.dying);function Cd(n,e){let[t,i]=(e?Vu:Fu)[n],r=Bg(e,t,i);Object.assign(r,{id:vr++,home:{x:t,z:i},slot:n,cd:0,shootCd:1+Math.random()*2,lastHit:null,target:null,orbit:0,orbitDir:Math.random()<.5?-1:1,dodge:0,dodgeDir:1,flee:0,fled:!1,backoff:0,isAttacker:!1}),Gt.push(r)}function kg(){Fu.forEach((n,e)=>Cd(e,!1)),Vu.forEach((n,e)=>Cd(e,!0))}function Nc(){let n=Tm(),e=["cow","cow","chicken","chicken","chicken","deer","boar"],t=Le?e[Math.floor(Math.random()*e.length)]:Math.random()<.55?"deer":"boar",i=zc(t,n.x,n.z);Object.assign(i,{id:vr++,heading:Math.random()*6.28,wanderT:0,wander:!1,fleeT:0,state:"wild"}),en.push(i)}function Oc(n,e,t,i,r){if(n.dying)return;if(n.kind==="cage"){R1(n,e);return}let s=(Le?"\u2728":"-")+t,a=Le?"#b388ff":"#ffffff";if(n.kind==="enemy"){let o=performance.now();n.lastHit&&n.lastHit.by!==e&&o-n.lastHit.time<1500&&(t*=2,s="TEAM! "+(Le?"\u2728":"-")+t,a="#ffd54f"),n.lastHit={by:e,time:o},n.wind=0,n.cd=Math.max(n.cd,.8),!n.fled&&n.hp-t>0&&n.hp-t<=n.maxHp/3&&(n.flee=2.5,n.fled=!0)}else n.fleeT=5;n.hp-=t,q_(n),dt(s,a,n.root.position),Qe($s("hit","magic")),kn(n.root,i,r,.5),n.bar.visible=!0,xi(n.bar,n.hp/n.maxHp),n.hp<=0&&t1(n,e)}function t1(n,e){n.dying=1,n.bar.visible=!1;let t=n.root.position;if(n.kind==="enemy"){Q_(e),Le&&(dt("Verzaubert! \u{1F438}","#a5ff8a",t),Qe("poof"));let i=Math.random();Le&&vn(Math.random()<.5?"soap":"star",{x:t.x+.8,z:t.z}),i<.3?vn("heart",t):i<.4?vn("life",t):i<.65&&vn(Math.random()<.5?"gun":"firesword",t);let{slot:r,archer:s}=n;$i(8,()=>Cd(r,s))}else vn("meat",t),$i(20,Nc)}var Q0=(()=>{let n=new Hn;n.moveTo(5,5),n.bezierCurveTo(5,5,4,0,0,0),n.bezierCurveTo(-6,0,-6,7,-6,7),n.bezierCurveTo(-6,11,-3,15.4,5,19),n.bezierCurveTo(12,15.4,16,11,16,7),n.bezierCurveTo(16,7,16,0,10,0),n.bezierCurveTo(7,0,5,5,5,5);let e=new Fi(n,{depth:4,bevelEnabled:!0,bevelSize:1,bevelThickness:1,bevelSegments:2});return e.center(),e.rotateZ(Math.PI),e.scale(.03,.03,.03),e})(),eg={axe:16758605,pickaxe:9489145,wood:9268835,stone:12434877,soap:16027569,star:16773494,milk:16777215,egg:16769202,heart:16726843,life:16766287,meat:16752704,apple:16732240,gun:4244735,firesword:16742938};function Fg(n,e,t){let i=new ge,r=new ge;if(n==="heart"&&r.add(R(Q0,new je({color:15022389,emissive:5570560,roughness:.4}))),n==="life"){let a=R(Q0,new je({color:16766287,emissive:6702080,metalness:.6,roughness:.3}));a.scale.setScalar(1.3),r.add(a)}if(n==="meat"){let a=R(new ue(.05,.05,.5,6),B(16052456),0,0,-.1);a.rotation.z=1.1,r.add(a,R(new Ee(.22,10,8),B(10242588),.12,.06,-.1))}if(n==="wood")for(let[a,o]of[[0,-.15],[0,.15],[.22,0]]){let l=R(new ue(.1,.1,.7,8),B(8079918),o,a,0);l.rotation.z=Math.PI/2,r.add(l)}if(n==="stone"){let a=R(new fi(.25,0),B(10395294,{flatShading:!0}));a.scale.set(1.2,.8,1),r.add(a)}if(n==="soap"){r.add(R(new ae(.4,.18,.26),B(16027569,{roughness:.3})));for(let[a,o]of[[.1,.2],[-.1,.3],[.05,.42]])r.add(R(new Ee(.06,8,6),new je({color:14808574,transparent:!0,opacity:.6}),a,o,0))}if(n==="star"&&r.add(R(new Bn(.22),new je({color:16773494,emissive:16766287,emissiveIntensity:1.5}))),n==="milk"&&(r.add(R(new ue(.13,.15,.4,14),B(16448250,{roughness:.2}))),r.add(R(new ue(.07,.1,.12,12),B(16448250,{roughness:.2}),0,.26,0)),r.add(R(new ue(.075,.075,.06,12),B(2001125),0,.34,0))),n==="egg"){let a=R(new Ee(.15,14,10),B(15982788,{roughness:.5}));a.scale.set(.85,1.15,.85),r.add(a)}if(n==="apple"){r.add(R(new Ee(.2,14,10),B(13840175,{roughness:.4}))),r.add(R(new ue(.015,.015,.12,5),B(6111287),0,.22,0));let a=R(new Ee(.07,8,6),B(4431943),.07,.24,0);a.scale.set(1,.3,.6),r.add(a)}if(n==="axe"||n==="pickaxe"){let a=sd(n);a.rotation.x=-Math.PI/2,a.position.y=-.55,r.add(a)}if(n==="gun"||n==="firesword"){let a=sd(Ji(n));a.rotation.y=Math.PI/2,a.position.x=-.5,r.add(a)}let s=R(new Gi(.6,.05,8,24).rotateX(Math.PI/2),new je({color:eg[n],emissive:eg[n],emissiveIntensity:1.2}),0,.05,0);return r.position.y=.9,i.add(r,s),i.position.set(e,0,t),ve.add(i),{type:n,g:i,model:r,t:0}}function vn(n,e){let t=Fg(n,e.x,e.z);t.id=vr++,Dt.push(t)}function n1(n,e){let t=e.root.position;if(kd.includes(n.type))return gt[n.type]||V1(n.type,e,!0),!0;if(En.includes(n.type))return Bd(e)>=Hd?((e.fullHintT||0)<performance.now()&&(e.fullHintT=performance.now()+4e3,At(e.index,"\u{1F392} Rucksack voll! Bring alles in eure Burg.",2500)),!1):(e.pack[n.type]++,dt(`+1 ${Hc[n.type]} ${L1[n.type]}`,"#ffffff",t),Qe("pickup"),!0);n.type==="heart"&&(e.hp=Math.min(100,e.hp+30),dt("+30 \u2764","#ff8a80",t)),n.type==="apple"&&(e.apples<9?(e.apples++,dt(`+1 \u{1F34E} (${e.apples})`,"#ff8a80",t)):(e.hp=Math.min(100,e.hp+20),dt("Mmh, Apfel! +20","#ff8a80",t))),n.type==="milk"&&(e.hp=Math.min(100,e.hp+30),dt("Leckere Milch! +30","#ffffff",t)),n.type==="egg"&&(e.hp=Math.min(100,e.hp+15),dt("Frisches Ei! +15","#ffe0b2",t)),n.type==="meat"&&(e.hp=Math.min(100,e.hp+40),dt("Lecker! +40","#ffcc80",t)),n.type==="life"&&(e.lives=Math.min(5,e.lives+1),dt("+1 Leben","#ffd54f",t)),(n.type==="gun"||n.type==="firesword")&&(e.special={type:n.type,t:wc(),max:wc()},e.weapon=n.type,Xi(e.h,Ji(e.weapon)),At(e.index,`${rs(n.type)} ${Pc(n.type)} f\xFCr ${wc()} Sekunden! Die Uhr am Knopf zeigt, wie lange noch.`)),Qe("pickup")}var Gg=n=>kd.includes(n)?1/0:En.includes(n)?60:30;function i1(n){for(let e of[...Dt]){let t=Mi().find(r=>r.root.position.distanceTo(e.g.position)<1.6);(t&&n1(e,t)!==!1||e.t>Gg(e.type))&&(ve.remove(e.g),Dt.includes(e)&&Dt.splice(Dt.indexOf(e),1))}}function r1(n){for(let e of Dt){e.t+=n,e.model.rotation.y+=n*2,e.model.position.y=.9+Math.sin(e.t*3)*.15;let t=Gg(e.type);e.g.visible=e.t<t-5||Math.floor(e.t*6)%2===0}}var s1=new ue(.02,.02,.8,5).rotateX(Math.PI/2),a1=new Je(.05,.15,6).rotateX(Math.PI/2),o1=new Ee(.07,6,6),l1=B(9268810),c1=Ft(8947848),h1=B(7999504),u1=new je({color:16772696,emissive:16764928,emissiveIntensity:2}),d1=new je({color:8445674,emissive:4244735,emissiveIntensity:2}),p1=new je({color:12578815,transparent:!0,opacity:.5,roughness:.1,emissive:2781056}),f1=B(16777215),m1=new je({color:13538264,emissive:10233776,emissiveIntensity:2.5}),tg=new Ee(.15,12,10);function Vg(n,e){let t;if(n==="spell")t=new Ge(tg,m1),t.scale.setScalar(1.6);else if(Le)t=new Ge(tg,e==="enemy"?f1:n==="bullet"?p1:d1),e==="enemy"&&t.scale.setScalar(.8);else if(n==="bullet")t=new Ge(o1,u1);else{t=new ge,t.add(new Ge(s1,e==="enemy"?h1:l1));let i=new Ge(a1,c1);i.position.z=.45,t.add(i)}return ve.add(t),t}function Od({from:n,heading:e,speed:t,target:i,dmg:r,kind:s,owner:a,by:o}){let l=Vg(s,a),c=n.y||0;l.position.set(n.x+Math.sin(e)*.8,1.4+c,n.z+Math.cos(e)*.8),ns.push({id:vr++,m:l,kind:s,vel:new w(Math.sin(e)*t,0,Math.cos(e)*t),speed:t,target:i,dmg:r,owner:a,by:o,life:1.6,high:c>1?3:0,sx:n.x,sz:n.z})}var Tc=new w;function g1(n){for(let e of[...ns]){let t=e.m.position;e.target&&!e.target.dying&&(Tc.copy(e.target.root.position).setY(1.1).sub(t).normalize().multiplyScalar(e.speed),e.vel.lerp(Tc,Math.min(1,n*10))),t.addScaledVector(e.vel,n),e.m.lookAt(Tc.copy(t).add(e.vel)),e.life-=n;let i=e.high&&Math.hypot(t.x-e.sx,t.z-e.sz)<e.high,r=e.life<=0||t.y<0||t.y<7&&!i&&Br(t.x,t.z);if(!r&&e.owner==="player")for(let s of Nd()){let a=s.root.position;if(Math.hypot(a.x-t.x,a.z-t.z)<.9&&t.y<2.4){let o=Math.hypot(e.vel.x,e.vel.z)||1;Oc(s,e.by,e.dmg,e.vel.x/o*.5,e.vel.z/o*.5),r=!0;break}}if(!r&&e.owner==="enemy")for(let s of Mi()){let a=s.root.position;if(Math.hypot(a.x-t.x,a.z-t.z)<.8&&t.y<a.y+2.4&&t.y>a.y){Hg(s,e.dmg),r=!0;break}}r&&(ve.remove(e.m),ns.splice(ns.indexOf(e),1))}}function Wg(n,e,t){let i=n.root.position,r=null,s=1/0;for(let a of Nd()){let o=a.root.position.x-i.x,l=a.root.position.z-i.z,c=Math.hypot(o,l);if(c>e)continue;let h=Math.abs(Na(Math.atan2(o,l),n.heading));if(h>t&&c>2.5)continue;let u=h*8+c*.15+(a.kind==="animal"?4:0);u<s&&(r=a,s=u)}return r}function Xg(n){if(F0(n)){n.cooldown=.4;return}if(xd(n)){n.cooldown=.3;return}if(Le&&ax(n))return;let e=yo[n.weapon];Le&&ut&&!ut.gone&&n.root.position.distanceTo(ut.root.position)<14&&(n.wizHintT||0)<performance.now()&&(n.wizHintT=performance.now()+15e3,At(n.index,`Den Zauberer kann man nicht verzaubern! Befreie alle Tiere aus den K\xE4figen (noch ${fr.length-Ei}), dann wird er zum Frosch.`,4500)),n.cooldown=e.cd,n.attackDur=e.melee?.35:Math.min(.25,e.cd),n.attackT=n.attackDur,n.justAttacked=!0;let t=n.root.position,i=Wg(n,e.melee?4.5:38,e.melee?1.4:.9),r=n.heading;i&&(r=Math.atan2(i.root.position.x-t.x,i.root.position.z-t.z)),n.face=r,n.faceT=.6;let s=Math.sin(r),a=Math.cos(r);if(e.melee){Qe($s("swing","magic"));for(let o of Nd()){let l=o.root.position.x-t.x,c=o.root.position.z-t.z,h=Math.hypot(l,c);h<e.range&&t.y<1.5&&(l*s+c*a)/h>e.cone&&Oc(o,n,e.dmg+n.level*2,s*1.2,a*1.2)}}else{Qe(e.projectile==="arrow"?$s("bow","magic"):$s("gun","bubble"));let o=i?0:(Math.random()-.5)*.1;Od({from:t,heading:r+o,speed:e.speed,target:i,dmg:e.dmg+n.level,kind:e.projectile,owner:"player",by:n})}}var ea={},yi={fwd:0,turn:0,attack:!1};addEventListener("keydown",n=>{if(ea[n.code]=!0,ji(),!!li&&((n.code.startsWith("Arrow")||["Space","Enter","ShiftRight","ControlRight"].includes(n.code))&&n.preventDefault(),!n.repeat))for(let e of Ae)e.source==="local"&&e.keymap.swap.includes(n.code)&&(e.swapReq=!0)});addEventListener("keyup",n=>ea[n.code]=!1);addEventListener("blur",()=>{for(let n in ea)ea[n]=!1});var lo=n=>n.some(e=>ea[e]);function jg(n){let e=n.keymap,t=i=>Math.max(-1,Math.min(1,i));n.input={fwd:t((lo(e.fwd)?1:0)-(lo(e.back)?1:0)+yi.fwd),turn:t((lo(e.left)?1:0)-(lo(e.right)?1:0)+yi.turn),attack:lo(e.attack)||yi.attack}}{let n=we("joy"),e=we("knob"),t=null,i=a=>{let o=n.getBoundingClientRect(),l=a.clientX-(o.left+o.width/2),c=a.clientY-(o.top+o.height/2),h=o.width/2,u=Math.hypot(l,c);u>h&&(l*=h/u,c*=h/u),e.style.transform=`translate(${l}px, ${c}px)`;let d=l/h,p=c/h;yi.fwd=Math.abs(p)>.2?-p:0,yi.turn=Math.abs(d)>.2?-d:0};n.addEventListener("pointerdown",a=>{t=a.pointerId,n.setPointerCapture(t),ji(),i(a)}),n.addEventListener("pointermove",a=>{a.pointerId===t&&i(a)});let r=a=>{a.pointerId===t&&(t=null,e.style.transform="",yi.fwd=yi.turn=0)};n.addEventListener("pointerup",r),n.addEventListener("pointercancel",r);let s=we("tAttack");s.addEventListener("pointerdown",a=>{a.preventDefault(),s.setPointerCapture(a.pointerId),ji(),yi.attack=!0});for(let a of[s,we("tSwap"),n])a.addEventListener("contextmenu",o=>o.preventDefault()),a.addEventListener("touchstart",o=>o.preventDefault(),{passive:!1});s.addEventListener("pointerup",()=>yi.attack=!1),s.addEventListener("pointercancel",()=>yi.attack=!1),we("tSwap").addEventListener("pointerdown",()=>{let a=Ae[ss];a&&(a.swapReq=!0)})}function x1(n,e){let t=n.root;if(n.moving=0,n.dead>0)n.dead-=e,n.dead<=0&&(n.out?n.dead=.001:Og(n));else if(V0(n,e))n.hp=100;else if(_0(n))n.hp=Math.min(100,n.hp+e);else{let r=n.input;n.heading+=r.turn*2.6*e;let s=r.fwd>0?r.fwd*9:r.fwd*5;Math.abs(s)>.1&&(lm(t,Math.sin(n.heading)*s*e,Math.cos(n.heading)*s*e),n.moving=s>0?1:-1),n.swapReq&&e1(n),n.cooldown-=e,n.holdAtk&&!r.attack&&(n.holdAtk=!1),r.attack&&n.cooldown<=0&&!n.holdAtk&&Xg(n),n.hp=Math.min(100,n.hp+e),n.special&&(n.special.t-=e,n.special.t<=0&&(At(n.index,`${rs(n.special.type)} ${Pc(n.special.type)} ist leer. Weiter geht's mit ${rs(n.baseWeapon)} ${Pc(n.baseWeapon)}!`,3e3),Qe("plop"),n.weapon===n.special.type&&(n.weapon=n.baseWeapon,Xi(n.h,Ji(n.weapon))),n.special=null))}n.swapReq=!1,n.toolT>0&&(n.toolT-=e)<=0&&(n.toolShow=""),n.attackT=Math.max(0,n.attackT-e),n.faceT-=e;let i=n.faceT>0?n.face:n.heading;n.bodyYaw+=Na(i,n.bodyYaw)*Math.min(1,e*15)}var gr=new w,Sd=new w;function v1(n,e){let t=n.root;n.dead>0||n.out?n.h.body.rotation.x=Math.max(-Math.PI/2,n.h.body.rotation.x-e*4):n.h.body.rotation.x=0,t.visible=!(n.out&&n.h.body.rotation.x<=-1.5),t.rotation.y=n.bodyYaw,n.moving&&(n.walk+=e*(n.moving>0?11:-8)),n.attackT=Math.max(0,n.attackT-(xr()?0:e));let i=n.attackT>0?1-n.attackT/n.attackDur:0,r=n.attackT>0?Math.sin(i*Math.PI):0,s=n.h.weapon,a,o;s.position.z=0;let l=n.toolShow||n.weapon;n.h.currentWeapon!==(n.toolShow||Ji(n.weapon))&&Xi(n.h,n.toolShow||Ji(n.weapon)),l==="fork"?(a=-.35-r*1.1,s.rotation.x=-a-.25,s.position.z=r*.4):l==="bow"?(a=-1.45,o=-1.3+r*.3,s.rotation.x=-a):l==="gun"?(a=-1.3,o=-1.1,s.rotation.x=-a,s.position.z=-r*.08):(a=n.attackT>0?-2.4+i*2.1:-.5,s.rotation.x=0),Ys(n.h,n.walk,n.riding==null&&!!n.moving,a,o),j0(n),n.hurt>0&&(n.hurt-=e,n.hurt<=0&&jr(n.h,0)),J_(n),Si&&n.index===ss&&y1(n),yr(n.index)&&P0(n.index,Ae,e,Y0());let c=Math.sin(n.heading),h=Math.cos(n.heading),u=t.position.x,d=t.position.z,p=t.position.y,f=p<3&&Ju(u,d);n.caveK=(n.caveK||0)+((f?1:0)-(n.caveK||0))*Math.min(1,e*5);let g=7;if(f){g=4.5;for(let x=.4;x<=4.5;x+=.25){let v=u-c*x,S=d-h*x;if(Br(v,S)||Br(v+h*.35,S-c*.35)||Br(v-h*.35,S+c*.35)){g=Math.max(.45,x-.45);break}}}else for(let x=1;x<=7;x+=.5){let v=u-c*x,S=d-h*x;if(p<1?Br(v,S):cm(v,S,p+1)){g=Math.max(1.5,x-1);break}}n.camDist+=(g-n.camDist)*Math.min(1,e*(g<n.camDist?10:3));let m=3.8+Math.max(0,5-n.camDist)*1.5,y=n.caveK;gr.set(u-c*n.camDist,p+m+(1.95-m)*y,d-h*n.camDist),Sd.set(u+c*(3-y),p+1.6-.3*y,d+h*(3-y)),p<1&&um(gr.x,gr.z)&&(gr.y=Math.min(gr.y,on-.9)),q0(n,gr,Sd)&&(n.camDist=7),n.camInit||(n.cam.position.copy(gr),n.camInit=!0),n.cam.position.lerp(gr,1-Math.exp(-e*10)),n.cam.lookAt(Sd)}var ng="";function y1(n){let e=n.special&&n.weapon===n.special.type?n.special:null,t=e?Math.max(0,Math.round(e.t/(e.max||15)*100)):100,i=!!gd(n.root.position),r=n.riding!=null,s=rs(n.weapon)+t+i+r;if(s===ng)return;ng=s;let a=we("tAttack");a.textContent=r?"\u{1F6EC}":i?"\u{1F4AC}":rs(n.weapon),a.style.background=e?`conic-gradient(#ffd54fcc ${t}%, #ffffff30 0)`:""}function _1(n){if(!n.out)return;let e=Ae.find(t=>t!==n&&!t.out);e&&(n.cam.position.copy(e.cam.position),n.cam.quaternion.copy(e.cam.quaternion))}function M1(){for(let n of Gt){if(n.dying)continue;let e=n.flee>0?null:Uc(n.root.position,n.archer?30:24);e&&e!==n.target&&(n.orbit=Math.atan2(n.root.position.x-e.root.position.x,n.root.position.z-e.root.position.z)),n.target=e,n.isAttacker=!1}for(let n of Ae)Gt.filter(e=>!e.dying&&!e.archer&&e.target===n).sort((e,t)=>e.root.position.distanceTo(n.root.position)-t.root.position.distanceTo(n.root.position)).slice(0,2).forEach(e=>e.isAttacker=!0)}function co(n,e,t,i,r){let s=e-n.root.position.x,a=t-n.root.position.z,o=Math.hypot(s,a);return o<.3?!1:(kn(n.root,s/o*i*r,a/o*i*r,.5),!0)}function E1(n,e){let t=n.root;if(n.dying){n.dying-=e,n.dying<=0&&(ve.remove(t),Gt.splice(Gt.indexOf(n),1));return}n.cd-=e,n.shootCd-=e,n.strike=Math.max(0,n.strike-e);let i=!1,r=n.target,s=t.position;if(n.flee>0)n.flee-=e,n.wind=0,i=co(n,n.home.x,n.home.z,5.5,e),t.rotation.y=Math.atan2(n.home.x-s.x,n.home.z-s.z);else if(r){let a=r.root.position,o=a.x-s.x,l=a.z-s.z,c=Math.hypot(o,l)||.01,h=Math.atan2(o,l),u=-l/c,d=o/c;if(t.rotation.y=h,r.justAttacked&&c<4.5&&n.wind<=0&&n.dodge<=0&&Math.random()<.35&&(n.dodge=.3,n.dodgeDir=Math.random()<.5?-1:1),n.archer)n.wind>0?(n.wind-=e,n.wind<=0&&(Qe($s("bow","plop")),Od({from:s,heading:h,speed:20,target:null,dmg:6,kind:"arrow",owner:"enemy"}))):n.dodge>0?(n.dodge-=e,i=kn(t,u*n.dodgeDir*7*e,d*n.dodgeDir*7*e,.5)):(c<9?i=co(n,s.x-o,s.z-l,4,e):c>16?i=co(n,a.x,a.z,4.5,e):(i=kn(t,u*n.orbitDir*2.5*e,d*n.orbitDir*2.5*e,.5),(!i||Math.random()<e*.4)&&(n.orbitDir*=-1)),n.shootCd<=0&&c<26&&(n.wind=.7,n.shootCd=2.5+Math.random()));else if(n.wind>0)n.wind-=e,n.wind<=0&&(n.strike=.15,c<2.8&&r.root.position.y<1.5&&Hg(r,8),n.backoff=.5);else if(n.dodge>0)n.dodge-=e,i=kn(t,u*n.dodgeDir*7*e,d*n.dodgeDir*7*e,.5);else if(n.backoff>0&&n.strike<=0)n.backoff-=e,i=kn(t,-o/c*3.5*e,-l/c*3.5*e,.5);else if(n.strike<=0){n.orbit+=n.orbitDir*(n.isAttacker?.25:.6)*e;let p=n.isAttacker?1.7:5.5;i=co(n,a.x+Math.sin(n.orbit)*p,a.z+Math.cos(n.orbit)*p,n.isAttacker?5.5:4,e),n.isAttacker&&c<2.3&&n.cd<=0&&(n.wind=.55,n.cd=1.6+Math.random()*.8,Qe("windup"))}}else n.wind=0,i=co(n,n.home.x,n.home.z,4,e),i&&(t.rotation.y=Math.atan2(n.home.x-s.x,n.home.z-s.z));for(let a of Gt){if(a===n||a.dying)continue;let o=s.x-a.root.position.x,l=s.z-a.root.position.z,c=Math.hypot(o,l);c>0&&c<1.3&&kn(t,o/c*(1.3-c)*.5,l/c*(1.3-c)*.5,.5)}n.moving=i}var Ac=[];function qg(n){let e=qm();e.position.set(n.x,0,n.z);let t=Math.random()*Math.PI*2;e.rotation.y=t,ve.add(e),Ac.push({g:e,dir:t,t:0})}function ig(n,e){if(n.dying){Le?(n.frogged||(n.frogged=!0,qg(n.root.position)),n.root.rotation.y+=e*12,n.root.scale.setScalar(Math.max(.01,n.dying))):(n.h.body.rotation.x=Math.max(-Math.PI/2,n.h.body.rotation.x-e*5),n.dying<.3&&(n.root.position.y-=e*3));return}n.moving&&(n.walk+=e*9);let t=-.3,i=-.6;n.archer&&Le?(i=void 0,n.wind>0&&(t=-.3-(1-Math.min(1,n.wind/.7))*2.6),n.h.weapon.rotation.x=0):n.archer?(i=void 0,n.wind>0&&(t=-1.45,i=-1.3),n.h.weapon.rotation.x=-t):n.wind>0?t=-.3-(1-Math.min(1,n.wind/.55))*2.3:n.strike>0&&(t=-.4-n.strike/.15*2.2),Ys(n.h,n.walk,n.moving,t,i),n.hit>0&&(n.hit-=e,n.hit<=0&&jr(n.h,0))}function b1(n){for(let e of[...Ac]){e.t+=n;let t=Math.abs(Math.sin(e.t*7));e.g.position.x+=Math.sin(e.dir)*n*2.5,e.g.position.z+=Math.cos(e.dir)*n*2.5,e.g.position.y=t*.5,e.t>2.5&&e.g.scale.setScalar(Math.max(.01,1-(e.t-2.5)*2)),e.t>3&&(ve.remove(e.g),Ac.splice(Ac.indexOf(e),1))}}function S1(n,e){let t=n.root;if(n.dying){n.dying-=e,n.dying<=0&&(ve.remove(t),en.splice(en.indexOf(n),1));return}if(Le){T1(n,e);return}let i=Uc(t.position,12),r=0;if(i||n.fleeT>0){if(n.fleeT-=e,i){let s=Math.atan2(t.position.x-i.root.position.x,t.position.z-i.root.position.z);n.heading+=Na(s,n.heading)*Math.min(1,e*5)}r=n.type==="deer"?8.5:6.5}else n.wanderT-=e,n.wanderT<=0&&(n.wanderT=2+Math.random()*4,n.wander=Math.random()<.6,n.heading+=(Math.random()-.5)*2),r=n.wander?1.5:0;r&&!kn(t,Math.sin(n.heading)*r*e,Math.cos(n.heading)*r*e,.6)&&(n.heading+=Math.PI/2),t.rotation.y=n.heading,n.spd=r}var Lc={cow:["milk",18,"Muuh! \u{1F95B}"],chicken:["egg",12,"Gack gack! \u{1F95A}"],deer:["apple",25,"\u{1F34E}"],boar:["apple",25,"\u{1F34E}"]},Pd={cow:"die Kuh",chicken:"das Huhn",deer:"das Reh",boar:"das Wildschwein"},rg=(n,e,t=0)=>n>Jt.x1+t&&n<Jt.x2-t&&e>Jt.z1+t&&e<Jt.z2-t,Yg=n=>n[0].toUpperCase()+n.slice(1);function w1(n,e){n.state="follow",n.owner=e,dt("Neuer Freund! \u2764","#ff8ac8",n.root.position),Qe("pickup"),At(e.index,`${Yg(Pd[n.type])} kommt mit! Bring es in deinen Stall neben der Burg.`,3500)}function T1(n,e){let t=n.root,i=t.position;n.helpCd=(n.helpCd||0)-e,n.hintCd=(n.hintCd||0)-e;let r=0;if(n.state==="captive"){n.spd=0;return}if(n.state==="follow"&&(!n.owner||n.owner.out)&&(n.state="wild",n.owner=null),n.state==="follow"&&rg(i.x,i.z,.5)&&(n.state="stall",dt("Im Stall! \u{1F3E0}","#a5ff8a",i),Qe("pickup"),At(n.owner.index,`${Yg(Pd[n.type])} ist jetzt in deinem Stall!`,2500),n.owner=null,n.prodT=Lc[n.type][1]/2),n.state==="wild"){let s=Uc(i,2.2);s&&s.apples>0?(s.apples--,w1(n,s)):s&&n.hintCd<=0&&(n.hintCd=4,At(s.index,`F\xFCttere ${Pd[n.type]} mit einem Apfel \u{1F34E}, dann kommt es mit!`,2500))}if(n.state==="follow"){let s=n.owner,a=s.root.position;i.distanceTo(a)>25&&i.set(a.x-Math.sin(s.heading)*3,0,a.z-Math.cos(s.heading)*3);let l=en.filter(m=>m.owner===s&&m.state==="follow").indexOf(n),c=Gt.find(m=>!m.dying&&m.root.position.distanceTo(i)<8),h=s.heading+Math.PI+(l%2?.45:-.45),u=c?c.root.position.x:a.x+Math.sin(h)*(2.2+l*1.3),d=c?c.root.position.z:a.z+Math.cos(h)*(2.2+l*1.3),p=u-i.x,f=d-i.z,g=Math.hypot(p,f);g>(c?1.2:.8)&&(n.heading=Math.atan2(p,f),r=Math.min(9,g*3)),c&&g<1.6&&n.helpCd<=0&&(n.helpCd=1.5,Oc(c,s,5,p/(g||1)*1.5,f/(g||1)*1.5))}else if(n.wanderT-=e,n.wanderT<=0&&(n.wanderT=2+Math.random()*4,n.wander=Math.random()<.6,n.heading+=(Math.random()-.5)*2),r=n.wander?n.type==="chicken"?1:1.5:0,n.state==="stall"){let s=i.x+Math.sin(n.heading)*1.5,a=i.z+Math.cos(n.heading)*1.5;if(rg(s,a,1)||(n.heading=Math.atan2((Jt.x1+Jt.x2)/2-i.x,(Jt.z1+Jt.z2)/2-i.z)),n.prodT-=e,n.prodT<=0){let[o,l,c]=Lc[n.type];n.prodT=l,Dt.filter(h=>h.type===o).length<12&&(vn(o,{x:i.x+(Math.random()-.5)*2,z:i.z+(Math.random()-.5)*2}),dt(c,"#ffffff",i))}}r&&!kn(t,Math.sin(n.heading)*r*e,Math.cos(n.heading)*r*e,.6)&&n.state!=="follow"&&(n.heading+=Math.PI/2),t.rotation.y=n.heading,n.spd=r}var yn=[],Ei=0,Ld=!1,ut=null;function A1(){for(let[n,e,t]of fr){let i=id();i.position.set(n,0,e),ve.add(i);let r=Zs(2.6);xi(r,1),i.add(r);let s={x:n,z:e,r:1.4};Be.push(s);let a=zc(t,n,e);Object.assign(a,{id:vr++,heading:Math.random()*6.28,wanderT:0,wander:!1,fleeT:0,state:"captive"}),en.push(a),yn.push({kind:"cage",id:vr++,idx:yn.length,root:i,bar:r,hp:3,maxHp:3,dying:0,circle:s,animal:a})}}function R1(n,e){n.hp--,dt("\u2728","#b388ff",n.root.position),Qe("magic"),xi(n.bar,n.hp/n.maxHp),!(n.hp>0)&&(n.dying=1,n.bar.visible=!1,Be.splice(Be.indexOf(n.circle),1),Ei++,n.animal.state="follow",n.animal.owner=e,dt("Befreit! \u2764","#ff8ac8",n.root.position),Qe("poof"),Ei>=fr.length?Kg():At(e.index,`Tier befreit! Noch ${fr.length-Ei} gefangen. Bring es in deinen Stall.`,3500))}function C1(n){for(let e of[...yn])e.dying&&(e.dying-=n,e.dying<=0&&(ve.remove(e.root),yn.splice(yn.indexOf(e),1)))}function sg(n,e){n.dying&&(n.root.rotation.y+=e*8,n.root.scale.setScalar(Math.max(.01,n.dying)))}function Zg(){let n=qs({shirt:6174129,pants:3218322,hair:14540253,weapons:["orbwand"]});return jm(n),n.root.position.set(Gu.x,0,Gu.z),ve.add(n.root),{h:n,root:n.root,wind:0,castT:3,laughT:4,gone:0,frogged:!1}}function P1(n){let e=ut;if(!e)return;if(e.gone){e.gone-=n,e.gone<=0&&(ve.remove(e.root),ut=null);return}let t=Uc(e.root.position,32);if(!t){e.wind=0;return}let i=t.root.position,r=e.root.position,s=Math.atan2(i.x-r.x,i.z-r.z);e.root.rotation.y=s,e.wind>0?(e.wind-=n,e.wind<=0&&(Qe("plop"),Od({from:r,heading:s,speed:13,target:null,dmg:8,kind:"spell",owner:"enemy"}))):(e.castT-=n)<=0&&(e.wind=.8,e.castT=3.5,Qe("windup")),(e.laughT-=n)<=0&&(e.laughT=7,dt("Hihihi! \u{1F9D9}","#d1a3ff",r))}function ag(n,e){if(!n)return;if(n.gone){n.frogged||(n.frogged=!0,qg(n.root.position)),n.root.rotation.y+=e*12,n.root.scale.setScalar(Math.max(.01,n.gone));return}let t=n.wind>0?-.3-(1-n.wind/.8)*2.4:-.3;Ys(n.h,0,!1,t,-.3),n.h.weapon.rotation.x=-t}function Kg(){if(!Ld){Ld=!0,ut&&(ut.gone=1),ci("\u{1F389} Gewonnen! Alle Tiere sind frei! Der Zauberer ist jetzt ein Frosch! \u{1F389}",8e3),Qe("levelUp");for(let n of Ae)dt("\u{1F389} Juhu! \u{1F389}","#ffd54f",n.root.position);$i(10,ox)}}function Jg(){Ei=0,Ld=!1,A1(),ut&&ve.remove(ut.root),ut=Zg();for(let n=0;n<24;n++)Nc();W1()}var En=["wood","stone","soap","star"],Hc={wood:"\u{1FAB5}",stone:"\u{1FAA8}",soap:"\u{1F9FC}",star:"\u2728"},L1={wood:"Holz",stone:"Stein",soap:"Seife",star:"Sternenstaub"},Hd=10,_n={wood:0,stone:0,soap:0,star:0},Bd=n=>En.reduce((e,t)=>e+n.pack[t],0),Bc=n=>En.filter(e=>n[e]>0).map(e=>`${Hc[e]}${n[e]}`).join(" "),I1=n=>Math.abs(n.x-mt.x)<9.5&&n.z>mt.z-9.5&&n.z<mt.z+9.5,og=(n,e,t)=>Math.abs(n.x-e)<2.1&&Math.abs(n.z-t)<2.1,ta={x:8,z:62},$g=[{id:"catapult",name:"Katapult",icon:"\u{1FAE7}",px:-19,pz:57,x:-7,z:56,cost:{wood:6,soap:3,star:2},done:"Das Seifenblasen-Katapult schie\xDFt jetzt Riesen-Seifenblasen auf die freche Burg!"},{id:"fountain",name:"Heilbrunnen",icon:"\u26F2",px:-13,pz:57,x:-6,z:74,cost:{stone:5,soap:1},done:"Am Heilbrunnen in der Burg bekommt ihr schnell wieder Energie."},{id:"garden",name:"Apfelgarten",icon:"\u{1F333}",px:-19,pz:63,x:-6,z:86,cost:{wood:3,stone:2},done:"Im Apfelgarten in der Burg wachsen jetzt \xC4pfel f\xFCr eure Tiere."},{id:"tower",name:"Festturm",icon:"\u{1F3F0}",px:-13,pz:63,x:mt.x+fn.x,z:mt.z+fn.z,cost:{stone:6,wood:2,star:3},done:"Eure Burg ist jetzt die sch\xF6nste im Land! Jeder bekommt ein Extra-Leben. Lauft die Treppe hoch auf die Burgmauer, dann die Wendeltreppe rauf bis ganz oben auf den Turm!"},{id:"axe",tool:!0,name:"Axt",icon:"\u{1FA93}",px:-25,pz:57,cost:{stone:3},done:"Jetzt k\xF6nnt ihr B\xE4ume f\xE4llen: vor einen Baum stellen und zaubern. Holz gibt es nur noch vom B\xE4umef\xE4llen."},{id:"pickaxe",tool:!0,name:"Spitzhacke",icon:"\u26CF\uFE0F",px:-25,pz:63,cost:{wood:4,stone:4},done:"Die Berge sind aus Felsbl\xF6cken! Haut unten Block f\xFCr Block H\xF6hlen und G\xE4nge hinein. In vier Bergen wartet tief drinnen ein Schatz!"}],kd=["axe","pickaxe"],gt={};function Qg(n){let e=document.createElement("canvas");e.width=e.height=256;let t=new kt(e);t.colorSpace=tt;let i=new Ge(new ft(4,4),new Tn({map:t,transparent:!0}));return i.rotation.x=-Math.PI/2,i.position.y=.06,i.userData={cv:e,tex:t,color:n,key:""},i}function ex(n,{icon:e,title:t,line:i,state:r}){let s=[e,t,i,r].join("|");if(n.userData.key===s)return;n.userData.key=s;let{cv:a,tex:o}=n.userData,l=a.getContext("2d"),c=r==="built"?"#3ecf4a":r==="ready"?"#ffd54f":n.userData.color;l.clearRect(0,0,256,256),l.fillStyle=c+"55",l.strokeStyle=c,l.lineWidth=14,l.beginPath(),l.roundRect(10,10,236,236,30),l.fill(),l.stroke(),l.textAlign="center",l.font="96px system-ui, sans-serif",l.fillStyle="#fff",l.fillText(e,128,118),l.fillStyle="#fff",l.strokeStyle="#000",l.lineWidth=6,l.font="bold 34px system-ui, sans-serif",l.strokeText(t,128,172),l.fillText(t,128,172),l.font="bold 30px system-ui, sans-serif",l.strokeText(i,128,216),l.fillText(i,128,216),o.needsUpdate=!0}var D1=n=>{let e=document.createElement("canvas");e.width=512,e.height=128;let t=e.getContext("2d");t.fillStyle="#5d4037",t.beginPath(),t.roundRect(4,4,504,120,20),t.fill(),t.font="bold 64px system-ui, sans-serif",t.textAlign="center",t.fillStyle="#ffe082",t.fillText(n,256,86);let i=new kt(e);return i.colorSpace=tt,new Ge(new ft(4,1),new Tn({map:i,side:Ot}))},es=new ge;{let n=B(9071172),e=R(new ae(19.5,.08,14),B(10584655),-18.5,.02,60);es.add(e),es.add(R(new ae(1,.9,3),n,-22.3,.45,60)),es.add(R(new ae(.5,.3,.7),B(7829367),-22.3,1.05,59));for(let i of[-28,-9.5])es.add(R(new ae(.2,3.4,.2),n,i,1.7,52.8));let t=D1("\u{1F528} Werkstatt");t.position.set(-18.75,3.6,52.8),es.add(t,R(new ae(18.7,.15,.2),n,-18.75,3,52.8)),ve.add(es)}var _o=Qg("#40c4ff");_o.position.set(ta.x,.06,ta.z);ex(_o,{icon:"\u{1F392}",title:"Ausladen",line:"\u279C Burglager",state:"normal"});var wi=new ge;wi.add(R(new ae(1.4,.8,.9),B(9263659),0,.4,0));wi.add(R(new ae(1.45,.25,.95),B(7160608),0,.92,0));wi.add(R(new ae(.2,.25,.05),Ft(13938487),0,.75,.47));wi.position.set(ta.x,0,ta.z+2.8);wi.rotation.y=Math.PI;ve.add(_o,wi);var as=$g.map(n=>{let e=Qg("#ffffff");return e.position.set(n.px,.1,n.pz),ve.add(e),{b:n,pad:e,model:null,hintCd:0}}),Fd=()=>{let n=Le&&li;es.visible=_o.visible=wi.visible=n,as.forEach(e=>e.pad.visible=n)};function U1(n){let e=new ge,t=B(9071172),i=B(10722963),r=new je({color:12578815,transparent:!0,opacity:.55,roughness:.1,emissive:2781056});if(n==="catapult"){e.add(R(new ae(2.6,.4,3.4),t,0,.5,0));for(let a of[-1,1]){let o=R(new ue(.6,.6,.2,14),B(6111287),a*1.4,.6,0);o.rotation.z=Math.PI/2,e.add(o,R(new ae(.2,1.6,.2),t,a*.9,1.4,.6))}let s=new ge;s.position.set(0,2.1,.6),s.add(R(new ae(.25,.25,3.4),t,0,0,-1.4)),s.add(R(new Ee(.7,16,12),r,0,.6,-3)),e.add(s),e.userData.arm=s,e.rotation.y=Math.PI}if(n==="fountain"&&(e.add(R(new ue(1.5,1.6,.6,20),i,0,.3,0)),e.add(R(new ue(1.35,1.35,.05,20),new je({color:5227511,emissive:161725,emissiveIntensity:.6}),0,.58,0)),e.add(R(new ue(.2,.25,1.4,10),i,0,1,0)),e.add(R(new Ee(.35,12,10),new je({color:8508666,emissive:5227511,emissiveIntensity:1}),0,1.8,0)),Be.push({x:-6,z:74,r:1.6})),n==="garden")for(let[s,a]of[[-1.3,-.8],[1.3,-.6],[0,1.2]]){e.add(R(new ue(.15,.2,1.4,7),B(5979430),s,.7,a)),e.add(R(new Ee(.9,12,10),B(4165434),s,1.9,a));for(let o=0;o<4;o++)e.add(R(new Ee(.12,8,6),B(13840175),s+Math.sin(o*1.7)*.7,1.7+o%2*.4,a+Math.cos(o*1.7)*.7))}return n==="tower"&&(e.add(pm()),Be.push({x:mt.x+fn.x,z:mt.z+fn.z,r:1.5}),Bu(!0)),e}function Mo(n){let e=as.find(t=>t.b.id===n);if(gt[n]=!0,e.b.tool){for(let t of[...Dt])t.type===n&&(ve.remove(t.g),Dt.splice(Dt.indexOf(t),1));for(let t=0;t<6;t++)qa(ve,"\u2728","#ffd54f",{x:e.b.px+(Math.random()-.5)*3,z:e.b.pz+(Math.random()-.5)*3},1+Math.random()*2);return}e.model=U1(n),e.model.position.set(e.b.x,0,e.b.z),ve.add(e.model);for(let t=0;t<8;t++)qa(ve,"\u2728","#ffd54f",{x:e.b.x+(Math.random()-.5)*3,z:e.b.z+(Math.random()-.5)*3},1+Math.random()*3)}function z1(n,e){let t={};for(let[i,r]of Object.entries(n.b.cost))_n[i]<r&&(t[i]=r-_n[i]);if(Object.keys(t).length){n.hintCd<=0&&(n.hintCd=4,At(e.index,`F\xFCr ${n.b.name} fehlt im Burglager noch: ${Bc(t)}`,3e3));return}for(let[i,r]of Object.entries(n.b.cost))_n[i]-=r;if(Mo(n.b.id),Mn(["b",n.b.id]),ci(`${n.b.icon} ${n.b.name} gebaut! ${n.b.done}`,5e3),Qe("levelUp"),n.b.id==="tower")for(let i of Ae)i.lives=Math.min(5,i.lives+1)}var Rc=[];function tx(n,e){e.forEach((t,i)=>{let r=document.createElement("canvas");r.width=r.height=64;let s=r.getContext("2d");s.font="52px system-ui, sans-serif",s.textAlign="center",s.fillText(t,32,52);let a=new kt(r),o=new zn(new An({map:a,depthTest:!1}));o.scale.setScalar(.8),o.renderOrder=12,o.visible=!1,ve.add(o),Rc.push({sp:o,t:-i*.08,sx:n.x,sz:n.z})}),Ya.pickup()}function N1(n){for(let e of[...Rc]){if(e.t+=n/.7,e.t<0)continue;let t=Math.min(1,e.t);e.sp.visible=!0,e.sp.position.set(e.sx+(wi.position.x-e.sx)*t,1.5+Math.sin(t*Math.PI)*3-t*.5,e.sz+(wi.position.z-e.sz)*t),t>=1&&(ve.remove(e.sp),e.sp.material.map.dispose(),Rc.splice(Rc.indexOf(e),1),Cc=1)}}var Cc=0,jn=[],O1=new Ee(1.4,20,14),H1=new je({color:12578815,transparent:!0,opacity:.55,roughness:.05,emissive:5227511,emissiveIntensity:.4});function nx(n,e,t=vr++){let i=new Ge(O1,H1);ve.add(i);let r={id:t,m:i,sx:n.x,sz:n.z,ex:e.x,ez:e.z,t:0,dur:3.5};return jn.push(r),r}function ix(n,e){n.t+=e/n.dur;let t=Math.min(1,n.t);n.m.position.set(n.sx+(n.ex-n.sx)*t,3+Math.sin(t*Math.PI)*70,n.sz+(n.ez-n.sz)*t),n.m.rotation.y+=e}var lg=6;function B1(n){var e;for(let t of Mi()){if(!Bd(t)||!og(t.root.position,ta.x,ta.z))continue;let i=En.flatMap(s=>Array(t.pack[s]).fill(Hc[s])),r=Bc(t.pack);for(let s of En)_n[s]+=t.pack[s],t.pack[s]=0;tx(t.root.position,i),Mn(["u",t.root.position.x,t.root.position.z,i]),At(t.index,`Ab ins Burglager: ${r} \u{1F3F0}`,2500)}for(let t of as){if(t.hintCd-=n,gt[t.b.id])continue;let i=Mi().find(r=>og(r.root.position,t.b.px,t.b.pz));i&&z1(t,i)}if(gt.fountain)for(let t of Mi())Math.hypot(t.root.position.x+6,t.root.position.z-74)<4.5&&(t.hp=Math.min(100,t.hp+8*n));if(gt.garden&&(cg.t-=n)<=0&&(cg.t=10,Dt.filter(t=>t.type==="apple"&&Math.hypot(t.g.position.x+6,t.g.position.z-86)<5).length<4&&vn("apple",{x:-6+(Math.random()-.5)*4,z:83.5})),gt.catapult&&(lg-=n)<=0){lg=10;let t=Gt.filter(i=>!i.dying);if(t.length){let i=t[Math.floor(Math.random()*t.length)],r=nx({x:-7,z:54},{x:i.root.position.x,z:i.root.position.z});Qe("bubble"),po=1,Mn(["k"]),r.onLand=()=>{Qe("poof");for(let s of Gt)!s.dying&&Math.hypot(s.root.position.x-r.ex,s.root.position.z-r.ez)<7&&Oc(s,Ae[0],15,0,0)}}}for(let t of[...jn])ix(t,n),t.t>=1&&((e=t.onLand)==null||e.call(t),ve.remove(t.m),jn.splice(jn.indexOf(t),1))}var cg={t:5},po=0,wd=0;function k1(n){var i;let e=(i=as[0].model)==null?void 0:i.userData.arm;e&&(po=Math.max(0,po-n*2),e.rotation.x=-Math.sin(po*Math.PI)*1.2),N1(n),Cc=Math.max(0,Cc-n*4),wi.scale.setScalar(1+Math.sin(Cc*Math.PI)*.15),wd+=n,_o.material.opacity=.75+Math.sin(wd*3)*.25;for(let r of as){let s=Object.entries(r.b.cost).every(([o,l])=>_n[o]>=l),a=gt[r.b.id]?"built":s?"ready":"normal";ex(r.pad,{icon:r.b.icon,title:r.b.name,line:a==="built"?r.b.tool?"\u2714 habt ihr":"\u2714 gebaut":Bc(r.b.cost),state:a}),r.pad.material.opacity=a==="ready"?.75+Math.sin(wd*5)*.25:1}let t=we("store");if(t){t.hidden=!(Le&&li);let r=`\u{1F3F0} Burglager: ${En.map(s=>`${Hc[s]} ${_n[s]}`).join("  ")}`;t.textContent!==r&&(t.textContent=r)}}function rx(){for(let n of En)_n[n]=0;for(let n of as)n.model&&(ve.remove(n.model),n.model=null),gt[n.b.id]=!1;for(let n of[...Be])(n.x===-6&&n.z===74||n.x===mt.x+fn.x&&n.z===mt.z+fn.z)&&Be.splice(Be.indexOf(n),1);Bu(!1);for(let n of jn)ve.remove(n.m);jn.length=0,Fd()}var hg={axe:{x:-33,z:84},pickaxe:{x:64,z:24}},ug=3,F1=150;function G1(n,e){for(let t=0;t<12;t+=.75)for(let i=0;i<6.28;i+=.5){let r=n+Math.sin(i)*t,s=e+Math.cos(i)*t;if(!an(r,s,1.2))return{x:r,z:s}}return{x:n,z:e}}function V1(n,e,t){let i=$g.find(r=>r.id===n);Mo(n),Mn(["b",n]),ci(`${i.icon} ${i.name} ${t?"gefunden":"gebaut"}! ${i.done}`,6e3),Qe("levelUp")}function W1(){for(let n of kd)gt[n]||Dt.some(e=>e.type===n)||vn(n,G1(hg[n].x,hg[n].z))}var Ti=new Map,Qs=[],X1=new ue(.3,.4,.4,8),j1=B(7031344),q1=B(14137482),Y1=B(5979430),Z1=B(3107626,{flatShading:!0}),K1=B(4165434,{flatShading:!0});function J1(n,e){let t=-1,i=e;return Vn.forEach((r,s)=>{if(Ti.has(s)||r.inRock)return;let a=Math.hypot(r.x-n.x,r.z-n.z)-r.circle.r;a<i&&(t=s,i=a)}),t}function sx(n,e){let t=Vn[n];Va(t,!1);let i=new ge;i.add(R(X1,j1,0,.2,0),R(new ue(.29,.29,.02,8),q1,0,.41,0)),i.position.set(t.x,0,t.z),i.scale.setScalar(t.s),ve.add(i);let r=new ge,s=new ge;if(r.position.set(t.x,.35*t.s,t.z),r.rotation.y=e,r.add(s),s.add(R(new ue(.22,.32,3,7),Y1,0,1.5,0)),t.leafy)s.add(R(new fi(2,1),K1,0,3.9,0));else for(let[a,o,l]of[[2.1,3,2.7],[1.6,2.6,4.1],[1,2.2,5.3]])s.add(R(new Je(a,o,9),Z1,0,l,0));s.scale.setScalar(t.s),ve.add(r),Qs.push({outer:r,inner:s,t:0}),Ti.set(n,{t:0,dir:e,stump:i})}function Gd(n){let e=Ti.get(n);e&&(ve.remove(e.stump),Ti.delete(n),Va(Vn[n],!0))}function $1(n){for(let e of[...Qs])e.t+=n,e.inner.rotation.x=Math.min(Math.PI/2-.08,e.t*e.t*2.2),e.t>1.8&&(e.outer.position.y-=n*2),e.t>3&&(ve.remove(e.outer),Qs.splice(Qs.indexOf(e),1))}function Q1(n,e){let t=Vn[e];if(t.hits=(t.hits||0)+1,dt(t.hits<ug?"\u{1FA93} Tock!":"\u{1F332} Baum f\xE4llt!","#ffe0b2",{x:t.x,z:t.z}),Qe("chop"),t.hits<ug)return;t.hits=0;let i=n.root.position,r=Math.atan2(t.x-i.x,t.z-i.z);sx(e,r),$i(1.1,()=>{Qe("plop");for(let s of[2,3.6])vn("wood",{x:t.x+Math.sin(r)*s*t.s,z:t.z+Math.cos(r)*s*t.s})})}function eM(n){for(let[e,t]of Ti){t.t+=n;let i=Vn[e];t.t>F1&&!Ae.some(r=>Math.hypot(r.root.position.x-i.x,r.root.position.z-i.z)<3)&&Gd(e)}}var tM=[[0,1],[7,1],[3,1],[10,-1]],tn=[],nM=2,bi=0,mo=0,dg=B(9263659),pg=new je({color:16766287,emissive:16752640,emissiveIntensity:.8,metalness:.5,roughness:.3}),fg=[4244735,16728193,6942894,16766784,11766015];Xr.forEach((n,e)=>Dm(ve,n,1e3+e*7919));Mm(mn.map(n=>n.hole));tM.forEach(([n,e])=>{let t=mn[n];if(!t)return;let i=zm(t,0,e,9);i.ore=!1,t.treasure=i;let r=new ge,s=new ge;s.add(R(new ae(1.1,.6,.7),dg,0,.3,0));let a=new ge;a.position.set(0,.6,-.35),a.add(R(new ae(1.15,.2,.75),dg,0,.1,.375)),a.add(R(new ae(.18,.2,.05),pg,0,0,.76)),s.add(a,R(new ae(1.14,.08,.72),pg,0,.45,0));let o=new ge;fg.forEach((c,h)=>{let u=h/fg.length*Math.PI*2;o.add(R(new Bn(.16),new je({color:c,emissive:c,emissiveIntensity:1.2}),Math.sin(u)*.75,.2,Math.cos(u)*.6))}),r.add(s,o),r.position.set(i.x,0,i.z),r.rotation.y=e>0?0:Math.PI,r.visible=!1,ve.add(r);let l={M:t,open:r,lid:a,gems:o,side:e,state:0,hintT:0,t:0};t.cave=l,tn.push(l)});var iM=[0,1].map(()=>{let n=new Hl(16756832,0,11,1.2);return ve.add(n),n});function na(n,e){n.state=e,n.open.visible=e>0,n.gems.visible=e===1,n.lid.rotation.x=e===2?-1.9:0,n.t=0}var rM=()=>{};function sM(n){let e=n.root.position;for(let t of mn)if(!(Math.hypot(e.x-t.m.x,e.z-t.m.z)>t.radius+3))for(let i of[.9,1.4,2,2.6])for(let r of[0,.35,-.35]){let s=n.heading+r,a=Ku(t,e.x+Math.sin(s)*i,e.z+Math.cos(s)*i);if(a)return{M:t,cell:a}}return null}var aM=(n,e)=>mn.find(t=>Math.hypot(n.x-t.m.x,n.z-t.m.z)<t.radius+e);function oM(n,e,t){t.hits++,Qe("clink");let i=mn.indexOf(e);if(t.hits<nM){dt("\u26CF\uFE0F Klonk!","#e0e0e0",t),$u(e,t),Mn(["rk",i,t.idx]);return}lM(e,t),Qe("poof"),t.ore?(dt("\u2728 Kristalle!","#b388ff",t),vn("star",{x:t.x,z:t.z})):e.dug%2===1&&vn("stone",{x:t.x,z:t.z});let r=e.cave;r&&t===e.treasure?At(n.index,"\u{1F48E} Da ist eine Schatztruhe im Berg! Lauf hin!",4e3):r&&r.state===0&&Nm(e,t).includes(e.treasure)?At(n.index,"\u2728 Hier glitzert es ganz in der N\xE4he \u2026 weitergraben!",3e3):e.dug===1&&At(n.index,r&&r.state===0?"\u26CF\uFE0F Super! Grabt weiter Block f\xFCr Block in den Berg hinein. In diesem Berg ist tief drinnen ein Schatz versteckt!":"\u26CF\uFE0F Super! Grabt weiter Block f\xFCr Block, der Berg dar\xFCber bleibt stehen. So entsteht eine richtige H\xF6hle.",5e3)}function lM(n,e){sc(n,e,!1),mo++,n.cave&&e===n.treasure&&n.cave.state===0&&na(n.cave,1)}function cM(n,e){na(e,2),bi++,Qe("levelUp"),dt("\u{1F48E} Schatz! \u{1F48E}","#ffd54f",e.M.treasure);let t=e.M.treasure;for(let[i,r]of[["star",-.6],["star",.6],["life",0],["stone",-.9],["stone",.9]])vn(i,{x:t.x+r,z:t.z+e.side*.7});bi>=tn.length?ci("\u{1F451} Alle Sch\xE4tze gefunden! Ihr seid echte Schatzsucher! \u{1F451}",6e3):At(n.index,`\u{1F48E} Schatz gefunden! Noch ${tn.length-bi} Sch\xE4tze sind in anderen Bergen versteckt.`,4500)}var mg=0;function hM(n){if(!Le)return;for(let t of tn){if(t.state!==1)continue;let i=t.M.treasure,r=Mi().find(s=>Math.hypot(s.root.position.x-i.x,s.root.position.z-i.z)<1.9);r&&t.t>1&&cM(r,t)}if((mg-=n)>0||gt.pickaxe)return;let e=Mi().find(t=>aM(t.root.position,2.5));e&&(mg=20,At(e.index,"\u26F0\uFE0F Die Berge sind aus Felsbl\xF6cken! Mit einer Spitzhacke \u26CF\uFE0F k\xF6nnt ihr H\xF6hlen hineinhauen. Baut sie in der Werkstatt oder sucht sie beim Teich.",4500))}function uM(n){Ae.forEach((e,t)=>{let i=iM[t];if(!i)return;let r=e.root.position,s=!e.out&&Ju(r.x,r.z)?9:0;i.intensity+=(s-i.intensity)*Math.min(1,n*4),i.position.set(r.x,2.1,r.z)});for(let e of tn)e.t+=n,e.state===1&&e.gems.children.forEach((t,i)=>{t.rotation.y+=n*2,t.position.y=.25+Math.sin(e.t*3+i)*.08})}function ax(n){let e=n.root.position,t=Wg(n,6,1.4);if(t&&t.kind!=="cage")return!1;let i=(l,c,h)=>{n.toolShow=l,n.toolT=.45,n.cooldown=.45,n.attackDur=n.attackT=.4,n.justAttacked=!0,n.face=Math.atan2(c-e.x,h-e.z),n.faceT=.6},r=sM(n);if(r)return gt.pickaxe?(i("pickaxe",r.cell.x,r.cell.z),oM(n,r.M,r.cell),!0):!1;let s=J1(e,1.6);if(s<0)return!1;let a=Vn[s];return Math.abs(Na(Math.atan2(a.x-e.x,a.z-e.z),n.heading))>1.3?!1:gt.axe?(i("axe",a.x,a.z),Q1(n,s),!0):((n.axeHintT||0)<performance.now()&&(n.axeHintT=performance.now()+12e3,At(n.index,"\u{1FAB5} Holz gibt es nur vom B\xE4umef\xE4llen. Daf\xFCr braucht ihr eine Axt \u{1FA93}: Sie liegt im Wald links neben eurer Burg, oder baut sie in der Werkstatt.",4500)),!1)}function dM(){for(let n of[...Ti.keys()])Gd(n);for(let n of Qs)ve.remove(n.outer);Qs.length=0;for(let n of Vn)n.hits=0;for(let n of mn)Om(n);mo++;for(let n of tn)na(n,0);bi=0}tn.forEach(n=>na(n,0));var gg=2;function pM(n){if(!Le||(gg-=n)>0)return;gg=5;let e="stone";if(Dt.filter(r=>r.type===e).length>=10)return;let t=Mi();if(!t.length)return;let i=t[Math.floor(Math.random()*t.length)].root.position;for(let r=0;r<20;r++){let s=Math.random()*Math.PI*2,a=10+Math.random()*20,o=i.x+Math.sin(s)*a,l=i.z+Math.cos(s)*a;if(!an(o,l,1)&&!I1({x:o,z:l})&&!(o<-8&&o>-30&&l>52&&l<68)){vn(e,{x:o,z:l});return}}}Fd();var xg=3;function fM(n){if(!Le||(xg-=n)>0||(xg=6,Dt.filter(i=>i.type==="apple").length>=10))return;let e=Mi();if(!e.length)return;let t=e[Math.floor(Math.random()*e.length)].root.position;for(let i=0;i<20;i++){let r=Math.random()*Math.PI*2,s=8+Math.random()*18,a=t.x+Math.sin(r)*s,o=t.z+Math.cos(r)*s;if(!an(a,o)){vn("apple",{x:a,z:o});return}}}function vg(n,e){if(n.dying){n.h.body.rotation.z=Math.min(Math.PI/2,n.h.body.rotation.z+e*5),n.dying<.3&&(n.root.position.y-=e*3);return}n.walk+=e*n.spd*2.5,oc(n.h,n.walk,n.spd>0),n.hit>0&&(n.hit-=e,n.hit<=0&&jr(n.h,0))}function ox(){for(let n of Gt)ve.remove(n.root);Gt.length=0;for(let n of Dt)ve.remove(n.g);Dt.length=0;for(let n of ns)ve.remove(n.m);if(ns.length=0,is=is.filter(n=>n.fn===Nc),J0(Ae),Ae.forEach(n=>{Ng(n),Mn(["w",n.index,null])}),kg(),Le){for(let n of en)ve.remove(n.root);en.length=0;for(let n of yn)ve.remove(n.root),Be.includes(n.circle)&&Be.splice(Be.indexOf(n.circle),1);yn.length=0,is=[],rx(),dM(),R0(Ae),Jg()}}var ze=n=>Math.round(n*100)/100,yg=-1,_g=0;function mM(){let n=performance.now();if(!(yg===mo&&n-_g<2e3))return yg=mo,_g=n,mn.map(Qu)}function gM(){return{t:"s",p:Ae.map(n=>[ze(n.root.position.x),ze(n.root.position.z),ze(n.heading),ze(n.bodyYaw),Math.round(n.hp),n.level,n.lives,n.weapon,n.special?n.special.type:"",n.special?ze(n.special.t):0,ze(n.attackT),ze(n.attackDur),ze(n.dead),n.out?1:0,n.kills,n.moving,n.apples,En.map(e=>n.pack[e]),n.toolShow,ze(n.root.position.y)]),e:Gt.map(n=>[n.id,n.archer?1:0,ze(n.root.position.x),ze(n.root.position.z),ze(n.root.rotation.y),n.hp,ze(n.wind),ze(n.strike),ze(n.dying),n.moving?1:0]),a:en.map(n=>[n.id,n.type,ze(n.root.position.x),ze(n.root.position.z),ze(n.root.rotation.y),ze(n.dying),n.hp,ze(n.spd)]),i:Dt.map(n=>[n.id,n.type,ze(n.g.position.x),ze(n.g.position.z)]),r:ns.map(n=>[n.id,n.kind,n.owner,ze(n.m.position.x),ze(n.m.position.y),ze(n.m.position.z),ze(n.vel.x),ze(n.vel.y),ze(n.vel.z)]),c:yn.map(n=>[n.id,ze(n.root.position.x),ze(n.root.position.z),n.hp,ze(n.dying)]),z:ut?[ze(ut.root.rotation.y),ze(ut.wind),ze(ut.gone)]:null,fr:Ei,st:En.map(n=>_n[n]),bl:Object.keys(gt).filter(n=>gt[n]),tf:[...Ti].map(([n,e])=>[n,ze(e.dir)]),cv:tn.map(n=>n.state),rk:mM(),ts:bi,bb:jn.map(n=>[n.id,ze(n.sx),ze(n.sz),ze(n.ex),ze(n.ez),ze(n.t)]),vg:w0(),dg:Z0(),ev:Dg.splice(0)}}var xn={enemies:new Map,animals:new Map,items:new Map,shots:new Map,cages:new Map};function ho(n,e,t,i,r){let s=new Set;for(let a of e){s.add(a[0]);let o=n.get(a[0]);o||(o=t(a),n.set(a[0],o)),i(o,a)}for(let[a,o]of n)s.has(a)||(r(o),n.delete(a))}function xM(n){if(T0(n.vg),K0(n.dg,Ae),n.p.forEach((t,i)=>{let r=Ae[i];if(!r)return;let[s,a,o,l,c,h,u,d,p,f,g,m,y,x,v,S,C,E,_,D]=t;r.apples=C||0,r.toolShow=_||"",E&&En.forEach((M,I)=>r.pack[M]=E[I]),r.tx=s,r.tz=a,r.ty=D||0,r.heading=o,r.bodyYaw=l,r.hp=c,r.lives=u,r.kills=v,r.out=!!x,r.moving=S,y>0&&!r.dead&&(r.h.body.rotation.x=0),r.dead=y,g>r.attackT&&(r.attackT=g,r.attackDur=m),h!==r.level&&(r.level=h,Dc(r)),d!==r.weapon&&(r.weapon=d,Xi(r.h,Ji(d))),r.special=p?{type:p,t:f,max:wc()}:null}),ho(xn.enemies,n.e,([t,i,r,s])=>Object.assign(Bg(!!i,r,s),{id:t}),(t,[,,i,r,s,a,o,l,c,h])=>{t.tx=i,t.tz=r,t.root.rotation.y=s,a!==t.hp&&(t.hp=a,t.bar.visible=!c,xi(t.bar,a/t.maxHp)),t.wind=o,t.strike=l,t.dying=c,t.moving=!!h,c&&(t.bar.visible=!1)},t=>ve.remove(t.root)),ho(xn.animals,n.a,([t,i,r,s])=>Object.assign(zc(i,r,s),{id:t}),(t,[,,i,r,s,a,o,l])=>{t.tx=i,t.tz=r,t.root.rotation.y=s,t.dying=a,t.spd=l,o!==t.hp&&(t.hp=o,t.bar.visible=o>0,xi(t.bar,o/t.maxHp))},t=>ve.remove(t.root)),Ei=n.fr||0,n.st&&En.forEach((t,i)=>_n[t]=n.st[i]),n.bl){for(let t of n.bl)gt[t]||Mo(t);!n.bl.length&&Object.values(gt).some(Boolean)&&rx()}if(n.tf){let t=new Map(n.tf);for(let[i,r]of t)Ti.has(i)||sx(i,r);for(let i of[...Ti.keys()])t.has(i)||Gd(i)}n.rk&&n.rk.forEach((t,i)=>{let r=mn[i];r&&r.lastKey!==t&&(r.lastKey=t,ed(r,t))}),n.cv&&n.cv.forEach((t,i)=>{tn[i]&&tn[i].state!==t&&na(tn[i],t)}),bi=n.ts||0;let e=new Set;for(let[t,i,r,s,a,o]of n.bb||[]){e.add(t);let l=jn.find(c=>c.id===t);l||(l=nx({x:i,z:r},{x:s,z:a},t)),l.t=o}for(let t of[...jn])e.has(t.id)||(ve.remove(t.m),jn.splice(jn.indexOf(t),1));ho(xn.cages,n.c||[],([t,i,r])=>{let s=id();s.position.set(i,0,r),ve.add(s);let a=Zs(2.6);return xi(a,1),s.add(a),{id:t,root:s,bar:a,hp:3,maxHp:3,dying:0}},(t,[,,,i,r])=>{i!==t.hp&&(t.hp=i,xi(t.bar,i/t.maxHp)),t.dying=r,t.bar.visible=!r},t=>ve.remove(t.root)),n.z&&!ut&&(ut=Zg()),!n.z&&ut&&(ve.remove(ut.root),ut=null),ut&&n.z&&([ut.root.rotation.y,ut.wind,ut.gone]=n.z),ho(xn.items,n.i,([t,i,r,s])=>Object.assign(Fg(i,r,s),{id:t}),()=>{},t=>ve.remove(t.g)),ho(xn.shots,n.r,([t,i,r])=>({id:t,m:Vg(i,r),vel:new w}),(t,[,,,i,r,s,a,o,l])=>{t.m.position.set(i,r,s),t.vel.set(a,o,l)},t=>ve.remove(t.m));for(let t of n.ev){let[i,r,s,a,o]=t;if(i==="f"&&qa(ve,r,s,{x:a,z:o}),i==="d"&&yr(r)&&vd(r,s,Rg()),i==="s"&&Ya[r](),i==="m"&&Ug(r,s,a),i==="g"&&qi("msg",r,s),i==="h"&&zg(Ae[r]),i==="c"){let l=xn.enemies.get(r)||xn.animals.get(r);l&&(l.hit=.15,jr(l.h,16777215))}if(i==="w"&&zd(r,s),i==="k"&&(po=1),i==="rk"){let l=mn[r],c=l&&l.cells[s];c&&c.solid&&$u(l,c)}i==="u"&&tx({x:r,z:s},a)}}function vM(n){let e=Math.min(1,n*15),t=i=>{if(i.tx!==void 0){if(Math.abs(i.tx-i.root.position.x)+Math.abs(i.tz-i.root.position.z)>10){i.root.position.x=i.tx,i.root.position.z=i.tz;return}i.root.position.x+=(i.tx-i.root.position.x)*e,i.root.position.z+=(i.tz-i.root.position.z)*e,i.ty!==void 0&&(i.root.position.y+=(i.ty-i.root.position.y)*e)}};Ae.forEach(t),xn.enemies.forEach(t),xn.animals.forEach(t),xn.shots.forEach(i=>{i.m.position.addScaledVector(i.vel,n),i.m.lookAt(Tc.copy(i.m.position).add(i.vel))})}var Mg="";function yM(){let n=Ae[ss];jg(n);let e={t:"i",f:ze(n.input.fwd),u:ze(n.input.turn),a:n.input.attack?1:0},t=JSON.stringify(e);t!==Mg&&(Et.send(e),Mg=t),n.swapReq&&(Et.send({t:"swap"}),n.swapReq=!1)}function ia(n){Mt=n,ss=Mt==="client"?1:0;let e=document.body;if(e.classList.add("playing",Mt==="local"?"split":"full"),Mt==="client"&&e.classList.add("client"),Mt==="single"&&(Ae=[Qr(0,"all","local")]),Mt==="local"&&(Ae=[Qr(0,"p1","local"),Qr(1,"p2","local")]),Mt==="host"&&(Ae=[Qr(0,"all","local"),Qr(1,"all","remote")]),Mt==="client"&&(Ae=[Qr(0,"all","remote"),Qr(1,"all","local")]),Ae.forEach(s=>s.hud.style.display=yr(s.index)?"block":"none"),[0,1].forEach(s=>L0(s,!!Ae[s]&&yr(s))),Mt!=="local"&&Ae[ss].hud.appendChild(we("store")),xr())if(kg(),Le)Jg();else for(let s=0;s<18;s++)Nc();li=!0,Fd(),rM(),we("tAttack").textContent=Le?"\u{1FA84}":"\u2694\uFE0F";let r={single:`${Le?"Der b\xF6se Zauberer hat Tiere eingesperrt: befreit sie alle! \xC4pfel \u{1F34E} sammeln, Tiere f\xFCttern, ab in den Stall.":"Erobere die rote Burg!"} Mit ${Si?"\u{1F504}":"Q / Shift"} wechselst du ${Le?"den Zauber":"die Waffe"}.`,local:`Spieler 1 hat ${Le?"den Zauberstab":"die Mistgabel"}, Spieler 2 ${Le?"die Zauberkugeln":"den Bogen"}. Helft euch gegenseitig!`,host:"Dein Mitspieler ist da! Helft euch gegenseitig!",client:`Du bist Spieler 2 mit ${Le?"den Zauberkugeln":"dem Bogen"}. Helft euch gegenseitig!`}[Mt];qi("msg",r,4e3),xr()&&$i(16,()=>ci("\u{1F3D8}\uFE0F Neu: Drei D\xF6rfer zum Entdecken, mit Leuten zum Reden und R\xE4tseln! Der Weg geht zwischen eurer Burg und dem Stall los. Schaut auf die Karte oben rechts!",7e3)),Le&&xr()&&$i(9,()=>{gt.axe||ci("Tipp: Holz gibt es nur noch vom B\xE4umef\xE4llen. Sucht die Axt \u{1FA93} im Wald links neben eurer Burg!",5e3)})}we("menuSub").textContent="Befreit die Tiere vom b\xF6sen Zauberer!";we("kidHint").textContent="Z\xE4hmt Tiere mit \xC4pfeln und bringt sie in euren Stall: K\xFChe geben Milch, H\xFChner legen Eier. Zauberstab statt Waffen.";we("btnSingle").onclick=()=>{ji(),ia("single")};we("btnLocal").onclick=()=>{ji(),ia("local")};we("btnNet").onclick=()=>{we("menuMain").hidden=!0,we("menuNet").hidden=!1};we("btnBack").onclick=()=>location.reload();var _M=()=>!we("gameMenu").hidden;we("menuBtn").onclick=()=>{let n=Mt==="single"||Mt==="local";we("gmInvite").hidden=we("gmInviteInfo").hidden=!n,we("gameMenu").hidden=!1};we("gmResume").onclick=()=>{we("gameMenu").hidden=!0};we("gmHome").onclick=()=>{ra(),location.reload()};we("gmInvite").onclick=()=>{ra();let n=new URLSearchParams(location.search);n.set("host","1"),location.href=location.pathname+"?"+n.toString()};var go=n=>we("netStatus").innerHTML=n,Ic=n=>go("\u{1F615} Das hat nicht geklappt: "+((n==null?void 0:n.type)==="peer-unavailable"?"Code nicht gefunden.":(n==null?void 0:n.message)||n));async function Id(n){ji(),we("btnHost").disabled=we("btnHostSave").disabled=!0;let e=Qm();go("Verbinde \u2026");try{let t=await e0(e,{onConnection:i=>{if(Et){i.close();return}Et=i,Et.send({t:"cfg",kid:Le}),ia("host"),n&&hx(n),cd(t,Et.peer,!0),Et.on("data",r=>{let s=Ae[1];r.t==="i"&&(s.input={fwd:r.f,turn:r.u,attack:!!r.a}),r.t==="swap"&&(s.swapReq=!0),r.t==="dlg"&&ao(s,r.k)}),Et.on("close",()=>{hd(),Ae[1].input={fwd:0,turn:0,attack:!1},qi("msg","Dein Mitspieler ist weg.",4e3)}),setInterval(()=>Et.open&&Et.send(gM()),50)},onError:Ic});go(`Sag deinem Mitspieler diesen Code:<br><b>${e}</b><br>Warte auf Mitspieler \u2026`)}catch(t){Ic(t)}}we("btnHost").onclick=()=>Id(null);we("btnJoin").onclick=async()=>{ji();let n=we("joinCode").value.trim().toUpperCase();if(n.length!==4){go("Bitte den Code mit 4 Buchstaben eingeben.");return}go("Verbinde \u2026");try{let e=await t0(n,{onOpen:t=>{Et=t,Et.on("data",i=>{i.t==="cfg"&&(ia("client"),cd(e,Et.peer,!1)),i.t==="s"&&li&&xM(i)}),Et.on("close",()=>{hd(),qi("msg","Die Verbindung ist weg. \xDCber \u2630 Men\xFC neu starten.",6e3)})},onError:Ic})}catch(e){Ic(e)}};var lx="kic-save",cx="knights-in-castles",Ki=(n,e,t)=>Math.max(e,Math.min(t,Math.round(Number(n)||0)));function Vd(){let n={app:cx,v:1,when:new Date().toISOString(),kid:Le,players:Ae.map(e=>({level:e.level,kills:e.kills,lives:Math.max(1,e.lives),apples:e.apples,pack:{...e.pack}}))};return Le&&Object.assign(n,{store:{..._n},built:Object.keys(gt).filter(e=>gt[e]),freed:fr.map((e,t)=>t).filter(e=>!yn.some(t=>t.idx===e&&!t.dying)),stall:en.filter(e=>!e.dying&&(e.state==="stall"||e.state==="follow")).map(e=>e.type),caves:tn.map(e=>e.state),rock:mn.map(Qu),treasures:bi}),n.villages=yd(),n}function hx(n){var e;if(Ae.forEach((t,i)=>{var s,a;let r=(s=n.players)==null?void 0:s[i];if(r){t.level=Ki(r.level,0,vo),t.kills=Ki(r.kills,0,9999),t.lives=Ki(r.lives,1,5),t.apples=Ki(r.apples,0,9);for(let o of En)t.pack[o]=Ki((a=r.pack)==null?void 0:a[o],0,Hd);Dc(t)}}),Le){for(let t of En)_n[t]=Ki((e=n.store)==null?void 0:e[t],0,9999);for(let t of n.built||[])as.some(i=>i.b.id===t)&&!gt[t]&&Mo(t);for(let t of n.freed||[]){let i=yn.find(r=>r.idx===t);i&&(ve.remove(i.root),yn.splice(yn.indexOf(i),1),Be.includes(i.circle)&&Be.splice(Be.indexOf(i.circle),1),ve.remove(i.animal.root),en.splice(en.indexOf(i.animal),1),Ei++)}for(let t of(n.stall||[]).slice(0,40)){if(!Lc[t])continue;let i=Jt.x1+2+Math.random()*(Jt.x2-Jt.x1-4),r=Jt.z1+2+Math.random()*(Jt.z2-Jt.z1-4),s=zc(t,i,r);Object.assign(s,{id:vr++,heading:Math.random()*6.28,wanderT:0,wander:!1,fleeT:0,state:"stall",prodT:Lc[t][1]/2}),en.push(s)}mn.forEach((t,i)=>{var r;return ed(t,typeof((r=n.rock)==null?void 0:r[i])=="string"?n.rock[i].slice(0,200):"")}),mo++,(n.caves||[]).forEach((t,i)=>{let r=tn[i];if(!r)return;let s=Array.isArray(t)?t[0]===2?2:0:Array.isArray(n.rock)?Ki(t,0,2):t===2?2:0;s===1&&r.M.treasure.solid&&(s=0),s===0&&!r.M.treasure.solid&&(s=1),na(r,s)}),bi=Ki(n.treasures,0,tn.length),Ei>=fr.length&&Kg()}A0(n.villages),ci("\u{1F4C2} Spielstand geladen! Weiter geht's.",3500)}function ra(){if(!li||!xr())return!1;try{return localStorage.setItem(lx,JSON.stringify(Vd())),!0}catch(n){return!1}}function MM(){if(!li||!xr())return;let n=Vd();ra();let e=new Date,t=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}_${String(e.getHours()).padStart(2,"0")}-${String(e.getMinutes()).padStart(2,"0")}`,i=URL.createObjectURL(new Blob([JSON.stringify(n,null,1)],{type:"application/json"})),r=document.createElement("a");r.href=i,r.download=`Knights-Spielstand_${t}.json`,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(i),5e3),qi("msg","\u{1F4BE} Gespeichert! Die Datei liegt in deinem Download-Ordner.",3500),Ya.pickup()}setInterval(ra,2e4);addEventListener("pagehide",ra);document.addEventListener("visibilitychange",()=>{document.hidden&&ra()});we("saveBtn").onclick=n=>{n.currentTarget.blur(),MM()};function Eg(n){try{let e=JSON.parse(n);if((e==null?void 0:e.app)===cx&&Array.isArray(e.players)&&e.players.length)return e}catch(e){}return null}function bg(n){let e=new Date(n.when),t=isNaN(e)?"":`${e.toLocaleDateString("de-DE")} um ${e.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}`,i=Math.max(...n.players.map(s=>Ki(s.level,0,vo)))+1,r=[`${n.players.length===1?"1 Spieler":"2 Spieler"}`,`Level ${i}`];return r.push(`\u{1F43E} ${(n.freed||[]).length} befreit`,`\u{1F48E} ${n.treasures||0} Sch\xE4tze`),`Gespeichert am ${t} \xB7 ${r.join(" \xB7 ")}`}function Sg(n){ji(),ia(n.players.length>=2&&!Si?"local":"single"),hx(n)}{let n=null;try{n=Eg(localStorage.getItem(lx))}catch(t){}n&&(we("saveBox").hidden=!1,we("saveInfo").textContent=bg(n),we("btnContinue").onclick=()=>Sg(n),we("btnHostSave").hidden=we("hostSaveInfo").hidden=!1,we("hostSaveInfo").textContent=bg(n),we("btnHost").textContent="\u{1F3F0} Neues Spiel erstellen",we("btnHostSave").onclick=()=>Id(n));let e=new URLSearchParams(location.search);e.has("host")&&(e.delete("host"),history.replaceState(null,"",location.pathname+(e.toString()?"?"+e.toString():"")),we("menuMain").hidden=!0,we("menuNet").hidden=!1,Id(n)),we("btnLoadFile").onclick=()=>we("loadFile").click(),we("loadFile").onchange=async()=>{let t=we("loadFile").files[0];if(!t)return;let i=Eg(await t.text());i?Sg(i):(n||(we("btnContinue").style.display="none"),we("saveBox").hidden=!1,we("saveInfo").textContent="\u{1F615} Das ist keine Spielstand-Datei von Knights in Castles.")}}location.search.includes("debug")&&(window.kic={dragons:$0,villages:{talkTo:xd,pickDialog:ao,save:yd,...x0},players:()=>Ae,items:Dt,TREES:Vn,CAVES:tn,placeBuild:Mo,useTool:ax,blockedSpot:an,solidAt:Br,fallen:Ti,built:gt,store:_n,attack:Xg,makeSave:Vd,get treasures(){return bi}});var ux=new Fl,uo=new Bt(55,1,.1,1500),Td=0,dx=performance.now();function px(){dx=performance.now();let n=Math.min(ux.getDelta(),.05);_M()&&(Mt==="single"||Mt==="local")||Wd(n),fx(),requestAnimationFrame(px)}setInterval(()=>{Mt==="host"&&performance.now()-dx>200&&(ux.getDelta(),Wd(.05))},50);function Wd(n){if(li){if(xr()){for(let e of[...is])e.t-=n,e.t<=0&&(is.splice(is.indexOf(e),1),e.fn());Ae.forEach(e=>{e.source==="local"&&jg(e)}),Ae.forEach(e=>x1(e,n)),M1(),[...Gt].forEach(e=>E1(e,n)),[...en].forEach(e=>S1(e,n)),Ae.forEach(e=>e.justAttacked=!1),g1(n),fM(n),pM(n),B1(n),eM(n),hM(n),C1(n),P1(n),b0(n,Ae),W0(n,Ae),i1(n),r1(n),Gt.forEach(e=>ig(e,n)),en.forEach(e=>vg(e,n)),yn.forEach(e=>sg(e,n)),ag(ut,n)}else Et!=null&&Et.open&&yM(),vM(n),xn.enemies.forEach(e=>ig(e,n)),xn.animals.forEach(e=>vg(e,n)),xn.cages.forEach(e=>sg(e,n)),jn.forEach(e=>ix(e,n)),ag(ut,n),xn.items.forEach(e=>{e.t+=n,e.model.rotation.y+=n*2,e.model.position.y=.9+Math.sin(e.t*3)*.15});Ae.forEach(e=>v1(e,n)),Ae.forEach(_1),k1(n),uM(n),S0(n,Ae),X0(n,xr()),$1(n)}b1(n),Rm(n),Km(ve,n)}var Js=new w;function EM(){let n=li?Ae.filter(i=>!i.out):[],e=60;n.length?(Js.set(0,0,0),n.forEach(i=>Js.add(i.root.position)),Js.divideScalar(n.length),n.length>1&&(e=Math.max(60,n[0].root.position.distanceTo(n[1].root.position)/2+40))):Js.set(0,0,-20),li||(e=160);let t=_i.shadow.camera;t.right!==e&&(t.left=t.bottom=-e,t.right=t.top=e,t.updateProjectionMatrix()),_i.target.position.copy(Js),_i.position.copy(Js).addScaledVector(Dd,150)}function fx(){xo(),EM();let{w:n,h:e}=Tg();if(!li)Td+=8e-4,uo.position.set(Math.sin(Td)*110,45,-20+Math.cos(Td)*110),uo.lookAt(0,5,-40),Ql(0,40),uo.aspect=n/e,uo.updateProjectionMatrix(),Tt.setScissorTest(!1),Tt.setViewport(0,0,n,e),Tt.render(ve,uo);else if(Mt==="local"){let t=Math.floor(n/2);Tt.setScissorTest(!0),Ae.forEach((i,r)=>{Ql(i.root.position.x,i.root.position.z),Tt.setViewport(r*t,0,t,e),Tt.setScissor(r*t,0,t,e),i.cam.aspect=t/e,i.cam.updateProjectionMatrix(),Tt.render(ve,i.cam)})}else{let t=Ae[ss],i=t.out&&Ae.find(r=>!r.out)||t;Ql(i.root.position.x,i.root.position.z),Tt.setScissorTest(!1),Tt.setViewport(0,0,n,e),t.cam.aspect=n/e,t.cam.updateProjectionMatrix(),Tt.render(ve,t.cam)}}window.game={get players(){return Ae},enemies:Gt,animals:en,items:Dt,keys:ea,startGame:ia,step:Wd,render:fx,renderer:Tt};px();window.kicReady=!0;document.getElementById("oldBrowser").hidden=!0;})();

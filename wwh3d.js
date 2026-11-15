/* Wildfire Warden 3D Home Vulnerability Map v3.8.0 | three.js r160 (MIT) bundled | https://github.com/John13Chabot/wildfire-warden-widgets */
var qx=Object.defineProperty;var Yx=(s,t)=>{for(var e in t)qx(s,e,{get:t[e],enumerable:!0})};var kn={};Yx(kn,{ACESFilmicToneMapping:()=>M0,AddEquation:()=>Zi,AddOperation:()=>v0,AdditiveAnimationBlendMode:()=>Td,AdditiveBlending:()=>Dr,AgXToneMapping:()=>E0,AlphaFormat:()=>C0,AlwaysCompare:()=>$0,AlwaysDepth:()=>f0,AlwaysStencilFunc:()=>Qh,AmbientLight:()=>zl,AnimationAction:()=>Zl,AnimationClip:()=>Ks,AnimationLoader:()=>Pf,AnimationMixer:()=>Yf,AnimationObjectGroup:()=>qf,AnimationUtils:()=>pM,ArcCurve:()=>ll,ArrayCamera:()=>el,ArrowHelper:()=>dd,AttachedBindMode:()=>Ah,Audio:()=>ql,AudioAnalyser:()=>Wf,AudioContext:()=>Sa,AudioListener:()=>Vf,AudioLoader:()=>kf,AxesHelper:()=>pd,BackSide:()=>Qe,BasicDepthPacking:()=>H0,BasicShadowMap:()=>Kx,BatchedMesh:()=>Vr,Bone:()=>ca,BooleanKeyframeTrack:()=>Fi,Box2:()=>ed,Box3:()=>ae,Box3Helper:()=>hd,BoxGeometry:()=>ze,BoxHelper:()=>ud,BufferAttribute:()=>Gt,BufferGeometry:()=>Vt,BufferGeometryLoader:()=>Xl,ByteType:()=>A0,Cache:()=>Ei,Camera:()=>zr,CameraHelper:()=>ld,CanvasTexture:()=>Wr,CapsuleGeometry:()=>ml,CatmullRomCurve3:()=>ul,CineonToneMapping:()=>b0,CircleGeometry:()=>gl,ClampToEdgeWrapping:()=>hn,Clock:()=>$r,Color:()=>at,ColorKeyframeTrack:()=>ya,ColorManagement:()=>fe,CompressedArrayTexture:()=>Sf,CompressedCubeTexture:()=>Ef,CompressedTexture:()=>Gr,CompressedTextureLoader:()=>If,ConeGeometry:()=>xl,ConstantAlphaFactor:()=>l0,ConstantColorFactor:()=>a0,CubeCamera:()=>Qc,CubeReflectionMapping:()=>Pi,CubeRefractionMapping:()=>ji,CubeTexture:()=>ks,CubeTextureLoader:()=>Lf,CubeUVReflectionMapping:()=>jr,CubicBezierCurve:()=>la,CubicBezierCurve3:()=>hl,CubicInterpolant:()=>Nl,CullFaceBack:()=>bh,CullFaceFront:()=>$m,CullFaceFrontBack:()=>$x,CullFaceNone:()=>Jm,Curve:()=>In,CurvePath:()=>pl,CustomBlending:()=>$l,CustomToneMapping:()=>S0,CylinderGeometry:()=>ns,Cylindrical:()=>td,Data3DTexture:()=>na,DataArrayTexture:()=>Fr,DataTexture:()=>Ci,DataTextureLoader:()=>Df,DataUtils:()=>tv,DecrementStencilOp:()=>o_,DecrementWrapStencilOp:()=>c_,DefaultLoadingManager:()=>mg,DepthFormat:()=>$i,DepthStencilFormat:()=>zs,DepthTexture:()=>Vs,DetachedBindMode:()=>T0,DirectionalLight:()=>Qs,DirectionalLightHelper:()=>cd,DiscreteInterpolant:()=>Fl,DisplayP3ColorSpace:()=>tu,DodecahedronGeometry:()=>_l,DoubleSide:()=>un,DstAlphaFactor:()=>n0,DstColorFactor:()=>s0,DynamicCopyUsage:()=>M_,DynamicDrawUsage:()=>x_,DynamicReadUsage:()=>y_,EdgesGeometry:()=>vl,EllipseCurve:()=>Xr,EqualCompare:()=>q0,EqualDepth:()=>p0,EqualStencilFunc:()=>f_,EquirectangularReflectionMapping:()=>Wo,EquirectangularRefractionMapping:()=>Xo,Euler:()=>Ze,EventDispatcher:()=>$n,ExtrudeGeometry:()=>ss,FileLoader:()=>jn,Float16BufferAttribute:()=>hf,Float32BufferAttribute:()=>It,Float64BufferAttribute:()=>ff,FloatType:()=>Yn,Fog:()=>sl,FogExp2:()=>il,FramebufferTexture:()=>Mf,FrontSide:()=>Bn,Frustum:()=>Hs,GLBufferAttribute:()=>Kf,GLSL1:()=>E_,GLSL3:()=>tf,GreaterCompare:()=>Y0,GreaterDepth:()=>g0,GreaterEqualCompare:()=>J0,GreaterEqualDepth:()=>m0,GreaterEqualStencilFunc:()=>g_,GreaterStencilFunc:()=>p_,GridHelper:()=>od,Group:()=>Nn,HalfFloatType:()=>Li,HemisphereLight:()=>Zr,HemisphereLightHelper:()=>rd,IcosahedronGeometry:()=>qr,ImageBitmapLoader:()=>zf,ImageLoader:()=>js,ImageUtils:()=>ea,IncrementStencilOp:()=>r_,IncrementWrapStencilOp:()=>a_,InstancedBufferAttribute:()=>Di,InstancedBufferGeometry:()=>Wl,InstancedInterleavedBuffer:()=>$f,InstancedMesh:()=>ci,Int16BufferAttribute:()=>lf,Int32BufferAttribute:()=>uf,Int8BufferAttribute:()=>of,IntType:()=>vd,InterleavedBuffer:()=>Ws,InterleavedBufferAttribute:()=>es,Interpolant:()=>Zs,InterpolateDiscrete:()=>Yo,InterpolateLinear:()=>Zo,InterpolateSmooth:()=>Yc,InvertStencilOp:()=>l_,KeepStencilOp:()=>Is,KeyframeTrack:()=>Ln,LOD:()=>rl,LatheGeometry:()=>pa,Layers:()=>Br,LessCompare:()=>X0,LessDepth:()=>d0,LessEqualCompare:()=>Rd,LessEqualDepth:()=>Go,LessEqualStencilFunc:()=>d_,LessStencilFunc:()=>h_,Light:()=>hi,LightProbe:()=>Vl,Line:()=>li,Line3:()=>xn,LineBasicMaterial:()=>en,LineCurve:()=>ua,LineCurve3:()=>fl,LineDashedMaterial:()=>Ul,LineLoop:()=>cl,LineSegments:()=>zn,LinearDisplayP3ColorSpace:()=>Aa,LinearEncoding:()=>Ad,LinearFilter:()=>Ne,LinearInterpolant:()=>va,LinearMipMapLinearFilter:()=>n_,LinearMipMapNearestFilter:()=>e_,LinearMipmapLinearFilter:()=>Qi,LinearMipmapNearestFilter:()=>_d,LinearSRGBColorSpace:()=>oi,LinearToneMapping:()=>y0,LinearTransfer:()=>$o,Loader:()=>pn,LoaderUtils:()=>Ma,LoadingManager:()=>wa,LoopOnce:()=>N0,LoopPingPong:()=>B0,LoopRepeat:()=>F0,LuminanceAlphaFormat:()=>I0,LuminanceFormat:()=>P0,MOUSE:()=>Zx,Material:()=>Je,MaterialLoader:()=>Gl,MathUtils:()=>eu,Matrix3:()=>te,Matrix4:()=>Ct,MaxEquation:()=>Th,Mesh:()=>ee,MeshBasicMaterial:()=>On,MeshDepthMaterial:()=>oa,MeshDistanceMaterial:()=>aa,MeshLambertMaterial:()=>Ll,MeshMatcapMaterial:()=>Dl,MeshNormalMaterial:()=>Yr,MeshPhongMaterial:()=>Pl,MeshPhysicalMaterial:()=>Cl,MeshStandardMaterial:()=>nn,MeshToonMaterial:()=>Il,MinEquation:()=>Eh,MirroredRepeatWrapping:()=>qo,MixOperation:()=>_0,MultiplyBlending:()=>Sh,MultiplyOperation:()=>Ta,NearestFilter:()=>Ue,NearestMipMapLinearFilter:()=>t_,NearestMipMapNearestFilter:()=>Qx,NearestMipmapLinearFilter:()=>Bo,NearestMipmapNearestFilter:()=>Jc,NeverCompare:()=>W0,NeverDepth:()=>h0,NeverStencilFunc:()=>u_,NoBlending:()=>Ti,NoColorSpace:()=>Cn,NoToneMapping:()=>Jn,NormalAnimationBlendMode:()=>Ql,NormalBlending:()=>Ai,NotEqualCompare:()=>Z0,NotEqualDepth:()=>x0,NotEqualStencilFunc:()=>m_,NumberKeyframeTrack:()=>Js,Object3D:()=>le,ObjectLoader:()=>Of,ObjectSpaceNormalMap:()=>G0,OctahedronGeometry:()=>_a,OneFactor:()=>Kr,OneMinusConstantAlphaFactor:()=>u0,OneMinusConstantColorFactor:()=>c0,OneMinusDstAlphaFactor:()=>i0,OneMinusDstColorFactor:()=>r0,OneMinusSrcAlphaFactor:()=>Os,OneMinusSrcColorFactor:()=>e0,OrthographicCamera:()=>ts,P3Primaries:()=>jo,PCFShadowMap:()=>xd,PCFSoftShadowMap:()=>Jl,PMREMGenerator:()=>ra,Path:()=>Ni,PerspectiveCamera:()=>Fe,Plane:()=>yn,PlaneGeometry:()=>Kn,PlaneHelper:()=>fd,PointLight:()=>Jr,PointLightHelper:()=>sd,Points:()=>Ui,PointsMaterial:()=>ui,PolarGridHelper:()=>ad,PolyhedronGeometry:()=>is,PositionalAudio:()=>Gf,PropertyBinding:()=>he,PropertyMixer:()=>Yl,QuadraticBezierCurve:()=>ha,QuadraticBezierCurve3:()=>fa,Quaternion:()=>pe,QuaternionKeyframeTrack:()=>rs,QuaternionLinearInterpolant:()=>Bl,RED_GREEN_RGTC2_Format:()=>Kh,RED_RGTC1_Format:()=>U0,REVISION:()=>gd,RGBADepthPacking:()=>V0,RGBAFormat:()=>wn,RGBAIntegerFormat:()=>Sd,RGBA_ASTC_10x10_Format:()=>Xh,RGBA_ASTC_10x5_Format:()=>Vh,RGBA_ASTC_10x6_Format:()=>Gh,RGBA_ASTC_10x8_Format:()=>Wh,RGBA_ASTC_12x10_Format:()=>qh,RGBA_ASTC_12x12_Format:()=>Yh,RGBA_ASTC_4x4_Format:()=>Uh,RGBA_ASTC_5x4_Format:()=>Nh,RGBA_ASTC_5x5_Format:()=>Fh,RGBA_ASTC_6x5_Format:()=>Bh,RGBA_ASTC_6x6_Format:()=>Oh,RGBA_ASTC_8x5_Format:()=>zh,RGBA_ASTC_8x6_Format:()=>kh,RGBA_ASTC_8x8_Format:()=>Hh,RGBA_BPTC_Format:()=>qc,RGBA_ETC2_EAC_Format:()=>Dh,RGBA_PVRTC_2BPPV1_Format:()=>Ih,RGBA_PVRTC_4BPPV1_Format:()=>Ph,RGBA_S3TC_DXT1_Format:()=>Gc,RGBA_S3TC_DXT3_Format:()=>Wc,RGBA_S3TC_DXT5_Format:()=>Xc,RGB_BPTC_SIGNED_Format:()=>Zh,RGB_BPTC_UNSIGNED_Format:()=>Jh,RGB_ETC1_Format:()=>Ed,RGB_ETC2_Format:()=>Lh,RGB_PVRTC_2BPPV1_Format:()=>Ch,RGB_PVRTC_4BPPV1_Format:()=>Rh,RGB_S3TC_DXT1_Format:()=>Vc,RGFormat:()=>D0,RGIntegerFormat:()=>Md,RawShaderMaterial:()=>Rl,Ray:()=>ai,Raycaster:()=>Ea,Rec709Primaries:()=>Ko,RectAreaLight:()=>kl,RedFormat:()=>L0,RedIntegerFormat:()=>bd,ReinhardToneMapping:()=>w0,RenderTarget:()=>jc,RepeatWrapping:()=>Ii,ReplaceStencilOp:()=>s_,ReverseSubtractEquation:()=>jm,RingGeometry:()=>yl,SIGNED_RED_GREEN_RGTC2_Format:()=>jh,SIGNED_RED_RGTC1_Format:()=>$h,SRGBColorSpace:()=>Te,SRGBTransfer:()=>_e,Scene:()=>Gs,ShaderChunk:()=>Kt,ShaderLib:()=>qn,ShaderMaterial:()=>dn,ShadowMaterial:()=>Al,Shape:()=>Fn,ShapeGeometry:()=>wl,ShapePath:()=>md,ShapeUtils:()=>ri,ShortType:()=>R0,Skeleton:()=>al,SkeletonHelper:()=>id,SkinnedMesh:()=>ol,Source:()=>Si,Sphere:()=>Re,SphereGeometry:()=>Ys,Spherical:()=>Qf,SphericalHarmonics3:()=>Hl,SplineCurve:()=>da,SpotLight:()=>Ol,SpotLightHelper:()=>nd,Sprite:()=>Hr,SpriteMaterial:()=>Xs,SrcAlphaFactor:()=>Zc,SrcAlphaSaturateFactor:()=>o0,SrcColorFactor:()=>t0,StaticCopyUsage:()=>b_,StaticDrawUsage:()=>Qo,StaticReadUsage:()=>v_,StereoCamera:()=>Hf,StreamCopyUsage:()=>S_,StreamDrawUsage:()=>__,StreamReadUsage:()=>w_,StringKeyframeTrack:()=>Bi,SubtractEquation:()=>Km,SubtractiveBlending:()=>Mh,TOUCH:()=>Jx,TangentSpaceNormalMap:()=>os,TetrahedronGeometry:()=>bl,Texture:()=>Ve,TextureLoader:()=>Uf,TorusGeometry:()=>Ml,TorusKnotGeometry:()=>Sl,Triangle:()=>fn,TriangleFanDrawMode:()=>k0,TriangleStripDrawMode:()=>z0,TrianglesDrawMode:()=>O0,TubeGeometry:()=>El,TwoPassDoubleSide:()=>jx,UVMapping:()=>Kl,Uint16BufferAttribute:()=>ia,Uint32BufferAttribute:()=>sa,Uint8BufferAttribute:()=>af,Uint8ClampedBufferAttribute:()=>cf,Uniform:()=>Zf,UniformsGroup:()=>Jf,UniformsLib:()=>Mt,UniformsUtils:()=>eg,UnsignedByteType:()=>Ri,UnsignedInt248Type:()=>Ji,UnsignedIntType:()=>Mi,UnsignedShort4444Type:()=>yd,UnsignedShort5551Type:()=>wd,UnsignedShortType:()=>jl,VSMShadowMap:()=>si,Vector2:()=>st,Vector3:()=>T,Vector4:()=>de,VectorKeyframeTrack:()=>$s,VideoTexture:()=>bf,WebGL1Renderer:()=>nl,WebGL3DRenderTarget:()=>sf,WebGLArrayRenderTarget:()=>nf,WebGLCoordinateSystem:()=>Zn,WebGLCubeRenderTarget:()=>tl,WebGLMultipleRenderTargets:()=>rf,WebGLRenderTarget:()=>tn,WebGLRenderer:()=>kr,WebGLUtils:()=>cg,WebGPUCoordinateSystem:()=>Ur,WireframeGeometry:()=>Tl,WrapAroundEnding:()=>Jo,ZeroCurvatureEnding:()=>Us,ZeroFactor:()=>Qm,ZeroSlopeEnding:()=>Ns,ZeroStencilOp:()=>i_,_SRGBAFormat:()=>$c,createCanvasElement:()=>j0,sRGBEncoding:()=>Ki});var gd="160",Zx={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Jx={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Jm=0,bh=1,$m=2,$x=3,Kx=0,xd=1,Jl=2,si=3,Bn=0,Qe=1,un=2,jx=2,Ti=0,Ai=1,Dr=2,Mh=3,Sh=4,$l=5,Zi=100,Km=101,jm=102,Eh=103,Th=104,Qm=200,Kr=201,t0=202,e0=203,Zc=204,Os=205,n0=206,i0=207,s0=208,r0=209,o0=210,a0=211,c0=212,l0=213,u0=214,h0=0,f0=1,d0=2,Go=3,p0=4,m0=5,g0=6,x0=7,Ta=0,_0=1,v0=2,Jn=0,y0=1,w0=2,b0=3,M0=4,S0=5,E0=6,Ah="attached",T0="detached",Kl=300,Pi=301,ji=302,Wo=303,Xo=304,jr=306,Ii=1e3,hn=1001,qo=1002,Ue=1003,Jc=1004,Qx=1004,Bo=1005,t_=1005,Ne=1006,_d=1007,e_=1007,Qi=1008,n_=1008,Ri=1009,A0=1010,R0=1011,jl=1012,vd=1013,Mi=1014,Yn=1015,Li=1016,yd=1017,wd=1018,Ji=1020,C0=1021,wn=1023,P0=1024,I0=1025,$i=1026,zs=1027,L0=1028,bd=1029,D0=1030,Md=1031,Sd=1033,Vc=33776,Gc=33777,Wc=33778,Xc=33779,Rh=35840,Ch=35841,Ph=35842,Ih=35843,Ed=36196,Lh=37492,Dh=37496,Uh=37808,Nh=37809,Fh=37810,Bh=37811,Oh=37812,zh=37813,kh=37814,Hh=37815,Vh=37816,Gh=37817,Wh=37818,Xh=37819,qh=37820,Yh=37821,qc=36492,Zh=36494,Jh=36495,U0=36283,$h=36284,Kh=36285,jh=36286,N0=2200,F0=2201,B0=2202,Yo=2300,Zo=2301,Yc=2302,Us=2400,Ns=2401,Jo=2402,Ql=2500,Td=2501,O0=0,z0=1,k0=2,Ad=3e3,Ki=3001,H0=3200,V0=3201,os=0,G0=1,Cn="",Te="srgb",oi="srgb-linear",tu="display-p3",Aa="display-p3-linear",$o="linear",_e="srgb",Ko="rec709",jo="p3",i_=0,Is=7680,s_=7681,r_=7682,o_=7683,a_=34055,c_=34056,l_=5386,u_=512,h_=513,f_=514,d_=515,p_=516,m_=517,g_=518,Qh=519,W0=512,X0=513,q0=514,Rd=515,Y0=516,Z0=517,J0=518,$0=519,Qo=35044,x_=35048,__=35040,v_=35045,y_=35049,w_=35041,b_=35046,M_=35050,S_=35042,E_="100",tf="300 es",$c=1035,Zn=2e3,Ur=2001,$n=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yp=1234567,Bs=Math.PI/180,Nr=180/Math.PI;function Pn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[s&255]+an[s>>8&255]+an[s>>16&255]+an[s>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[e&63|128]+an[e>>8&255]+"-"+an[e>>16&255]+an[e>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function Ae(s,t,e){return Math.max(t,Math.min(e,s))}function Cd(s,t){return(s%t+t)%t}function T_(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function A_(s,t,e){return s!==t?(e-s)/(t-s):0}function Oo(s,t,e){return(1-e)*s+e*t}function R_(s,t,e,n){return Oo(s,t,1-Math.exp(-e*n))}function C_(s,t=1){return t-Math.abs(Cd(s,t*2)-t)}function P_(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function I_(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function L_(s,t){return s+Math.floor(Math.random()*(t-s+1))}function D_(s,t){return s+Math.random()*(t-s)}function U_(s){return s*(.5-Math.random())}function N_(s){s!==void 0&&(yp=s);let t=yp+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function F_(s){return s*Bs}function B_(s){return s*Nr}function ef(s){return(s&s-1)===0&&s!==0}function O_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Kc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function z_(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":s.set(a*u,c*h,c*f,a*l);break;case"YZY":s.set(c*f,a*u,c*h,a*l);break;case"ZXZ":s.set(c*h,c*f,a*u,a*l);break;case"XZX":s.set(a*u,c*m,c*d,a*l);break;case"YXY":s.set(c*d,a*u,c*m,a*l);break;case"ZYZ":s.set(c*m,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function bn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function jt(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var eu={DEG2RAD:Bs,RAD2DEG:Nr,generateUUID:Pn,clamp:Ae,euclideanModulo:Cd,mapLinear:T_,inverseLerp:A_,lerp:Oo,damp:R_,pingpong:C_,smoothstep:P_,smootherstep:I_,randInt:L_,randFloat:D_,randFloatSpread:U_,seededRandom:N_,degToRad:F_,radToDeg:B_,isPowerOfTwo:ef,ceilPowerOfTwo:O_,floorPowerOfTwo:Kc,setQuaternionFromProperEuler:z_,normalize:jt,denormalize:bn},st=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},te=class s{constructor(t,e,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){let u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],m=n[8],x=i[0],g=i[3],p=i[6],v=i[1],_=i[4],y=i[7],S=i[2],b=i[5],E=i[8];return r[0]=o*x+a*v+c*S,r[3]=o*g+a*_+c*b,r[6]=o*p+a*y+c*E,r[1]=l*x+u*v+h*S,r[4]=l*g+u*_+h*b,r[7]=l*p+u*y+h*E,r[2]=f*x+d*v+m*S,r[5]=f*g+d*_+m*b,r[8]=f*p+d*y+m*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*r,d=l*r-o*c,m=e*h+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=h*x,t[1]=(i*l-u*n)*x,t[2]=(a*n-i*o)*x,t[3]=f*x,t[4]=(u*e-i*c)*x,t[5]=(i*r-a*e)*x,t[6]=d*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ku.makeScale(t,e)),this}rotate(t){return this.premultiply(ku.makeRotation(-t)),this}translate(t,e){return this.premultiply(ku.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ku=new te;function K0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}var k_={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Ar(s,t){return new k_[s](t)}function ta(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function j0(){let s=ta("canvas");return s.style.display="block",s}var wp={};function zo(s){s in wp||(wp[s]=!0,console.warn(s))}var bp=new te().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Mp=new te().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$a={[oi]:{transfer:$o,primaries:Ko,toReference:s=>s,fromReference:s=>s},[Te]:{transfer:_e,primaries:Ko,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Aa]:{transfer:$o,primaries:jo,toReference:s=>s.applyMatrix3(Mp),fromReference:s=>s.applyMatrix3(bp)},[tu]:{transfer:_e,primaries:jo,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Mp),fromReference:s=>s.applyMatrix3(bp).convertLinearToSRGB()}},H_=new Set([oi,Aa]),fe={enabled:!0,_workingColorSpace:oi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!H_.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;let n=$a[t].toReference,i=$a[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return $a[s].primaries},getTransfer:function(s){return s===Cn?$o:$a[s].transfer}};function Ir(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Hu(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var or,ea=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{or===void 0&&(or=ta("canvas")),or.width=t.width,or.height=t.height;let n=or.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=or}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ta("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ir(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ir(e[n]/255)*255):e[n]=Ir(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},V_=0,Si=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=Pn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Vu(i[o].image)):r.push(Vu(i[o]))}else r=Vu(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Vu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ea.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var G_=0,Ve=class s extends $n{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=hn,i=hn,r=Ne,o=Qi,a=wn,c=Ri,l=s.DEFAULT_ANISOTROPY,u=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=Pn(),this.name="",this.source=new Si(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(zo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ki?Te:Cn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ii:t.x=t.x-Math.floor(t.x);break;case hn:t.x=t.x<0?0:1;break;case qo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ii:t.y=t.y-Math.floor(t.y);break;case hn:t.y=t.y<0?0:1;break;case qo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return zo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Te?Ki:Ad}set encoding(t){zo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ki?Te:Cn}};Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=Kl;Ve.DEFAULT_ANISOTROPY=1;var de=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],m=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(l+1)/2,y=(d+1)/2,S=(p+1)/2,b=(u+f)/4,E=(h+x)/4,C=(m+g)/4;return _>y&&_>S?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=b/n,r=E/n):y>S?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=b/i,r=C/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=E/r,i=C/r),this.set(n,i,r,e),this}let v=Math.sqrt((g-m)*(g-m)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(h-x)/v,this.z=(f-u)/v,this.w=Math.acos((l+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jc=class extends $n{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);let i={width:t,height:e,depth:1};n.encoding!==void 0&&(zo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ki?Te:Cn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ne,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ve(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Si(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},tn=class extends jc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Fr=class extends Ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},nf=class extends tn{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Fr(null,t,e,n),this.texture.isRenderTargetTexture=!0}},na=class extends Ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},sf=class extends tn{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new na(null,t,e,n),this.texture.isRenderTargetTexture=!0}},rf=class extends tn{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGLMultipleRenderTargets=!0;let r=this.texture;this.texture=[];for(let o=0;o<n;o++)this.texture[o]=r.clone(),this.texture[o].isRenderTargetTexture=!0}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.texture.length;i<r;i++)this.texture[i].image.width=t,this.texture[i].image.height=e,this.texture[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}copy(t){this.dispose(),this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.texture.length=0;for(let e=0,n=t.texture.length;e<n;e++)this.texture[e]=t.texture[e].clone(),this.texture[e].isRenderTargetTexture=!0;return this}},pe=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3],f=r[o+0],d=r[o+1],m=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=x;return}if(h!==x||c!==f||l!==d||u!==m){let g=1-a,p=c*f+l*d+u*m+h*x,v=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let S=Math.sqrt(_),b=Math.atan2(S,p*v);g=Math.sin(g*b)/S,a=Math.sin(a*b)/S}let y=a*v;if(c=c*g+f*y,l=l*g+d*y,u=u*g+m*y,h=h*g+x*y,g===1-a){let S=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=S,l*=S,u*=S,h*=S}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+u*h+c*d-l*f,t[e+1]=c*m+u*f+l*h-a*d,t[e+2]=l*m+u*d+a*f-c*h,t[e+3]=u*m-a*h-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(r/2),f=c(n/2),d=c(i/2),m=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h+f*d*m;break;case"YZX":this._x=f*u*h+l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h-f*d*m;break;case"XZY":this._x=f*u*h-l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Sp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Sp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),u=2*(a*e-r*i),h=2*(r*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=i+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Gu.copy(this).projectOnVector(t),this.sub(Gu)}reflect(t){return this.sub(Gu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Gu=new T,Sp=new pe,ae=class{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Gn):Gn.fromBufferAttribute(r,o),Gn.applyMatrix4(t.matrixWorld),this.expandByPoint(Gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ka.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ka.copy(n.boundingBox)),Ka.applyMatrix4(t.matrixWorld),this.union(Ka)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Gn),Gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Eo),ja.subVectors(this.max,Eo),ar.subVectors(t.a,Eo),cr.subVectors(t.b,Eo),lr.subVectors(t.c,Eo),Hi.subVectors(cr,ar),Vi.subVectors(lr,cr),ws.subVectors(ar,lr);let e=[0,-Hi.z,Hi.y,0,-Vi.z,Vi.y,0,-ws.z,ws.y,Hi.z,0,-Hi.x,Vi.z,0,-Vi.x,ws.z,0,-ws.x,-Hi.y,Hi.x,0,-Vi.y,Vi.x,0,-ws.y,ws.x,0];return!Wu(e,ar,cr,lr,ja)||(e=[1,0,0,0,1,0,0,0,1],!Wu(e,ar,cr,lr,ja))?!1:(Qa.crossVectors(Hi,Vi),e=[Qa.x,Qa.y,Qa.z],Wu(e,ar,cr,lr,ja))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},gi=[new T,new T,new T,new T,new T,new T,new T,new T],Gn=new T,Ka=new ae,ar=new T,cr=new T,lr=new T,Hi=new T,Vi=new T,ws=new T,Eo=new T,ja=new T,Qa=new T,bs=new T;function Wu(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){bs.fromArray(s,r);let a=i.x*Math.abs(bs.x)+i.y*Math.abs(bs.y)+i.z*Math.abs(bs.z),c=t.dot(bs),l=e.dot(bs),u=n.dot(bs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var W_=new ae,To=new T,Xu=new T,Re=class{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):W_.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;To.subVectors(t,this.center);let e=To.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(To,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(To.copy(t.center).add(Xu)),this.expandByPoint(To.copy(t.center).sub(Xu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},xi=new T,qu=new T,tc=new T,Gi=new T,Yu=new T,ec=new T,Zu=new T,ai=class{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=xi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xi.copy(this.origin).addScaledVector(this.direction,e),xi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){qu.copy(t).add(e).multiplyScalar(.5),tc.copy(e).sub(t).normalize(),Gi.copy(this.origin).sub(qu);let r=t.distanceTo(e)*.5,o=-this.direction.dot(tc),a=Gi.dot(this.direction),c=-Gi.dot(tc),l=Gi.lengthSq(),u=Math.abs(1-o*o),h,f,d,m;if(u>0)if(h=o*c-a,f=o*a-c,m=r*u,h>=0)if(f>=-m)if(f<=m){let x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-m?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=m?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(qu).addScaledVector(tc,f),d}intersectSphere(t,e){xi.subVectors(t.center,this.origin);let n=xi.dot(this.direction),i=xi.dot(xi)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,xi)!==null}intersectTriangle(t,e,n,i,r){Yu.subVectors(e,t),ec.subVectors(n,t),Zu.crossVectors(Yu,ec);let o=this.direction.dot(Zu),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gi.subVectors(this.origin,t);let c=a*this.direction.dot(ec.crossVectors(Gi,ec));if(c<0)return null;let l=a*this.direction.dot(Yu.cross(Gi));if(l<0||c+l>o)return null;let u=-a*Gi.dot(Zu);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ct=class s{constructor(t,e,n,i,r,o,a,c,l,u,h,f,d,m,x,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,u,h,f,d,m,x,g)}set(t,e,n,i,r,o,a,c,l,u,h,f,d,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/ur.setFromMatrixColumn(t,0).length(),r=1/ur.setFromMatrixColumn(t,1).length(),o=1/ur.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=o*u,d=o*h,m=a*u,x=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=d+m*l,e[5]=f-x*l,e[9]=-a*c,e[2]=x-f*l,e[6]=m+d*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*u,d=c*h,m=l*u,x=l*h;e[0]=f+x*a,e[4]=m*a-d,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-m,e[6]=x+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*u,d=c*h,m=l*u,x=l*h;e[0]=f-x*a,e[4]=-o*h,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*u,e[9]=x-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*u,d=o*h,m=a*u,x=a*h;e[0]=c*u,e[4]=m*l-d,e[8]=f*l+x,e[1]=c*h,e[5]=x*l+f,e[9]=d*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,d=o*l,m=a*c,x=a*l;e[0]=c*u,e[4]=x-f*h,e[8]=m*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*h+m,e[10]=f-x*h}else if(t.order==="XZY"){let f=o*c,d=o*l,m=a*c,x=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+x,e[5]=o*u,e[9]=d*h-m,e[2]=m*h-d,e[6]=a*u,e[10]=x*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(X_,t,q_)}lookAt(t,e,n){let i=this.elements;return An.subVectors(t,e),An.lengthSq()===0&&(An.z=1),An.normalize(),Wi.crossVectors(n,An),Wi.lengthSq()===0&&(Math.abs(n.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Wi.crossVectors(n,An)),Wi.normalize(),nc.crossVectors(An,Wi),i[0]=Wi.x,i[4]=nc.x,i[8]=An.x,i[1]=Wi.y,i[5]=nc.y,i[9]=An.y,i[2]=Wi.z,i[6]=nc.z,i[10]=An.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],m=n[2],x=n[6],g=n[10],p=n[14],v=n[3],_=n[7],y=n[11],S=n[15],b=i[0],E=i[4],C=i[8],w=i[12],M=i[1],D=i[5],F=i[9],B=i[13],L=i[2],O=i[6],z=i[10],j=i[14],it=i[3],Z=i[7],q=i[11],I=i[15];return r[0]=o*b+a*M+c*L+l*it,r[4]=o*E+a*D+c*O+l*Z,r[8]=o*C+a*F+c*z+l*q,r[12]=o*w+a*B+c*j+l*I,r[1]=u*b+h*M+f*L+d*it,r[5]=u*E+h*D+f*O+d*Z,r[9]=u*C+h*F+f*z+d*q,r[13]=u*w+h*B+f*j+d*I,r[2]=m*b+x*M+g*L+p*it,r[6]=m*E+x*D+g*O+p*Z,r[10]=m*C+x*F+g*z+p*q,r[14]=m*w+x*B+g*j+p*I,r[3]=v*b+_*M+y*L+S*it,r[7]=v*E+_*D+y*O+S*Z,r[11]=v*C+_*F+y*z+S*q,r[15]=v*w+_*B+y*j+S*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],d=t[14],m=t[3],x=t[7],g=t[11],p=t[15];return m*(+r*c*h-i*l*h-r*a*f+n*l*f+i*a*d-n*c*d)+x*(+e*c*d-e*l*f+r*o*f-i*o*d+i*l*u-r*c*u)+g*(+e*l*h-e*a*d-r*o*h+n*o*d+r*a*u-n*l*u)+p*(-i*a*u-e*c*h+e*a*f+i*o*h-n*o*f+n*c*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],d=t[11],m=t[12],x=t[13],g=t[14],p=t[15],v=h*g*l-x*f*l+x*c*d-a*g*d-h*c*p+a*f*p,_=m*f*l-u*g*l-m*c*d+o*g*d+u*c*p-o*f*p,y=u*x*l-m*h*l+m*a*d-o*x*d-u*a*p+o*h*p,S=m*h*c-u*x*c-m*a*f+o*x*f+u*a*g-o*h*g,b=e*v+n*_+i*y+r*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/b;return t[0]=v*E,t[1]=(x*f*r-h*g*r-x*i*d+n*g*d+h*i*p-n*f*p)*E,t[2]=(a*g*r-x*c*r+x*i*l-n*g*l-a*i*p+n*c*p)*E,t[3]=(h*c*r-a*f*r-h*i*l+n*f*l+a*i*d-n*c*d)*E,t[4]=_*E,t[5]=(u*g*r-m*f*r+m*i*d-e*g*d-u*i*p+e*f*p)*E,t[6]=(m*c*r-o*g*r-m*i*l+e*g*l+o*i*p-e*c*p)*E,t[7]=(o*f*r-u*c*r+u*i*l-e*f*l-o*i*d+e*c*d)*E,t[8]=y*E,t[9]=(m*h*r-u*x*r-m*n*d+e*x*d+u*n*p-e*h*p)*E,t[10]=(o*x*r-m*a*r+m*n*l-e*x*l-o*n*p+e*a*p)*E,t[11]=(u*a*r-o*h*r-u*n*l+e*h*l+o*n*d-e*a*d)*E,t[12]=S*E,t[13]=(u*x*i-m*h*i+m*n*f-e*x*f-u*n*g+e*h*g)*E,t[14]=(m*a*i-o*x*i-m*n*c+e*x*c+o*n*g-e*a*g)*E,t[15]=(o*h*i-u*a*i+u*n*c-e*h*c-o*n*f+e*a*f)*E,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,f=r*l,d=r*u,m=r*h,x=o*u,g=o*h,p=a*h,v=c*l,_=c*u,y=c*h,S=n.x,b=n.y,E=n.z;return i[0]=(1-(x+p))*S,i[1]=(d+y)*S,i[2]=(m-_)*S,i[3]=0,i[4]=(d-y)*b,i[5]=(1-(f+p))*b,i[6]=(g+v)*b,i[7]=0,i[8]=(m+_)*E,i[9]=(g-v)*E,i[10]=(1-(f+x))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=ur.set(i[0],i[1],i[2]).length(),o=ur.set(i[4],i[5],i[6]).length(),a=ur.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Wn.copy(this);let l=1/r,u=1/o,h=1/a;return Wn.elements[0]*=l,Wn.elements[1]*=l,Wn.elements[2]*=l,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=h,Wn.elements[9]*=h,Wn.elements[10]*=h,e.setFromRotationMatrix(Wn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Zn){let c=this.elements,l=2*r/(e-t),u=2*r/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i),d,m;if(a===Zn)d=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Ur)d=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Zn){let c=this.elements,l=1/(e-t),u=1/(n-i),h=1/(o-r),f=(e+t)*l,d=(n+i)*u,m,x;if(a===Zn)m=(o+r)*h,x=-2*h;else if(a===Ur)m=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=x,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ur=new T,Wn=new Ct,X_=new T(0,0,0),q_=new T(1,1,1),Wi=new T,nc=new T,An=new T,Ep=new Ct,Tp=new pe,Ze=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ae(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ep.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ep,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Tp.setFromEuler(this),this.setFromQuaternion(Tp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ze.DEFAULT_ORDER="XYZ";var Br=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Y_=0,Ap=new T,hr=new pe,_i=new Ct,ic=new T,Ao=new T,Z_=new T,J_=new pe,Rp=new T(1,0,0),Cp=new T(0,1,0),Pp=new T(0,0,1),$_={type:"added"},K_={type:"removed"},le=class s extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new T,e=new Ze,n=new pe,i=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ct},normalMatrix:{value:new te}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Br,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hr.setFromAxisAngle(t,e),this.quaternion.multiply(hr),this}rotateOnWorldAxis(t,e){return hr.setFromAxisAngle(t,e),this.quaternion.premultiply(hr),this}rotateX(t){return this.rotateOnAxis(Rp,t)}rotateY(t){return this.rotateOnAxis(Cp,t)}rotateZ(t){return this.rotateOnAxis(Pp,t)}translateOnAxis(t,e){return Ap.copy(t).applyQuaternion(this.quaternion),this.position.add(Ap.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rp,t)}translateY(t){return this.translateOnAxis(Cp,t)}translateZ(t){return this.translateOnAxis(Pp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ic.copy(t):ic.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Ao,ic,this.up):_i.lookAt(ic,Ao,this.up),this.quaternion.setFromRotationMatrix(_i),i&&(_i.extractRotation(i.matrixWorld),hr.setFromRotationMatrix(_i),this.quaternion.premultiply(hr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent($_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(K_)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_i.multiply(t.parent.matrixWorld)),t.applyMatrix4(_i),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,t,Z_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,J_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++){let a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};le.DEFAULT_UP=new T(0,1,0);le.DEFAULT_MATRIX_AUTO_UPDATE=!0;le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xn=new T,vi=new T,Ju=new T,yi=new T,fr=new T,dr=new T,Ip=new T,$u=new T,Ku=new T,ju=new T,sc=!1,fn=class s{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Xn.subVectors(t,e),i.cross(Xn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Xn.subVectors(i,e),vi.subVectors(n,e),Ju.subVectors(t,e);let o=Xn.dot(Xn),a=Xn.dot(vi),c=Xn.dot(Ju),l=vi.dot(vi),u=vi.dot(Ju),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(l*c-a*u)*f,m=(o*u-a*c)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getUV(t,e,n,i,r,o,a,c){return sc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),sc=!0),this.getInterpolation(t,e,n,i,r,o,a,c)}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,yi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,yi.x),c.addScaledVector(o,yi.y),c.addScaledVector(a,yi.z),c)}static isFrontFacing(t,e,n,i){return Xn.subVectors(n,e),vi.subVectors(t,e),Xn.cross(vi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Xn.cross(vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return sc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),sc=!0),s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;fr.subVectors(i,n),dr.subVectors(r,n),$u.subVectors(t,n);let c=fr.dot($u),l=dr.dot($u);if(c<=0&&l<=0)return e.copy(n);Ku.subVectors(t,i);let u=fr.dot(Ku),h=dr.dot(Ku);if(u>=0&&h<=u)return e.copy(i);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(fr,o);ju.subVectors(t,r);let d=fr.dot(ju),m=dr.dot(ju);if(m>=0&&d<=m)return e.copy(r);let x=d*l-c*m;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(dr,a);let g=u*m-d*h;if(g<=0&&h-u>=0&&d-m>=0)return Ip.subVectors(r,i),a=(h-u)/(h-u+(d-m)),e.copy(i).addScaledVector(Ip,a);let p=1/(g+x+f);return o=x*p,a=f*p,e.copy(n).addScaledVector(fr,o).addScaledVector(dr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Q0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},rc={h:0,s:0,l:0};function Qu(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var at=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,fe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=fe.workingColorSpace){if(t=Cd(t,1),e=Ae(e,0,1),n=Ae(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Qu(o,r,t+1/3),this.g=Qu(o,r,t),this.b=Qu(o,r,t-1/3)}return fe.toWorkingColorSpace(this,i),this}setStyle(t,e=Te){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){let n=Q0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ir(t.r),this.g=Ir(t.g),this.b=Ir(t.b),this}copyLinearToSRGB(t){return this.r=Hu(t.r),this.g=Hu(t.g),this.b=Hu(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return fe.fromWorkingColorSpace(cn.copy(this),t),Math.round(Ae(cn.r*255,0,255))*65536+Math.round(Ae(cn.g*255,0,255))*256+Math.round(Ae(cn.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.fromWorkingColorSpace(cn.copy(this),e);let n=cn.r,i=cn.g,r=cn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=fe.workingColorSpace){return fe.fromWorkingColorSpace(cn.copy(this),e),t.r=cn.r,t.g=cn.g,t.b=cn.b,t}getStyle(t=Te){fe.fromWorkingColorSpace(cn.copy(this),t);let e=cn.r,n=cn.g,i=cn.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Xi),this.setHSL(Xi.h+t,Xi.s+e,Xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xi),t.getHSL(rc);let n=Oo(Xi.h,rc.h,e),i=Oo(Xi.s,rc.s,e),r=Oo(Xi.l,rc.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new at;at.NAMES=Q0;var j_=0,Je=class extends $n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=Ai,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zc,this.blendDst=Os,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=Go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zc&&(n.blendSrc=this.blendSrc),this.blendDst!==Os&&(n.blendDst=this.blendDst),this.blendEquation!==Zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Go&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},On=class extends Je{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},bi=Q_();function Q_(){let s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,u=0;for(;(l&8388608)===0;)l<<=1,u-=8388608;l&=-8388609,u+=947912704,r[c]=l|u}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function vn(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=Ae(s,-65504,65504),bi.floatView[0]=s;let t=bi.uint32View[0],e=t>>23&511;return bi.baseTable[e]+((t&8388607)>>bi.shiftTable[e])}function Fo(s){let t=s>>10;return bi.uint32View[0]=bi.mantissaTable[bi.offsetTable[t]+(s&1023)]+bi.exponentTable[t],bi.floatView[0]}var tv={toHalfFloat:vn,fromHalfFloat:Fo},Oe=new T,oc=new st,Gt=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)oc.fromBufferAttribute(this,e),oc.applyMatrix3(t),this.setXY(e,oc.x,oc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=jt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=bn(e,this.array)),e}setX(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=bn(e,this.array)),e}setY(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=bn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=bn(e,this.array)),e}setW(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),i=jt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),i=jt(i,this.array),r=jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qo&&(t.usage=this.usage),t}},of=class extends Gt{constructor(t,e,n){super(new Int8Array(t),e,n)}},af=class extends Gt{constructor(t,e,n){super(new Uint8Array(t),e,n)}},cf=class extends Gt{constructor(t,e,n){super(new Uint8ClampedArray(t),e,n)}},lf=class extends Gt{constructor(t,e,n){super(new Int16Array(t),e,n)}},ia=class extends Gt{constructor(t,e,n){super(new Uint16Array(t),e,n)}},uf=class extends Gt{constructor(t,e,n){super(new Int32Array(t),e,n)}},sa=class extends Gt{constructor(t,e,n){super(new Uint32Array(t),e,n)}},hf=class extends Gt{constructor(t,e,n){super(new Uint16Array(t),e,n),this.isFloat16BufferAttribute=!0}getX(t){let e=Fo(this.array[t*this.itemSize]);return this.normalized&&(e=bn(e,this.array)),e}setX(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize]=vn(e),this}getY(t){let e=Fo(this.array[t*this.itemSize+1]);return this.normalized&&(e=bn(e,this.array)),e}setY(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+1]=vn(e),this}getZ(t){let e=Fo(this.array[t*this.itemSize+2]);return this.normalized&&(e=bn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+2]=vn(e),this}getW(t){let e=Fo(this.array[t*this.itemSize+3]);return this.normalized&&(e=bn(e,this.array)),e}setW(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+3]=vn(e),this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array)),this.array[t+0]=vn(e),this.array[t+1]=vn(n),this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),i=jt(i,this.array)),this.array[t+0]=vn(e),this.array[t+1]=vn(n),this.array[t+2]=vn(i),this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),i=jt(i,this.array),r=jt(r,this.array)),this.array[t+0]=vn(e),this.array[t+1]=vn(n),this.array[t+2]=vn(i),this.array[t+3]=vn(r),this}},It=class extends Gt{constructor(t,e,n){super(new Float32Array(t),e,n)}},ff=class extends Gt{constructor(t,e,n){super(new Float64Array(t),e,n)}},ev=0,Un=new Ct,th=new le,pr=new T,Rn=new ae,Ro=new ae,Ye=new T,Vt=class s extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(K0(t)?sa:ia)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Un.makeRotationFromQuaternion(t),this.applyMatrix4(Un),this}rotateX(t){return Un.makeRotationX(t),this.applyMatrix4(Un),this}rotateY(t){return Un.makeRotationY(t),this.applyMatrix4(Un),this}rotateZ(t){return Un.makeRotationZ(t),this.applyMatrix4(Un),this}translate(t,e,n){return Un.makeTranslation(t,e,n),this.applyMatrix4(Un),this}scale(t,e,n){return Un.makeScale(t,e,n),this.applyMatrix4(Un),this}lookAt(t){return th.lookAt(t),th.updateMatrix(),this.applyMatrix4(th.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new It(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ae);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Re);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new T,1/0);return}if(t){let n=this.boundingSphere.center;if(Rn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ro.setFromBufferAttribute(a),this.morphTargetsRelative?(Ye.addVectors(Rn.min,Ro.min),Rn.expandByPoint(Ye),Ye.addVectors(Rn.max,Ro.max),Rn.expandByPoint(Ye)):(Rn.expandByPoint(Ro.min),Rn.expandByPoint(Ro.max))}Rn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ye.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ye));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ye.fromBufferAttribute(a,l),c&&(pr.fromBufferAttribute(t,l),Ye.add(pr)),i=Math.max(i,n.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],u=[];for(let M=0;M<a;M++)l[M]=new T,u[M]=new T;let h=new T,f=new T,d=new T,m=new st,x=new st,g=new st,p=new T,v=new T;function _(M,D,F){h.fromArray(i,M*3),f.fromArray(i,D*3),d.fromArray(i,F*3),m.fromArray(o,M*2),x.fromArray(o,D*2),g.fromArray(o,F*2),f.sub(h),d.sub(h),x.sub(m),g.sub(m);let B=1/(x.x*g.y-g.x*x.y);isFinite(B)&&(p.copy(f).multiplyScalar(g.y).addScaledVector(d,-x.y).multiplyScalar(B),v.copy(d).multiplyScalar(x.x).addScaledVector(f,-g.x).multiplyScalar(B),l[M].add(p),l[D].add(p),l[F].add(p),u[M].add(v),u[D].add(v),u[F].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let M=0,D=y.length;M<D;++M){let F=y[M],B=F.start,L=F.count;for(let O=B,z=B+L;O<z;O+=3)_(n[O+0],n[O+1],n[O+2])}let S=new T,b=new T,E=new T,C=new T;function w(M){E.fromArray(r,M*3),C.copy(E);let D=l[M];S.copy(D),S.sub(E.multiplyScalar(E.dot(D))).normalize(),b.crossVectors(C,D);let B=b.dot(u[M])<0?-1:1;c[M*4]=S.x,c[M*4+1]=S.y,c[M*4+2]=S.z,c[M*4+3]=B}for(let M=0,D=y.length;M<D;++M){let F=y[M],B=F.start,L=F.count;for(let O=B,z=B+L;O<z;O+=3)w(n[O+0]),w(n[O+1]),w(n[O+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new T,r=new T,o=new T,a=new T,c=new T,l=new T,u=new T,h=new T;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),a.add(u),c.add(u),l.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u),d=0,m=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*u;for(let p=0;p<u;p++)f[m++]=l[d++]}return new Gt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){let f=l[u],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let d=l[h];u.push(d.toJSON(t.data))}u.length>0&&(i[c]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let u=i[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Lp=new Ct,Ms=new ai,ac=new Re,Dp=new T,mr=new T,gr=new T,xr=new T,eh=new T,cc=new T,lc=new st,uc=new st,hc=new st,Up=new T,Np=new T,Fp=new T,fc=new T,dc=new T,ee=class extends le{constructor(t=new Vt,e=new On){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){cc.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],h=r[c];u!==0&&(eh.fromBufferAttribute(h,t),o?cc.addScaledVector(eh,u):cc.addScaledVector(eh.sub(e),u))}e.add(cc)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ac.copy(n.boundingSphere),ac.applyMatrix4(r),Ms.copy(t.ray).recast(t.near),!(ac.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(ac,Dp)===null||Ms.origin.distanceToSquared(Dp)>(t.far-t.near)**2))&&(Lp.copy(r).invert(),Ms.copy(t.ray).applyMatrix4(Lp),!(n.boundingBox!==null&&Ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ms)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=o[g.materialIndex],v=Math.max(g.start,d.start),_=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let y=v,S=_;y<S;y+=3){let b=a.getX(y),E=a.getX(y+1),C=a.getX(y+2);i=pc(this,p,t,n,l,u,h,b,E,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let v=a.getX(g),_=a.getX(g+1),y=a.getX(g+2);i=pc(this,o,t,n,l,u,h,v,_,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=o[g.materialIndex],v=Math.max(g.start,d.start),_=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let y=v,S=_;y<S;y+=3){let b=y,E=y+1,C=y+2;i=pc(this,p,t,n,l,u,h,b,E,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let v=g,_=g+1,y=g+2;i=pc(this,o,t,n,l,u,h,v,_,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function nv(s,t,e,n,i,r,o,a){let c;if(t.side===Qe?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Bn,a),c===null)return null;dc.copy(a),dc.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(dc);return l<e.near||l>e.far?null:{distance:l,point:dc.clone(),object:s}}function pc(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,mr),s.getVertexPosition(c,gr),s.getVertexPosition(l,xr);let u=nv(s,t,e,n,mr,gr,xr,fc);if(u){i&&(lc.fromBufferAttribute(i,a),uc.fromBufferAttribute(i,c),hc.fromBufferAttribute(i,l),u.uv=fn.getInterpolation(fc,mr,gr,xr,lc,uc,hc,new st)),r&&(lc.fromBufferAttribute(r,a),uc.fromBufferAttribute(r,c),hc.fromBufferAttribute(r,l),u.uv1=fn.getInterpolation(fc,mr,gr,xr,lc,uc,hc,new st),u.uv2=u.uv1),o&&(Up.fromBufferAttribute(o,a),Np.fromBufferAttribute(o,c),Fp.fromBufferAttribute(o,l),u.normal=fn.getInterpolation(fc,mr,gr,xr,Up,Np,Fp,new T),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new T,materialIndex:0};fn.getNormal(mr,gr,xr,h.normal),u.face=h}return u}var ze=class s extends Vt{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],h=[],f=0,d=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new It(l,3)),this.setAttribute("normal",new It(u,3)),this.setAttribute("uv",new It(h,2));function m(x,g,p,v,_,y,S,b,E,C,w){let M=y/E,D=S/C,F=y/2,B=S/2,L=b/2,O=E+1,z=C+1,j=0,it=0,Z=new T;for(let q=0;q<z;q++){let I=q*D-B;for(let W=0;W<O;W++){let U=W*M-F;Z[x]=U*v,Z[g]=I*_,Z[p]=L,l.push(Z.x,Z.y,Z.z),Z[x]=0,Z[g]=0,Z[p]=b>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(W/E),h.push(1-q/C),j+=1}}for(let q=0;q<C;q++)for(let I=0;I<E;I++){let W=f+I+O*q,U=f+I+O*(q+1),H=f+(I+1)+O*(q+1),tt=f+(I+1)+O*q;c.push(W,U,tt),c.push(U,H,tt),it+=6}a.addGroup(d,it,w),d+=it,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Or(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function gn(s){let t={};for(let e=0;e<s.length;e++){let n=Or(s[e]);for(let i in n)t[i]=n[i]}return t}function iv(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function tg(s){return s.getRenderTarget()===null?s.outputColorSpace:fe.workingColorSpace}var eg={clone:Or,merge:gn},sv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,dn=class extends Je{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sv,this.fragmentShader=rv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Or(t.uniforms),this.uniformsGroups=iv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},zr=class extends le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=Zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Fe=class extends zr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Nr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Nr*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Bs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},_r=-90,vr=1,Qc=class extends le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Fe(_r,vr,t,e);i.layers=this.layers,this.add(i);let r=new Fe(_r,vr,t,e);r.layers=this.layers,this.add(r);let o=new Fe(_r,vr,t,e);o.layers=this.layers,this.add(o);let a=new Fe(_r,vr,t,e);a.layers=this.layers,this.add(a);let c=new Fe(_r,vr,t,e);c.layers=this.layers,this.add(c);let l=new Fe(_r,vr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},ks=class extends Ve{constructor(t,e,n,i,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Pi,super(t,e,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},tl=class extends tn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(zo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ki?Te:Cn),this.texture=new ks(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ne}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ze(5,5,5),r=new dn({name:"CubemapFromEquirect",uniforms:Or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:Ti});r.uniforms.tEquirect.value=e;let o=new ee(i,r),a=e.minFilter;return e.minFilter===Qi&&(e.minFilter=Ne),new Qc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},nh=new T,ov=new T,av=new te,yn=class{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=nh.subVectors(n,e).cross(ov.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(nh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||av.getNormalMatrix(t),i=this.coplanarPoint(nh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ss=new Re,mc=new T,Hs=class{constructor(t=new yn,e=new yn,n=new yn,i=new yn,r=new yn,o=new yn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Zn){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],u=i[5],h=i[6],f=i[7],d=i[8],m=i[9],x=i[10],g=i[11],p=i[12],v=i[13],_=i[14],y=i[15];if(n[0].setComponents(c-r,f-l,g-d,y-p).normalize(),n[1].setComponents(c+r,f+l,g+d,y+p).normalize(),n[2].setComponents(c+o,f+u,g+m,y+v).normalize(),n[3].setComponents(c-o,f-u,g-m,y-v).normalize(),n[4].setComponents(c-a,f-h,g-x,y-_).normalize(),e===Zn)n[5].setComponents(c+a,f+h,g+x,y+_).normalize();else if(e===Ur)n[5].setComponents(a,h,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(t){return Ss.center.set(0,0,0),Ss.radius=.7071067811865476,Ss.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(mc.x=i.normal.x>0?t.max.x:t.min.x,mc.y=i.normal.y>0?t.max.y:t.min.y,mc.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(mc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ng(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function cv(s,t){let e=t.isWebGL2,n=new WeakMap;function i(l,u){let h=l.array,f=l.usage,d=h.byteLength,m=s.createBuffer();s.bindBuffer(u,m),s.bufferData(u,h,f),l.onUploadCallback();let x;if(h instanceof Float32Array)x=s.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)x=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=s.SHORT;else if(h instanceof Uint32Array)x=s.UNSIGNED_INT;else if(h instanceof Int32Array)x=s.INT;else if(h instanceof Int8Array)x=s.BYTE;else if(h instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:d}}function r(l,u,h){let f=u.array,d=u._updateRange,m=u.updateRanges;if(s.bindBuffer(h,l),d.count===-1&&m.length===0&&s.bufferSubData(h,0,f),m.length!==0){for(let x=0,g=m.length;x<g;x++){let p=m[x];e?s.bufferSubData(h,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):s.bufferSubData(h,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}d.count!==-1&&(e?s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);u&&(s.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);if(h===void 0)n.set(l,i(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,l,u),h.version=l.version}}return{get:o,remove:a,update:c}}var Kn=class s extends Vt{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=t/a,f=e/c,d=[],m=[],x=[],g=[];for(let p=0;p<u;p++){let v=p*f-o;for(let _=0;_<l;_++){let y=_*h-r;m.push(y,-v,0),x.push(0,0,1),g.push(_/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){let _=v+l*p,y=v+l*(p+1),S=v+1+l*(p+1),b=v+1+l*p;d.push(_,y,b),d.push(y,S,b)}this.setIndex(d),this.setAttribute("position",new It(m,3)),this.setAttribute("normal",new It(x,3)),this.setAttribute("uv",new It(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},lv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uv=`#ifdef USE_ALPHAHASH
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
#endif`,hv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,pv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mv=`#ifdef USE_AOMAP
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
#endif`,gv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xv=`#ifdef USE_BATCHING
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
#endif`,_v=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,vv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bv=`#ifdef USE_IRIDESCENCE
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
#endif`,Mv=`#ifdef USE_BUMPMAP
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
#endif`,Sv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ev=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Av=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Iv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Lv=`#define PI 3.141592653589793
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
} // validated`,Dv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Uv=`vec3 transformedNormal = objectNormal;
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
#endif`,Nv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ov=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zv="gl_FragColor = linearToOutputTexel( gl_FragColor );",kv=`
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
}`,Hv=`#ifdef USE_ENVMAP
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
#endif`,Vv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gv=`#ifdef USE_ENVMAP
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
#endif`,Wv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xv=`#ifdef USE_ENVMAP
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
#endif`,qv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$v=`#ifdef USE_GRADIENTMAP
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
}`,Kv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,jv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ty=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ey=`uniform bool receiveShadow;
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
#endif`,ny=`#ifdef USE_ENVMAP
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
#endif`,iy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ry=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ay=`PhysicalMaterial material;
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
#endif`,cy=`struct PhysicalMaterial {
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
}`,ly=`
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
#endif`,uy=`#if defined( RE_IndirectDiffuse )
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
#endif`,hy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,py=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,my=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,gy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_y=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vy=`#if defined( USE_POINTS_UV )
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
#endif`,yy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,by=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,My=`#ifdef USE_MORPHNORMALS
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
#endif`,Sy=`#ifdef USE_MORPHTARGETS
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
#endif`,Ey=`#ifdef USE_MORPHTARGETS
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
#endif`,Ty=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ay=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Py=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Iy=`#ifdef USE_NORMALMAP
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
#endif`,Ly=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ny=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,By=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Oy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ky=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yy=`float getShadowMask() {
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
}`,Zy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jy=`#ifdef USE_SKINNING
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
#endif`,$y=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ky=`#ifdef USE_SKINNING
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
#endif`,jy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ew=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nw=`#ifdef USE_TRANSMISSION
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
#endif`,iw=`#ifdef USE_TRANSMISSION
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
#endif`,sw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ow=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,cw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lw=`uniform sampler2D t2D;
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
}`,uw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pw=`#include <common>
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
}`,mw=`#if DEPTH_PACKING == 3200
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
}`,gw=`#define DISTANCE
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
}`,xw=`#define DISTANCE
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
}`,_w=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yw=`uniform float scale;
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
}`,ww=`uniform vec3 diffuse;
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
}`,bw=`#include <common>
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
}`,Mw=`uniform vec3 diffuse;
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
}`,Sw=`#define LAMBERT
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
}`,Ew=`#define LAMBERT
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
}`,Tw=`#define MATCAP
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
}`,Aw=`#define MATCAP
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
}`,Rw=`#define NORMAL
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
}`,Cw=`#define NORMAL
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
}`,Pw=`#define PHONG
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
}`,Iw=`#define PHONG
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
}`,Lw=`#define STANDARD
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
}`,Dw=`#define STANDARD
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
}`,Uw=`#define TOON
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
}`,Nw=`#define TOON
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
}`,Fw=`uniform float size;
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
}`,Bw=`uniform vec3 diffuse;
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
}`,Ow=`#include <common>
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
}`,zw=`uniform vec3 color;
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
}`,kw=`uniform float rotation;
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
}`,Hw=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:lv,alphahash_pars_fragment:uv,alphamap_fragment:hv,alphamap_pars_fragment:fv,alphatest_fragment:dv,alphatest_pars_fragment:pv,aomap_fragment:mv,aomap_pars_fragment:gv,batching_pars_vertex:xv,batching_vertex:_v,begin_vertex:vv,beginnormal_vertex:yv,bsdfs:wv,iridescence_fragment:bv,bumpmap_pars_fragment:Mv,clipping_planes_fragment:Sv,clipping_planes_pars_fragment:Ev,clipping_planes_pars_vertex:Tv,clipping_planes_vertex:Av,color_fragment:Rv,color_pars_fragment:Cv,color_pars_vertex:Pv,color_vertex:Iv,common:Lv,cube_uv_reflection_fragment:Dv,defaultnormal_vertex:Uv,displacementmap_pars_vertex:Nv,displacementmap_vertex:Fv,emissivemap_fragment:Bv,emissivemap_pars_fragment:Ov,colorspace_fragment:zv,colorspace_pars_fragment:kv,envmap_fragment:Hv,envmap_common_pars_fragment:Vv,envmap_pars_fragment:Gv,envmap_pars_vertex:Wv,envmap_physical_pars_fragment:ny,envmap_vertex:Xv,fog_vertex:qv,fog_pars_vertex:Yv,fog_fragment:Zv,fog_pars_fragment:Jv,gradientmap_pars_fragment:$v,lightmap_fragment:Kv,lightmap_pars_fragment:jv,lights_lambert_fragment:Qv,lights_lambert_pars_fragment:ty,lights_pars_begin:ey,lights_toon_fragment:iy,lights_toon_pars_fragment:sy,lights_phong_fragment:ry,lights_phong_pars_fragment:oy,lights_physical_fragment:ay,lights_physical_pars_fragment:cy,lights_fragment_begin:ly,lights_fragment_maps:uy,lights_fragment_end:hy,logdepthbuf_fragment:fy,logdepthbuf_pars_fragment:dy,logdepthbuf_pars_vertex:py,logdepthbuf_vertex:my,map_fragment:gy,map_pars_fragment:xy,map_particle_fragment:_y,map_particle_pars_fragment:vy,metalnessmap_fragment:yy,metalnessmap_pars_fragment:wy,morphcolor_vertex:by,morphnormal_vertex:My,morphtarget_pars_vertex:Sy,morphtarget_vertex:Ey,normal_fragment_begin:Ty,normal_fragment_maps:Ay,normal_pars_fragment:Ry,normal_pars_vertex:Cy,normal_vertex:Py,normalmap_pars_fragment:Iy,clearcoat_normal_fragment_begin:Ly,clearcoat_normal_fragment_maps:Dy,clearcoat_pars_fragment:Uy,iridescence_pars_fragment:Ny,opaque_fragment:Fy,packing:By,premultiplied_alpha_fragment:Oy,project_vertex:zy,dithering_fragment:ky,dithering_pars_fragment:Hy,roughnessmap_fragment:Vy,roughnessmap_pars_fragment:Gy,shadowmap_pars_fragment:Wy,shadowmap_pars_vertex:Xy,shadowmap_vertex:qy,shadowmask_pars_fragment:Yy,skinbase_vertex:Zy,skinning_pars_vertex:Jy,skinning_vertex:$y,skinnormal_vertex:Ky,specularmap_fragment:jy,specularmap_pars_fragment:Qy,tonemapping_fragment:tw,tonemapping_pars_fragment:ew,transmission_fragment:nw,transmission_pars_fragment:iw,uv_pars_fragment:sw,uv_pars_vertex:rw,uv_vertex:ow,worldpos_vertex:aw,background_vert:cw,background_frag:lw,backgroundCube_vert:uw,backgroundCube_frag:hw,cube_vert:fw,cube_frag:dw,depth_vert:pw,depth_frag:mw,distanceRGBA_vert:gw,distanceRGBA_frag:xw,equirect_vert:_w,equirect_frag:vw,linedashed_vert:yw,linedashed_frag:ww,meshbasic_vert:bw,meshbasic_frag:Mw,meshlambert_vert:Sw,meshlambert_frag:Ew,meshmatcap_vert:Tw,meshmatcap_frag:Aw,meshnormal_vert:Rw,meshnormal_frag:Cw,meshphong_vert:Pw,meshphong_frag:Iw,meshphysical_vert:Lw,meshphysical_frag:Dw,meshtoon_vert:Uw,meshtoon_frag:Nw,points_vert:Fw,points_frag:Bw,shadow_vert:Ow,shadow_frag:zw,sprite_vert:kw,sprite_frag:Hw},Mt={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},qn={basic:{uniforms:gn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:gn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new at(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:gn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:gn([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:gn([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new at(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:gn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:gn([Mt.points,Mt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:gn([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:gn([Mt.common,Mt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:gn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:gn([Mt.sprite,Mt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:gn([Mt.common,Mt.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:gn([Mt.lights,Mt.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};qn.physical={uniforms:gn([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var gc={r:0,b:0,g:0};function Vw(s,t,e,n,i,r,o){let a=new at(0),c=r===!0?0:1,l,u,h=null,f=0,d=null;function m(g,p){let v=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?e:t).get(_)),_===null?x(a,c):_&&_.isColor&&(x(_,1),v=!0);let y=s.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===jr)?(u===void 0&&(u=new ee(new ze(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:Or(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=fe.getTransfer(_.colorSpace)!==_e,(h!==_||f!==_.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,d=s.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new ee(new Kn(2,2),new dn({name:"BackgroundMaterial",uniforms:Or(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=fe.getTransfer(_.colorSpace)!==_e,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=_,f=_.version,d=s.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function x(g,p){g.getRGB(gc,tg(s)),n.buffers.color.setClear(gc.r,gc.g,gc.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(g,p=1){a.set(g),c=p,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,x(a,c)},render:m}}function Gw(s,t,e,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=g(null),l=c,u=!1;function h(L,O,z,j,it){let Z=!1;if(o){let q=x(j,z,O);l!==q&&(l=q,d(l.object)),Z=p(L,j,z,it),Z&&v(L,j,z,it)}else{let q=O.wireframe===!0;(l.geometry!==j.id||l.program!==z.id||l.wireframe!==q)&&(l.geometry=j.id,l.program=z.id,l.wireframe=q,Z=!0)}it!==null&&e.update(it,s.ELEMENT_ARRAY_BUFFER),(Z||u)&&(u=!1,C(L,O,z,j),it!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(it).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(L){return n.isWebGL2?s.bindVertexArray(L):r.bindVertexArrayOES(L)}function m(L){return n.isWebGL2?s.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function x(L,O,z){let j=z.wireframe===!0,it=a[L.id];it===void 0&&(it={},a[L.id]=it);let Z=it[O.id];Z===void 0&&(Z={},it[O.id]=Z);let q=Z[j];return q===void 0&&(q=g(f()),Z[j]=q),q}function g(L){let O=[],z=[],j=[];for(let it=0;it<i;it++)O[it]=0,z[it]=0,j[it]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:z,attributeDivisors:j,object:L,attributes:{},index:null}}function p(L,O,z,j){let it=l.attributes,Z=O.attributes,q=0,I=z.getAttributes();for(let W in I)if(I[W].location>=0){let H=it[W],tt=Z[W];if(tt===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(tt=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(tt=L.instanceColor)),H===void 0||H.attribute!==tt||tt&&H.data!==tt.data)return!0;q++}return l.attributesNum!==q||l.index!==j}function v(L,O,z,j){let it={},Z=O.attributes,q=0,I=z.getAttributes();for(let W in I)if(I[W].location>=0){let H=Z[W];H===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(H=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(H=L.instanceColor));let tt={};tt.attribute=H,H&&H.data&&(tt.data=H.data),it[W]=tt,q++}l.attributes=it,l.attributesNum=q,l.index=j}function _(){let L=l.newAttributes;for(let O=0,z=L.length;O<z;O++)L[O]=0}function y(L){S(L,0)}function S(L,O){let z=l.newAttributes,j=l.enabledAttributes,it=l.attributeDivisors;z[L]=1,j[L]===0&&(s.enableVertexAttribArray(L),j[L]=1),it[L]!==O&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,O),it[L]=O)}function b(){let L=l.newAttributes,O=l.enabledAttributes;for(let z=0,j=O.length;z<j;z++)O[z]!==L[z]&&(s.disableVertexAttribArray(z),O[z]=0)}function E(L,O,z,j,it,Z,q){q===!0?s.vertexAttribIPointer(L,O,z,it,Z):s.vertexAttribPointer(L,O,z,j,it,Z)}function C(L,O,z,j){if(n.isWebGL2===!1&&(L.isInstancedMesh||j.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();let it=j.attributes,Z=z.getAttributes(),q=O.defaultAttributeValues;for(let I in Z){let W=Z[I];if(W.location>=0){let U=it[I];if(U===void 0&&(I==="instanceMatrix"&&L.instanceMatrix&&(U=L.instanceMatrix),I==="instanceColor"&&L.instanceColor&&(U=L.instanceColor)),U!==void 0){let H=U.normalized,tt=U.itemSize,pt=e.get(U);if(pt===void 0)continue;let ut=pt.buffer,mt=pt.type,Tt=pt.bytesPerElement,ht=n.isWebGL2===!0&&(mt===s.INT||mt===s.UNSIGNED_INT||U.gpuType===vd);if(U.isInterleavedBufferAttribute){let ot=U.data,N=ot.stride,ct=U.offset;if(ot.isInstancedInterleavedBuffer){for(let Y=0;Y<W.locationSize;Y++)S(W.location+Y,ot.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Y=0;Y<W.locationSize;Y++)y(W.location+Y);s.bindBuffer(s.ARRAY_BUFFER,ut);for(let Y=0;Y<W.locationSize;Y++)E(W.location+Y,tt/W.locationSize,mt,H,N*Tt,(ct+tt/W.locationSize*Y)*Tt,ht)}else{if(U.isInstancedBufferAttribute){for(let ot=0;ot<W.locationSize;ot++)S(W.location+ot,U.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let ot=0;ot<W.locationSize;ot++)y(W.location+ot);s.bindBuffer(s.ARRAY_BUFFER,ut);for(let ot=0;ot<W.locationSize;ot++)E(W.location+ot,tt/W.locationSize,mt,H,tt*Tt,tt/W.locationSize*ot*Tt,ht)}}else if(q!==void 0){let H=q[I];if(H!==void 0)switch(H.length){case 2:s.vertexAttrib2fv(W.location,H);break;case 3:s.vertexAttrib3fv(W.location,H);break;case 4:s.vertexAttrib4fv(W.location,H);break;default:s.vertexAttrib1fv(W.location,H)}}}}b()}function w(){F();for(let L in a){let O=a[L];for(let z in O){let j=O[z];for(let it in j)m(j[it].object),delete j[it];delete O[z]}delete a[L]}}function M(L){if(a[L.id]===void 0)return;let O=a[L.id];for(let z in O){let j=O[z];for(let it in j)m(j[it].object),delete j[it];delete O[z]}delete a[L.id]}function D(L){for(let O in a){let z=a[O];if(z[L.id]===void 0)continue;let j=z[L.id];for(let it in j)m(j[it].object),delete j[it];delete z[L.id]}}function F(){B(),u=!0,l!==c&&(l=c,d(l.object))}function B(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:F,resetDefaultState:B,dispose:w,releaseStatesOfGeometry:M,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:y,disableUnusedAttributes:b}}function Ww(s,t,e,n){let i=n.isWebGL2,r;function o(u){r=u}function a(u,h){s.drawArrays(r,u,h),e.update(h,r,1)}function c(u,h,f){if(f===0)return;let d,m;if(i)d=s,m="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](r,u,h,f),e.update(h,r,f)}function l(u,h,f){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<f;m++)this.render(u[m],h[m]);else{d.multiDrawArraysWEBGL(r,u,0,h,0,f);let m=0;for(let x=0;x<f;x++)m+=h[x];e.update(m,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Xw(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),g=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,y=o||t.has("OES_texture_float"),S=_&&y,b=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:m,maxAttributes:x,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:S,maxSamples:b}}function qw(s){let t=this,e=null,n=0,i=!1,r=!1,o=new yn,a=new te,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){let m=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,p=s.get(h);if(!i||m===null||m.length===0||r&&!g)r?u(null):l();else{let v=r?0:n,_=v*4,y=p.clippingState||null;c.value=y,y=u(m,f,_,d);for(let S=0;S!==_;++S)y[S]=e[S];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,m){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=c.value,m!==!0||g===null){let p=d+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,y=d;_!==x;++_,y+=4)o.copy(h[_]).applyMatrix4(v,a),o.normal.toArray(g,y),g[y+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function Yw(s){let t=new WeakMap;function e(o,a){return a===Wo?o.mapping=Pi:a===Xo&&(o.mapping=ji),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Wo||a===Xo)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new tl(c.height/2);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ts=class extends zr{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Rr=4,Bp=[.125,.215,.35,.446,.526,.582],Ds=20,ih=new ts,Op=new at,sh=null,rh=0,oh=0,Ls=(1+Math.sqrt(5))/2,yr=1/Ls,zp=[new T(1,1,1),new T(-1,1,1),new T(1,1,-1),new T(-1,1,-1),new T(0,Ls,yr),new T(0,Ls,-yr),new T(yr,0,Ls),new T(-yr,0,Ls),new T(Ls,yr,0),new T(-Ls,yr,0)],ra=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){sh=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(sh,rh,oh),t.scissorTest=!1,xc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Pi||t.mapping===ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sh=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ne,minFilter:Ne,generateMipmaps:!1,type:Li,format:wn,colorSpace:oi,depthBuffer:!1},i=kp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kp(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zw(r)),this._blurMaterial=Jw(r,t,e)}return i}_compileMaterial(t){let e=new ee(this._lodPlanes[0],t);this._renderer.compile(e,ih)}_sceneToCubeUV(t,e,n,i){let a=new Fe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Op),u.toneMapping=Jn,u.autoClear=!1;let d=new On({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1}),m=new ee(new ze,d),x=!1,g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,x=!0):(d.color.copy(Op),x=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let _=this._cubeSize;xc(i,v*_,p>2?_:0,_,_),u.setRenderTarget(i),x&&u.render(m,a),u.render(t,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Pi||t.mapping===ji;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hp());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new ee(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;xc(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ih)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=zp[(i-1)%zp.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new ee(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ds-1),x=r/m,g=isFinite(r)?1+Math.floor(u*x):Ds;g>Ds&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ds}`);let p=[],v=0;for(let E=0;E<Ds;++E){let C=E/x,w=Math.exp(-C*C/2);p.push(w),E===0?v+=w:E<g&&(v+=2*w)}for(let E=0;E<p.length;E++)p[E]=p[E]/v;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:_}=this;f.dTheta.value=m,f.mipInt.value=_-n;let y=this._sizeLods[i],S=3*y*(i>_-Rr?i-_+Rr:0),b=4*(this._cubeSize-y);xc(e,S,b,3*y,2*y),c.setRenderTarget(e),c.render(h,ih)}};function Zw(s){let t=[],e=[],n=[],i=s,r=s-Rr+1+Bp.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Rr?c=Bp[o-s+Rr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,m=6,x=3,g=2,p=1,v=new Float32Array(x*m*d),_=new Float32Array(g*m*d),y=new Float32Array(p*m*d);for(let b=0;b<d;b++){let E=b%3*2/3-1,C=b>2?0:-1,w=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];v.set(w,x*m*b),_.set(f,g*m*b);let M=[b,b,b,b,b,b];y.set(M,p*m*b)}let S=new Vt;S.setAttribute("position",new Gt(v,x)),S.setAttribute("uv",new Gt(_,g)),S.setAttribute("faceIndex",new Gt(y,p)),t.push(S),i>Rr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function kp(s,t,e){let n=new tn(s,t,e);return n.texture.mapping=jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xc(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Jw(s,t,e){let n=new Float32Array(Ds),i=new T(0,1,0);return new dn({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Pd(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Hp(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pd(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Vp(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Pd(){return`

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
	`}function $w(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Wo||c===Xo,u=c===Pi||c===ji;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new ra(s)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{let h=a.image;if(l&&h&&h.height>0||u&&h&&i(h)){e===null&&(e=new ra(s));let f=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Kw(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function jw(s,t,e,n){let i={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);for(let m in f.morphAttributes){let x=f.morphAttributes[m];for(let g=0,p=x.length;g<p;g++)t.remove(x[g])}f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function c(h){let f=h.attributes;for(let m in f)t.update(f[m],s.ARRAY_BUFFER);let d=h.morphAttributes;for(let m in d){let x=d[m];for(let g=0,p=x.length;g<p;g++)t.update(x[g],s.ARRAY_BUFFER)}}function l(h){let f=[],d=h.index,m=h.attributes.position,x=0;if(d!==null){let v=d.array;x=d.version;for(let _=0,y=v.length;_<y;_+=3){let S=v[_+0],b=v[_+1],E=v[_+2];f.push(S,b,b,E,E,S)}}else if(m!==void 0){let v=m.array;x=m.version;for(let _=0,y=v.length/3-1;_<y;_+=3){let S=_+0,b=_+1,E=_+2;f.push(S,b,b,E,E,S)}}else return;let g=new(K0(f)?sa:ia)(f,1);g.version=x;let p=r.get(h);p&&t.remove(p),r.set(h,g)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Qw(s,t,e,n){let i=n.isWebGL2,r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function u(d,m){s.drawElements(r,m,a,d*c),e.update(m,r,1)}function h(d,m,x){if(x===0)return;let g,p;if(i)g=s,p="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](r,m,a,d*c,x),e.update(m,r,x)}function f(d,m,x){if(x===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<x;p++)this.render(d[p]/c,m[p]);else{g.multiDrawElementsWEBGL(r,m,0,a,d,0,x);let p=0;for(let v=0;v<x;v++)p+=m[v];e.update(p,r,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function tb(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function eb(s,t){return s[0]-t[0]}function nb(s,t){return Math.abs(t[1])-Math.abs(s[1])}function ib(s,t,e){let n={},i=new Float32Array(8),r=new WeakMap,o=new de,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h){let f=l.morphTargetInfluences;if(t.isWebGL2===!0){let d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=d!==void 0?d.length:0,x=r.get(u);if(x===void 0||x.count!==m){let L=function(){F.dispose(),r.delete(u),u.removeEventListener("dispose",L)};x!==void 0&&x.texture.dispose();let v=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],E=u.morphAttributes.color||[],C=0;v===!0&&(C=1),_===!0&&(C=2),y===!0&&(C=3);let w=u.attributes.position.count*C,M=1;w>t.maxTextureSize&&(M=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let D=new Float32Array(w*M*4*m),F=new Fr(D,w,M,m);F.type=Yn,F.needsUpdate=!0;let B=C*4;for(let O=0;O<m;O++){let z=S[O],j=b[O],it=E[O],Z=w*M*4*O;for(let q=0;q<z.count;q++){let I=q*B;v===!0&&(o.fromBufferAttribute(z,q),D[Z+I+0]=o.x,D[Z+I+1]=o.y,D[Z+I+2]=o.z,D[Z+I+3]=0),_===!0&&(o.fromBufferAttribute(j,q),D[Z+I+4]=o.x,D[Z+I+5]=o.y,D[Z+I+6]=o.z,D[Z+I+7]=0),y===!0&&(o.fromBufferAttribute(it,q),D[Z+I+8]=o.x,D[Z+I+9]=o.y,D[Z+I+10]=o.z,D[Z+I+11]=it.itemSize===4?o.w:1)}}x={count:m,texture:F,size:new st(w,M)},r.set(u,x),u.addEventListener("dispose",L)}let g=0;for(let v=0;v<f.length;v++)g+=f[v];let p=u.morphTargetsRelative?1:1-g;h.getUniforms().setValue(s,"morphTargetBaseInfluence",p),h.getUniforms().setValue(s,"morphTargetInfluences",f),h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,e),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{let d=f===void 0?0:f.length,m=n[u.id];if(m===void 0||m.length!==d){m=[];for(let _=0;_<d;_++)m[_]=[_,0];n[u.id]=m}for(let _=0;_<d;_++){let y=m[_];y[0]=_,y[1]=f[_]}m.sort(nb);for(let _=0;_<8;_++)_<d&&m[_][1]?(a[_][0]=m[_][0],a[_][1]=m[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(eb);let x=u.morphAttributes.position,g=u.morphAttributes.normal,p=0;for(let _=0;_<8;_++){let y=a[_],S=y[0],b=y[1];S!==Number.MAX_SAFE_INTEGER&&b?(x&&u.getAttribute("morphTarget"+_)!==x[S]&&u.setAttribute("morphTarget"+_,x[S]),g&&u.getAttribute("morphNormal"+_)!==g[S]&&u.setAttribute("morphNormal"+_,g[S]),i[_]=b,p+=b):(x&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),g&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),i[_]=0)}let v=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(s,"morphTargetBaseInfluence",v),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function sb(s,t,e,n){let i=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,h=t.get(c,u);if(i.get(h)!==l&&(t.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return h}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Vs=class extends Ve{constructor(t,e,n,i,r,o,a,c,l,u){if(u=u!==void 0?u:$i,u!==$i&&u!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===$i&&(n=Mi),n===void 0&&u===zs&&(n=Ji),super(null,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ue,this.minFilter=c!==void 0?c:Ue,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ig=new Ve,sg=new Vs(1,1);sg.compareFunction=Rd;var rg=new Fr,og=new na,ag=new ks,Gp=[],Wp=[],Xp=new Float32Array(16),qp=new Float32Array(9),Yp=new Float32Array(4);function Qr(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Gp[i];if(r===void 0&&(r=new Float32Array(i),Gp[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ge(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function We(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function nu(s,t){let e=Wp[t];e===void 0&&(e=new Int32Array(t),Wp[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function rb(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function ob(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;s.uniform2fv(this.addr,t),We(e,t)}}function ab(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ge(e,t))return;s.uniform3fv(this.addr,t),We(e,t)}}function cb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;s.uniform4fv(this.addr,t),We(e,t)}}function lb(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;Yp.set(n),s.uniformMatrix2fv(this.addr,!1,Yp),We(e,n)}}function ub(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;qp.set(n),s.uniformMatrix3fv(this.addr,!1,qp),We(e,n)}}function hb(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;Xp.set(n),s.uniformMatrix4fv(this.addr,!1,Xp),We(e,n)}}function fb(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function db(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;s.uniform2iv(this.addr,t),We(e,t)}}function pb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;s.uniform3iv(this.addr,t),We(e,t)}}function mb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;s.uniform4iv(this.addr,t),We(e,t)}}function gb(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function xb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;s.uniform2uiv(this.addr,t),We(e,t)}}function _b(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;s.uniform3uiv(this.addr,t),We(e,t)}}function vb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;s.uniform4uiv(this.addr,t),We(e,t)}}function yb(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?sg:ig;e.setTexture2D(t||r,i)}function wb(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||og,i)}function bb(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ag,i)}function Mb(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||rg,i)}function Sb(s){switch(s){case 5126:return rb;case 35664:return ob;case 35665:return ab;case 35666:return cb;case 35674:return lb;case 35675:return ub;case 35676:return hb;case 5124:case 35670:return fb;case 35667:case 35671:return db;case 35668:case 35672:return pb;case 35669:case 35673:return mb;case 5125:return gb;case 36294:return xb;case 36295:return _b;case 36296:return vb;case 35678:case 36198:case 36298:case 36306:case 35682:return yb;case 35679:case 36299:case 36307:return wb;case 35680:case 36300:case 36308:case 36293:return bb;case 36289:case 36303:case 36311:case 36292:return Mb}}function Eb(s,t){s.uniform1fv(this.addr,t)}function Tb(s,t){let e=Qr(t,this.size,2);s.uniform2fv(this.addr,e)}function Ab(s,t){let e=Qr(t,this.size,3);s.uniform3fv(this.addr,e)}function Rb(s,t){let e=Qr(t,this.size,4);s.uniform4fv(this.addr,e)}function Cb(s,t){let e=Qr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Pb(s,t){let e=Qr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Ib(s,t){let e=Qr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Lb(s,t){s.uniform1iv(this.addr,t)}function Db(s,t){s.uniform2iv(this.addr,t)}function Ub(s,t){s.uniform3iv(this.addr,t)}function Nb(s,t){s.uniform4iv(this.addr,t)}function Fb(s,t){s.uniform1uiv(this.addr,t)}function Bb(s,t){s.uniform2uiv(this.addr,t)}function Ob(s,t){s.uniform3uiv(this.addr,t)}function zb(s,t){s.uniform4uiv(this.addr,t)}function kb(s,t,e){let n=this.cache,i=t.length,r=nu(e,i);Ge(n,r)||(s.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||ig,r[o])}function Hb(s,t,e){let n=this.cache,i=t.length,r=nu(e,i);Ge(n,r)||(s.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||og,r[o])}function Vb(s,t,e){let n=this.cache,i=t.length,r=nu(e,i);Ge(n,r)||(s.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||ag,r[o])}function Gb(s,t,e){let n=this.cache,i=t.length,r=nu(e,i);Ge(n,r)||(s.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||rg,r[o])}function Wb(s){switch(s){case 5126:return Eb;case 35664:return Tb;case 35665:return Ab;case 35666:return Rb;case 35674:return Cb;case 35675:return Pb;case 35676:return Ib;case 5124:case 35670:return Lb;case 35667:case 35671:return Db;case 35668:case 35672:return Ub;case 35669:case 35673:return Nb;case 5125:return Fb;case 36294:return Bb;case 36295:return Ob;case 36296:return zb;case 35678:case 36198:case 36298:case 36306:case 35682:return kb;case 35679:case 36299:case 36307:return Hb;case 35680:case 36300:case 36308:case 36293:return Vb;case 36289:case 36303:case 36311:case 36292:return Gb}}var df=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Sb(e.type)}},pf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Wb(e.type)}},mf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},ah=/(\w+)(\])?(\[|\.)?/g;function Zp(s,t){s.seq.push(t),s.map[t.id]=t}function Xb(s,t,e){let n=s.name,i=n.length;for(ah.lastIndex=0;;){let r=ah.exec(n),o=ah.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Zp(e,l===void 0?new df(a,s,t):new pf(a,s,t));break}else{let h=e.map[a];h===void 0&&(h=new mf(a),Zp(e,h)),e=h}}}var Lr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Xb(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Jp(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var qb=37297,Yb=0;function Zb(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Jb(s){let t=fe.getPrimaries(fe.workingColorSpace),e=fe.getPrimaries(s),n;switch(t===e?n="":t===jo&&e===Ko?n="LinearDisplayP3ToLinearSRGB":t===Ko&&e===jo&&(n="LinearSRGBToLinearDisplayP3"),s){case oi:case Aa:return[n,"LinearTransferOETF"];case Te:case tu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function $p(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Zb(s.getShaderSource(t),o)}else return i}function $b(s,t){let e=Jb(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Kb(s,t){let e;switch(t){case y0:e="Linear";break;case w0:e="Reinhard";break;case b0:e="OptimizedCineon";break;case M0:e="ACESFilmic";break;case E0:e="AgX";break;case S0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function jb(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Cr).join(`
`)}function Qb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Cr).join(`
`)}function t1(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function e1(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Cr(s){return s!==""}function Kp(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jp(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var n1=/^[ \t]*#include +<([\w\d./]+)>/gm;function gf(s){return s.replace(n1,s1)}var i1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function s1(s,t){let e=Kt[t];if(e===void 0){let n=i1.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return gf(e)}var r1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qp(s){return s.replace(r1,o1)}function o1(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function tm(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function a1(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===xd?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Jl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===si&&(t="SHADOWMAP_TYPE_VSM"),t}function c1(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Pi:case ji:t="ENVMAP_TYPE_CUBE";break;case jr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function l1(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===ji&&(t="ENVMAP_MODE_REFRACTION"),t}function u1(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ta:t="ENVMAP_BLENDING_MULTIPLY";break;case _0:t="ENVMAP_BLENDING_MIX";break;case v0:t="ENVMAP_BLENDING_ADD";break}return t}function h1(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function f1(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=a1(e),l=c1(e),u=l1(e),h=u1(e),f=h1(e),d=e.isWebGL2?"":jb(e),m=Qb(e),x=t1(r),g=i.createProgram(),p,v,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Cr).join(`
`),p.length>0&&(p+=`
`),v=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Cr).join(`
`),v.length>0&&(v+=`
`)):(p=[tm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),v=[d,tm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Jn?"#define TONE_MAPPING":"",e.toneMapping!==Jn?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Jn?Kb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,$b("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Cr).join(`
`)),o=gf(o),o=Kp(o,e),o=jp(o,e),a=gf(a),a=Kp(a,e),a=jp(a,e),o=Qp(o),a=Qp(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===tf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let y=_+p+o,S=_+v+a,b=Jp(i,i.VERTEX_SHADER,y),E=Jp(i,i.FRAGMENT_SHADER,S);i.attachShader(g,b),i.attachShader(g,E),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function C(F){if(s.debug.checkShaderErrors){let B=i.getProgramInfoLog(g).trim(),L=i.getShaderInfoLog(b).trim(),O=i.getShaderInfoLog(E).trim(),z=!0,j=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,b,E);else{let it=$p(i,b,"vertex"),Z=$p(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+B+`
`+it+`
`+Z)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(L===""||O==="")&&(j=!1);j&&(F.diagnostics={runnable:z,programLog:B,vertexShader:{log:L,prefix:p},fragmentShader:{log:O,prefix:v}})}i.deleteShader(b),i.deleteShader(E),w=new Lr(i,g),M=e1(i,g)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(g,qb)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Yb++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=E,this}var d1=0,xf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new _f(t),e.set(t,n)),n}},_f=class{constructor(t){this.id=d1++,this.code=t,this.usedTimes=0}};function p1(s,t,e,n,i,r,o){let a=new Br,c=new xf,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return w===0?"uv":`uv${w}`}function g(w,M,D,F,B){let L=F.fog,O=B.geometry,z=w.isMeshStandardMaterial?F.environment:null,j=(w.isMeshStandardMaterial?e:t).get(w.envMap||z),it=j&&j.mapping===jr?j.image.height:null,Z=m[w.type];w.precision!==null&&(d=i.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));let q=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,I=q!==void 0?q.length:0,W=0;O.morphAttributes.position!==void 0&&(W=1),O.morphAttributes.normal!==void 0&&(W=2),O.morphAttributes.color!==void 0&&(W=3);let U,H,tt,pt;if(Z){let Xe=qn[Z];U=Xe.vertexShader,H=Xe.fragmentShader}else U=w.vertexShader,H=w.fragmentShader,c.update(w),tt=c.getVertexShaderID(w),pt=c.getFragmentShaderID(w);let ut=s.getRenderTarget(),mt=B.isInstancedMesh===!0,Tt=B.isBatchedMesh===!0,ht=!!w.map,ot=!!w.matcap,N=!!j,ct=!!w.aoMap,Y=!!w.lightMap,rt=!!w.bumpMap,nt=!!w.normalMap,gt=!!w.displacementMap,dt=!!w.emissiveMap,P=!!w.metalnessMap,A=!!w.roughnessMap,X=w.anisotropy>0,$=w.clearcoat>0,et=w.iridescence>0,G=w.sheen>0,xt=w.transmission>0,ft=X&&!!w.anisotropyMap,_t=$&&!!w.clearcoatMap,yt=$&&!!w.clearcoatNormalMap,Et=$&&!!w.clearcoatRoughnessMap,lt=et&&!!w.iridescenceMap,Xt=et&&!!w.iridescenceThicknessMap,Zt=G&&!!w.sheenColorMap,Dt=G&&!!w.sheenRoughnessMap,Ut=!!w.specularMap,At=!!w.specularColorMap,Ot=!!w.specularIntensityMap,Jt=xt&&!!w.transmissionMap,ce=xt&&!!w.thicknessMap,Ht=!!w.gradientMap,wt=!!w.alphaMap,k=w.alphaTest>0,Rt=!!w.alphaHash,St=!!w.extensions,qt=!!O.attributes.uv1,zt=!!O.attributes.uv2,Qt=!!O.attributes.uv3,ue=Jn;return w.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(ue=s.toneMapping),{isWebGL2:u,shaderID:Z,shaderType:w.type,shaderName:w.name,vertexShader:U,fragmentShader:H,defines:w.defines,customVertexShaderID:tt,customFragmentShaderID:pt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:Tt,instancing:mt,instancingColor:mt&&B.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ut===null?s.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:oi,map:ht,matcap:ot,envMap:N,envMapMode:N&&j.mapping,envMapCubeUVHeight:it,aoMap:ct,lightMap:Y,bumpMap:rt,normalMap:nt,displacementMap:f&&gt,emissiveMap:dt,normalMapObjectSpace:nt&&w.normalMapType===G0,normalMapTangentSpace:nt&&w.normalMapType===os,metalnessMap:P,roughnessMap:A,anisotropy:X,anisotropyMap:ft,clearcoat:$,clearcoatMap:_t,clearcoatNormalMap:yt,clearcoatRoughnessMap:Et,iridescence:et,iridescenceMap:lt,iridescenceThicknessMap:Xt,sheen:G,sheenColorMap:Zt,sheenRoughnessMap:Dt,specularMap:Ut,specularColorMap:At,specularIntensityMap:Ot,transmission:xt,transmissionMap:Jt,thicknessMap:ce,gradientMap:Ht,opaque:w.transparent===!1&&w.blending===Ai,alphaMap:wt,alphaTest:k,alphaHash:Rt,combine:w.combine,mapUv:ht&&x(w.map.channel),aoMapUv:ct&&x(w.aoMap.channel),lightMapUv:Y&&x(w.lightMap.channel),bumpMapUv:rt&&x(w.bumpMap.channel),normalMapUv:nt&&x(w.normalMap.channel),displacementMapUv:gt&&x(w.displacementMap.channel),emissiveMapUv:dt&&x(w.emissiveMap.channel),metalnessMapUv:P&&x(w.metalnessMap.channel),roughnessMapUv:A&&x(w.roughnessMap.channel),anisotropyMapUv:ft&&x(w.anisotropyMap.channel),clearcoatMapUv:_t&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:yt&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Zt&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&x(w.sheenRoughnessMap.channel),specularMapUv:Ut&&x(w.specularMap.channel),specularColorMapUv:At&&x(w.specularColorMap.channel),specularIntensityMapUv:Ot&&x(w.specularIntensityMap.channel),transmissionMapUv:Jt&&x(w.transmissionMap.channel),thicknessMapUv:ce&&x(w.thicknessMap.channel),alphaMapUv:wt&&x(w.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(nt||X),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:qt,vertexUv2s:zt,vertexUv3s:Qt,pointsUvs:B.isPoints===!0&&!!O.attributes.uv&&(ht||wt),fog:!!L,useFog:w.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:B.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:W,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:ue,useLegacyLights:s._useLegacyLights,decodeVideoTexture:ht&&w.map.isVideoTexture===!0&&fe.getTransfer(w.map.colorSpace)===_e,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===un,flipSided:w.side===Qe,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:St&&w.extensions.derivatives===!0,extensionFragDepth:St&&w.extensions.fragDepth===!0,extensionDrawBuffers:St&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:St&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:St&&w.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()}}function p(w){let M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(let D in w.defines)M.push(D),M.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(v(M,w),_(M,w),M.push(s.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function v(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function _(w,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),w.push(a.mask)}function y(w){let M=m[w.type],D;if(M){let F=qn[M];D=eg.clone(F.uniforms)}else D=w.uniforms;return D}function S(w,M){let D;for(let F=0,B=l.length;F<B;F++){let L=l[F];if(L.cacheKey===M){D=L,++D.usedTimes;break}}return D===void 0&&(D=new f1(s,M,w,r),l.push(D)),D}function b(w){if(--w.usedTimes===0){let M=l.indexOf(w);l[M]=l[l.length-1],l.pop(),w.destroy()}}function E(w){c.remove(w)}function C(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:S,releaseProgram:b,releaseShaderCache:E,programs:l,dispose:C}}function m1(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function g1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function em(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function nm(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(h,f,d,m,x,g){let p=s[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:m,renderOrder:h.renderOrder,z:x,group:g},s[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=x,p.group=g),t++,p}function a(h,f,d,m,x,g){let p=o(h,f,d,m,x,g);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function c(h,f,d,m,x,g){let p=o(h,f,d,m,x,g);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function l(h,f){e.length>1&&e.sort(h||g1),n.length>1&&n.sort(f||em),i.length>1&&i.sort(f||em)}function u(){for(let h=t,f=s.length;h<f;h++){let d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function x1(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new nm,s.set(n,[o])):i>=r.length?(o=new nm,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function _1(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new at};break;case"SpotLight":e={position:new T,direction:new T,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new at,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new at,groundColor:new at};break;case"RectAreaLight":e={color:new at,position:new T,halfWidth:new T,halfHeight:new T};break}return s[t.id]=e,e}}}function v1(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var y1=0;function w1(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function b1(s,t){let e=new _1,n=v1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new T);let r=new T,o=new Ct,a=new Ct;function c(u,h){let f=0,d=0,m=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let x=0,g=0,p=0,v=0,_=0,y=0,S=0,b=0,E=0,C=0,w=0;u.sort(w1);let M=h===!0?Math.PI:1;for(let F=0,B=u.length;F<B;F++){let L=u[F],O=L.color,z=L.intensity,j=L.distance,it=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=O.r*z*M,d+=O.g*z*M,m+=O.b*z*M;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(L.sh.coefficients[Z],z);w++}else if(L.isDirectionalLight){let Z=e.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity*M),L.castShadow){let q=L.shadow,I=n.get(L);I.shadowBias=q.bias,I.shadowNormalBias=q.normalBias,I.shadowRadius=q.radius,I.shadowMapSize=q.mapSize,i.directionalShadow[x]=I,i.directionalShadowMap[x]=it,i.directionalShadowMatrix[x]=L.shadow.matrix,y++}i.directional[x]=Z,x++}else if(L.isSpotLight){let Z=e.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(O).multiplyScalar(z*M),Z.distance=j,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,i.spot[p]=Z;let q=L.shadow;if(L.map&&(i.spotLightMap[E]=L.map,E++,q.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[p]=q.matrix,L.castShadow){let I=n.get(L);I.shadowBias=q.bias,I.shadowNormalBias=q.normalBias,I.shadowRadius=q.radius,I.shadowMapSize=q.mapSize,i.spotShadow[p]=I,i.spotShadowMap[p]=it,b++}p++}else if(L.isRectAreaLight){let Z=e.get(L);Z.color.copy(O).multiplyScalar(z),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),i.rectArea[v]=Z,v++}else if(L.isPointLight){let Z=e.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity*M),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){let q=L.shadow,I=n.get(L);I.shadowBias=q.bias,I.shadowNormalBias=q.normalBias,I.shadowRadius=q.radius,I.shadowMapSize=q.mapSize,I.shadowCameraNear=q.camera.near,I.shadowCameraFar=q.camera.far,i.pointShadow[g]=I,i.pointShadowMap[g]=it,i.pointShadowMatrix[g]=L.shadow.matrix,S++}i.point[g]=Z,g++}else if(L.isHemisphereLight){let Z=e.get(L);Z.skyColor.copy(L.color).multiplyScalar(z*M),Z.groundColor.copy(L.groundColor).multiplyScalar(z*M),i.hemi[_]=Z,_++}}v>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Mt.LTC_FLOAT_1,i.rectAreaLTC2=Mt.LTC_FLOAT_2):(i.rectAreaLTC1=Mt.LTC_HALF_1,i.rectAreaLTC2=Mt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Mt.LTC_FLOAT_1,i.rectAreaLTC2=Mt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Mt.LTC_HALF_1,i.rectAreaLTC2=Mt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=m;let D=i.hash;(D.directionalLength!==x||D.pointLength!==g||D.spotLength!==p||D.rectAreaLength!==v||D.hemiLength!==_||D.numDirectionalShadows!==y||D.numPointShadows!==S||D.numSpotShadows!==b||D.numSpotMaps!==E||D.numLightProbes!==w)&&(i.directional.length=x,i.spot.length=p,i.rectArea.length=v,i.point.length=g,i.hemi.length=_,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=b+E-C,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=w,D.directionalLength=x,D.pointLength=g,D.spotLength=p,D.rectAreaLength=v,D.hemiLength=_,D.numDirectionalShadows=y,D.numPointShadows=S,D.numSpotShadows=b,D.numSpotMaps=E,D.numLightProbes=w,i.version=y1++)}function l(u,h){let f=0,d=0,m=0,x=0,g=0,p=h.matrixWorldInverse;for(let v=0,_=u.length;v<_;v++){let y=u[v];if(y.isDirectionalLight){let S=i.directional[f];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),f++}else if(y.isSpotLight){let S=i.spot[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),m++}else if(y.isRectAreaLight){let S=i.rectArea[x];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),a.identity(),o.copy(y.matrixWorld),o.premultiply(p),a.extractRotation(o),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){let S=i.point[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){let S=i.hemi[g];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:c,setupView:l,state:i}}function im(s,t){let e=new b1(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function c(h){e.setup(n,h)}function l(h){e.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function M1(s,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),c;return a===void 0?(c=new im(s,t),e.set(r,[c])):o>=a.length?(c=new im(s,t),a.push(c)):c=a[o],c}function i(){e=new WeakMap}return{get:n,dispose:i}}var oa=class extends Je{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=H0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},aa=class extends Je{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},S1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,E1=`uniform sampler2D shadow_pass;
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
}`;function T1(s,t,e){let n=new Hs,i=new st,r=new st,o=new de,a=new oa({depthPacking:V0}),c=new aa,l={},u=e.maxTextureSize,h={[Bn]:Qe,[Qe]:Bn,[un]:un},f=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:S1,fragmentShader:E1}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new Vt;m.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ee(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xd;let p=this.type;this.render=function(b,E,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;let w=s.getRenderTarget(),M=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Ti),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let B=p!==si&&this.type===si,L=p===si&&this.type!==si;for(let O=0,z=b.length;O<z;O++){let j=b[O],it=j.shadow;if(it===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(it.autoUpdate===!1&&it.needsUpdate===!1)continue;i.copy(it.mapSize);let Z=it.getFrameExtents();if(i.multiply(Z),r.copy(it.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/Z.x),i.x=r.x*Z.x,it.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/Z.y),i.y=r.y*Z.y,it.mapSize.y=r.y)),it.map===null||B===!0||L===!0){let I=this.type!==si?{minFilter:Ue,magFilter:Ue}:{};it.map!==null&&it.map.dispose(),it.map=new tn(i.x,i.y,I),it.map.texture.name=j.name+".shadowMap",it.camera.updateProjectionMatrix()}s.setRenderTarget(it.map),s.clear();let q=it.getViewportCount();for(let I=0;I<q;I++){let W=it.getViewport(I);o.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),F.viewport(o),it.updateMatrices(j,I),n=it.getFrustum(),y(E,C,it.camera,j,this.type)}it.isPointLightShadow!==!0&&this.type===si&&v(it,C),it.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(w,M,D)};function v(b,E){let C=t.update(x);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new tn(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(E,null,C,f,x,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(E,null,C,d,x,null)}function _(b,E,C,w){let M=null,D=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)M=D;else if(M=C.isPointLight===!0?c:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let F=M.uuid,B=E.uuid,L=l[F];L===void 0&&(L={},l[F]=L);let O=L[B];O===void 0&&(O=M.clone(),L[B]=O,E.addEventListener("dispose",S)),M=O}if(M.visible=E.visible,M.wireframe=E.wireframe,w===si?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:h[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let F=s.properties.get(M);F.light=C}return M}function y(b,E,C,w,M){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===si)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);let B=t.update(b),L=b.material;if(Array.isArray(L)){let O=B.groups;for(let z=0,j=O.length;z<j;z++){let it=O[z],Z=L[it.materialIndex];if(Z&&Z.visible){let q=_(b,Z,w,M);b.onBeforeShadow(s,b,E,C,B,q,it),s.renderBufferDirect(C,null,B,q,b,it),b.onAfterShadow(s,b,E,C,B,q,it)}}}else if(L.visible){let O=_(b,L,w,M);b.onBeforeShadow(s,b,E,C,B,O,null),s.renderBufferDirect(C,null,B,O,b,null),b.onAfterShadow(s,b,E,C,B,O,null)}}let F=b.children;for(let B=0,L=F.length;B<L;B++)y(F[B],E,C,w,M)}function S(b){b.target.removeEventListener("dispose",S);for(let C in l){let w=l[C],M=b.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}function A1(s,t,e){let n=e.isWebGL2;function i(){let k=!1,Rt=new de,St=null,qt=new de(0,0,0,0);return{setMask:function(zt){St!==zt&&!k&&(s.colorMask(zt,zt,zt,zt),St=zt)},setLocked:function(zt){k=zt},setClear:function(zt,Qt,ue,Ie,Xe){Xe===!0&&(zt*=Ie,Qt*=Ie,ue*=Ie),Rt.set(zt,Qt,ue,Ie),qt.equals(Rt)===!1&&(s.clearColor(zt,Qt,ue,Ie),qt.copy(Rt))},reset:function(){k=!1,St=null,qt.set(-1,0,0,0)}}}function r(){let k=!1,Rt=null,St=null,qt=null;return{setTest:function(zt){zt?Tt(s.DEPTH_TEST):ht(s.DEPTH_TEST)},setMask:function(zt){Rt!==zt&&!k&&(s.depthMask(zt),Rt=zt)},setFunc:function(zt){if(St!==zt){switch(zt){case h0:s.depthFunc(s.NEVER);break;case f0:s.depthFunc(s.ALWAYS);break;case d0:s.depthFunc(s.LESS);break;case Go:s.depthFunc(s.LEQUAL);break;case p0:s.depthFunc(s.EQUAL);break;case m0:s.depthFunc(s.GEQUAL);break;case g0:s.depthFunc(s.GREATER);break;case x0:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}St=zt}},setLocked:function(zt){k=zt},setClear:function(zt){qt!==zt&&(s.clearDepth(zt),qt=zt)},reset:function(){k=!1,Rt=null,St=null,qt=null}}}function o(){let k=!1,Rt=null,St=null,qt=null,zt=null,Qt=null,ue=null,Ie=null,Xe=null;return{setTest:function(oe){k||(oe?Tt(s.STENCIL_TEST):ht(s.STENCIL_TEST))},setMask:function(oe){Rt!==oe&&!k&&(s.stencilMask(oe),Rt=oe)},setFunc:function(oe,je,xe){(St!==oe||qt!==je||zt!==xe)&&(s.stencilFunc(oe,je,xe),St=oe,qt=je,zt=xe)},setOp:function(oe,je,xe){(Qt!==oe||ue!==je||Ie!==xe)&&(s.stencilOp(oe,je,xe),Qt=oe,ue=je,Ie=xe)},setLocked:function(oe){k=oe},setClear:function(oe){Xe!==oe&&(s.clearStencil(oe),Xe=oe)},reset:function(){k=!1,Rt=null,St=null,qt=null,zt=null,Qt=null,ue=null,Ie=null,Xe=null}}}let a=new i,c=new r,l=new o,u=new WeakMap,h=new WeakMap,f={},d={},m=new WeakMap,x=[],g=null,p=!1,v=null,_=null,y=null,S=null,b=null,E=null,C=null,w=new at(0,0,0),M=0,D=!1,F=null,B=null,L=null,O=null,z=null,j=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),it=!1,Z=0,q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(q)[1]),it=Z>=1):q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),it=Z>=2);let I=null,W={},U=s.getParameter(s.SCISSOR_BOX),H=s.getParameter(s.VIEWPORT),tt=new de().fromArray(U),pt=new de().fromArray(H);function ut(k,Rt,St,qt){let zt=new Uint8Array(4),Qt=s.createTexture();s.bindTexture(k,Qt),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ue=0;ue<St;ue++)n&&(k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY)?s.texImage3D(Rt,0,s.RGBA,1,1,qt,0,s.RGBA,s.UNSIGNED_BYTE,zt):s.texImage2D(Rt+ue,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,zt);return Qt}let mt={};mt[s.TEXTURE_2D]=ut(s.TEXTURE_2D,s.TEXTURE_2D,1),mt[s.TEXTURE_CUBE_MAP]=ut(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(mt[s.TEXTURE_2D_ARRAY]=ut(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),mt[s.TEXTURE_3D]=ut(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Tt(s.DEPTH_TEST),c.setFunc(Go),dt(!1),P(bh),Tt(s.CULL_FACE),nt(Ti);function Tt(k){f[k]!==!0&&(s.enable(k),f[k]=!0)}function ht(k){f[k]!==!1&&(s.disable(k),f[k]=!1)}function ot(k,Rt){return d[k]!==Rt?(s.bindFramebuffer(k,Rt),d[k]=Rt,n&&(k===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=Rt),k===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=Rt)),!0):!1}function N(k,Rt){let St=x,qt=!1;if(k)if(St=m.get(Rt),St===void 0&&(St=[],m.set(Rt,St)),k.isWebGLMultipleRenderTargets){let zt=k.texture;if(St.length!==zt.length||St[0]!==s.COLOR_ATTACHMENT0){for(let Qt=0,ue=zt.length;Qt<ue;Qt++)St[Qt]=s.COLOR_ATTACHMENT0+Qt;St.length=zt.length,qt=!0}}else St[0]!==s.COLOR_ATTACHMENT0&&(St[0]=s.COLOR_ATTACHMENT0,qt=!0);else St[0]!==s.BACK&&(St[0]=s.BACK,qt=!0);qt&&(e.isWebGL2?s.drawBuffers(St):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(St))}function ct(k){return g!==k?(s.useProgram(k),g=k,!0):!1}let Y={[Zi]:s.FUNC_ADD,[Km]:s.FUNC_SUBTRACT,[jm]:s.FUNC_REVERSE_SUBTRACT};if(n)Y[Eh]=s.MIN,Y[Th]=s.MAX;else{let k=t.get("EXT_blend_minmax");k!==null&&(Y[Eh]=k.MIN_EXT,Y[Th]=k.MAX_EXT)}let rt={[Qm]:s.ZERO,[Kr]:s.ONE,[t0]:s.SRC_COLOR,[Zc]:s.SRC_ALPHA,[o0]:s.SRC_ALPHA_SATURATE,[s0]:s.DST_COLOR,[n0]:s.DST_ALPHA,[e0]:s.ONE_MINUS_SRC_COLOR,[Os]:s.ONE_MINUS_SRC_ALPHA,[r0]:s.ONE_MINUS_DST_COLOR,[i0]:s.ONE_MINUS_DST_ALPHA,[a0]:s.CONSTANT_COLOR,[c0]:s.ONE_MINUS_CONSTANT_COLOR,[l0]:s.CONSTANT_ALPHA,[u0]:s.ONE_MINUS_CONSTANT_ALPHA};function nt(k,Rt,St,qt,zt,Qt,ue,Ie,Xe,oe){if(k===Ti){p===!0&&(ht(s.BLEND),p=!1);return}if(p===!1&&(Tt(s.BLEND),p=!0),k!==$l){if(k!==v||oe!==D){if((_!==Zi||b!==Zi)&&(s.blendEquation(s.FUNC_ADD),_=Zi,b=Zi),oe)switch(k){case Ai:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Dr:s.blendFunc(s.ONE,s.ONE);break;case Mh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Sh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ai:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Dr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Mh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Sh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}y=null,S=null,E=null,C=null,w.set(0,0,0),M=0,v=k,D=oe}return}zt=zt||Rt,Qt=Qt||St,ue=ue||qt,(Rt!==_||zt!==b)&&(s.blendEquationSeparate(Y[Rt],Y[zt]),_=Rt,b=zt),(St!==y||qt!==S||Qt!==E||ue!==C)&&(s.blendFuncSeparate(rt[St],rt[qt],rt[Qt],rt[ue]),y=St,S=qt,E=Qt,C=ue),(Ie.equals(w)===!1||Xe!==M)&&(s.blendColor(Ie.r,Ie.g,Ie.b,Xe),w.copy(Ie),M=Xe),v=k,D=!1}function gt(k,Rt){k.side===un?ht(s.CULL_FACE):Tt(s.CULL_FACE);let St=k.side===Qe;Rt&&(St=!St),dt(St),k.blending===Ai&&k.transparent===!1?nt(Ti):nt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),c.setFunc(k.depthFunc),c.setTest(k.depthTest),c.setMask(k.depthWrite),a.setMask(k.colorWrite);let qt=k.stencilWrite;l.setTest(qt),qt&&(l.setMask(k.stencilWriteMask),l.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),l.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),X(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Tt(s.SAMPLE_ALPHA_TO_COVERAGE):ht(s.SAMPLE_ALPHA_TO_COVERAGE)}function dt(k){F!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),F=k)}function P(k){k!==Jm?(Tt(s.CULL_FACE),k!==B&&(k===bh?s.cullFace(s.BACK):k===$m?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ht(s.CULL_FACE),B=k}function A(k){k!==L&&(it&&s.lineWidth(k),L=k)}function X(k,Rt,St){k?(Tt(s.POLYGON_OFFSET_FILL),(O!==Rt||z!==St)&&(s.polygonOffset(Rt,St),O=Rt,z=St)):ht(s.POLYGON_OFFSET_FILL)}function $(k){k?Tt(s.SCISSOR_TEST):ht(s.SCISSOR_TEST)}function et(k){k===void 0&&(k=s.TEXTURE0+j-1),I!==k&&(s.activeTexture(k),I=k)}function G(k,Rt,St){St===void 0&&(I===null?St=s.TEXTURE0+j-1:St=I);let qt=W[St];qt===void 0&&(qt={type:void 0,texture:void 0},W[St]=qt),(qt.type!==k||qt.texture!==Rt)&&(I!==St&&(s.activeTexture(St),I=St),s.bindTexture(k,Rt||mt[k]),qt.type=k,qt.texture=Rt)}function xt(){let k=W[I];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ft(){try{s.compressedTexImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _t(){try{s.compressedTexImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function yt(){try{s.texSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Et(){try{s.texSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function lt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Xt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Zt(){try{s.texStorage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Dt(){try{s.texStorage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ut(){try{s.texImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function At(){try{s.texImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ot(k){tt.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),tt.copy(k))}function Jt(k){pt.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),pt.copy(k))}function ce(k,Rt){let St=h.get(Rt);St===void 0&&(St=new WeakMap,h.set(Rt,St));let qt=St.get(k);qt===void 0&&(qt=s.getUniformBlockIndex(Rt,k.name),St.set(k,qt))}function Ht(k,Rt){let qt=h.get(Rt).get(k);u.get(Rt)!==qt&&(s.uniformBlockBinding(Rt,qt,k.__bindingPointIndex),u.set(Rt,qt))}function wt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},I=null,W={},d={},m=new WeakMap,x=[],g=null,p=!1,v=null,_=null,y=null,S=null,b=null,E=null,C=null,w=new at(0,0,0),M=0,D=!1,F=null,B=null,L=null,O=null,z=null,tt.set(0,0,s.canvas.width,s.canvas.height),pt.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Tt,disable:ht,bindFramebuffer:ot,drawBuffers:N,useProgram:ct,setBlending:nt,setMaterial:gt,setFlipSided:dt,setCullFace:P,setLineWidth:A,setPolygonOffset:X,setScissorTest:$,activeTexture:et,bindTexture:G,unbindTexture:xt,compressedTexImage2D:ft,compressedTexImage3D:_t,texImage2D:Ut,texImage3D:At,updateUBOMapping:ce,uniformBlockBinding:Ht,texStorage2D:Zt,texStorage3D:Dt,texSubImage2D:yt,texSubImage3D:Et,compressedTexSubImage2D:lt,compressedTexSubImage3D:Xt,scissor:Ot,viewport:Jt,reset:wt}}function R1(s,t,e,n,i,r,o){let a=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,A){return d?new OffscreenCanvas(P,A):ta("canvas")}function x(P,A,X,$){let et=1;if((P.width>$||P.height>$)&&(et=$/Math.max(P.width,P.height)),et<1||A===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){let G=A?Kc:Math.floor,xt=G(et*P.width),ft=G(et*P.height);h===void 0&&(h=m(xt,ft));let _t=X?m(xt,ft):h;return _t.width=xt,_t.height=ft,_t.getContext("2d").drawImage(P,0,0,xt,ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+xt+"x"+ft+")."),_t}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function g(P){return ef(P.width)&&ef(P.height)}function p(P){return a?!1:P.wrapS!==hn||P.wrapT!==hn||P.minFilter!==Ue&&P.minFilter!==Ne}function v(P,A){return P.generateMipmaps&&A&&P.minFilter!==Ue&&P.minFilter!==Ne}function _(P){s.generateMipmap(P)}function y(P,A,X,$,et=!1){if(a===!1)return A;if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let G=A;if(A===s.RED&&(X===s.FLOAT&&(G=s.R32F),X===s.HALF_FLOAT&&(G=s.R16F),X===s.UNSIGNED_BYTE&&(G=s.R8)),A===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(G=s.R8UI),X===s.UNSIGNED_SHORT&&(G=s.R16UI),X===s.UNSIGNED_INT&&(G=s.R32UI),X===s.BYTE&&(G=s.R8I),X===s.SHORT&&(G=s.R16I),X===s.INT&&(G=s.R32I)),A===s.RG&&(X===s.FLOAT&&(G=s.RG32F),X===s.HALF_FLOAT&&(G=s.RG16F),X===s.UNSIGNED_BYTE&&(G=s.RG8)),A===s.RGBA){let xt=et?$o:fe.getTransfer($);X===s.FLOAT&&(G=s.RGBA32F),X===s.HALF_FLOAT&&(G=s.RGBA16F),X===s.UNSIGNED_BYTE&&(G=xt===_e?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(G=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(G=s.RGB5_A1)}return(G===s.R16F||G===s.R32F||G===s.RG16F||G===s.RG32F||G===s.RGBA16F||G===s.RGBA32F)&&t.get("EXT_color_buffer_float"),G}function S(P,A,X){return v(P,X)===!0||P.isFramebufferTexture&&P.minFilter!==Ue&&P.minFilter!==Ne?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function b(P){return P===Ue||P===Jc||P===Bo?s.NEAREST:s.LINEAR}function E(P){let A=P.target;A.removeEventListener("dispose",E),w(A),A.isVideoTexture&&u.delete(A)}function C(P){let A=P.target;A.removeEventListener("dispose",C),D(A)}function w(P){let A=n.get(P);if(A.__webglInit===void 0)return;let X=P.source,$=f.get(X);if($){let et=$[A.__cacheKey];et.usedTimes--,et.usedTimes===0&&M(P),Object.keys($).length===0&&f.delete(X)}n.remove(P)}function M(P){let A=n.get(P);s.deleteTexture(A.__webglTexture);let X=P.source,$=f.get(X);delete $[A.__cacheKey],o.memory.textures--}function D(P){let A=P.texture,X=n.get(P),$=n.get(A);if($.__webglTexture!==void 0&&(s.deleteTexture($.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(X.__webglFramebuffer[et]))for(let G=0;G<X.__webglFramebuffer[et].length;G++)s.deleteFramebuffer(X.__webglFramebuffer[et][G]);else s.deleteFramebuffer(X.__webglFramebuffer[et]);X.__webglDepthbuffer&&s.deleteRenderbuffer(X.__webglDepthbuffer[et])}else{if(Array.isArray(X.__webglFramebuffer))for(let et=0;et<X.__webglFramebuffer.length;et++)s.deleteFramebuffer(X.__webglFramebuffer[et]);else s.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&s.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&s.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let et=0;et<X.__webglColorRenderbuffer.length;et++)X.__webglColorRenderbuffer[et]&&s.deleteRenderbuffer(X.__webglColorRenderbuffer[et]);X.__webglDepthRenderbuffer&&s.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let et=0,G=A.length;et<G;et++){let xt=n.get(A[et]);xt.__webglTexture&&(s.deleteTexture(xt.__webglTexture),o.memory.textures--),n.remove(A[et])}n.remove(A),n.remove(P)}let F=0;function B(){F=0}function L(){let P=F;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),F+=1,P}function O(P){let A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function z(P,A){let X=n.get(P);if(P.isVideoTexture&&gt(P),P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){let $=P.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(X,P,A);return}}e.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+A)}function j(P,A){let X=n.get(P);if(P.version>0&&X.__version!==P.version){tt(X,P,A);return}e.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+A)}function it(P,A){let X=n.get(P);if(P.version>0&&X.__version!==P.version){tt(X,P,A);return}e.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+A)}function Z(P,A){let X=n.get(P);if(P.version>0&&X.__version!==P.version){pt(X,P,A);return}e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+A)}let q={[Ii]:s.REPEAT,[hn]:s.CLAMP_TO_EDGE,[qo]:s.MIRRORED_REPEAT},I={[Ue]:s.NEAREST,[Jc]:s.NEAREST_MIPMAP_NEAREST,[Bo]:s.NEAREST_MIPMAP_LINEAR,[Ne]:s.LINEAR,[_d]:s.LINEAR_MIPMAP_NEAREST,[Qi]:s.LINEAR_MIPMAP_LINEAR},W={[W0]:s.NEVER,[$0]:s.ALWAYS,[X0]:s.LESS,[Rd]:s.LEQUAL,[q0]:s.EQUAL,[J0]:s.GEQUAL,[Y0]:s.GREATER,[Z0]:s.NOTEQUAL};function U(P,A,X){if(X?(s.texParameteri(P,s.TEXTURE_WRAP_S,q[A.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,q[A.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,q[A.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,I[A.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,I[A.minFilter])):(s.texParameteri(P,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(P,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(A.wrapS!==hn||A.wrapT!==hn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(P,s.TEXTURE_MAG_FILTER,b(A.magFilter)),s.texParameteri(P,s.TEXTURE_MIN_FILTER,b(A.minFilter)),A.minFilter!==Ue&&A.minFilter!==Ne&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,W[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let $=t.get("EXT_texture_filter_anisotropic");if(A.magFilter===Ue||A.minFilter!==Bo&&A.minFilter!==Qi||A.type===Yn&&t.has("OES_texture_float_linear")===!1||a===!1&&A.type===Li&&t.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(s.texParameterf(P,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function H(P,A){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",E));let $=A.source,et=f.get($);et===void 0&&(et={},f.set($,et));let G=O(A);if(G!==P.__cacheKey){et[G]===void 0&&(et[G]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,X=!0),et[G].usedTimes++;let xt=et[P.__cacheKey];xt!==void 0&&(et[P.__cacheKey].usedTimes--,xt.usedTimes===0&&M(A)),P.__cacheKey=G,P.__webglTexture=et[G].texture}return X}function tt(P,A,X){let $=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&($=s.TEXTURE_3D);let et=H(P,A),G=A.source;e.bindTexture($,P.__webglTexture,s.TEXTURE0+X);let xt=n.get(G);if(G.version!==xt.__version||et===!0){e.activeTexture(s.TEXTURE0+X);let ft=fe.getPrimaries(fe.workingColorSpace),_t=A.colorSpace===Cn?null:fe.getPrimaries(A.colorSpace),yt=A.colorSpace===Cn||ft===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let Et=p(A)&&g(A.image)===!1,lt=x(A.image,Et,!1,i.maxTextureSize);lt=dt(A,lt);let Xt=g(lt)||a,Zt=r.convert(A.format,A.colorSpace),Dt=r.convert(A.type),Ut=y(A.internalFormat,Zt,Dt,A.colorSpace,A.isVideoTexture);U($,A,Xt);let At,Ot=A.mipmaps,Jt=a&&A.isVideoTexture!==!0&&Ut!==Ed,ce=xt.__version===void 0||et===!0,Ht=S(A,lt,Xt);if(A.isDepthTexture)Ut=s.DEPTH_COMPONENT,a?A.type===Yn?Ut=s.DEPTH_COMPONENT32F:A.type===Mi?Ut=s.DEPTH_COMPONENT24:A.type===Ji?Ut=s.DEPTH24_STENCIL8:Ut=s.DEPTH_COMPONENT16:A.type===Yn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===$i&&Ut===s.DEPTH_COMPONENT&&A.type!==jl&&A.type!==Mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Mi,Dt=r.convert(A.type)),A.format===zs&&Ut===s.DEPTH_COMPONENT&&(Ut=s.DEPTH_STENCIL,A.type!==Ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Ji,Dt=r.convert(A.type))),ce&&(Jt?e.texStorage2D(s.TEXTURE_2D,1,Ut,lt.width,lt.height):e.texImage2D(s.TEXTURE_2D,0,Ut,lt.width,lt.height,0,Zt,Dt,null));else if(A.isDataTexture)if(Ot.length>0&&Xt){Jt&&ce&&e.texStorage2D(s.TEXTURE_2D,Ht,Ut,Ot[0].width,Ot[0].height);for(let wt=0,k=Ot.length;wt<k;wt++)At=Ot[wt],Jt?e.texSubImage2D(s.TEXTURE_2D,wt,0,0,At.width,At.height,Zt,Dt,At.data):e.texImage2D(s.TEXTURE_2D,wt,Ut,At.width,At.height,0,Zt,Dt,At.data);A.generateMipmaps=!1}else Jt?(ce&&e.texStorage2D(s.TEXTURE_2D,Ht,Ut,lt.width,lt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,lt.width,lt.height,Zt,Dt,lt.data)):e.texImage2D(s.TEXTURE_2D,0,Ut,lt.width,lt.height,0,Zt,Dt,lt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Jt&&ce&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Ht,Ut,Ot[0].width,Ot[0].height,lt.depth);for(let wt=0,k=Ot.length;wt<k;wt++)At=Ot[wt],A.format!==wn?Zt!==null?Jt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,wt,0,0,0,At.width,At.height,lt.depth,Zt,At.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,wt,Ut,At.width,At.height,lt.depth,0,At.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,wt,0,0,0,At.width,At.height,lt.depth,Zt,Dt,At.data):e.texImage3D(s.TEXTURE_2D_ARRAY,wt,Ut,At.width,At.height,lt.depth,0,Zt,Dt,At.data)}else{Jt&&ce&&e.texStorage2D(s.TEXTURE_2D,Ht,Ut,Ot[0].width,Ot[0].height);for(let wt=0,k=Ot.length;wt<k;wt++)At=Ot[wt],A.format!==wn?Zt!==null?Jt?e.compressedTexSubImage2D(s.TEXTURE_2D,wt,0,0,At.width,At.height,Zt,At.data):e.compressedTexImage2D(s.TEXTURE_2D,wt,Ut,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?e.texSubImage2D(s.TEXTURE_2D,wt,0,0,At.width,At.height,Zt,Dt,At.data):e.texImage2D(s.TEXTURE_2D,wt,Ut,At.width,At.height,0,Zt,Dt,At.data)}else if(A.isDataArrayTexture)Jt?(ce&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Ht,Ut,lt.width,lt.height,lt.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Zt,Dt,lt.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ut,lt.width,lt.height,lt.depth,0,Zt,Dt,lt.data);else if(A.isData3DTexture)Jt?(ce&&e.texStorage3D(s.TEXTURE_3D,Ht,Ut,lt.width,lt.height,lt.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Zt,Dt,lt.data)):e.texImage3D(s.TEXTURE_3D,0,Ut,lt.width,lt.height,lt.depth,0,Zt,Dt,lt.data);else if(A.isFramebufferTexture){if(ce)if(Jt)e.texStorage2D(s.TEXTURE_2D,Ht,Ut,lt.width,lt.height);else{let wt=lt.width,k=lt.height;for(let Rt=0;Rt<Ht;Rt++)e.texImage2D(s.TEXTURE_2D,Rt,Ut,wt,k,0,Zt,Dt,null),wt>>=1,k>>=1}}else if(Ot.length>0&&Xt){Jt&&ce&&e.texStorage2D(s.TEXTURE_2D,Ht,Ut,Ot[0].width,Ot[0].height);for(let wt=0,k=Ot.length;wt<k;wt++)At=Ot[wt],Jt?e.texSubImage2D(s.TEXTURE_2D,wt,0,0,Zt,Dt,At):e.texImage2D(s.TEXTURE_2D,wt,Ut,Zt,Dt,At);A.generateMipmaps=!1}else Jt?(ce&&e.texStorage2D(s.TEXTURE_2D,Ht,Ut,lt.width,lt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Zt,Dt,lt)):e.texImage2D(s.TEXTURE_2D,0,Ut,Zt,Dt,lt);v(A,Xt)&&_($),xt.__version=G.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function pt(P,A,X){if(A.image.length!==6)return;let $=H(P,A),et=A.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+X);let G=n.get(et);if(et.version!==G.__version||$===!0){e.activeTexture(s.TEXTURE0+X);let xt=fe.getPrimaries(fe.workingColorSpace),ft=A.colorSpace===Cn?null:fe.getPrimaries(A.colorSpace),_t=A.colorSpace===Cn||xt===ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let yt=A.isCompressedTexture||A.image[0].isCompressedTexture,Et=A.image[0]&&A.image[0].isDataTexture,lt=[];for(let wt=0;wt<6;wt++)!yt&&!Et?lt[wt]=x(A.image[wt],!1,!0,i.maxCubemapSize):lt[wt]=Et?A.image[wt].image:A.image[wt],lt[wt]=dt(A,lt[wt]);let Xt=lt[0],Zt=g(Xt)||a,Dt=r.convert(A.format,A.colorSpace),Ut=r.convert(A.type),At=y(A.internalFormat,Dt,Ut,A.colorSpace),Ot=a&&A.isVideoTexture!==!0,Jt=G.__version===void 0||$===!0,ce=S(A,Xt,Zt);U(s.TEXTURE_CUBE_MAP,A,Zt);let Ht;if(yt){Ot&&Jt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ce,At,Xt.width,Xt.height);for(let wt=0;wt<6;wt++){Ht=lt[wt].mipmaps;for(let k=0;k<Ht.length;k++){let Rt=Ht[k];A.format!==wn?Dt!==null?Ot?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,k,0,0,Rt.width,Rt.height,Dt,Rt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,k,At,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,k,0,0,Rt.width,Rt.height,Dt,Ut,Rt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,k,At,Rt.width,Rt.height,0,Dt,Ut,Rt.data)}}}else{Ht=A.mipmaps,Ot&&Jt&&(Ht.length>0&&ce++,e.texStorage2D(s.TEXTURE_CUBE_MAP,ce,At,lt[0].width,lt[0].height));for(let wt=0;wt<6;wt++)if(Et){Ot?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,lt[wt].width,lt[wt].height,Dt,Ut,lt[wt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,At,lt[wt].width,lt[wt].height,0,Dt,Ut,lt[wt].data);for(let k=0;k<Ht.length;k++){let St=Ht[k].image[wt].image;Ot?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,k+1,0,0,St.width,St.height,Dt,Ut,St.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,k+1,At,St.width,St.height,0,Dt,Ut,St.data)}}else{Ot?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,Dt,Ut,lt[wt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,At,Dt,Ut,lt[wt]);for(let k=0;k<Ht.length;k++){let Rt=Ht[k];Ot?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,k+1,0,0,Dt,Ut,Rt.image[wt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,k+1,At,Dt,Ut,Rt.image[wt])}}}v(A,Zt)&&_(s.TEXTURE_CUBE_MAP),G.__version=et.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function ut(P,A,X,$,et,G){let xt=r.convert(X.format,X.colorSpace),ft=r.convert(X.type),_t=y(X.internalFormat,xt,ft,X.colorSpace);if(!n.get(A).__hasExternalTextures){let Et=Math.max(1,A.width>>G),lt=Math.max(1,A.height>>G);et===s.TEXTURE_3D||et===s.TEXTURE_2D_ARRAY?e.texImage3D(et,G,_t,Et,lt,A.depth,0,xt,ft,null):e.texImage2D(et,G,_t,Et,lt,0,xt,ft,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),nt(A)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,et,n.get(X).__webglTexture,0,rt(A)):(et===s.TEXTURE_2D||et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,et,n.get(X).__webglTexture,G),e.bindFramebuffer(s.FRAMEBUFFER,null)}function mt(P,A,X){if(s.bindRenderbuffer(s.RENDERBUFFER,P),A.depthBuffer&&!A.stencilBuffer){let $=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(X||nt(A)){let et=A.depthTexture;et&&et.isDepthTexture&&(et.type===Yn?$=s.DEPTH_COMPONENT32F:et.type===Mi&&($=s.DEPTH_COMPONENT24));let G=rt(A);nt(A)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,G,$,A.width,A.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,G,$,A.width,A.height)}else s.renderbufferStorage(s.RENDERBUFFER,$,A.width,A.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,P)}else if(A.depthBuffer&&A.stencilBuffer){let $=rt(A);X&&nt(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$,s.DEPTH24_STENCIL8,A.width,A.height):nt(A)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$,s.DEPTH24_STENCIL8,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,P)}else{let $=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let et=0;et<$.length;et++){let G=$[et],xt=r.convert(G.format,G.colorSpace),ft=r.convert(G.type),_t=y(G.internalFormat,xt,ft,G.colorSpace),yt=rt(A);X&&nt(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,yt,_t,A.width,A.height):nt(A)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,yt,_t,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,_t,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Tt(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),z(A.depthTexture,0);let $=n.get(A.depthTexture).__webglTexture,et=rt(A);if(A.depthTexture.format===$i)nt(A)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0,et):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0);else if(A.depthTexture.format===zs)nt(A)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0,et):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function ht(P){let A=n.get(P),X=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Tt(A.__webglFramebuffer,P)}else if(X){A.__webglDepthbuffer=[];for(let $=0;$<6;$++)e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[$]),A.__webglDepthbuffer[$]=s.createRenderbuffer(),mt(A.__webglDepthbuffer[$],P,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=s.createRenderbuffer(),mt(A.__webglDepthbuffer,P,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function ot(P,A,X){let $=n.get(P);A!==void 0&&ut($.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&ht(P)}function N(P){let A=P.texture,X=n.get(P),$=n.get(A);P.addEventListener("dispose",C),P.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=A.version,o.memory.textures++);let et=P.isWebGLCubeRenderTarget===!0,G=P.isWebGLMultipleRenderTargets===!0,xt=g(P)||a;if(et){X.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(a&&A.mipmaps&&A.mipmaps.length>0){X.__webglFramebuffer[ft]=[];for(let _t=0;_t<A.mipmaps.length;_t++)X.__webglFramebuffer[ft][_t]=s.createFramebuffer()}else X.__webglFramebuffer[ft]=s.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){X.__webglFramebuffer=[];for(let ft=0;ft<A.mipmaps.length;ft++)X.__webglFramebuffer[ft]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(G)if(i.drawBuffers){let ft=P.texture;for(let _t=0,yt=ft.length;_t<yt;_t++){let Et=n.get(ft[_t]);Et.__webglTexture===void 0&&(Et.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&nt(P)===!1){let ft=G?A:[A];X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let _t=0;_t<ft.length;_t++){let yt=ft[_t];X.__webglColorRenderbuffer[_t]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[_t]);let Et=r.convert(yt.format,yt.colorSpace),lt=r.convert(yt.type),Xt=y(yt.internalFormat,Et,lt,yt.colorSpace,P.isXRRenderTarget===!0),Zt=rt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt,Xt,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,X.__webglColorRenderbuffer[_t])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),mt(X.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(et){e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),U(s.TEXTURE_CUBE_MAP,A,xt);for(let ft=0;ft<6;ft++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let _t=0;_t<A.mipmaps.length;_t++)ut(X.__webglFramebuffer[ft][_t],P,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,_t);else ut(X.__webglFramebuffer[ft],P,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);v(A,xt)&&_(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(G){let ft=P.texture;for(let _t=0,yt=ft.length;_t<yt;_t++){let Et=ft[_t],lt=n.get(Et);e.bindTexture(s.TEXTURE_2D,lt.__webglTexture),U(s.TEXTURE_2D,Et,xt),ut(X.__webglFramebuffer,P,Et,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,0),v(Et,xt)&&_(s.TEXTURE_2D)}e.unbindTexture()}else{let ft=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?ft=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ft,$.__webglTexture),U(ft,A,xt),a&&A.mipmaps&&A.mipmaps.length>0)for(let _t=0;_t<A.mipmaps.length;_t++)ut(X.__webglFramebuffer[_t],P,A,s.COLOR_ATTACHMENT0,ft,_t);else ut(X.__webglFramebuffer,P,A,s.COLOR_ATTACHMENT0,ft,0);v(A,xt)&&_(ft),e.unbindTexture()}P.depthBuffer&&ht(P)}function ct(P){let A=g(P)||a,X=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let $=0,et=X.length;$<et;$++){let G=X[$];if(v(G,A)){let xt=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ft=n.get(G).__webglTexture;e.bindTexture(xt,ft),_(xt),e.unbindTexture()}}}function Y(P){if(a&&P.samples>0&&nt(P)===!1){let A=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],X=P.width,$=P.height,et=s.COLOR_BUFFER_BIT,G=[],xt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=n.get(P),_t=P.isWebGLMultipleRenderTargets===!0;if(_t)for(let yt=0;yt<A.length;yt++)e.bindFramebuffer(s.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ft.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let yt=0;yt<A.length;yt++){G.push(s.COLOR_ATTACHMENT0+yt),P.depthBuffer&&G.push(xt);let Et=ft.__ignoreDepthValues!==void 0?ft.__ignoreDepthValues:!1;if(Et===!1&&(P.depthBuffer&&(et|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&(et|=s.STENCIL_BUFFER_BIT)),_t&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ft.__webglColorRenderbuffer[yt]),Et===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[xt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[xt])),_t){let lt=n.get(A[yt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,lt,0)}s.blitFramebuffer(0,0,X,$,0,0,X,$,et,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,G)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),_t)for(let yt=0;yt<A.length;yt++){e.bindFramebuffer(s.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,ft.__webglColorRenderbuffer[yt]);let Et=n.get(A[yt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ft.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,Et,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}}function rt(P){return Math.min(i.maxSamples,P.samples)}function nt(P){let A=n.get(P);return a&&P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function gt(P){let A=o.render.frame;u.get(P)!==A&&(u.set(P,A),P.update())}function dt(P,A){let X=P.colorSpace,$=P.format,et=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===$c||X!==oi&&X!==Cn&&(fe.getTransfer(X)===_e?a===!1?t.has("EXT_sRGB")===!0&&$===wn?(P.format=$c,P.minFilter=Ne,P.generateMipmaps=!1):A=ea.sRGBToLinear(A):($!==wn||et!==Ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),A}this.allocateTextureUnit=L,this.resetTextureUnits=B,this.setTexture2D=z,this.setTexture2DArray=j,this.setTexture3D=it,this.setTextureCube=Z,this.rebindTextures=ot,this.setupRenderTarget=N,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=nt}function cg(s,t,e){let n=e.isWebGL2;function i(r,o=Cn){let a,c=fe.getTransfer(o);if(r===Ri)return s.UNSIGNED_BYTE;if(r===yd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===wd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===A0)return s.BYTE;if(r===R0)return s.SHORT;if(r===jl)return s.UNSIGNED_SHORT;if(r===vd)return s.INT;if(r===Mi)return s.UNSIGNED_INT;if(r===Yn)return s.FLOAT;if(r===Li)return n?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===C0)return s.ALPHA;if(r===wn)return s.RGBA;if(r===P0)return s.LUMINANCE;if(r===I0)return s.LUMINANCE_ALPHA;if(r===$i)return s.DEPTH_COMPONENT;if(r===zs)return s.DEPTH_STENCIL;if(r===$c)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===L0)return s.RED;if(r===bd)return s.RED_INTEGER;if(r===D0)return s.RG;if(r===Md)return s.RG_INTEGER;if(r===Sd)return s.RGBA_INTEGER;if(r===Vc||r===Gc||r===Wc||r===Xc)if(c===_e)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Vc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Gc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Wc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Xc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Vc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Gc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Wc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Xc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Rh||r===Ch||r===Ph||r===Ih)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Rh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ch)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ph)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ih)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ed)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Lh||r===Dh)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Lh)return c===_e?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Dh)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Uh||r===Nh||r===Fh||r===Bh||r===Oh||r===zh||r===kh||r===Hh||r===Vh||r===Gh||r===Wh||r===Xh||r===qh||r===Yh)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Uh)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Nh)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Fh)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Bh)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Oh)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===zh)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===kh)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Hh)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Vh)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Gh)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Wh)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Xh)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===qh)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Yh)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===qc||r===Zh||r===Jh)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===qc)return c===_e?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Zh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Jh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===U0||r===$h||r===Kh||r===jh)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===qc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===$h)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Kh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===jh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ji?n?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var el=class extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Nn=class extends le{constructor(){super(),this.isGroup=!0,this.type="Group"}},C1={type:"move"},ko=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;l.inputState.pinching&&f>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(C1)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Nn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},vf=class extends $n{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,m=null,x=e.getContextAttributes(),g=null,p=null,v=[],_=[],y=new st,S=null,b=new Fe;b.layers.enable(1),b.viewport=new de;let E=new Fe;E.layers.enable(2),E.viewport=new de;let C=[b,E],w=new el;w.layers.enable(1),w.layers.enable(2);let M=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let H=v[U];return H===void 0&&(H=new ko,v[U]=H),H.getTargetRaySpace()},this.getControllerGrip=function(U){let H=v[U];return H===void 0&&(H=new ko,v[U]=H),H.getGripSpace()},this.getHand=function(U){let H=v[U];return H===void 0&&(H=new ko,v[U]=H),H.getHandSpace()};function F(U){let H=_.indexOf(U.inputSource);if(H===-1)return;let tt=v[H];tt!==void 0&&(tt.update(U.inputSource,U.frame,l||o),tt.dispatchEvent({type:U.type,data:U.inputSource}))}function B(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",L);for(let U=0;U<v.length;U++){let H=_[U];H!==null&&(_[U]=null,v[U].disconnect(H))}M=null,D=null,t.setRenderTarget(g),d=null,f=null,h=null,i=null,p=null,W.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(U){l=U},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(U){if(i=U,i!==null){if(g=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",B),i.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(y),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let H={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,H),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new tn(d.framebufferWidth,d.framebufferHeight,{format:wn,type:Ri,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let H=null,tt=null,pt=null;x.depth&&(pt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,H=x.stencil?zs:$i,tt=x.stencil?Ji:Mi);let ut={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};h=new XRWebGLBinding(i,e),f=h.createProjectionLayer(ut),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),p=new tn(f.textureWidth,f.textureHeight,{format:wn,type:Ri,depthTexture:new Vs(f.textureWidth,f.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let mt=t.properties.get(p);mt.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),W.setContext(i),W.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(U){for(let H=0;H<U.removed.length;H++){let tt=U.removed[H],pt=_.indexOf(tt);pt>=0&&(_[pt]=null,v[pt].disconnect(tt))}for(let H=0;H<U.added.length;H++){let tt=U.added[H],pt=_.indexOf(tt);if(pt===-1){for(let mt=0;mt<v.length;mt++)if(mt>=_.length){_.push(tt),pt=mt;break}else if(_[mt]===null){_[mt]=tt,pt=mt;break}if(pt===-1)break}let ut=v[pt];ut&&ut.connect(tt)}}let O=new T,z=new T;function j(U,H,tt){O.setFromMatrixPosition(H.matrixWorld),z.setFromMatrixPosition(tt.matrixWorld);let pt=O.distanceTo(z),ut=H.projectionMatrix.elements,mt=tt.projectionMatrix.elements,Tt=ut[14]/(ut[10]-1),ht=ut[14]/(ut[10]+1),ot=(ut[9]+1)/ut[5],N=(ut[9]-1)/ut[5],ct=(ut[8]-1)/ut[0],Y=(mt[8]+1)/mt[0],rt=Tt*ct,nt=Tt*Y,gt=pt/(-ct+Y),dt=gt*-ct;H.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(dt),U.translateZ(gt),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();let P=Tt+gt,A=ht+gt,X=rt-dt,$=nt+(pt-dt),et=ot*ht/A*P,G=N*ht/A*P;U.projectionMatrix.makePerspective(X,$,et,G,P,A),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}function it(U,H){H===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(H.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(i===null)return;w.near=E.near=b.near=U.near,w.far=E.far=b.far=U.far,(M!==w.near||D!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),M=w.near,D=w.far);let H=U.parent,tt=w.cameras;it(w,H);for(let pt=0;pt<tt.length;pt++)it(tt[pt],H);tt.length===2?j(w,b,E):w.projectionMatrix.copy(b.projectionMatrix),Z(U,w,H)};function Z(U,H,tt){tt===null?U.matrix.copy(H.matrixWorld):(U.matrix.copy(tt.matrixWorld),U.matrix.invert(),U.matrix.multiply(H.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(H.projectionMatrix),U.projectionMatrixInverse.copy(H.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=Nr*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(U){c=U,f!==null&&(f.fixedFoveation=U),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=U)};let q=null;function I(U,H){if(u=H.getViewerPose(l||o),m=H,u!==null){let tt=u.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let pt=!1;tt.length!==w.cameras.length&&(w.cameras.length=0,pt=!0);for(let ut=0;ut<tt.length;ut++){let mt=tt[ut],Tt=null;if(d!==null)Tt=d.getViewport(mt);else{let ot=h.getViewSubImage(f,mt);Tt=ot.viewport,ut===0&&(t.setRenderTargetTextures(p,ot.colorTexture,f.ignoreDepthValues?void 0:ot.depthStencilTexture),t.setRenderTarget(p))}let ht=C[ut];ht===void 0&&(ht=new Fe,ht.layers.enable(ut),ht.viewport=new de,C[ut]=ht),ht.matrix.fromArray(mt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(mt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),ut===0&&(w.matrix.copy(ht.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),pt===!0&&w.cameras.push(ht)}}for(let tt=0;tt<v.length;tt++){let pt=_[tt],ut=v[tt];pt!==null&&ut!==void 0&&ut.update(pt,H,l||o)}q&&q(U,H),H.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:H}),m=null}let W=new ng;W.setAnimationLoop(I),this.setAnimationLoop=function(U){q=U},this.dispose=function(){}}};function P1(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,tg(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,v,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,v,_):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Qe&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Qe&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=t.get(p).envMap;if(v&&(g.envMap.value=v,g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;let _=s._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*_,e(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,v,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=_*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),t.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qe&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let v=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function I1(s,t,e,n){let i={},r={},o=[],a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,_){let y=_.program;n.uniformBlockBinding(v,y)}function l(v,_){let y=i[v.id];y===void 0&&(m(v),y=u(v),i[v.id]=y,v.addEventListener("dispose",g));let S=_.program;n.updateUBOMapping(v,S);let b=t.render.frame;r[v.id]!==b&&(f(v),r[v.id]=b)}function u(v){let _=h();v.__bindingPointIndex=_;let y=s.createBuffer(),S=v.__size,b=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,S,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,y),y}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let _=i[v.id],y=v.uniforms,S=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let b=0,E=y.length;b<E;b++){let C=Array.isArray(y[b])?y[b]:[y[b]];for(let w=0,M=C.length;w<M;w++){let D=C[w];if(d(D,b,w,S)===!0){let F=D.__offset,B=Array.isArray(D.value)?D.value:[D.value],L=0;for(let O=0;O<B.length;O++){let z=B[O],j=x(z);typeof z=="number"||typeof z=="boolean"?(D.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,F+L,D.__data)):z.isMatrix3?(D.__data[0]=z.elements[0],D.__data[1]=z.elements[1],D.__data[2]=z.elements[2],D.__data[3]=0,D.__data[4]=z.elements[3],D.__data[5]=z.elements[4],D.__data[6]=z.elements[5],D.__data[7]=0,D.__data[8]=z.elements[6],D.__data[9]=z.elements[7],D.__data[10]=z.elements[8],D.__data[11]=0):(z.toArray(D.__data,L),L+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(v,_,y,S){let b=v.value,E=_+"_"+y;if(S[E]===void 0)return typeof b=="number"||typeof b=="boolean"?S[E]=b:S[E]=b.clone(),!0;{let C=S[E];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return S[E]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function m(v){let _=v.uniforms,y=0,S=16;for(let E=0,C=_.length;E<C;E++){let w=Array.isArray(_[E])?_[E]:[_[E]];for(let M=0,D=w.length;M<D;M++){let F=w[M],B=Array.isArray(F.value)?F.value:[F.value];for(let L=0,O=B.length;L<O;L++){let z=B[L],j=x(z),it=y%S;it!==0&&S-it<j.boundary&&(y+=S-it),F.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=j.storage}}}let b=y%S;return b>0&&(y+=S-b),v.__size=y,v.__cache={},this}function x(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function g(v){let _=v.target;_.removeEventListener("dispose",g);let y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function p(){for(let v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}var kr=class{constructor(t={}){let{canvas:e=j0(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let d=new Uint32Array(4),m=new Int32Array(4),x=null,g=null,p=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Te,this._useLegacyLights=!1,this.toneMapping=Jn,this.toneMappingExposure=1;let _=this,y=!1,S=0,b=0,E=null,C=-1,w=null,M=new de,D=new de,F=null,B=new at(0),L=0,O=e.width,z=e.height,j=1,it=null,Z=null,q=new de(0,0,O,z),I=new de(0,0,O,z),W=!1,U=new Hs,H=!1,tt=!1,pt=null,ut=new Ct,mt=new st,Tt=new T,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ot(){return E===null?j:1}let N=n;function ct(R,V){for(let J=0;J<R.length;J++){let Q=R[J],K=e.getContext(Q,V);if(K!==null)return K}return null}try{let R={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",wt,!1),e.addEventListener("webglcontextrestored",k,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),N===null){let V=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&V.shift(),N=ct(V,R),N===null)throw ct(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Y,rt,nt,gt,dt,P,A,X,$,et,G,xt,ft,_t,yt,Et,lt,Xt,Zt,Dt,Ut,At,Ot,Jt;function ce(){Y=new Kw(N),rt=new Xw(N,Y,t),Y.init(rt),At=new cg(N,Y,rt),nt=new A1(N,Y,rt),gt=new tb(N),dt=new m1,P=new R1(N,Y,nt,dt,rt,At,gt),A=new Yw(_),X=new $w(_),$=new cv(N,rt),Ot=new Gw(N,Y,$,rt),et=new jw(N,$,gt,Ot),G=new sb(N,et,$,gt),Zt=new ib(N,rt,P),Et=new qw(dt),xt=new p1(_,A,X,Y,rt,Ot,Et),ft=new P1(_,dt),_t=new x1,yt=new M1(Y,rt),Xt=new Vw(_,A,X,nt,G,f,c),lt=new T1(_,G,rt),Jt=new I1(N,gt,rt,nt),Dt=new Ww(N,Y,gt,rt),Ut=new Qw(N,Y,gt,rt),gt.programs=xt.programs,_.capabilities=rt,_.extensions=Y,_.properties=dt,_.renderLists=_t,_.shadowMap=lt,_.state=nt,_.info=gt}ce();let Ht=new vf(_,N);this.xr=Ht,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let R=Y.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Y.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(O,z,!1))},this.getSize=function(R){return R.set(O,z)},this.setSize=function(R,V,J=!0){if(Ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,z=V,e.width=Math.floor(R*j),e.height=Math.floor(V*j),J===!0&&(e.style.width=R+"px",e.style.height=V+"px"),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(O*j,z*j).floor()},this.setDrawingBufferSize=function(R,V,J){O=R,z=V,j=J,e.width=Math.floor(R*J),e.height=Math.floor(V*J),this.setViewport(0,0,R,V)},this.getCurrentViewport=function(R){return R.copy(M)},this.getViewport=function(R){return R.copy(q)},this.setViewport=function(R,V,J,Q){R.isVector4?q.set(R.x,R.y,R.z,R.w):q.set(R,V,J,Q),nt.viewport(M.copy(q).multiplyScalar(j).floor())},this.getScissor=function(R){return R.copy(I)},this.setScissor=function(R,V,J,Q){R.isVector4?I.set(R.x,R.y,R.z,R.w):I.set(R,V,J,Q),nt.scissor(D.copy(I).multiplyScalar(j).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(R){nt.setScissorTest(W=R)},this.setOpaqueSort=function(R){it=R},this.setTransparentSort=function(R){Z=R},this.getClearColor=function(R){return R.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor.apply(Xt,arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha.apply(Xt,arguments)},this.clear=function(R=!0,V=!0,J=!0){let Q=0;if(R){let K=!1;if(E!==null){let Pt=E.texture.format;K=Pt===Sd||Pt===Md||Pt===bd}if(K){let Pt=E.texture.type,bt=Pt===Ri||Pt===Mi||Pt===jl||Pt===Ji||Pt===yd||Pt===wd,Lt=Xt.getClearColor(),Nt=Xt.getClearAlpha(),kt=Lt.r,Ft=Lt.g,Yt=Lt.b;bt?(d[0]=kt,d[1]=Ft,d[2]=Yt,d[3]=Nt,N.clearBufferuiv(N.COLOR,0,d)):(m[0]=kt,m[1]=Ft,m[2]=Yt,m[3]=Nt,N.clearBufferiv(N.COLOR,0,m))}else Q|=N.COLOR_BUFFER_BIT}V&&(Q|=N.DEPTH_BUFFER_BIT),J&&(Q|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",wt,!1),e.removeEventListener("webglcontextrestored",k,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),_t.dispose(),yt.dispose(),dt.dispose(),A.dispose(),X.dispose(),G.dispose(),Ot.dispose(),Jt.dispose(),xt.dispose(),Ht.dispose(),Ht.removeEventListener("sessionstart",Xe),Ht.removeEventListener("sessionend",oe),pt&&(pt.dispose(),pt=null),je.stop()};function wt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let R=gt.autoReset,V=lt.enabled,J=lt.autoUpdate,Q=lt.needsUpdate,K=lt.type;ce(),gt.autoReset=R,lt.enabled=V,lt.autoUpdate=J,lt.needsUpdate=Q,lt.type=K}function Rt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function St(R){let V=R.target;V.removeEventListener("dispose",St),qt(V)}function qt(R){zt(R),dt.remove(R)}function zt(R){let V=dt.get(R).programs;V!==void 0&&(V.forEach(function(J){xt.releaseProgram(J)}),R.isShaderMaterial&&xt.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,J,Q,K,Pt){V===null&&(V=ht);let bt=K.isMesh&&K.matrixWorld.determinant()<0,Lt=Ja(R,V,J,Q,K);nt.setMaterial(Q,bt);let Nt=J.index,kt=1;if(Q.wireframe===!0){if(Nt=et.getWireframeAttribute(J),Nt===void 0)return;kt=2}let Ft=J.drawRange,Yt=J.attributes.position,ve=Ft.start*kt,Tn=(Ft.start+Ft.count)*kt;Pt!==null&&(ve=Math.max(ve,Pt.start*kt),Tn=Math.min(Tn,(Pt.start+Pt.count)*kt)),Nt!==null?(ve=Math.max(ve,0),Tn=Math.min(Tn,Nt.count)):Yt!=null&&(ve=Math.max(ve,0),Tn=Math.min(Tn,Yt.count));let qe=Tn-ve;if(qe<0||qe===1/0)return;Ot.setup(K,Q,Lt,J,Nt);let mi,we=Dt;if(Nt!==null&&(mi=$.get(Nt),we=Ut,we.setIndex(mi)),K.isMesh)Q.wireframe===!0?(nt.setLineWidth(Q.wireframeLinewidth*ot()),we.setMode(N.LINES)):we.setMode(N.TRIANGLES);else if(K.isLine){let ne=Q.linewidth;ne===void 0&&(ne=1),nt.setLineWidth(ne*ot()),K.isLineSegments?we.setMode(N.LINES):K.isLineLoop?we.setMode(N.LINE_LOOP):we.setMode(N.LINE_STRIP)}else K.isPoints?we.setMode(N.POINTS):K.isSprite&&we.setMode(N.TRIANGLES);if(K.isBatchedMesh)we.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else if(K.isInstancedMesh)we.renderInstances(ve,qe,K.count);else if(J.isInstancedBufferGeometry){let ne=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Fu=Math.min(J.instanceCount,ne);we.renderInstances(ve,qe,Fu)}else we.render(ve,qe)};function Qt(R,V,J){R.transparent===!0&&R.side===un&&R.forceSinglePass===!1?(R.side=Qe,R.needsUpdate=!0,rr(R,V,J),R.side=Bn,R.needsUpdate=!0,rr(R,V,J),R.side=un):rr(R,V,J)}this.compile=function(R,V,J=null){J===null&&(J=R),g=yt.get(J),g.init(),v.push(g),J.traverseVisible(function(K){K.isLight&&K.layers.test(V.layers)&&(g.pushLight(K),K.castShadow&&g.pushShadow(K))}),R!==J&&R.traverseVisible(function(K){K.isLight&&K.layers.test(V.layers)&&(g.pushLight(K),K.castShadow&&g.pushShadow(K))}),g.setupLights(_._useLegacyLights);let Q=new Set;return R.traverse(function(K){let Pt=K.material;if(Pt)if(Array.isArray(Pt))for(let bt=0;bt<Pt.length;bt++){let Lt=Pt[bt];Qt(Lt,J,K),Q.add(Lt)}else Qt(Pt,J,K),Q.add(Pt)}),v.pop(),g=null,Q},this.compileAsync=function(R,V,J=null){let Q=this.compile(R,V,J);return new Promise(K=>{function Pt(){if(Q.forEach(function(bt){dt.get(bt).currentProgram.isReady()&&Q.delete(bt)}),Q.size===0){K(R);return}setTimeout(Pt,10)}Y.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let ue=null;function Ie(R){ue&&ue(R)}function Xe(){je.stop()}function oe(){je.start()}let je=new ng;je.setAnimationLoop(Ie),typeof self<"u"&&je.setContext(self),this.setAnimationLoop=function(R){ue=R,Ht.setAnimationLoop(R),R===null?je.stop():je.start()},Ht.addEventListener("sessionstart",Xe),Ht.addEventListener("sessionend",oe),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Ht.enabled===!0&&Ht.isPresenting===!0&&(Ht.cameraAutoUpdate===!0&&Ht.updateCamera(V),V=Ht.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,V,E),g=yt.get(R,v.length),g.init(),v.push(g),ut.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),U.setFromProjectionMatrix(ut),tt=this.localClippingEnabled,H=Et.init(this.clippingPlanes,tt),x=_t.get(R,p.length),x.init(),p.push(x),xe(R,V,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(it,Z),this.info.render.frame++,H===!0&&Et.beginShadows();let J=g.state.shadowsArray;if(lt.render(J,R,V),H===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset(),Xt.render(x,R),g.setupLights(_._useLegacyLights),V.isArrayCamera){let Q=V.cameras;for(let K=0,Pt=Q.length;K<Pt;K++){let bt=Q[K];Le(x,R,bt,bt.viewport)}}else Le(x,R,V);E!==null&&(P.updateMultisampleRenderTarget(E),P.updateRenderTargetMipmap(E)),R.isScene===!0&&R.onAfterRender(_,R,V),Ot.resetDefaultState(),C=-1,w=null,v.pop(),v.length>0?g=v[v.length-1]:g=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function xe(R,V,J,Q){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)J=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||U.intersectsSprite(R)){Q&&Tt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ut);let bt=G.update(R),Lt=R.material;Lt.visible&&x.push(R,bt,Lt,J,Tt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||U.intersectsObject(R))){let bt=G.update(R),Lt=R.material;if(Q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Tt.copy(R.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Tt.copy(bt.boundingSphere.center)),Tt.applyMatrix4(R.matrixWorld).applyMatrix4(ut)),Array.isArray(Lt)){let Nt=bt.groups;for(let kt=0,Ft=Nt.length;kt<Ft;kt++){let Yt=Nt[kt],ve=Lt[Yt.materialIndex];ve&&ve.visible&&x.push(R,bt,ve,J,Tt.z,Yt)}}else Lt.visible&&x.push(R,bt,Lt,J,Tt.z,null)}}let Pt=R.children;for(let bt=0,Lt=Pt.length;bt<Lt;bt++)xe(Pt[bt],V,J,Q)}function Le(R,V,J,Q){let K=R.opaque,Pt=R.transmissive,bt=R.transparent;g.setupLightsView(J),H===!0&&Et.setGlobalState(_.clippingPlanes,J),Pt.length>0&&xs(K,Pt,V,J),Q&&nt.viewport(M.copy(Q)),K.length>0&&_s(K,V,J),Pt.length>0&&_s(Pt,V,J),bt.length>0&&_s(bt,V,J),nt.buffers.depth.setTest(!0),nt.buffers.depth.setMask(!0),nt.buffers.color.setMask(!0),nt.setPolygonOffset(!1)}function xs(R,V,J,Q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;let Pt=rt.isWebGL2;pt===null&&(pt=new tn(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")?Li:Ri,minFilter:Qi,samples:Pt?4:0})),_.getDrawingBufferSize(mt),Pt?pt.setSize(mt.x,mt.y):pt.setSize(Kc(mt.x),Kc(mt.y));let bt=_.getRenderTarget();_.setRenderTarget(pt),_.getClearColor(B),L=_.getClearAlpha(),L<1&&_.setClearColor(16777215,.5),_.clear();let Lt=_.toneMapping;_.toneMapping=Jn,_s(R,J,Q),P.updateMultisampleRenderTarget(pt),P.updateRenderTargetMipmap(pt);let Nt=!1;for(let kt=0,Ft=V.length;kt<Ft;kt++){let Yt=V[kt],ve=Yt.object,Tn=Yt.geometry,qe=Yt.material,mi=Yt.group;if(qe.side===un&&ve.layers.test(Q.layers)){let we=qe.side;qe.side=Qe,qe.needsUpdate=!0,ii(ve,J,Q,Tn,qe,mi),qe.side=we,qe.needsUpdate=!0,Nt=!0}}Nt===!0&&(P.updateMultisampleRenderTarget(pt),P.updateRenderTargetMipmap(pt)),_.setRenderTarget(bt),_.setClearColor(B,L),_.toneMapping=Lt}function _s(R,V,J){let Q=V.isScene===!0?V.overrideMaterial:null;for(let K=0,Pt=R.length;K<Pt;K++){let bt=R[K],Lt=bt.object,Nt=bt.geometry,kt=Q===null?bt.material:Q,Ft=bt.group;Lt.layers.test(J.layers)&&ii(Lt,V,J,Nt,kt,Ft)}}function ii(R,V,J,Q,K,Pt){R.onBeforeRender(_,V,J,Q,K,Pt),R.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(_,V,J,Q,R,Pt),K.transparent===!0&&K.side===un&&K.forceSinglePass===!1?(K.side=Qe,K.needsUpdate=!0,_.renderBufferDirect(J,V,Q,K,R,Pt),K.side=Bn,K.needsUpdate=!0,_.renderBufferDirect(J,V,Q,K,R,Pt),K.side=un):_.renderBufferDirect(J,V,Q,K,R,Pt),R.onAfterRender(_,V,J,Q,K,Pt)}function rr(R,V,J){V.isScene!==!0&&(V=ht);let Q=dt.get(R),K=g.state.lights,Pt=g.state.shadowsArray,bt=K.state.version,Lt=xt.getParameters(R,K.state,Pt,V,J),Nt=xt.getProgramCacheKey(Lt),kt=Q.programs;Q.environment=R.isMeshStandardMaterial?V.environment:null,Q.fog=V.fog,Q.envMap=(R.isMeshStandardMaterial?X:A).get(R.envMap||Q.environment),kt===void 0&&(R.addEventListener("dispose",St),kt=new Map,Q.programs=kt);let Ft=kt.get(Nt);if(Ft!==void 0){if(Q.currentProgram===Ft&&Q.lightsStateVersion===bt)return Mo(R,Lt),Ft}else Lt.uniforms=xt.getUniforms(R),R.onBuild(J,Lt,_),R.onBeforeCompile(Lt,_),Ft=xt.acquireProgram(Lt,Nt),kt.set(Nt,Ft),Q.uniforms=Lt.uniforms;let Yt=Q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Yt.clippingPlanes=Et.uniform),Mo(R,Lt),Q.needsLights=Bt(R),Q.lightsStateVersion=bt,Q.needsLights&&(Yt.ambientLightColor.value=K.state.ambient,Yt.lightProbe.value=K.state.probe,Yt.directionalLights.value=K.state.directional,Yt.directionalLightShadows.value=K.state.directionalShadow,Yt.spotLights.value=K.state.spot,Yt.spotLightShadows.value=K.state.spotShadow,Yt.rectAreaLights.value=K.state.rectArea,Yt.ltc_1.value=K.state.rectAreaLTC1,Yt.ltc_2.value=K.state.rectAreaLTC2,Yt.pointLights.value=K.state.point,Yt.pointLightShadows.value=K.state.pointShadow,Yt.hemisphereLights.value=K.state.hemi,Yt.directionalShadowMap.value=K.state.directionalShadowMap,Yt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Yt.spotShadowMap.value=K.state.spotShadowMap,Yt.spotLightMatrix.value=K.state.spotLightMatrix,Yt.spotLightMap.value=K.state.spotLightMap,Yt.pointShadowMap.value=K.state.pointShadowMap,Yt.pointShadowMatrix.value=K.state.pointShadowMatrix),Q.currentProgram=Ft,Q.uniformsList=null,Ft}function ki(R){if(R.uniformsList===null){let V=R.currentProgram.getUniforms();R.uniformsList=Lr.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function Mo(R,V){let J=dt.get(R);J.outputColorSpace=V.outputColorSpace,J.batching=V.batching,J.instancing=V.instancing,J.instancingColor=V.instancingColor,J.skinning=V.skinning,J.morphTargets=V.morphTargets,J.morphNormals=V.morphNormals,J.morphColors=V.morphColors,J.morphTargetsCount=V.morphTargetsCount,J.numClippingPlanes=V.numClippingPlanes,J.numIntersection=V.numClipIntersection,J.vertexAlphas=V.vertexAlphas,J.vertexTangents=V.vertexTangents,J.toneMapping=V.toneMapping}function Ja(R,V,J,Q,K){V.isScene!==!0&&(V=ht),P.resetTextureUnits();let Pt=V.fog,bt=Q.isMeshStandardMaterial?V.environment:null,Lt=E===null?_.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:oi,Nt=(Q.isMeshStandardMaterial?X:A).get(Q.envMap||bt),kt=Q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ft=!!J.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Yt=!!J.morphAttributes.position,ve=!!J.morphAttributes.normal,Tn=!!J.morphAttributes.color,qe=Jn;Q.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(qe=_.toneMapping);let mi=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,we=mi!==void 0?mi.length:0,ne=dt.get(Q),Fu=g.state.lights;if(H===!0&&(tt===!0||R!==w)){let Dn=R===w&&Q.id===C;Et.setState(Q,R,Dn)}let Se=!1;Q.version===ne.__version?(ne.needsLights&&ne.lightsStateVersion!==Fu.state.version||ne.outputColorSpace!==Lt||K.isBatchedMesh&&ne.batching===!1||!K.isBatchedMesh&&ne.batching===!0||K.isInstancedMesh&&ne.instancing===!1||!K.isInstancedMesh&&ne.instancing===!0||K.isSkinnedMesh&&ne.skinning===!1||!K.isSkinnedMesh&&ne.skinning===!0||K.isInstancedMesh&&ne.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&ne.instancingColor===!1&&K.instanceColor!==null||ne.envMap!==Nt||Q.fog===!0&&ne.fog!==Pt||ne.numClippingPlanes!==void 0&&(ne.numClippingPlanes!==Et.numPlanes||ne.numIntersection!==Et.numIntersection)||ne.vertexAlphas!==kt||ne.vertexTangents!==Ft||ne.morphTargets!==Yt||ne.morphNormals!==ve||ne.morphColors!==Tn||ne.toneMapping!==qe||rt.isWebGL2===!0&&ne.morphTargetsCount!==we)&&(Se=!0):(Se=!0,ne.__version=Q.version);let vs=ne.currentProgram;Se===!0&&(vs=rr(Q,V,K));let _p=!1,So=!1,Bu=!1,on=vs.getUniforms(),ys=ne.uniforms;if(nt.useProgram(vs.program)&&(_p=!0,So=!0,Bu=!0),Q.id!==C&&(C=Q.id,So=!0),_p||w!==R){on.setValue(N,"projectionMatrix",R.projectionMatrix),on.setValue(N,"viewMatrix",R.matrixWorldInverse);let Dn=on.map.cameraPosition;Dn!==void 0&&Dn.setValue(N,Tt.setFromMatrixPosition(R.matrixWorld)),rt.logarithmicDepthBuffer&&on.setValue(N,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&on.setValue(N,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,So=!0,Bu=!0)}if(K.isSkinnedMesh){on.setOptional(N,K,"bindMatrix"),on.setOptional(N,K,"bindMatrixInverse");let Dn=K.skeleton;Dn&&(rt.floatVertexTextures?(Dn.boneTexture===null&&Dn.computeBoneTexture(),on.setValue(N,"boneTexture",Dn.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}K.isBatchedMesh&&(on.setOptional(N,K,"batchingTexture"),on.setValue(N,"batchingTexture",K._matricesTexture,P));let Ou=J.morphAttributes;if((Ou.position!==void 0||Ou.normal!==void 0||Ou.color!==void 0&&rt.isWebGL2===!0)&&Zt.update(K,J,vs),(So||ne.receiveShadow!==K.receiveShadow)&&(ne.receiveShadow=K.receiveShadow,on.setValue(N,"receiveShadow",K.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(ys.envMap.value=Nt,ys.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),So&&(on.setValue(N,"toneMappingExposure",_.toneMappingExposure),ne.needsLights&&vt(ys,Bu),Pt&&Q.fog===!0&&ft.refreshFogUniforms(ys,Pt),ft.refreshMaterialUniforms(ys,Q,j,z,pt),Lr.upload(N,ki(ne),ys,P)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Lr.upload(N,ki(ne),ys,P),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&on.setValue(N,"center",K.center),on.setValue(N,"modelViewMatrix",K.modelViewMatrix),on.setValue(N,"normalMatrix",K.normalMatrix),on.setValue(N,"modelMatrix",K.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){let Dn=Q.uniformsGroups;for(let zu=0,Xx=Dn.length;zu<Xx;zu++)if(rt.isWebGL2){let vp=Dn[zu];Jt.update(vp,vs),Jt.bind(vp,vs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return vs}function vt(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function Bt(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(R,V,J){dt.get(R.texture).__webglTexture=V,dt.get(R.depthTexture).__webglTexture=J;let Q=dt.get(R);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=J===void 0,Q.__autoAllocateDepthBuffer||Y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,V){let J=dt.get(R);J.__webglFramebuffer=V,J.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,J=0){E=R,S=V,b=J;let Q=!0,K=null,Pt=!1,bt=!1;if(R){let Nt=dt.get(R);Nt.__useDefaultFramebuffer!==void 0?(nt.bindFramebuffer(N.FRAMEBUFFER,null),Q=!1):Nt.__webglFramebuffer===void 0?P.setupRenderTarget(R):Nt.__hasExternalTextures&&P.rebindTextures(R,dt.get(R.texture).__webglTexture,dt.get(R.depthTexture).__webglTexture);let kt=R.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(bt=!0);let Ft=dt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ft[V])?K=Ft[V][J]:K=Ft[V],Pt=!0):rt.isWebGL2&&R.samples>0&&P.useMultisampledRTT(R)===!1?K=dt.get(R).__webglMultisampledFramebuffer:Array.isArray(Ft)?K=Ft[J]:K=Ft,M.copy(R.viewport),D.copy(R.scissor),F=R.scissorTest}else M.copy(q).multiplyScalar(j).floor(),D.copy(I).multiplyScalar(j).floor(),F=W;if(nt.bindFramebuffer(N.FRAMEBUFFER,K)&&rt.drawBuffers&&Q&&nt.drawBuffers(R,K),nt.viewport(M),nt.scissor(D),nt.setScissorTest(F),Pt){let Nt=dt.get(R.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+V,Nt.__webglTexture,J)}else if(bt){let Nt=dt.get(R.texture),kt=V||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Nt.__webglTexture,J||0,kt)}C=-1},this.readRenderTargetPixels=function(R,V,J,Q,K,Pt,bt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=dt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&bt!==void 0&&(Lt=Lt[bt]),Lt){nt.bindFramebuffer(N.FRAMEBUFFER,Lt);try{let Nt=R.texture,kt=Nt.format,Ft=Nt.type;if(kt!==wn&&At.convert(kt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Yt=Ft===Li&&(Y.has("EXT_color_buffer_half_float")||rt.isWebGL2&&Y.has("EXT_color_buffer_float"));if(Ft!==Ri&&At.convert(Ft)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ft===Yn&&(rt.isWebGL2||Y.has("OES_texture_float")||Y.has("WEBGL_color_buffer_float")))&&!Yt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-Q&&J>=0&&J<=R.height-K&&N.readPixels(V,J,Q,K,At.convert(kt),At.convert(Ft),Pt)}finally{let Nt=E!==null?dt.get(E).__webglFramebuffer:null;nt.bindFramebuffer(N.FRAMEBUFFER,Nt)}}},this.copyFramebufferToTexture=function(R,V,J=0){let Q=Math.pow(2,-J),K=Math.floor(V.image.width*Q),Pt=Math.floor(V.image.height*Q);P.setTexture2D(V,0),N.copyTexSubImage2D(N.TEXTURE_2D,J,0,0,R.x,R.y,K,Pt),nt.unbindTexture()},this.copyTextureToTexture=function(R,V,J,Q=0){let K=V.image.width,Pt=V.image.height,bt=At.convert(J.format),Lt=At.convert(J.type);P.setTexture2D(J,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,J.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,J.unpackAlignment),V.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Q,R.x,R.y,K,Pt,bt,Lt,V.image.data):V.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Q,R.x,R.y,V.mipmaps[0].width,V.mipmaps[0].height,bt,V.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,Q,R.x,R.y,bt,Lt,V.image),Q===0&&J.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),nt.unbindTexture()},this.copyTextureToTexture3D=function(R,V,J,Q,K=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Pt=R.max.x-R.min.x+1,bt=R.max.y-R.min.y+1,Lt=R.max.z-R.min.z+1,Nt=At.convert(Q.format),kt=At.convert(Q.type),Ft;if(Q.isData3DTexture)P.setTexture3D(Q,0),Ft=N.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)P.setTexture2DArray(Q,0),Ft=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,Q.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,Q.unpackAlignment);let Yt=N.getParameter(N.UNPACK_ROW_LENGTH),ve=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Tn=N.getParameter(N.UNPACK_SKIP_PIXELS),qe=N.getParameter(N.UNPACK_SKIP_ROWS),mi=N.getParameter(N.UNPACK_SKIP_IMAGES),we=J.isCompressedTexture?J.mipmaps[K]:J.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,we.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,we.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,R.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,R.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,R.min.z),J.isDataTexture||J.isData3DTexture?N.texSubImage3D(Ft,K,V.x,V.y,V.z,Pt,bt,Lt,Nt,kt,we.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Ft,K,V.x,V.y,V.z,Pt,bt,Lt,Nt,we.data)):N.texSubImage3D(Ft,K,V.x,V.y,V.z,Pt,bt,Lt,Nt,kt,we),N.pixelStorei(N.UNPACK_ROW_LENGTH,Yt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ve),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Tn),N.pixelStorei(N.UNPACK_SKIP_ROWS,qe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,mi),K===0&&Q.generateMipmaps&&N.generateMipmap(Ft),nt.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),nt.unbindTexture()},this.resetState=function(){S=0,b=0,E=null,nt.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===tu?"display-p3":"srgb",e.unpackColorSpace=fe.workingColorSpace===Aa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Te?Ki:Ad}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ki?Te:oi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},nl=class extends kr{};nl.prototype.isWebGL1Renderer=!0;var il=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new at(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},sl=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new at(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Gs=class extends le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},Ws=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Qo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},mn=new T,es=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)mn.fromBufferAttribute(this,e),mn.applyMatrix4(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)mn.fromBufferAttribute(this,e),mn.applyNormalMatrix(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)mn.fromBufferAttribute(this,e),mn.transformDirection(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}setX(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=bn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=bn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=bn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=bn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),i=jt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),i=jt(i,this.array),r=jt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Gt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Xs=class extends Je{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},wr,Co=new T,br=new T,Mr=new T,Sr=new st,Po=new st,lg=new Ct,_c=new T,Io=new T,vc=new T,sm=new st,ch=new st,rm=new st,Hr=class extends le{constructor(t=new Xs){if(super(),this.isSprite=!0,this.type="Sprite",wr===void 0){wr=new Vt;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ws(e,5);wr.setIndex([0,1,2,0,2,3]),wr.setAttribute("position",new es(n,3,0,!1)),wr.setAttribute("uv",new es(n,2,3,!1))}this.geometry=wr,this.material=t,this.center=new st(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),br.setFromMatrixScale(this.matrixWorld),lg.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Mr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&br.multiplyScalar(-Mr.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;yc(_c.set(-.5,-.5,0),Mr,o,br,i,r),yc(Io.set(.5,-.5,0),Mr,o,br,i,r),yc(vc.set(.5,.5,0),Mr,o,br,i,r),sm.set(0,0),ch.set(1,0),rm.set(1,1);let a=t.ray.intersectTriangle(_c,Io,vc,!1,Co);if(a===null&&(yc(Io.set(-.5,.5,0),Mr,o,br,i,r),ch.set(0,1),a=t.ray.intersectTriangle(_c,vc,Io,!1,Co),a===null))return;let c=t.ray.origin.distanceTo(Co);c<t.near||c>t.far||e.push({distance:c,point:Co.clone(),uv:fn.getInterpolation(Co,_c,Io,vc,sm,ch,rm,new st),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function yc(s,t,e,n,i,r){Sr.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Po.x=r*Sr.x-i*Sr.y,Po.y=i*Sr.x+r*Sr.y):Po.copy(Sr),s.copy(t),s.x+=Po.x,s.y+=Po.y,s.applyMatrix4(lg)}var wc=new T,om=new T,rl=class extends le{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);let e=t.levels;for(let n=0,i=e.length;n<i;n++){let r=e[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);let i=this.levels,r;for(r=0;r<i.length&&!(e<i[r].distance);r++);return i.splice(r,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){let e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i;n++){let r=e[n].distance;if(e[n].object.visible&&(r-=r*e[n].hysteresis),t<r)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){wc.setFromMatrixPosition(this.matrixWorld);let i=t.ray.origin.distanceTo(wc);this.getObjectForDistance(i).raycast(t,e)}}update(t){let e=this.levels;if(e.length>1){wc.setFromMatrixPosition(t.matrixWorld),om.setFromMatrixPosition(this.matrixWorld);let n=wc.distanceTo(om)/t.zoom;e[0].object.visible=!0;let i,r;for(i=1,r=e.length;i<r;i++){let o=e[i].distance;if(e[i].object.visible&&(o-=o*e[i].hysteresis),n>=o)e[i-1].object.visible=!1,e[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}}toJSON(t){let e=super.toJSON(t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];let n=this.levels;for(let i=0,r=n.length;i<r;i++){let o=n[i];e.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return e}},am=new T,cm=new de,lm=new de,L1=new T,um=new Ct,bc=new T,lh=new Re,hm=new Ct,uh=new ai,ol=class extends ee{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ah,this.bindMatrix=new Ct,this.bindMatrixInverse=new Ct,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new ae),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,bc),this.boundingBox.expandByPoint(bc)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Re),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,bc),this.boundingSphere.expandByPoint(bc)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lh.copy(this.boundingSphere),lh.applyMatrix4(i),t.ray.intersectsSphere(lh)!==!1&&(hm.copy(i).invert(),uh.copy(t.ray).applyMatrix4(hm),!(this.boundingBox!==null&&uh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,uh)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new de,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Ah?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===T0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;cm.fromBufferAttribute(i.attributes.skinIndex,t),lm.fromBufferAttribute(i.attributes.skinWeight,t),am.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let o=lm.getComponent(r);if(o!==0){let a=cm.getComponent(r);um.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(L1.copy(am).applyMatrix4(um),o)}}return e.applyMatrix4(this.bindMatrixInverse)}boneTransform(t,e){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(t,e)}},ca=class extends le{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ci=class extends Ve{constructor(t=null,e=1,n=1,i,r,o,a,c,l=Ue,u=Ue,h,f){super(null,o,a,c,l,u,i,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},fm=new Ct,D1=new Ct,al=class s{constructor(t=[],e=[]){this.uuid=Pn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ct)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Ct;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:D1;fm.multiplyMatrices(a,e[r]),fm.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new Ci(e,t,t,wn,Yn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let r=t.bones[n],o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new ca),this.bones.push(o),this.boneInverses.push(new Ct().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){let o=e[i];t.bones.push(o.uuid);let a=n[i];t.boneInverses.push(a.toArray())}return t}},Di=class extends Gt{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Er=new Ct,dm=new Ct,Mc=[],pm=new ae,U1=new Ct,Lo=new ee,Do=new Re,ci=class extends ee{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Di(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,U1)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ae),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Er),pm.copy(t.boundingBox).applyMatrix4(Er),this.boundingBox.union(pm)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Re),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Er),Do.copy(t.boundingSphere).applyMatrix4(Er),this.boundingSphere.union(Do)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Lo.geometry=this.geometry,Lo.material=this.material,Lo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Do.copy(this.boundingSphere),Do.applyMatrix4(n),t.ray.intersectsSphere(Do)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Er),dm.multiplyMatrices(n,Er),Lo.matrixWorld=dm,Lo.raycast(t,Mc);for(let o=0,a=Mc.length;o<a;o++){let c=Mc[o];c.instanceId=r,c.object=this,e.push(c)}Mc.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Di(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};function N1(s,t){return s.z-t.z}function F1(s,t){return t.z-s.z}var yf=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e){let n=this.pool,i=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});let r=n[this.index];i.push(r),this.index++,r.start=t.start,r.count=t.count,r.z=e}reset(){this.list.length=0,this.index=0}},Tr="batchId",qi=new Ct,mm=new Ct,B1=new Ct,gm=new Ct,hh=new Hs,Sc=new ae,Es=new Re,Uo=new T,fh=new yf,ln=new ee,Ec=[];function O1(s,t,e=0){let n=t.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==t.array.constructor){let i=s.count;for(let r=0;r<i;r++)for(let o=0;o<n;o++)t.setComponent(r+e,o,s.getComponent(r,o))}else t.array.set(s.array,e*n);t.needsUpdate=!0}var Vr=class extends ee{get maxGeometryCount(){return this._maxGeometryCount}constructor(t,e,n=e*2,i){super(new Vt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawRanges=[],this._reservedRanges=[],this._visibility=[],this._active=[],this._bounds=[],this._maxGeometryCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._visibilityChanged=!0,this._matricesTexture=null,this._initMatricesTexture()}_initMatricesTexture(){let t=Math.sqrt(this._maxGeometryCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4),n=new Ci(e,t,t,wn,Yn);this._matricesTexture=n}_initializeGeometry(t){let e=this.geometry,n=this._maxVertexCount,i=this._maxGeometryCount,r=this._maxIndexCount;if(this._geometryInitialized===!1){for(let a in t.attributes){let c=t.getAttribute(a),{array:l,itemSize:u,normalized:h}=c,f=new l.constructor(n*u),d=new c.constructor(f,u,h);d.setUsage(c.usage),e.setAttribute(a,d)}if(t.getIndex()!==null){let a=n>65536?new Uint32Array(r):new Uint16Array(r);e.setIndex(new Gt(a,1))}let o=i>65536?new Uint32Array(n):new Uint16Array(n);e.setAttribute(Tr,new Gt(o,1)),this._geometryInitialized=!0}}_validateGeometry(t){if(t.getAttribute(Tr))throw new Error(`BatchedMesh: Geometry cannot use attribute "${Tr}"`);let e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(let n in e.attributes){if(n===Tr)continue;if(!t.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let i=t.getAttribute(n),r=e.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ae);let t=this._geometryCount,e=this.boundingBox,n=this._active;e.makeEmpty();for(let i=0;i<t;i++)n[i]!==!1&&(this.getMatrixAt(i,qi),this.getBoundingBoxAt(i,Sc).applyMatrix4(qi),e.union(Sc))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Re);let t=this._geometryCount,e=this.boundingSphere,n=this._active;e.makeEmpty();for(let i=0;i<t;i++)n[i]!==!1&&(this.getMatrixAt(i,qi),this.getBoundingSphereAt(i,Es).applyMatrix4(qi),e.union(Es))}addGeometry(t,e=-1,n=-1){if(this._initializeGeometry(t),this._validateGeometry(t),this._geometryCount>=this._maxGeometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");let i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1},r=null,o=this._reservedRanges,a=this._drawRanges,c=this._bounds;this._geometryCount!==0&&(r=o[o.length-1]),e===-1?i.vertexCount=t.getAttribute("position").count:i.vertexCount=e,r===null?i.vertexStart=0:i.vertexStart=r.vertexStart+r.vertexCount;let l=t.getIndex(),u=l!==null;if(u&&(n===-1?i.indexCount=l.count:i.indexCount=n,r===null?i.indexStart=0:i.indexStart=r.indexStart+r.indexCount),i.indexStart!==-1&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");let h=this._visibility,f=this._active,d=this._matricesTexture,m=this._matricesTexture.image.data;h.push(!0),f.push(!0);let x=this._geometryCount;this._geometryCount++,B1.toArray(m,x*16),d.needsUpdate=!0,o.push(i),a.push({start:u?i.indexStart:i.vertexStart,count:-1}),c.push({boxInitialized:!1,box:new ae,sphereInitialized:!1,sphere:new Re});let g=this.geometry.getAttribute(Tr);for(let p=0;p<i.vertexCount;p++)g.setX(i.vertexStart+p,x);return g.needsUpdate=!0,this.setGeometryAt(x,t),x}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);let n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),o=e.getIndex(),a=this._reservedRanges[t];if(i&&o.count>a.indexCount||e.attributes.position.count>a.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");let c=a.vertexStart,l=a.vertexCount;for(let d in n.attributes){if(d===Tr)continue;let m=e.getAttribute(d),x=n.getAttribute(d);O1(m,x,c);let g=m.itemSize;for(let p=m.count,v=l;p<v;p++){let _=c+p;for(let y=0;y<g;y++)x.setComponent(_,y,0)}x.needsUpdate=!0}if(i){let d=a.indexStart;for(let m=0;m<o.count;m++)r.setX(d+m,c+o.getX(m));for(let m=o.count,x=a.indexCount;m<x;m++)r.setX(d+m,c);r.needsUpdate=!0}let u=this._bounds[t];e.boundingBox!==null?(u.box.copy(e.boundingBox),u.boxInitialized=!0):u.boxInitialized=!1,e.boundingSphere!==null?(u.sphere.copy(e.boundingSphere),u.sphereInitialized=!0):u.sphereInitialized=!1;let h=this._drawRanges[t],f=e.getAttribute("position");return h.count=i?o.count:f.count,this._visibilityChanged=!0,t}deleteGeometry(t){let e=this._active;return t>=e.length||e[t]===!1?this:(e[t]=!1,this._visibilityChanged=!0,this)}getBoundingBoxAt(t,e){if(this._active[t]===!1)return this;let i=this._bounds[t],r=i.box,o=this.geometry;if(i.boxInitialized===!1){r.makeEmpty();let a=o.index,c=o.attributes.position,l=this._drawRanges[t];for(let u=l.start,h=l.start+l.count;u<h;u++){let f=u;a&&(f=a.getX(f)),r.expandByPoint(Uo.fromBufferAttribute(c,f))}i.boxInitialized=!0}return e.copy(r),e}getBoundingSphereAt(t,e){if(this._active[t]===!1)return this;let i=this._bounds[t],r=i.sphere,o=this.geometry;if(i.sphereInitialized===!1){r.makeEmpty(),this.getBoundingBoxAt(t,Sc),Sc.getCenter(r.center);let a=o.index,c=o.attributes.position,l=this._drawRanges[t],u=0;for(let h=l.start,f=l.start+l.count;h<f;h++){let d=h;a&&(d=a.getX(d)),Uo.fromBufferAttribute(c,d),u=Math.max(u,r.center.distanceToSquared(Uo))}r.radius=Math.sqrt(u),i.sphereInitialized=!0}return e.copy(r),e}setMatrixAt(t,e){let n=this._active,i=this._matricesTexture,r=this._matricesTexture.image.data,o=this._geometryCount;return t>=o||n[t]===!1?this:(e.toArray(r,t*16),i.needsUpdate=!0,this)}getMatrixAt(t,e){let n=this._active,i=this._matricesTexture.image.data,r=this._geometryCount;return t>=r||n[t]===!1?null:e.fromArray(i,t*16)}setVisibleAt(t,e){let n=this._visibility,i=this._active,r=this._geometryCount;return t>=r||i[t]===!1||n[t]===e?this:(n[t]=e,this._visibilityChanged=!0,this)}getVisibleAt(t){let e=this._visibility,n=this._active,i=this._geometryCount;return t>=i||n[t]===!1?!1:e[t]}raycast(t,e){let n=this._visibility,i=this._active,r=this._drawRanges,o=this._geometryCount,a=this.matrixWorld,c=this.geometry;ln.material=this.material,ln.geometry.index=c.index,ln.geometry.attributes=c.attributes,ln.geometry.boundingBox===null&&(ln.geometry.boundingBox=new ae),ln.geometry.boundingSphere===null&&(ln.geometry.boundingSphere=new Re);for(let l=0;l<o;l++){if(!n[l]||!i[l])continue;let u=r[l];ln.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(l,ln.matrixWorld).premultiply(a),this.getBoundingBoxAt(l,ln.geometry.boundingBox),this.getBoundingSphereAt(l,ln.geometry.boundingSphere),ln.raycast(t,Ec);for(let h=0,f=Ec.length;h<f;h++){let d=Ec[h];d.object=this,d.batchId=l,e.push(d)}Ec.length=0}ln.material=null,ln.geometry.index=null,ln.geometry.attributes={},ln.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._drawRanges=t._drawRanges.map(e=>({...e})),this._reservedRanges=t._reservedRanges.map(e=>({...e})),this._visibility=t._visibility.slice(),this._active=t._active.slice(),this._bounds=t._bounds.map(e=>({boxInitialized:e.boxInitialized,box:e.box.clone(),sphereInitialized:e.sphereInitialized,sphere:e.sphere.clone()})),this._maxGeometryCount=t._maxGeometryCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._geometryCount=t._geometryCount,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.slice(),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this}onBeforeRender(t,e,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let o=i.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,c=this._visibility,l=this._multiDrawStarts,u=this._multiDrawCounts,h=this._drawRanges,f=this.perObjectFrustumCulled;f&&(gm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),hh.setFromProjectionMatrix(gm,t.isWebGPURenderer?Ur:Zn));let d=0;if(this.sortObjects){mm.copy(this.matrixWorld).invert(),Uo.setFromMatrixPosition(n.matrixWorld).applyMatrix4(mm);for(let g=0,p=c.length;g<p;g++)if(c[g]){this.getMatrixAt(g,qi),this.getBoundingSphereAt(g,Es).applyMatrix4(qi);let v=!1;if(f&&(v=!hh.intersectsSphere(Es)),!v){let _=Uo.distanceTo(Es.center);fh.push(h[g],_)}}let m=fh.list,x=this.customSort;x===null?m.sort(r.transparent?F1:N1):x.call(this,m,n);for(let g=0,p=m.length;g<p;g++){let v=m[g];l[d]=v.start*a,u[d]=v.count,d++}fh.reset()}else for(let m=0,x=c.length;m<x;m++)if(c[m]){let g=!1;if(f&&(this.getMatrixAt(m,qi),this.getBoundingSphereAt(m,Es).applyMatrix4(qi),g=!hh.intersectsSphere(Es)),!g){let p=h[m];l[d]=p.start*a,u[d]=p.count,d++}}this._multiDrawCount=d,this._visibilityChanged=!1}onBeforeShadow(t,e,n,i,r,o){this.onBeforeRender(t,null,i,r,o)}},en=class extends Je{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new at(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},xm=new T,_m=new T,vm=new Ct,dh=new ai,Tc=new Re,li=class extends le{constructor(t=new Vt,e=new en){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)xm.fromBufferAttribute(e,i-1),_m.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=xm.distanceTo(_m);t.setAttribute("lineDistance",new It(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Tc.copy(n.boundingSphere),Tc.applyMatrix4(i),Tc.radius+=r,t.ray.intersectsSphere(Tc)===!1)return;vm.copy(i).invert(),dh.copy(t.ray).applyMatrix4(vm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new T,u=new T,h=new T,f=new T,d=this.isLineSegments?2:1,m=n.index,g=n.attributes.position;if(m!==null){let p=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let _=p,y=v-1;_<y;_+=d){let S=m.getX(_),b=m.getX(_+1);if(l.fromBufferAttribute(g,S),u.fromBufferAttribute(g,b),dh.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);let C=t.ray.origin.distanceTo(f);C<t.near||C>t.far||e.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let _=p,y=v-1;_<y;_+=d){if(l.fromBufferAttribute(g,_),u.fromBufferAttribute(g,_+1),dh.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);let b=t.ray.origin.distanceTo(f);b<t.near||b>t.far||e.push({distance:b,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},ym=new T,wm=new T,zn=class extends li{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)ym.fromBufferAttribute(e,i),wm.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ym.distanceTo(wm);t.setAttribute("lineDistance",new It(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},cl=class extends li{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},ui=class extends Je{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},bm=new Ct,wf=new ai,Ac=new Re,Rc=new T,Ui=class extends le{constructor(t=new Vt,e=new ui){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ac.copy(n.boundingSphere),Ac.applyMatrix4(i),Ac.radius+=r,t.ray.intersectsSphere(Ac)===!1)return;bm.copy(i).invert(),wf.copy(t.ray).applyMatrix4(bm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let m=f,x=d;m<x;m++){let g=l.getX(m);Rc.fromBufferAttribute(h,g),Mm(Rc,g,c,i,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let m=f,x=d;m<x;m++)Rc.fromBufferAttribute(h,m),Mm(Rc,m,c,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Mm(s,t,e,n,i,r,o){let a=wf.distanceSqToPoint(s);if(a<e){let c=new T;wf.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}var bf=class extends Ve{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:Ne,this.magFilter=r!==void 0?r:Ne,this.generateMipmaps=!1;let u=this;function h(){u.needsUpdate=!0,t.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){let t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}},Mf=class extends Ve{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=Ue,this.minFilter=Ue,this.generateMipmaps=!1,this.needsUpdate=!0}},Gr=class extends Ve{constructor(t,e,n,i,r,o,a,c,l,u,h,f){super(null,o,a,c,l,u,i,r,h,f),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}},Sf=class extends Gr{constructor(t,e,n,i,r,o){super(t,e,n,r,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=hn}},Ef=class extends Gr{constructor(t,e,n){super(void 0,t[0].width,t[0].height,e,n,Pi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}},Wr=class extends Ve{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},In=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new st:new T);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new T,i=[],r=[],o=[],a=new T,c=new Ct;for(let d=0;d<=t;d++){let m=d/t;i[d]=this.getTangentAt(m,new T)}r[0]=new T,o[0]=new T;let l=Number.MAX_VALUE,u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Ae(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,m))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(Ae(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(i[m],d*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Xr=class extends In{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e){let n=e||new st,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ll=class extends Xr{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Id(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var Cc=new T,ph=new Id,mh=new Id,gh=new Id,ul=class extends In{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new T){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=i[(a-1)%r]:(Cc.subVectors(i[0],i[1]).add(i[0]),l=Cc);let h=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(Cc.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Cc),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(u),d);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),ph.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,m,x,g),mh.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,m,x,g),gh.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,m,x,g)}else this.curveType==="catmullrom"&&(ph.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),mh.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),gh.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(ph.calc(c),mh.calc(c),gh.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new T().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Sm(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function z1(s,t){let e=1-s;return e*e*t}function k1(s,t){return 2*(1-s)*s*t}function H1(s,t){return s*s*t}function Ho(s,t,e,n){return z1(s,t)+k1(s,e)+H1(s,n)}function V1(s,t){let e=1-s;return e*e*e*t}function G1(s,t){let e=1-s;return 3*e*e*s*t}function W1(s,t){return 3*(1-s)*s*s*t}function X1(s,t){return s*s*s*t}function Vo(s,t,e,n,i){return V1(s,t)+G1(s,e)+W1(s,n)+X1(s,i)}var la=class extends In{constructor(t=new st,e=new st,n=new st,i=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new st){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Vo(t,i.x,r.x,o.x,a.x),Vo(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},hl=class extends In{constructor(t=new T,e=new T,n=new T,i=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new T){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Vo(t,i.x,r.x,o.x,a.x),Vo(t,i.y,r.y,o.y,a.y),Vo(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ua=class extends In{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fl=class extends In{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ha=class extends In{constructor(t=new st,e=new st,n=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new st){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Ho(t,i.x,r.x,o.x),Ho(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fa=class extends In{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Ho(t,i.x,r.x,o.x),Ho(t,i.y,r.y,o.y),Ho(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},da=class extends In{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Sm(a,c.x,l.x,u.x,h.x),Sm(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new st().fromArray(i))}return this}},dl=Object.freeze({__proto__:null,ArcCurve:ll,CatmullRomCurve3:ul,CubicBezierCurve:la,CubicBezierCurve3:hl,EllipseCurve:Xr,LineCurve:ua,LineCurve3:fl,QuadraticBezierCurve:ha,QuadraticBezierCurve3:fa,SplineCurve:da}),pl=class extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new dl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new dl[i.type]().fromJSON(i))}return this}},Ni=class extends pl{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ua(this.currentPoint.clone(),new st(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new ha(this.currentPoint.clone(),new st(t,e),new st(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new la(this.currentPoint.clone(),new st(t,e),new st(n,i),new st(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new da(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){let l=new Xr(t,e,n,i,r,o,a,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},pa=class s extends Vt{constructor(t=[new st(0,-.5),new st(.5,0),new st(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Ae(i,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],u=1/e,h=new T,f=new st,d=new T,m=new T,x=new T,g=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,d.x=p*1,d.y=-g,d.z=p*0,x.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),c.push(d.x,d.y,d.z),x.copy(m)}for(let v=0;v<=e;v++){let _=n+v*u*i,y=Math.sin(_),S=Math.cos(_);for(let b=0;b<=t.length-1;b++){h.x=t[b].x*y,h.y=t[b].y,h.z=t[b].x*S,o.push(h.x,h.y,h.z),f.x=v/e,f.y=b/(t.length-1),a.push(f.x,f.y);let E=c[3*b+0]*y,C=c[3*b+1],w=c[3*b+0]*S;l.push(E,C,w)}}for(let v=0;v<e;v++)for(let _=0;_<t.length-1;_++){let y=_+v*t.length,S=y,b=y+t.length,E=y+t.length+1,C=y+1;r.push(S,b,C),r.push(E,C,b)}this.setIndex(r),this.setAttribute("position",new It(o,3)),this.setAttribute("uv",new It(a,2)),this.setAttribute("normal",new It(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},ml=class s extends pa{constructor(t=1,e=1,n=4,i=8){let r=new Ni;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new s(t.radius,t.length,t.capSegments,t.radialSegments)}},gl=class s extends Vt{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new T,u=new st;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){let d=n+h/e*i;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new It(o,3)),this.setAttribute("normal",new It(a,3)),this.setAttribute("uv",new It(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ns=class s extends Vt{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let u=[],h=[],f=[],d=[],m=0,x=[],g=n/2,p=0;v(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new It(h,3)),this.setAttribute("normal",new It(f,3)),this.setAttribute("uv",new It(d,2));function v(){let y=new T,S=new T,b=0,E=(e-t)/n;for(let C=0;C<=r;C++){let w=[],M=C/r,D=M*(e-t)+t;for(let F=0;F<=i;F++){let B=F/i,L=B*c+a,O=Math.sin(L),z=Math.cos(L);S.x=D*O,S.y=-M*n+g,S.z=D*z,h.push(S.x,S.y,S.z),y.set(O,E,z).normalize(),f.push(y.x,y.y,y.z),d.push(B,1-M),w.push(m++)}x.push(w)}for(let C=0;C<i;C++)for(let w=0;w<r;w++){let M=x[w][C],D=x[w+1][C],F=x[w+1][C+1],B=x[w][C+1];u.push(M,D,B),u.push(D,F,B),b+=6}l.addGroup(p,b,0),p+=b}function _(y){let S=m,b=new st,E=new T,C=0,w=y===!0?t:e,M=y===!0?1:-1;for(let F=1;F<=i;F++)h.push(0,g*M,0),f.push(0,M,0),d.push(.5,.5),m++;let D=m;for(let F=0;F<=i;F++){let L=F/i*c+a,O=Math.cos(L),z=Math.sin(L);E.x=w*z,E.y=g*M,E.z=w*O,h.push(E.x,E.y,E.z),f.push(0,M,0),b.x=O*.5+.5,b.y=z*.5*M+.5,d.push(b.x,b.y),m++}for(let F=0;F<i;F++){let B=S+F,L=D+F;y===!0?u.push(L,L+1,B):u.push(L+1,L,B),C+=3}l.addGroup(p,C,y===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},xl=class s extends ns{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},is=class s extends Vt{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),l(n),u(),this.setAttribute("position",new It(r,3)),this.setAttribute("normal",new It(r.slice(),3)),this.setAttribute("uv",new It(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let _=new T,y=new T,S=new T;for(let b=0;b<e.length;b+=3)d(e[b+0],_),d(e[b+1],y),d(e[b+2],S),c(_,y,S,v)}function c(v,_,y,S){let b=S+1,E=[];for(let C=0;C<=b;C++){E[C]=[];let w=v.clone().lerp(y,C/b),M=_.clone().lerp(y,C/b),D=b-C;for(let F=0;F<=D;F++)F===0&&C===b?E[C][F]=w:E[C][F]=w.clone().lerp(M,F/D)}for(let C=0;C<b;C++)for(let w=0;w<2*(b-C)-1;w++){let M=Math.floor(w/2);w%2===0?(f(E[C][M+1]),f(E[C+1][M]),f(E[C][M])):(f(E[C][M+1]),f(E[C+1][M+1]),f(E[C+1][M]))}}function l(v){let _=new T;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(v),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function u(){let v=new T;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];let y=g(v)/2/Math.PI+.5,S=p(v)/Math.PI+.5;o.push(y,1-S)}m(),h()}function h(){for(let v=0;v<o.length;v+=6){let _=o[v+0],y=o[v+2],S=o[v+4],b=Math.max(_,y,S),E=Math.min(_,y,S);b>.9&&E<.1&&(_<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),S<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,_){let y=v*3;_.x=t[y+0],_.y=t[y+1],_.z=t[y+2]}function m(){let v=new T,_=new T,y=new T,S=new T,b=new st,E=new st,C=new st;for(let w=0,M=0;w<r.length;w+=9,M+=6){v.set(r[w+0],r[w+1],r[w+2]),_.set(r[w+3],r[w+4],r[w+5]),y.set(r[w+6],r[w+7],r[w+8]),b.set(o[M+0],o[M+1]),E.set(o[M+2],o[M+3]),C.set(o[M+4],o[M+5]),S.copy(v).add(_).add(y).divideScalar(3);let D=g(S);x(b,M+0,v,D),x(E,M+2,_,D),x(C,M+4,y,D)}}function x(v,_,y,S){S<0&&v.x===1&&(o[_]=v.x-1),y.x===0&&y.z===0&&(o[_]=S/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}},_l=class s extends is{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Pc=new T,Ic=new T,xh=new T,Lc=new fn,vl=class extends Vt{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let i=Math.pow(10,4),r=Math.cos(Bs*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let m=0;m<c;m+=3){o?(l[0]=o.getX(m),l[1]=o.getX(m+1),l[2]=o.getX(m+2)):(l[0]=m,l[1]=m+1,l[2]=m+2);let{a:x,b:g,c:p}=Lc;if(x.fromBufferAttribute(a,l[0]),g.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),Lc.getNormal(xh),h[0]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,h[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,h[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let v=0;v<3;v++){let _=(v+1)%3,y=h[v],S=h[_],b=Lc[u[v]],E=Lc[u[_]],C=`${y}_${S}`,w=`${S}_${y}`;w in f&&f[w]?(xh.dot(f[w].normal)<=r&&(d.push(b.x,b.y,b.z),d.push(E.x,E.y,E.z)),f[w]=null):C in f||(f[C]={index0:l[v],index1:l[_],normal:xh.clone()})}}for(let m in f)if(f[m]){let{index0:x,index1:g}=f[m];Pc.fromBufferAttribute(a,x),Ic.fromBufferAttribute(a,g),d.push(Pc.x,Pc.y,Pc.z),d.push(Ic.x,Ic.y,Ic.z)}this.setAttribute("position",new It(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},Fn=class extends Ni{constructor(t){super(t),this.uuid=Pn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Ni().fromJSON(i))}return this}},q1={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=ug(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,f,d;if(n&&(r=K1(s,t,r,e)),s.length>80*e){a=l=s[0],c=u=s[1];for(let m=e;m<i;m+=e)h=s[m],f=s[m+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);d=Math.max(l-a,u-c),d=d!==0?32767/d:0}return ma(r,o,e,a,c,d,0),o}};function ug(s,t,e,n,i){let r,o;if(i===cM(s,t,e,n)>0)for(r=t;r<e;r+=n)o=Em(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=Em(r,s[r],s[r+1],o);return o&&iu(o,o.next)&&(xa(o),o=o.next),o}function qs(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(iu(e,e.next)||be(e.prev,e,e.next)===0)){if(xa(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ma(s,t,e,n,i,r,o){if(!s)return;!o&&r&&nM(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?Z1(s,n,i,r):Y1(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),xa(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=J1(qs(s),t,e),ma(s,t,e,n,i,r,2)):o===2&&$1(s,t,e,n,i,r):ma(qs(s),t,e,n,i,r,1);break}}}function Y1(s){let t=s.prev,e=s,n=s.next;if(be(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=i<r?i<o?i:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,f=i>r?i>o?i:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,m=n.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=h&&m.y<=d&&Pr(i,a,r,c,o,l,m.x,m.y)&&be(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Z1(s,t,e,n){let i=s.prev,r=s,o=s.next;if(be(i,r,o)>=0)return!1;let a=i.x,c=r.x,l=o.x,u=i.y,h=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,m=u<h?u<f?u:f:h<f?h:f,x=a>c?a>l?a:l:c>l?c:l,g=u>h?u>f?u:f:h>f?h:f,p=Tf(d,m,t,e,n),v=Tf(x,g,t,e,n),_=s.prevZ,y=s.nextZ;for(;_&&_.z>=p&&y&&y.z<=v;){if(_.x>=d&&_.x<=x&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&Pr(a,u,c,h,l,f,_.x,_.y)&&be(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=d&&y.x<=x&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Pr(a,u,c,h,l,f,y.x,y.y)&&be(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=x&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&Pr(a,u,c,h,l,f,_.x,_.y)&&be(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=v;){if(y.x>=d&&y.x<=x&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Pr(a,u,c,h,l,f,y.x,y.y)&&be(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function J1(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!iu(i,r)&&hg(i,n,n.next,r)&&ga(i,r)&&ga(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),xa(n),xa(n.next),n=s=r),n=n.next}while(n!==s);return qs(n)}function $1(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&rM(o,a)){let c=fg(o,a);o=qs(o,o.next),c=qs(c,c.next),ma(o,t,e,n,i,r,0),ma(c,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function K1(s,t,e,n){let i=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,l=ug(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(sM(l));for(i.sort(j1),r=0;r<i.length;r++)e=Q1(i[r],e);return e}function j1(s,t){return s.x-t.x}function Q1(s,t){let e=tM(s,t);if(!e)return t;let n=fg(e,s);return qs(n,n.next),qs(e,e.next)}function tM(s,t){let e=t,n=-1/0,i,r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===r))return i}e=e.next}while(e!==t);if(!i)return null;let a=i,c=i.x,l=i.y,u=1/0,h;e=i;do r>=e.x&&e.x>=c&&r!==e.x&&Pr(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),ga(e,s)&&(h<u||h===u&&(e.x>i.x||e.x===i.x&&eM(i,e)))&&(i=e,u=h)),e=e.next;while(e!==a);return i}function eM(s,t){return be(s.prev,s,t.prev)<0&&be(t.next,s,s.next)<0}function nM(s,t,e,n){let i=s;do i.z===0&&(i.z=Tf(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,iM(i)}function iM(s){let t,e,n,i,r,o,a,c,l=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,l*=2}while(o>1);return s}function Tf(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function sM(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Pr(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function rM(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!oM(s,t)&&(ga(s,t)&&ga(t,s)&&aM(s,t)&&(be(s.prev,s,t.prev)||be(s,t.prev,t))||iu(s,t)&&be(s.prev,s,s.next)>0&&be(t.prev,t,t.next)>0)}function be(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function iu(s,t){return s.x===t.x&&s.y===t.y}function hg(s,t,e,n){let i=Uc(be(s,t,e)),r=Uc(be(s,t,n)),o=Uc(be(e,n,s)),a=Uc(be(e,n,t));return!!(i!==r&&o!==a||i===0&&Dc(s,e,t)||r===0&&Dc(s,n,t)||o===0&&Dc(e,s,n)||a===0&&Dc(e,t,n))}function Dc(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Uc(s){return s>0?1:s<0?-1:0}function oM(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&hg(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function ga(s,t){return be(s.prev,s,s.next)<0?be(s,t,s.next)>=0&&be(s,s.prev,t)>=0:be(s,t,s.prev)<0||be(s,s.next,t)<0}function aM(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function fg(s,t){let e=new Af(s.i,s.x,s.y),n=new Af(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Em(s,t,e,n){let i=new Af(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function xa(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Af(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function cM(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var ri=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];Tm(t),Am(n,t);let o=t.length;e.forEach(Tm);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,Am(n,e[c]);let a=q1.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Tm(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Am(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var ss=class s extends Vt{constructor(t=new Fn([new st(.5,.5),new st(-.5,.5),new st(-.5,-.5),new st(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new It(i,3)),this.setAttribute("uv",new It(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:lM,_,y=!1,S,b,E,C;p&&(_=p.getSpacedPoints(u),y=!0,f=!1,S=p.computeFrenetFrames(u,!1),b=new T,E=new T,C=new T),f||(g=0,d=0,m=0,x=0);let w=a.extractPoints(l),M=w.shape,D=w.holes;if(!ri.isClockWise(M)){M=M.reverse();for(let N=0,ct=D.length;N<ct;N++){let Y=D[N];ri.isClockWise(Y)&&(D[N]=Y.reverse())}}let B=ri.triangulateShape(M,D),L=M;for(let N=0,ct=D.length;N<ct;N++){let Y=D[N];M=M.concat(Y)}function O(N,ct,Y){return ct||console.error("THREE.ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(ct,Y)}let z=M.length,j=B.length;function it(N,ct,Y){let rt,nt,gt,dt=N.x-ct.x,P=N.y-ct.y,A=Y.x-N.x,X=Y.y-N.y,$=dt*dt+P*P,et=dt*X-P*A;if(Math.abs(et)>Number.EPSILON){let G=Math.sqrt($),xt=Math.sqrt(A*A+X*X),ft=ct.x-P/G,_t=ct.y+dt/G,yt=Y.x-X/xt,Et=Y.y+A/xt,lt=((yt-ft)*X-(Et-_t)*A)/(dt*X-P*A);rt=ft+dt*lt-N.x,nt=_t+P*lt-N.y;let Xt=rt*rt+nt*nt;if(Xt<=2)return new st(rt,nt);gt=Math.sqrt(Xt/2)}else{let G=!1;dt>Number.EPSILON?A>Number.EPSILON&&(G=!0):dt<-Number.EPSILON?A<-Number.EPSILON&&(G=!0):Math.sign(P)===Math.sign(X)&&(G=!0),G?(rt=-P,nt=dt,gt=Math.sqrt($)):(rt=dt,nt=P,gt=Math.sqrt($/2))}return new st(rt/gt,nt/gt)}let Z=[];for(let N=0,ct=L.length,Y=ct-1,rt=N+1;N<ct;N++,Y++,rt++)Y===ct&&(Y=0),rt===ct&&(rt=0),Z[N]=it(L[N],L[Y],L[rt]);let q=[],I,W=Z.concat();for(let N=0,ct=D.length;N<ct;N++){let Y=D[N];I=[];for(let rt=0,nt=Y.length,gt=nt-1,dt=rt+1;rt<nt;rt++,gt++,dt++)gt===nt&&(gt=0),dt===nt&&(dt=0),I[rt]=it(Y[rt],Y[gt],Y[dt]);q.push(I),W=W.concat(I)}for(let N=0;N<g;N++){let ct=N/g,Y=d*Math.cos(ct*Math.PI/2),rt=m*Math.sin(ct*Math.PI/2)+x;for(let nt=0,gt=L.length;nt<gt;nt++){let dt=O(L[nt],Z[nt],rt);ut(dt.x,dt.y,-Y)}for(let nt=0,gt=D.length;nt<gt;nt++){let dt=D[nt];I=q[nt];for(let P=0,A=dt.length;P<A;P++){let X=O(dt[P],I[P],rt);ut(X.x,X.y,-Y)}}}let U=m+x;for(let N=0;N<z;N++){let ct=f?O(M[N],W[N],U):M[N];y?(E.copy(S.normals[0]).multiplyScalar(ct.x),b.copy(S.binormals[0]).multiplyScalar(ct.y),C.copy(_[0]).add(E).add(b),ut(C.x,C.y,C.z)):ut(ct.x,ct.y,0)}for(let N=1;N<=u;N++)for(let ct=0;ct<z;ct++){let Y=f?O(M[ct],W[ct],U):M[ct];y?(E.copy(S.normals[N]).multiplyScalar(Y.x),b.copy(S.binormals[N]).multiplyScalar(Y.y),C.copy(_[N]).add(E).add(b),ut(C.x,C.y,C.z)):ut(Y.x,Y.y,h/u*N)}for(let N=g-1;N>=0;N--){let ct=N/g,Y=d*Math.cos(ct*Math.PI/2),rt=m*Math.sin(ct*Math.PI/2)+x;for(let nt=0,gt=L.length;nt<gt;nt++){let dt=O(L[nt],Z[nt],rt);ut(dt.x,dt.y,h+Y)}for(let nt=0,gt=D.length;nt<gt;nt++){let dt=D[nt];I=q[nt];for(let P=0,A=dt.length;P<A;P++){let X=O(dt[P],I[P],rt);y?ut(X.x,X.y+_[u-1].y,_[u-1].x+Y):ut(X.x,X.y,h+Y)}}}H(),tt();function H(){let N=i.length/3;if(f){let ct=0,Y=z*ct;for(let rt=0;rt<j;rt++){let nt=B[rt];mt(nt[2]+Y,nt[1]+Y,nt[0]+Y)}ct=u+g*2,Y=z*ct;for(let rt=0;rt<j;rt++){let nt=B[rt];mt(nt[0]+Y,nt[1]+Y,nt[2]+Y)}}else{for(let ct=0;ct<j;ct++){let Y=B[ct];mt(Y[2],Y[1],Y[0])}for(let ct=0;ct<j;ct++){let Y=B[ct];mt(Y[0]+z*u,Y[1]+z*u,Y[2]+z*u)}}n.addGroup(N,i.length/3-N,0)}function tt(){let N=i.length/3,ct=0;pt(L,ct),ct+=L.length;for(let Y=0,rt=D.length;Y<rt;Y++){let nt=D[Y];pt(nt,ct),ct+=nt.length}n.addGroup(N,i.length/3-N,1)}function pt(N,ct){let Y=N.length;for(;--Y>=0;){let rt=Y,nt=Y-1;nt<0&&(nt=N.length-1);for(let gt=0,dt=u+g*2;gt<dt;gt++){let P=z*gt,A=z*(gt+1),X=ct+rt+P,$=ct+nt+P,et=ct+nt+A,G=ct+rt+A;Tt(X,$,et,G)}}}function ut(N,ct,Y){c.push(N),c.push(ct),c.push(Y)}function mt(N,ct,Y){ht(N),ht(ct),ht(Y);let rt=i.length/3,nt=v.generateTopUV(n,i,rt-3,rt-2,rt-1);ot(nt[0]),ot(nt[1]),ot(nt[2])}function Tt(N,ct,Y,rt){ht(N),ht(ct),ht(rt),ht(ct),ht(Y),ht(rt);let nt=i.length/3,gt=v.generateSideWallUV(n,i,nt-6,nt-3,nt-2,nt-1);ot(gt[0]),ot(gt[1]),ot(gt[3]),ot(gt[1]),ot(gt[2]),ot(gt[3])}function ht(N){i.push(c[N*3+0]),i.push(c[N*3+1]),i.push(c[N*3+2])}function ot(N){r.push(N.x),r.push(N.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return uM(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new dl[i.type]().fromJSON(i)),new s(n,t.options)}},lM={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],u=t[i*3+1];return[new st(r,o),new st(a,c),new st(l,u)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[i*3],d=t[i*3+1],m=t[i*3+2],x=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new st(o,1-c),new st(l,1-h),new st(f,1-m),new st(x,1-p)]:[new st(a,1-c),new st(u,1-h),new st(d,1-m),new st(g,1-p)]}};function uM(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var qr=class s extends is{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},_a=class s extends is{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},yl=class s extends Vt{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],c=[],l=[],u=[],h=t,f=(e-t)/i,d=new T,m=new st;for(let x=0;x<=i;x++){for(let g=0;g<=n;g++){let p=r+g/n*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,u.push(m.x,m.y)}h+=f}for(let x=0;x<i;x++){let g=x*(n+1);for(let p=0;p<n;p++){let v=p+g,_=v,y=v+n+1,S=v+n+2,b=v+1;a.push(_,y,b),a.push(y,S,b)}}this.setIndex(a),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(l,3)),this.setAttribute("uv",new It(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},wl=class s extends Vt{constructor(t=new Fn([new st(0,.5),new st(-.5,-.5),new st(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new It(i,3)),this.setAttribute("normal",new It(r,3)),this.setAttribute("uv",new It(o,2));function l(u){let h=i.length/3,f=u.extractPoints(e),d=f.shape,m=f.holes;ri.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){let v=m[g];ri.isClockWise(v)===!0&&(m[g]=v.reverse())}let x=ri.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){let v=m[g];d=d.concat(v)}for(let g=0,p=d.length;g<p;g++){let v=d[g];i.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let g=0,p=x.length;g<p;g++){let v=x[g],_=v[0]+h,y=v[1]+h,S=v[2]+h;n.push(_,y,S),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return hM(e,t)}static fromJSON(t,e){let n=[];for(let i=0,r=t.shapes.length;i<r;i++){let o=e[t.shapes[i]];n.push(o)}return new s(n,t.curveSegments)}};function hM(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){let i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}var Ys=class s extends Vt{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new T,f=new T,d=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let v=[],_=p/n,y=0;p===0&&o===0?y=.5/e:p===n&&c===Math.PI&&(y=-.5/e);for(let S=0;S<=e;S++){let b=S/e;h.x=-t*Math.cos(i+b*r)*Math.sin(o+_*a),h.y=t*Math.cos(o+_*a),h.z=t*Math.sin(i+b*r)*Math.sin(o+_*a),m.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),g.push(b+y,1-_),v.push(l++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){let _=u[p][v+1],y=u[p][v],S=u[p+1][v],b=u[p+1][v+1];(p!==0||o>0)&&d.push(_,y,b),(p!==n-1||c<Math.PI)&&d.push(y,S,b)}this.setIndex(d),this.setAttribute("position",new It(m,3)),this.setAttribute("normal",new It(x,3)),this.setAttribute("uv",new It(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},bl=class s extends is{constructor(t=1,e=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Ml=class s extends Vt{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],u=new T,h=new T,f=new T;for(let d=0;d<=n;d++)for(let m=0;m<=i;m++){let x=m/i*r,g=d/n*Math.PI*2;h.x=(t+e*Math.cos(g))*Math.cos(x),h.y=(t+e*Math.cos(g))*Math.sin(x),h.z=e*Math.sin(g),a.push(h.x,h.y,h.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(m/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=i;m++){let x=(i+1)*d+m-1,g=(i+1)*(d-1)+m-1,p=(i+1)*(d-1)+m,v=(i+1)*d+m;o.push(x,g,v),o.push(g,p,v)}this.setIndex(o),this.setAttribute("position",new It(a,3)),this.setAttribute("normal",new It(c,3)),this.setAttribute("uv",new It(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Sl=class s extends Vt{constructor(t=1,e=.4,n=64,i=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:o},n=Math.floor(n),i=Math.floor(i);let a=[],c=[],l=[],u=[],h=new T,f=new T,d=new T,m=new T,x=new T,g=new T,p=new T;for(let _=0;_<=n;++_){let y=_/n*r*Math.PI*2;v(y,r,o,t,d),v(y+.01,r,o,t,m),g.subVectors(m,d),p.addVectors(m,d),x.crossVectors(g,p),p.crossVectors(x,g),x.normalize(),p.normalize();for(let S=0;S<=i;++S){let b=S/i*Math.PI*2,E=-e*Math.cos(b),C=e*Math.sin(b);h.x=d.x+(E*p.x+C*x.x),h.y=d.y+(E*p.y+C*x.y),h.z=d.z+(E*p.z+C*x.z),c.push(h.x,h.y,h.z),f.subVectors(h,d).normalize(),l.push(f.x,f.y,f.z),u.push(_/n),u.push(S/i)}}for(let _=1;_<=n;_++)for(let y=1;y<=i;y++){let S=(i+1)*(_-1)+(y-1),b=(i+1)*_+(y-1),E=(i+1)*_+y,C=(i+1)*(_-1)+y;a.push(S,b,C),a.push(b,E,C)}this.setIndex(a),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(l,3)),this.setAttribute("uv",new It(u,2));function v(_,y,S,b,E){let C=Math.cos(_),w=Math.sin(_),M=S/y*_,D=Math.cos(M);E.x=b*(2+D)*.5*C,E.y=b*(2+D)*w*.5,E.z=b*Math.sin(M)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},El=class s extends Vt{constructor(t=new fa(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new T,c=new T,l=new st,u=new T,h=[],f=[],d=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new It(h,3)),this.setAttribute("normal",new It(f,3)),this.setAttribute("uv",new It(d,2));function x(){for(let _=0;_<e;_++)g(_);g(r===!1?e:0),v(),p()}function g(_){u=t.getPointAt(_/e,u);let y=o.normals[_],S=o.binormals[_];for(let b=0;b<=i;b++){let E=b/i*Math.PI*2,C=Math.sin(E),w=-Math.cos(E);c.x=w*y.x+C*S.x,c.y=w*y.y+C*S.y,c.z=w*y.z+C*S.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,h.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=e;_++)for(let y=1;y<=i;y++){let S=(i+1)*(_-1)+(y-1),b=(i+1)*_+(y-1),E=(i+1)*_+y,C=(i+1)*(_-1)+y;m.push(S,b,C),m.push(b,E,C)}}function v(){for(let _=0;_<=e;_++)for(let y=0;y<=i;y++)l.x=_/e,l.y=y/i,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new dl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},Tl=class extends Vt{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,i=new T,r=new T;if(t.index!==null){let o=t.attributes.position,a=t.index,c=t.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){let h=c[l],f=h.start,d=h.count;for(let m=f,x=f+d;m<x;m+=3)for(let g=0;g<3;g++){let p=a.getX(m+g),v=a.getX(m+(g+1)%3);i.fromBufferAttribute(o,p),r.fromBufferAttribute(o,v),Rm(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{let o=t.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){let u=3*a+l,h=3*a+(l+1)%3;i.fromBufferAttribute(o,u),r.fromBufferAttribute(o,h),Rm(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new It(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Rm(s,t,e){let n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}var Cm=Object.freeze({__proto__:null,BoxGeometry:ze,CapsuleGeometry:ml,CircleGeometry:gl,ConeGeometry:xl,CylinderGeometry:ns,DodecahedronGeometry:_l,EdgesGeometry:vl,ExtrudeGeometry:ss,IcosahedronGeometry:qr,LatheGeometry:pa,OctahedronGeometry:_a,PlaneGeometry:Kn,PolyhedronGeometry:is,RingGeometry:yl,ShapeGeometry:wl,SphereGeometry:Ys,TetrahedronGeometry:bl,TorusGeometry:Ml,TorusKnotGeometry:Sl,TubeGeometry:El,WireframeGeometry:Tl}),Al=class extends Je{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new at(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}},Rl=class extends dn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},nn=class extends Je{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=os,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Cl=class extends nn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new st(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ae(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new at(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new at(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new at(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}},Pl=class extends Je{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new at(16777215),this.specular=new at(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=os,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Il=class extends Je{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new at(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=os,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Yr=class extends Je{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=os,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}},Ll=class extends Je{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=os,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Dl=class extends Je{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new at(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=os,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ul=class extends en{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function Fs(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function dg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function pg(s){function t(i,r){return s[i]-s[r]}let e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Rf(s,t,e){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=e[r]*t;for(let c=0;c!==t;++c)i[o++]=s[a+c]}return i}function Ld(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}function fM(s,t,e,n,i=30){let r=s.clone();r.name=t;let o=[];for(let c=0;c<r.tracks.length;++c){let l=r.tracks[c],u=l.getValueSize(),h=[],f=[];for(let d=0;d<l.times.length;++d){let m=l.times[d]*i;if(!(m<e||m>=n)){h.push(l.times[d]);for(let x=0;x<u;++x)f.push(l.values[d*u+x])}}h.length!==0&&(l.times=Fs(h,l.times.constructor),l.values=Fs(f,l.values.constructor),o.push(l))}r.tracks=o;let a=1/0;for(let c=0;c<r.tracks.length;++c)a>r.tracks[c].times[0]&&(a=r.tracks[c].times[0]);for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*a);return r.resetDuration(),r}function dM(s,t=0,e=s,n=30){n<=0&&(n=30);let i=e.tracks.length,r=t/n;for(let o=0;o<i;++o){let a=e.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;let l=s.tracks.find(function(p){return p.name===a.name&&p.ValueTypeName===c});if(l===void 0)continue;let u=0,h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let f=0,d=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=d/3);let m=a.times.length-1,x;if(r<=a.times[0]){let p=u,v=h-u;x=a.values.slice(p,v)}else if(r>=a.times[m]){let p=m*h+u,v=p+h-u;x=a.values.slice(p,v)}else{let p=a.createInterpolant(),v=u,_=h-u;p.evaluate(r),x=p.resultBuffer.slice(v,_)}c==="quaternion"&&new pe().fromArray(x).normalize().conjugate().toArray(x);let g=l.times.length;for(let p=0;p<g;++p){let v=p*d+f;if(c==="quaternion")pe.multiplyQuaternionsFlat(l.values,v,x,0,l.values,v);else{let _=d-f*2;for(let y=0;y<_;++y)l.values[v+y]-=x[y]}}}return s.blendMode=Td,s}var pM={convertArray:Fs,isTypedArray:dg,getKeyframeOrder:pg,sortedArray:Rf,flattenJSON:Ld,subclip:fM,makeClipAdditive:dM},Zs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Nl=class extends Zs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Us,endingEnd:Us}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ns:r=t,a=2*e-n;break;case Jo:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ns:o=t,c=2*n-e;break;case Jo:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(i-e),x=m*m,g=x*m,p=-f*g+2*f*x-f*m,v=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*m+1,_=(-1-d)*g+(1.5+d)*x+.5*m,y=d*g-d*x;for(let S=0;S!==a;++S)r[S]=p*o[u+S]+v*o[l+S]+_*o[c+S]+y*o[h+S];return r}},va=class extends Zs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(i-e),h=1-u;for(let f=0;f!==a;++f)r[f]=o[l+f]*h+o[c+f]*u;return r}},Fl=class extends Zs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Ln=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Fs(e,this.TimeBufferType),this.values=Fs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Fs(t.times,Array),values:Fs(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Fl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new va(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Nl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Yo:e=this.InterpolantFactoryMethodDiscrete;break;case Zo:e=this.InterpolantFactoryMethodLinear;break;case Yc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yo;case this.InterpolantFactoryMethodLinear:return Zo;case this.InterpolantFactoryMethodSmooth:return Yc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&dg(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Yc,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(i)c=!0;else{let h=a*n,f=h-n,d=h+n;for(let m=0;m!==n;++m){let x=e[h+m];if(x!==e[f+m]||x!==e[d+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[h+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=Zo;var Fi=class extends Ln{};Fi.prototype.ValueTypeName="bool";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=Yo;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var ya=class extends Ln{};ya.prototype.ValueTypeName="color";var Js=class extends Ln{};Js.prototype.ValueTypeName="number";var Bl=class extends Zs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let u=l+a;l!==u;l+=4)pe.slerpFlat(r,0,o,l-a,o,l,c);return r}},rs=class extends Ln{InterpolantFactoryMethodLinear(t){return new Bl(this.times,this.values,this.getValueSize(),t)}};rs.prototype.ValueTypeName="quaternion";rs.prototype.DefaultInterpolation=Zo;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Bi=class extends Ln{};Bi.prototype.ValueTypeName="string";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=Yo;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var $s=class extends Ln{};$s.prototype.ValueTypeName="vector";var Ks=class{constructor(t,e=-1,n,i=Ql){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Pn(),this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(gM(n[o]).scale(i));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(Ln.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){let r=e.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let u=pg(c);c=Rf(c,1,u),l=Rf(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Js(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){let l=t[a],u=l.name.match(r);if(u&&u.length>1){let h=u[1],f=i[h];f||(i[h]=f=[]),f.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,f,d,m,x){if(d.length!==0){let g=[],p=[];Ld(d,g,p,m),g.length!==0&&x.push(new h(f,g,p))}},i=[],r=t.name||"default",o=t.fps||30,a=t.blendMode,c=t.length||-1,l=t.hierarchy||[];for(let h=0;h<l.length;h++){let f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let x=0;x<f[m].morphTargets.length;x++)d[f[m].morphTargets[x]]=-1;for(let x in d){let g=[],p=[];for(let v=0;v!==f[m].morphTargets.length;++v){let _=f[m];g.push(_.time),p.push(_.morphTarget===x?1:0)}i.push(new Js(".morphTargetInfluence["+x+"]",g,p))}c=d.length*o}else{let d=".bones["+e[h].name+"]";n($s,d+".position",f,"pos",i),n(rs,d+".quaternion",f,"rot",i),n($s,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){let t=this.tracks,e=0;for(let n=0,i=t.length;n!==i;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function mM(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Js;case"vector":case"vector2":case"vector3":case"vector4":return $s;case"color":return ya;case"quaternion":return rs;case"bool":case"boolean":return Fi;case"string":return Bi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function gM(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=mM(s.type);if(s.times===void 0){let e=[],n=[];Ld(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}var Ei={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},wa=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let d=l[h],m=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null}}},mg=new wa,pn=class{constructor(t){this.manager=t!==void 0?t:mg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};pn.DEFAULT_MATERIAL_NAME="__DEFAULT";var wi={},Cf=class extends Error{constructor(t,e){super(t),this.response=e}},jn=class extends pn{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=Ei.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(wi[t]!==void 0){wi[t].push({onLoad:e,onProgress:n,onError:i});return}wi[t]=[],wi[t].push({onLoad:e,onProgress:n,onError:i});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=wi[t],h=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),d=f?parseInt(f):0,m=d!==0,x=0,g=new ReadableStream({start(p){v();function v(){h.read().then(({done:_,value:y})=>{if(_)p.close();else{x+=y.byteLength;let S=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:d});for(let b=0,E=u.length;b<E;b++){let C=u[b];C.onProgress&&C.onProgress(S)}p.enqueue(y),v()}})}}});return new Response(g)}else throw new Cf(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(m=>d.decode(m))}}}).then(l=>{Ei.add(t,l);let u=wi[t];delete wi[t];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{let u=wi[t];if(u===void 0)throw this.manager.itemError(t),l;delete wi[t];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}},Pf=class extends pn{constructor(t){super(t)}load(t,e,n,i){let r=this,o=new jn(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),r.manager.itemError(t)}},n,i)}parse(t){let e=[];for(let n=0;n<t.length;n++){let i=Ks.parse(t[n]);e.push(i)}return e}},If=class extends pn{constructor(t){super(t)}load(t,e,n,i){let r=this,o=[],a=new Gr,c=new jn(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(r.withCredentials);let l=0;function u(h){c.load(t[h],function(f){let d=r.parse(f,!0);o[h]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},l+=1,l===6&&(d.mipmapCount===1&&(a.minFilter=Ne),a.image=o,a.format=d.format,a.needsUpdate=!0,e&&e(a))},n,i)}if(Array.isArray(t))for(let h=0,f=t.length;h<f;++h)u(h);else c.load(t,function(h){let f=r.parse(h,!0);if(f.isCubemap){let d=f.mipmaps.length/f.mipmapCount;for(let m=0;m<d;m++){o[m]={mipmaps:[]};for(let x=0;x<f.mipmapCount;x++)o[m].mipmaps.push(f.mipmaps[m*f.mipmapCount+x]),o[m].format=f.format,o[m].width=f.width,o[m].height=f.height}a.image=o}else a.image.width=f.width,a.image.height=f.height,a.mipmaps=f.mipmaps;f.mipmapCount===1&&(a.minFilter=Ne),a.format=f.format,a.needsUpdate=!0,e&&e(a)},n,i);return a}},js=class extends pn{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Ei.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=ta("img");function c(){u(),Ei.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(h){u(),i&&i(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}},Lf=class extends pn{constructor(t){super(t)}load(t,e,n,i){let r=new ks;r.colorSpace=Te;let o=new js(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(t[l],function(u){r.images[l]=u,a++,a===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let l=0;l<t.length;++l)c(l);return r}},Df=class extends pn{constructor(t){super(t)}load(t,e,n,i){let r=this,o=new Ci,a=new jn(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(t,function(c){let l;try{l=r.parse(c)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:hn,o.wrapT=l.wrapT!==void 0?l.wrapT:hn,o.magFilter=l.magFilter!==void 0?l.magFilter:Ne,o.minFilter=l.minFilter!==void 0?l.minFilter:Ne,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0?o.colorSpace=l.colorSpace:l.encoding!==void 0&&(o.encoding=l.encoding),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=Qi),l.mipmapCount===1&&(o.minFilter=Ne),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,e&&e(o,l)},n,i),o}},Uf=class extends pn{constructor(t){super(t)}load(t,e,n,i){let r=new Ve,o=new js(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}},hi=class extends le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new at(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Zr=class extends hi{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new at(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},_h=new Ct,Pm=new T,Im=new T,ba=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hs,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Pm.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pm),Im.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Im),e.updateMatrixWorld(),_h.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_h),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_h)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Nf=class extends ba{constructor(){super(new Fe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Nr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Ol=class extends hi{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(le.DEFAULT_UP),this.updateMatrix(),this.target=new le,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Nf}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Lm=new Ct,No=new T,vh=new T,Ff=class extends ba{constructor(){super(new Fe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new st(4,2),this._viewportCount=6,this._viewports=[new de(2,1,1,1),new de(0,1,1,1),new de(3,1,1,1),new de(1,1,1,1),new de(3,0,1,1),new de(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),No.setFromMatrixPosition(t.matrixWorld),n.position.copy(No),vh.copy(n.position),vh.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(vh),n.updateMatrixWorld(),i.makeTranslation(-No.x,-No.y,-No.z),Lm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lm)}},Jr=class extends hi{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ff}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Bf=class extends ba{constructor(){super(new ts(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qs=class extends hi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(le.DEFAULT_UP),this.updateMatrix(),this.target=new le,this.shadow=new Bf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},zl=class extends hi{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}},kl=class extends hi{constructor(t,e,n=10,i=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){let e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}},Hl=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new T)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){let n=t.x,i=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.282095),e.addScaledVector(o[1],.488603*i),e.addScaledVector(o[2],.488603*r),e.addScaledVector(o[3],.488603*n),e.addScaledVector(o[4],1.092548*(n*i)),e.addScaledVector(o[5],1.092548*(i*r)),e.addScaledVector(o[6],.315392*(3*r*r-1)),e.addScaledVector(o[7],1.092548*(n*r)),e.addScaledVector(o[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){let n=t.x,i=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.886227),e.addScaledVector(o[1],2*.511664*i),e.addScaledVector(o[2],2*.511664*r),e.addScaledVector(o[3],2*.511664*n),e.addScaledVector(o[4],2*.429043*n*i),e.addScaledVector(o[5],2*.429043*i*r),e.addScaledVector(o[6],.743125*r*r-.247708),e.addScaledVector(o[7],2*.429043*n*r),e.addScaledVector(o[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){let n=t.x,i=t.y,r=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-i*i)}},Vl=class extends hi{constructor(t=new Hl,e=1){super(void 0,e),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){let e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}},Gl=class s extends pn{constructor(t){super(t),this.textures={}}load(t,e,n,i){let r=this,o=new jn(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),r.manager.itemError(t)}},n,i)}parse(t){let e=this.textures;function n(r){return e[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),e[r]}let i=s.createMaterialFromType(t.type);if(t.uuid!==void 0&&(i.uuid=t.uuid),t.name!==void 0&&(i.name=t.name),t.color!==void 0&&i.color!==void 0&&i.color.setHex(t.color),t.roughness!==void 0&&(i.roughness=t.roughness),t.metalness!==void 0&&(i.metalness=t.metalness),t.sheen!==void 0&&(i.sheen=t.sheen),t.sheenColor!==void 0&&(i.sheenColor=new at().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(i.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(t.emissive),t.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(t.specular),t.specularIntensity!==void 0&&(i.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(i.shininess=t.shininess),t.clearcoat!==void 0&&(i.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=t.clearcoatRoughness),t.iridescence!==void 0&&(i.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(i.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(i.transmission=t.transmission),t.thickness!==void 0&&(i.thickness=t.thickness),t.attenuationDistance!==void 0&&(i.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(i.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(i.fog=t.fog),t.flatShading!==void 0&&(i.flatShading=t.flatShading),t.blending!==void 0&&(i.blending=t.blending),t.combine!==void 0&&(i.combine=t.combine),t.side!==void 0&&(i.side=t.side),t.shadowSide!==void 0&&(i.shadowSide=t.shadowSide),t.opacity!==void 0&&(i.opacity=t.opacity),t.transparent!==void 0&&(i.transparent=t.transparent),t.alphaTest!==void 0&&(i.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(i.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(i.depthFunc=t.depthFunc),t.depthTest!==void 0&&(i.depthTest=t.depthTest),t.depthWrite!==void 0&&(i.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(i.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(i.blendSrc=t.blendSrc),t.blendDst!==void 0&&(i.blendDst=t.blendDst),t.blendEquation!==void 0&&(i.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(i.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(i.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(i.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(i.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(i.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(i.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(i.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(i.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(i.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(i.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(i.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(i.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(i.rotation=t.rotation),t.linewidth!==void 0&&(i.linewidth=t.linewidth),t.dashSize!==void 0&&(i.dashSize=t.dashSize),t.gapSize!==void 0&&(i.gapSize=t.gapSize),t.scale!==void 0&&(i.scale=t.scale),t.polygonOffset!==void 0&&(i.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(i.dithering=t.dithering),t.alphaToCoverage!==void 0&&(i.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(i.forceSinglePass=t.forceSinglePass),t.visible!==void 0&&(i.visible=t.visible),t.toneMapped!==void 0&&(i.toneMapped=t.toneMapped),t.userData!==void 0&&(i.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?i.vertexColors=t.vertexColors>0:i.vertexColors=t.vertexColors),t.uniforms!==void 0)for(let r in t.uniforms){let o=t.uniforms[r];switch(i.uniforms[r]={},o.type){case"t":i.uniforms[r].value=n(o.value);break;case"c":i.uniforms[r].value=new at().setHex(o.value);break;case"v2":i.uniforms[r].value=new st().fromArray(o.value);break;case"v3":i.uniforms[r].value=new T().fromArray(o.value);break;case"v4":i.uniforms[r].value=new de().fromArray(o.value);break;case"m3":i.uniforms[r].value=new te().fromArray(o.value);break;case"m4":i.uniforms[r].value=new Ct().fromArray(o.value);break;default:i.uniforms[r].value=o.value}}if(t.defines!==void 0&&(i.defines=t.defines),t.vertexShader!==void 0&&(i.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(i.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(i.glslVersion=t.glslVersion),t.extensions!==void 0)for(let r in t.extensions)i.extensions[r]=t.extensions[r];if(t.lights!==void 0&&(i.lights=t.lights),t.clipping!==void 0&&(i.clipping=t.clipping),t.size!==void 0&&(i.size=t.size),t.sizeAttenuation!==void 0&&(i.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(i.map=n(t.map)),t.matcap!==void 0&&(i.matcap=n(t.matcap)),t.alphaMap!==void 0&&(i.alphaMap=n(t.alphaMap)),t.bumpMap!==void 0&&(i.bumpMap=n(t.bumpMap)),t.bumpScale!==void 0&&(i.bumpScale=t.bumpScale),t.normalMap!==void 0&&(i.normalMap=n(t.normalMap)),t.normalMapType!==void 0&&(i.normalMapType=t.normalMapType),t.normalScale!==void 0){let r=t.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new st().fromArray(r)}return t.displacementMap!==void 0&&(i.displacementMap=n(t.displacementMap)),t.displacementScale!==void 0&&(i.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(i.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(i.roughnessMap=n(t.roughnessMap)),t.metalnessMap!==void 0&&(i.metalnessMap=n(t.metalnessMap)),t.emissiveMap!==void 0&&(i.emissiveMap=n(t.emissiveMap)),t.emissiveIntensity!==void 0&&(i.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(i.specularMap=n(t.specularMap)),t.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(t.specularIntensityMap)),t.specularColorMap!==void 0&&(i.specularColorMap=n(t.specularColorMap)),t.envMap!==void 0&&(i.envMap=n(t.envMap)),t.envMapIntensity!==void 0&&(i.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(i.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(i.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(i.lightMap=n(t.lightMap)),t.lightMapIntensity!==void 0&&(i.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(i.aoMap=n(t.aoMap)),t.aoMapIntensity!==void 0&&(i.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(i.gradientMap=n(t.gradientMap)),t.clearcoatMap!==void 0&&(i.clearcoatMap=n(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new st().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(i.iridescenceMap=n(t.iridescenceMap)),t.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(t.iridescenceThicknessMap)),t.transmissionMap!==void 0&&(i.transmissionMap=n(t.transmissionMap)),t.thicknessMap!==void 0&&(i.thicknessMap=n(t.thicknessMap)),t.anisotropyMap!==void 0&&(i.anisotropyMap=n(t.anisotropyMap)),t.sheenColorMap!==void 0&&(i.sheenColorMap=n(t.sheenColorMap)),t.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(t.sheenRoughnessMap)),i}setTextures(t){return this.textures=t,this}static createMaterialFromType(t){let e={ShadowMaterial:Al,SpriteMaterial:Xs,RawShaderMaterial:Rl,ShaderMaterial:dn,PointsMaterial:ui,MeshPhysicalMaterial:Cl,MeshStandardMaterial:nn,MeshPhongMaterial:Pl,MeshToonMaterial:Il,MeshNormalMaterial:Yr,MeshLambertMaterial:Ll,MeshDepthMaterial:oa,MeshDistanceMaterial:aa,MeshBasicMaterial:On,MeshMatcapMaterial:Dl,LineDashedMaterial:Ul,LineBasicMaterial:en,Material:Je};return new e[t]}},Ma=class{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}},Wl=class extends Vt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}},Xl=class extends pn{constructor(t){super(t)}load(t,e,n,i){let r=this,o=new jn(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),r.manager.itemError(t)}},n,i)}parse(t){let e={},n={};function i(d,m){if(e[m]!==void 0)return e[m];let g=d.interleavedBuffers[m],p=r(d,g.buffer),v=Ar(g.type,p),_=new Ws(v,g.stride);return _.uuid=g.uuid,e[m]=_,_}function r(d,m){if(n[m]!==void 0)return n[m];let g=d.arrayBuffers[m],p=new Uint32Array(g).buffer;return n[m]=p,p}let o=t.isInstancedBufferGeometry?new Wl:new Vt,a=t.data.index;if(a!==void 0){let d=Ar(a.type,a.array);o.setIndex(new Gt(d,1))}let c=t.data.attributes;for(let d in c){let m=c[d],x;if(m.isInterleavedBufferAttribute){let g=i(t.data,m.data);x=new es(g,m.itemSize,m.offset,m.normalized)}else{let g=Ar(m.type,m.array),p=m.isInstancedBufferAttribute?Di:Gt;x=new p(g,m.itemSize,m.normalized)}m.name!==void 0&&(x.name=m.name),m.usage!==void 0&&x.setUsage(m.usage),o.setAttribute(d,x)}let l=t.data.morphAttributes;if(l)for(let d in l){let m=l[d],x=[];for(let g=0,p=m.length;g<p;g++){let v=m[g],_;if(v.isInterleavedBufferAttribute){let y=i(t.data,v.data);_=new es(y,v.itemSize,v.offset,v.normalized)}else{let y=Ar(v.type,v.array);_=new Gt(y,v.itemSize,v.normalized)}v.name!==void 0&&(_.name=v.name),x.push(_)}o.morphAttributes[d]=x}t.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);let h=t.data.groups||t.data.drawcalls||t.data.offsets;if(h!==void 0)for(let d=0,m=h.length;d!==m;++d){let x=h[d];o.addGroup(x.start,x.count,x.materialIndex)}let f=t.data.boundingSphere;if(f!==void 0){let d=new T;f.center!==void 0&&d.fromArray(f.center),o.boundingSphere=new Re(d,f.radius)}return t.name&&(o.name=t.name),t.userData&&(o.userData=t.userData),o}},Of=class extends pn{constructor(t){super(t)}load(t,e,n,i){let r=this,o=this.path===""?Ma.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||o;let a=new jn(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(c){let l=null;try{l=JSON.parse(c)}catch(h){i!==void 0&&i(h),console.error("THREE:ObjectLoader: Can't parse "+t+".",h.message);return}let u=l.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+t)),console.error("THREE.ObjectLoader: Can't load "+t);return}r.parse(l,e)},n,i)}async loadAsync(t,e){let n=this,i=this.path===""?Ma.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||i;let r=new jn(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);let o=await r.loadAsync(t,e),a=JSON.parse(o),c=a.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return await n.parseAsync(a)}parse(t,e){let n=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),r=this.parseGeometries(t.geometries,i),o=this.parseImages(t.images,function(){e!==void 0&&e(l)}),a=this.parseTextures(t.textures,o),c=this.parseMaterials(t.materials,a),l=this.parseObject(t.object,r,c,a,n),u=this.parseSkeletons(t.skeletons,l);if(this.bindSkeletons(l,u),e!==void 0){let h=!1;for(let f in o)if(o[f].data instanceof HTMLImageElement){h=!0;break}h===!1&&e(l)}return l}async parseAsync(t){let e=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),i=this.parseGeometries(t.geometries,n),r=await this.parseImagesAsync(t.images),o=this.parseTextures(t.textures,r),a=this.parseMaterials(t.materials,o),c=this.parseObject(t.object,i,a,o,e),l=this.parseSkeletons(t.skeletons,c);return this.bindSkeletons(c,l),c}parseShapes(t){let e={};if(t!==void 0)for(let n=0,i=t.length;n<i;n++){let r=new Fn().fromJSON(t[n]);e[r.uuid]=r}return e}parseSkeletons(t,e){let n={},i={};if(e.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),t!==void 0)for(let r=0,o=t.length;r<o;r++){let a=new al().fromJSON(t[r],i);n[a.uuid]=a}return n}parseGeometries(t,e){let n={};if(t!==void 0){let i=new Xl;for(let r=0,o=t.length;r<o;r++){let a,c=t[r];switch(c.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(c);break;default:c.type in Cm?a=Cm[c.type].fromJSON(c,e):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${c.type}"`)}a.uuid=c.uuid,c.name!==void 0&&(a.name=c.name),c.userData!==void 0&&(a.userData=c.userData),n[c.uuid]=a}}return n}parseMaterials(t,e){let n={},i={};if(t!==void 0){let r=new Gl;r.setTextures(e);for(let o=0,a=t.length;o<a;o++){let c=t[o];n[c.uuid]===void 0&&(n[c.uuid]=r.parse(c)),i[c.uuid]=n[c.uuid]}}return i}parseAnimations(t){let e={};if(t!==void 0)for(let n=0;n<t.length;n++){let i=t[n],r=Ks.parse(i);e[r.uuid]=r}return e}parseImages(t,e){let n=this,i={},r;function o(c){return n.manager.itemStart(c),r.load(c,function(){n.manager.itemEnd(c)},void 0,function(){n.manager.itemError(c),n.manager.itemEnd(c)})}function a(c){if(typeof c=="string"){let l=c,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:n.resourcePath+l;return o(u)}else return c.data?{data:Ar(c.type,c.data),width:c.width,height:c.height}:null}if(t!==void 0&&t.length>0){let c=new wa(e);r=new js(c),r.setCrossOrigin(this.crossOrigin);for(let l=0,u=t.length;l<u;l++){let h=t[l],f=h.url;if(Array.isArray(f)){let d=[];for(let m=0,x=f.length;m<x;m++){let g=f[m],p=a(g);p!==null&&(p instanceof HTMLImageElement?d.push(p):d.push(new Ci(p.data,p.width,p.height)))}i[h.uuid]=new Si(d)}else{let d=a(h.url);i[h.uuid]=new Si(d)}}}return i}async parseImagesAsync(t){let e=this,n={},i;async function r(o){if(typeof o=="string"){let a=o,c=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:e.resourcePath+a;return await i.loadAsync(c)}else return o.data?{data:Ar(o.type,o.data),width:o.width,height:o.height}:null}if(t!==void 0&&t.length>0){i=new js(this.manager),i.setCrossOrigin(this.crossOrigin);for(let o=0,a=t.length;o<a;o++){let c=t[o],l=c.url;if(Array.isArray(l)){let u=[];for(let h=0,f=l.length;h<f;h++){let d=l[h],m=await r(d);m!==null&&(m instanceof HTMLImageElement?u.push(m):u.push(new Ci(m.data,m.width,m.height)))}n[c.uuid]=new Si(u)}else{let u=await r(c.url);n[c.uuid]=new Si(u)}}}return n}parseTextures(t,e){function n(r,o){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),o[r])}let i={};if(t!==void 0)for(let r=0,o=t.length;r<o;r++){let a=t[r];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),e[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);let c=e[a.image],l=c.data,u;Array.isArray(l)?(u=new ks,l.length===6&&(u.needsUpdate=!0)):(l&&l.data?u=new Ci:u=new Ve,l&&(u.needsUpdate=!0)),u.source=c,u.uuid=a.uuid,a.name!==void 0&&(u.name=a.name),a.mapping!==void 0&&(u.mapping=n(a.mapping,xM)),a.channel!==void 0&&(u.channel=a.channel),a.offset!==void 0&&u.offset.fromArray(a.offset),a.repeat!==void 0&&u.repeat.fromArray(a.repeat),a.center!==void 0&&u.center.fromArray(a.center),a.rotation!==void 0&&(u.rotation=a.rotation),a.wrap!==void 0&&(u.wrapS=n(a.wrap[0],Dm),u.wrapT=n(a.wrap[1],Dm)),a.format!==void 0&&(u.format=a.format),a.internalFormat!==void 0&&(u.internalFormat=a.internalFormat),a.type!==void 0&&(u.type=a.type),a.colorSpace!==void 0&&(u.colorSpace=a.colorSpace),a.encoding!==void 0&&(u.encoding=a.encoding),a.minFilter!==void 0&&(u.minFilter=n(a.minFilter,Um)),a.magFilter!==void 0&&(u.magFilter=n(a.magFilter,Um)),a.anisotropy!==void 0&&(u.anisotropy=a.anisotropy),a.flipY!==void 0&&(u.flipY=a.flipY),a.generateMipmaps!==void 0&&(u.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(u.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(u.compareFunction=a.compareFunction),a.userData!==void 0&&(u.userData=a.userData),i[a.uuid]=u}return i}parseObject(t,e,n,i,r){let o;function a(f){return e[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",f),e[f]}function c(f){if(f!==void 0){if(Array.isArray(f)){let d=[];for(let m=0,x=f.length;m<x;m++){let g=f[m];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),d.push(n[g])}return d}return n[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",f),n[f]}}function l(f){return i[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",f),i[f]}let u,h;switch(t.type){case"Scene":o=new Gs,t.background!==void 0&&(Number.isInteger(t.background)?o.background=new at(t.background):o.background=l(t.background)),t.environment!==void 0&&(o.environment=l(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?o.fog=new sl(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(o.fog=new il(t.fog.color,t.fog.density)),t.fog.name!==""&&(o.fog.name=t.fog.name)),t.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=t.backgroundBlurriness),t.backgroundIntensity!==void 0&&(o.backgroundIntensity=t.backgroundIntensity);break;case"PerspectiveCamera":o=new Fe(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(o.focus=t.focus),t.zoom!==void 0&&(o.zoom=t.zoom),t.filmGauge!==void 0&&(o.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(o.filmOffset=t.filmOffset),t.view!==void 0&&(o.view=Object.assign({},t.view));break;case"OrthographicCamera":o=new ts(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(o.zoom=t.zoom),t.view!==void 0&&(o.view=Object.assign({},t.view));break;case"AmbientLight":o=new zl(t.color,t.intensity);break;case"DirectionalLight":o=new Qs(t.color,t.intensity);break;case"PointLight":o=new Jr(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":o=new kl(t.color,t.intensity,t.width,t.height);break;case"SpotLight":o=new Ol(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay);break;case"HemisphereLight":o=new Zr(t.color,t.groundColor,t.intensity);break;case"LightProbe":o=new Vl().fromJSON(t);break;case"SkinnedMesh":u=a(t.geometry),h=c(t.material),o=new ol(u,h),t.bindMode!==void 0&&(o.bindMode=t.bindMode),t.bindMatrix!==void 0&&o.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(o.skeleton=t.skeleton);break;case"Mesh":u=a(t.geometry),h=c(t.material),o=new ee(u,h);break;case"InstancedMesh":u=a(t.geometry),h=c(t.material);let f=t.count,d=t.instanceMatrix,m=t.instanceColor;o=new ci(u,h,f),o.instanceMatrix=new Di(new Float32Array(d.array),16),m!==void 0&&(o.instanceColor=new Di(new Float32Array(m.array),m.itemSize));break;case"BatchedMesh":u=a(t.geometry),h=c(t.material),o=new Vr(t.maxGeometryCount,t.maxVertexCount,t.maxIndexCount,h),o.geometry=u,o.perObjectFrustumCulled=t.perObjectFrustumCulled,o.sortObjects=t.sortObjects,o._drawRanges=t.drawRanges,o._reservedRanges=t.reservedRanges,o._visibility=t.visibility,o._active=t.active,o._bounds=t.bounds.map(x=>{let g=new ae;g.min.fromArray(x.boxMin),g.max.fromArray(x.boxMax);let p=new Re;return p.radius=x.sphereRadius,p.center.fromArray(x.sphereCenter),{boxInitialized:x.boxInitialized,box:g,sphereInitialized:x.sphereInitialized,sphere:p}}),o._maxGeometryCount=t.maxGeometryCount,o._maxVertexCount=t.maxVertexCount,o._maxIndexCount=t.maxIndexCount,o._geometryInitialized=t.geometryInitialized,o._geometryCount=t.geometryCount,o._matricesTexture=l(t.matricesTexture.uuid);break;case"LOD":o=new rl;break;case"Line":o=new li(a(t.geometry),c(t.material));break;case"LineLoop":o=new cl(a(t.geometry),c(t.material));break;case"LineSegments":o=new zn(a(t.geometry),c(t.material));break;case"PointCloud":case"Points":o=new Ui(a(t.geometry),c(t.material));break;case"Sprite":o=new Hr(c(t.material));break;case"Group":o=new Nn;break;case"Bone":o=new ca;break;default:o=new le}if(o.uuid=t.uuid,t.name!==void 0&&(o.name=t.name),t.matrix!==void 0?(o.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=t.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(t.position!==void 0&&o.position.fromArray(t.position),t.rotation!==void 0&&o.rotation.fromArray(t.rotation),t.quaternion!==void 0&&o.quaternion.fromArray(t.quaternion),t.scale!==void 0&&o.scale.fromArray(t.scale)),t.up!==void 0&&o.up.fromArray(t.up),t.castShadow!==void 0&&(o.castShadow=t.castShadow),t.receiveShadow!==void 0&&(o.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.bias!==void 0&&(o.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(o.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(o.shadow.radius=t.shadow.radius),t.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(o.visible=t.visible),t.frustumCulled!==void 0&&(o.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(o.renderOrder=t.renderOrder),t.userData!==void 0&&(o.userData=t.userData),t.layers!==void 0&&(o.layers.mask=t.layers),t.children!==void 0){let f=t.children;for(let d=0;d<f.length;d++)o.add(this.parseObject(f[d],e,n,i,r))}if(t.animations!==void 0){let f=t.animations;for(let d=0;d<f.length;d++){let m=f[d];o.animations.push(r[m])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(o.autoUpdate=t.autoUpdate);let f=t.levels;for(let d=0;d<f.length;d++){let m=f[d],x=o.getObjectByProperty("uuid",m.object);x!==void 0&&o.addLevel(x,m.distance,m.hysteresis)}}return o}bindSkeletons(t,e){Object.keys(e).length!==0&&t.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){let i=e[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}},xM={UVMapping:Kl,CubeReflectionMapping:Pi,CubeRefractionMapping:ji,EquirectangularReflectionMapping:Wo,EquirectangularRefractionMapping:Xo,CubeUVReflectionMapping:jr},Dm={RepeatWrapping:Ii,ClampToEdgeWrapping:hn,MirroredRepeatWrapping:qo},Um={NearestFilter:Ue,NearestMipmapNearestFilter:Jc,NearestMipmapLinearFilter:Bo,LinearFilter:Ne,LinearMipmapNearestFilter:_d,LinearMipmapLinearFilter:Qi},zf=class extends pn{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Ei.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ei.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){i&&i(l),Ei.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});Ei.add(t,c),r.manager.itemStart(t)}},Nc,Sa=class{static getContext(){return Nc===void 0&&(Nc=new(window.AudioContext||window.webkitAudioContext)),Nc}static setContext(t){Nc=t}},kf=class extends pn{constructor(t){super(t)}load(t,e,n,i){let r=this,o=new jn(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(c){try{let l=c.slice(0);Sa.getContext().decodeAudioData(l,function(h){e(h)}).catch(a)}catch(l){a(l)}},n,i);function a(c){i?i(c):console.error(c),r.manager.itemError(t)}}},Nm=new Ct,Fm=new Ct,Ts=new Ct,Hf=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Fe,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Fe,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){let e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,Ts.copy(t.projectionMatrix);let i=e.eyeSep/2,r=i*e.near/e.focus,o=e.near*Math.tan(Bs*e.fov*.5)/e.zoom,a,c;Fm.elements[12]=-i,Nm.elements[12]=i,a=-o*e.aspect+r,c=o*e.aspect+r,Ts.elements[0]=2*e.near/(c-a),Ts.elements[8]=(c+a)/(c-a),this.cameraL.projectionMatrix.copy(Ts),a=-o*e.aspect-r,c=o*e.aspect-r,Ts.elements[0]=2*e.near/(c-a),Ts.elements[8]=(c+a)/(c-a),this.cameraR.projectionMatrix.copy(Ts)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(Fm),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(Nm)}},$r=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Bm();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Bm(){return(typeof performance>"u"?Date:performance).now()}var As=new T,Om=new pe,_M=new T,Rs=new T,Vf=class extends le{constructor(){super(),this.type="AudioListener",this.context=Sa.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new $r}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);let e=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(As,Om,_M),Rs.set(0,0,-1).applyQuaternion(Om),e.positionX){let i=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(As.x,i),e.positionY.linearRampToValueAtTime(As.y,i),e.positionZ.linearRampToValueAtTime(As.z,i),e.forwardX.linearRampToValueAtTime(Rs.x,i),e.forwardY.linearRampToValueAtTime(Rs.y,i),e.forwardZ.linearRampToValueAtTime(Rs.z,i),e.upX.linearRampToValueAtTime(n.x,i),e.upY.linearRampToValueAtTime(n.y,i),e.upZ.linearRampToValueAtTime(n.z,i)}else e.setPosition(As.x,As.y,As.z),e.setOrientation(Rs.x,Rs.y,Rs.z,n.x,n.y,n.z)}},ql=class extends le{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;let e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){if(this.detune=t,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}},Cs=new T,zm=new pe,vM=new T,Ps=new T,Gf=class extends ql{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Cs,zm,vM),Ps.set(0,0,1).applyQuaternion(zm);let e=this.panner;if(e.positionX){let n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(Cs.x,n),e.positionY.linearRampToValueAtTime(Cs.y,n),e.positionZ.linearRampToValueAtTime(Cs.z,n),e.orientationX.linearRampToValueAtTime(Ps.x,n),e.orientationY.linearRampToValueAtTime(Ps.y,n),e.orientationZ.linearRampToValueAtTime(Ps.z,n)}else e.setPosition(Cs.x,Cs.y,Cs.z),e.setOrientation(Ps.x,Ps.y,Ps.z)}},Wf=class{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0,e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}},Yl=class{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,o;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){let n=this.buffer,i=this.valueSize,r=t*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=e}else{o+=e;let a=e/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){let e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){let e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=e*this._origIndex;this._mixBufferRegion(n,i,c,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(n[c]!==n[c+e]){a.setValue(n,i);break}}saveOriginalState(){let t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,o=i;r!==o;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){pe.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){let o=this._workIndex*r;pe.multiplyQuaternionsFlat(t,o,t,e,t,n),pe.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let c=e+a;t[c]=t[c]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,r){for(let o=0;o!==r;++o){let a=e+o;t[a]=t[a]+t[n+o]*i}}},Dd="\\[\\]\\.:\\/",yM=new RegExp("["+Dd+"]","g"),Ud="[^"+Dd+"]",wM="[^"+Dd.replace("\\.","")+"]",bM=/((?:WC+[\/:])*)/.source.replace("WC",Ud),MM=/(WCOD+)?/.source.replace("WCOD",wM),SM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ud),EM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ud),TM=new RegExp("^"+bM+MM+SM+EM+"$"),AM=["material","materials","bones","map"],Xf=class{constructor(t,e,n){let i=n||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},he=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(yM,"")}static parseTrackName(t){let e=TM.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);AM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[i];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};he.Composite=Xf;he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qf=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Pn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){let t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,o=r.length,a,c=t.length,l=this.nCachedObjects_;for(let u=0,h=arguments.length;u!==h;++u){let f=arguments[u],d=f.uuid,m=e[d];if(m===void 0){m=c++,e[d]=m,t.push(f);for(let x=0,g=o;x!==g;++x)r[x].push(new he(f,n[x],i[x]))}else if(m<l){a=t[m];let x=--l,g=t[x];e[g.uuid]=m,t[m]=g,e[d]=x,t[x]=f;for(let p=0,v=o;p!==v;++p){let _=r[p],y=_[x],S=_[m];_[m]=y,S===void 0&&(S=new he(f,n[p],i[p])),_[x]=S}}else t[m]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){let c=arguments[o],l=c.uuid,u=e[l];if(u!==void 0&&u>=r){let h=r++,f=t[h];e[f.uuid]=u,t[u]=f,e[l]=h,t[h]=c;for(let d=0,m=i;d!==m;++d){let x=n[d],g=x[h],p=x[u];x[u]=g,x[h]=p}}}this.nCachedObjects_=r}uncache(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_,o=t.length;for(let a=0,c=arguments.length;a!==c;++a){let l=arguments[a],u=l.uuid,h=e[u];if(h!==void 0)if(delete e[u],h<r){let f=--r,d=t[f],m=--o,x=t[m];e[d.uuid]=h,t[h]=d,e[x.uuid]=f,t[f]=x,t.pop();for(let g=0,p=i;g!==p;++g){let v=n[g],_=v[f],y=v[m];v[h]=_,v[f]=y,v.pop()}}else{let f=--o,d=t[f];f>0&&(e[d.uuid]=h),t[h]=d,t.pop();for(let m=0,x=i;m!==x;++m){let g=n[m];g[h]=g[f],g.pop()}}}this.nCachedObjects_=r}subscribe_(t,e){let n=this._bindingsIndicesByPath,i=n[t],r=this._bindings;if(i!==void 0)return r[i];let o=this._paths,a=this._parsedPaths,c=this._objects,l=c.length,u=this.nCachedObjects_,h=new Array(l);i=r.length,n[t]=i,o.push(t),a.push(e),r.push(h);for(let f=u,d=c.length;f!==d;++f){let m=c[f];h[f]=new he(m,t,e)}return h}unsubscribe_(t){let e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){let i=this._paths,r=this._parsedPaths,o=this._bindings,a=o.length-1,c=o[a],l=t[a];e[l]=n,o[n]=c,o.pop(),r[n]=r[a],r.pop(),i[n]=i[a],i.pop()}}},Zl=class{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;let r=e.tracks,o=r.length,a=new Array(o),c={endingStart:Us,endingEnd:Us};for(let l=0;l!==o;++l){let u=r[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=F0,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){let i=this._clip.duration,r=t._clip.duration,o=r/i,a=i/r;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=t/o,l[1]=e/o,this}stopWarping(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}let r=this._startTime;if(r!==null){let c=(t-r)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);let o=this._updateTime(e),a=this._updateWeight(t);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Td:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case Ql:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){let e=this._clip.duration,n=this.loop,i=this.time+t,r=this._loopCount,o=n===B0;if(t===0)return r===-1?i:o&&(r&1)===1?e-i:i;if(n===N0){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){let a=Math.floor(i/e);i-=e*a,r+=Math.abs(a);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){let l=t<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){let i=this._interpolantSettings;n?(i.endingStart=Ns,i.endingEnd=Ns):(t?i.endingStart=this.zeroSlopeAtStart?Ns:Us:i.endingStart=Jo,e?i.endingEnd=this.zeroSlopeAtEnd?Ns:Us:i.endingEnd=Jo)}_scheduleFading(t,e,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=e,a[1]=r+t,c[1]=n,this}},RM=new Float32Array(1),Yf=class extends $n{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){let n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,o=t._propertyBindings,a=t._interpolants,c=n.uuid,l=this._bindingsByRootAndName,u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){let f=i[h],d=f.name,m=u[d];if(m!==void 0)++m.referenceCount,o[h]=m;else{if(m=o[h],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,d));continue}let x=e&&e._propertyBindings[h].binding.parsedPath;m=new Yl(he.create(n,d,x),f.ValueTypeName,f.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,d),o[h]=m}a[h].resultBuffer=m.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){let i=this._actions,r=this._actionsByClip,o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{let a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){let e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;let r=t._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],u=t._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),t._byClipCacheIndex=null;let h=a.actionByRoot,f=(t._localRoot||this._root).uuid;delete h[f],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){let e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){let e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){let e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){let e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){let e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new va(new Float32Array(2),new Float32Array(2),1,RM),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){let e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){let i=e||this._root,r=i.uuid,o=typeof t=="string"?Ks.findByName(i,t):t,a=o!==null?o.uuid:t,c=this._actionsByClip[a],l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Ql),c!==void 0){let h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let u=new Zl(this,o,e,n);return this._bindAction(u,l),this._addInactiveAction(u,a,r),u}existingAction(t,e){let n=e||this._root,i=n.uuid,r=typeof t=="string"?Ks.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(i,t,r,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){let e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let u=l._cacheIndex,h=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,e[u]=h,e.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(t){let e=t.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,c=a[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},Zf=class s{constructor(t){this.value=t}clone(){return new s(this.value.clone===void 0?this.value:this.value.clone())}},CM=0,Jf=class extends $n{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:CM++}),this.name="",this.usage=Qo,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){let e=this.uniforms.indexOf(t);return e!==-1&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(t){this.name=t.name,this.usage=t.usage;let e=t.uniforms;this.uniforms.length=0;for(let n=0,i=e.length;n<i;n++){let r=Array.isArray(e[n])?e[n]:[e[n]];for(let o=0;o<r.length;o++)this.uniforms.push(r[o].clone())}return this}clone(){return new this.constructor().copy(this)}},$f=class extends Ws{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}},Kf=class{constructor(t,e,n,i,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}},Ea=class{constructor(t,e,n=0,i=1/0){this.ray=new ai(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Br,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return jf(t,this,n,e),n.sort(km),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)jf(t[i],this,n,e);return n.sort(km),n}};function km(s,t){return s.distance-t.distance}function jf(s,t,e,n){if(s.layers.test(t.layers)&&s.raycast(t,e),n===!0){let i=s.children;for(let r=0,o=i.length;r<o;r++)jf(i[r],t,e,!0)}}var Qf=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ae(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},td=class{constructor(t=1,e=0,n=0){return this.radius=t,this.theta=e,this.y=n,this}set(t,e,n){return this.radius=t,this.theta=e,this.y=n,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}clone(){return new this.constructor().copy(this)}},Hm=new st,ed=class{constructor(t=new st(1/0,1/0),e=new st(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Hm.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hm).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Vm=new T,Fc=new T,xn=class{constructor(t=new T,e=new T){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Vm.subVectors(t,this.start),Fc.subVectors(this.end,this.start);let n=Fc.dot(Fc),r=Fc.dot(Vm)/n;return e&&(r=Ae(r,0,1)),r}closestPointToPoint(t,e,n){let i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},Gm=new T,nd=class extends le{constructor(t,e){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";let n=new Vt,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,c=32;o<c;o++,a++){let l=o/c*Math.PI*2,u=a/c*Math.PI*2;i.push(Math.cos(l),Math.sin(l),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new It(i,3));let r=new en({fog:!1,toneMapped:!1});this.cone=new zn(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1);let t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),Gm.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Gm),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},Yi=new T,Bc=new Ct,yh=new Ct,id=class extends zn{constructor(t){let e=gg(t),n=new Vt,i=[],r=[],o=new at(0,0,1),a=new at(0,1,0);for(let l=0;l<e.length;l++){let u=e[l];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(o.r,o.g,o.b),r.push(a.r,a.g,a.b))}n.setAttribute("position",new It(i,3)),n.setAttribute("color",new It(r,3));let c=new en({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,c),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(t){let e=this.bones,n=this.geometry,i=n.getAttribute("position");yh.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<e.length;r++){let a=e[r];a.parent&&a.parent.isBone&&(Bc.multiplyMatrices(yh,a.matrixWorld),Yi.setFromMatrixPosition(Bc),i.setXYZ(o,Yi.x,Yi.y,Yi.z),Bc.multiplyMatrices(yh,a.parent.matrixWorld),Yi.setFromMatrixPosition(Bc),i.setXYZ(o+1,Yi.x,Yi.y,Yi.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose()}};function gg(s){let t=[];s.isBone===!0&&t.push(s);for(let e=0;e<s.children.length;e++)t.push.apply(t,gg(s.children[e]));return t}var sd=class extends ee{constructor(t,e,n){let i=new Ys(e,4,2),r=new On({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},PM=new T,Wm=new at,Xm=new at,rd=class extends le{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";let i=new _a(e);i.rotateY(Math.PI*.5),this.material=new On({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let r=i.getAttribute("position"),o=new Float32Array(r.count*3);i.setAttribute("color",new Gt(o,3)),this.add(new ee(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let e=t.geometry.getAttribute("color");Wm.copy(this.light.color),Xm.copy(this.light.groundColor);for(let n=0,i=e.count;n<i;n++){let r=n<i/2?Wm:Xm;e.setXYZ(n,r.r,r.g,r.b)}e.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),t.lookAt(PM.setFromMatrixPosition(this.light.matrixWorld).negate())}},od=class extends zn{constructor(t=10,e=10,n=4473924,i=8947848){n=new at(n),i=new at(i);let r=e/2,o=t/e,a=t/2,c=[],l=[];for(let f=0,d=0,m=-a;f<=e;f++,m+=o){c.push(-a,0,m,a,0,m),c.push(m,0,-a,m,0,a);let x=f===r?n:i;x.toArray(l,d),d+=3,x.toArray(l,d),d+=3,x.toArray(l,d),d+=3,x.toArray(l,d),d+=3}let u=new Vt;u.setAttribute("position",new It(c,3)),u.setAttribute("color",new It(l,3));let h=new en({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},ad=class extends zn{constructor(t=10,e=16,n=8,i=64,r=4473924,o=8947848){r=new at(r),o=new at(o);let a=[],c=[];if(e>1)for(let h=0;h<e;h++){let f=h/e*(Math.PI*2),d=Math.sin(f)*t,m=Math.cos(f)*t;a.push(0,0,0),a.push(d,0,m);let x=h&1?r:o;c.push(x.r,x.g,x.b),c.push(x.r,x.g,x.b)}for(let h=0;h<n;h++){let f=h&1?r:o,d=t-t/n*h;for(let m=0;m<i;m++){let x=m/i*(Math.PI*2),g=Math.sin(x)*d,p=Math.cos(x)*d;a.push(g,0,p),c.push(f.r,f.g,f.b),x=(m+1)/i*(Math.PI*2),g=Math.sin(x)*d,p=Math.cos(x)*d,a.push(g,0,p),c.push(f.r,f.g,f.b)}}let l=new Vt;l.setAttribute("position",new It(a,3)),l.setAttribute("color",new It(c,3));let u=new en({vertexColors:!0,toneMapped:!1});super(l,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},qm=new T,Oc=new T,Ym=new T,cd=class extends le{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let i=new Vt;i.setAttribute("position",new It([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));let r=new en({fog:!1,toneMapped:!1});this.lightPlane=new li(i,r),this.add(this.lightPlane),i=new Vt,i.setAttribute("position",new It([0,0,0,0,0,1],3)),this.targetLine=new li(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),qm.setFromMatrixPosition(this.light.matrixWorld),Oc.setFromMatrixPosition(this.light.target.matrixWorld),Ym.subVectors(Oc,qm),this.lightPlane.lookAt(Oc),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Oc),this.targetLine.scale.z=Ym.length()}},zc=new T,Ee=new zr,ld=class extends zn{constructor(t){let e=new Vt,n=new en({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(m,x){c(m),c(x)}function c(m){i.push(0,0,0),r.push(0,0,0),o[m]===void 0&&(o[m]=[]),o[m].push(i.length/3-1)}e.setAttribute("position",new It(i,3)),e.setAttribute("color",new It(r,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();let l=new at(16755200),u=new at(16711680),h=new at(43775),f=new at(16777215),d=new at(3355443);this.setColors(l,u,h,f,d)}setColors(t,e,n,i,r){let a=this.geometry.getAttribute("color");a.setXYZ(0,t.r,t.g,t.b),a.setXYZ(1,t.r,t.g,t.b),a.setXYZ(2,t.r,t.g,t.b),a.setXYZ(3,t.r,t.g,t.b),a.setXYZ(4,t.r,t.g,t.b),a.setXYZ(5,t.r,t.g,t.b),a.setXYZ(6,t.r,t.g,t.b),a.setXYZ(7,t.r,t.g,t.b),a.setXYZ(8,t.r,t.g,t.b),a.setXYZ(9,t.r,t.g,t.b),a.setXYZ(10,t.r,t.g,t.b),a.setXYZ(11,t.r,t.g,t.b),a.setXYZ(12,t.r,t.g,t.b),a.setXYZ(13,t.r,t.g,t.b),a.setXYZ(14,t.r,t.g,t.b),a.setXYZ(15,t.r,t.g,t.b),a.setXYZ(16,t.r,t.g,t.b),a.setXYZ(17,t.r,t.g,t.b),a.setXYZ(18,t.r,t.g,t.b),a.setXYZ(19,t.r,t.g,t.b),a.setXYZ(20,t.r,t.g,t.b),a.setXYZ(21,t.r,t.g,t.b),a.setXYZ(22,t.r,t.g,t.b),a.setXYZ(23,t.r,t.g,t.b),a.setXYZ(24,e.r,e.g,e.b),a.setXYZ(25,e.r,e.g,e.b),a.setXYZ(26,e.r,e.g,e.b),a.setXYZ(27,e.r,e.g,e.b),a.setXYZ(28,e.r,e.g,e.b),a.setXYZ(29,e.r,e.g,e.b),a.setXYZ(30,e.r,e.g,e.b),a.setXYZ(31,e.r,e.g,e.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,r.r,r.g,r.b),a.setXYZ(41,r.r,r.g,r.b),a.setXYZ(42,r.r,r.g,r.b),a.setXYZ(43,r.r,r.g,r.b),a.setXYZ(44,r.r,r.g,r.b),a.setXYZ(45,r.r,r.g,r.b),a.setXYZ(46,r.r,r.g,r.b),a.setXYZ(47,r.r,r.g,r.b),a.setXYZ(48,r.r,r.g,r.b),a.setXYZ(49,r.r,r.g,r.b),a.needsUpdate=!0}update(){let t=this.geometry,e=this.pointMap,n=1,i=1;Ee.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),De("c",e,t,Ee,0,0,-1),De("t",e,t,Ee,0,0,1),De("n1",e,t,Ee,-n,-i,-1),De("n2",e,t,Ee,n,-i,-1),De("n3",e,t,Ee,-n,i,-1),De("n4",e,t,Ee,n,i,-1),De("f1",e,t,Ee,-n,-i,1),De("f2",e,t,Ee,n,-i,1),De("f3",e,t,Ee,-n,i,1),De("f4",e,t,Ee,n,i,1),De("u1",e,t,Ee,n*.7,i*1.1,-1),De("u2",e,t,Ee,-n*.7,i*1.1,-1),De("u3",e,t,Ee,0,i*2,-1),De("cf1",e,t,Ee,-n,0,1),De("cf2",e,t,Ee,n,0,1),De("cf3",e,t,Ee,0,-i,1),De("cf4",e,t,Ee,0,i,1),De("cn1",e,t,Ee,-n,0,-1),De("cn2",e,t,Ee,n,0,-1),De("cn3",e,t,Ee,0,-i,-1),De("cn4",e,t,Ee,0,i,-1),t.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}};function De(s,t,e,n,i,r,o){zc.set(i,r,o).unproject(n);let a=t[s];if(a!==void 0){let c=e.getAttribute("position");for(let l=0,u=a.length;l<u;l++)c.setXYZ(a[l],zc.x,zc.y,zc.z)}}var kc=new ae,ud=class extends zn{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new Vt;r.setIndex(new Gt(n,1)),r.setAttribute("position",new Gt(i,3)),super(r,new en({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&kc.setFromObject(this.object),kc.isEmpty())return;let e=kc.min,n=kc.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=e.x,r[4]=n.y,r[5]=n.z,r[6]=e.x,r[7]=e.y,r[8]=n.z,r[9]=n.x,r[10]=e.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=e.z,r[15]=e.x,r[16]=n.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=n.x,r[22]=e.y,r[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}},hd=class extends zn{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Vt;r.setIndex(new Gt(n,1)),r.setAttribute("position",new It(i,3)),super(r,new en({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){let e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}},fd=class extends li{constructor(t,e=1,n=16776960){let i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new Vt;o.setAttribute("position",new It(r,3)),o.computeBoundingSphere(),super(o,new en({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;let a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],c=new Vt;c.setAttribute("position",new It(a,3)),c.computeBoundingSphere(),this.add(new ee(c,new On({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},Zm=new T,Hc,wh,dd=class extends le{constructor(t=new T(0,0,1),e=new T(0,0,0),n=1,i=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",Hc===void 0&&(Hc=new Vt,Hc.setAttribute("position",new It([0,0,0,0,1,0],3)),wh=new ns(0,.5,1,5,1),wh.translate(0,-.5,0)),this.position.copy(e),this.line=new li(Hc,new en({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new ee(wh,new On({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Zm.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Zm,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},pd=class extends zn{constructor(t=1){let e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Vt;i.setAttribute("position",new It(e,3)),i.setAttribute("color",new It(n,3));let r=new en({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(t,e,n){let i=new at,r=this.geometry.attributes.color.array;return i.set(t),i.toArray(r,0),i.toArray(r,3),i.set(e),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}},md=class{constructor(){this.type="ShapePath",this.color=new at,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Ni,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,o){return this.currentPath.bezierCurveTo(t,e,n,i,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(p){let v=[];for(let _=0,y=p.length;_<y;_++){let S=p[_],b=new Fn;b.curves=S.curves,v.push(b)}return v}function n(p,v){let _=v.length,y=!1;for(let S=_-1,b=0;b<_;S=b++){let E=v[S],C=v[b],w=C.x-E.x,M=C.y-E.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(E=v[b],w=-w,C=v[S],M=-M),p.y<E.y||p.y>C.y)continue;if(p.y===E.y){if(p.x===E.x)return!0}else{let D=M*(p.x-E.x)-w*(p.y-E.y);if(D===0)return!0;if(D<0)continue;y=!y}}else{if(p.y!==E.y)continue;if(C.x<=p.x&&p.x<=E.x||E.x<=p.x&&p.x<=C.x)return!0}}return y}let i=ri.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,c,l=[];if(r.length===1)return a=r[0],c=new Fn,c.curves=a.curves,l.push(c),l;let u=!i(r[0].getPoints());u=t?!u:u;let h=[],f=[],d=[],m=0,x;f[m]=void 0,d[m]=[];for(let p=0,v=r.length;p<v;p++)a=r[p],x=a.getPoints(),o=i(x),o=t?!o:o,o?(!u&&f[m]&&m++,f[m]={s:new Fn,p:x},f[m].s.curves=a.curves,u&&m++,d[m]=[]):d[m].push({h:a,p:x[0]});if(!f[0])return e(r);if(f.length>1){let p=!1,v=0;for(let _=0,y=f.length;_<y;_++)h[_]=[];for(let _=0,y=f.length;_<y;_++){let S=d[_];for(let b=0;b<S.length;b++){let E=S[b],C=!0;for(let w=0;w<f.length;w++)n(E.p,f[w].p)&&(_!==w&&v++,C?(C=!1,h[w].push(E)):p=!0);C&&h[_].push(E)}}v>0&&p===!1&&(d=h)}let g;for(let p=0,v=f.length;p<v;p++){c=f[p].s,l.push(c),g=d[p];for(let _=0,y=g.length;_<y;_++)c.holes.push(g[_].h)}return l}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var IM=new ts(-1,1,1,-1,0,1),Nd=class extends Vt{constructor(){super(),this.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new It([0,2,0,0,2,0],2))}},LM=new Nd,su=class{constructor(t){this._mesh=new ee(LM,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,IM)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Fd=1,$t=()=>(Fd=Fd*16807%2147483647)/2147483647,tr=s=>{Fd=s},Wt=(s,t)=>s+(t-s)*$t();function as(s,t,e){e&&(s=(s%e+e)%e,t=(t%e+e)%e);let n=Math.imul(s,374761393)^Math.imul(t,668265263);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967295}function er(s,t,e){let n=Math.floor(s),i=Math.floor(t),r=s-n,o=t-i,a=r*r*(3-2*r),c=o*o*(3-2*o),l=as(n,i,e),u=as(n+1,i,e),h=as(n,i+1,e),f=as(n+1,i+1,e);return l+(u-l)*a+(h-l)*c+(l-u-h+f)*a*c}function Mn(s,t,e=4,n){let i=0,r=.5,o=1,a=0;for(let c=0;c<e;c++)i+=r*er(s*o,t*o,n?n*o:0),a+=r,o*=2,r*=.5;return i/a}function Ra(s,t){let e=document.createElement("canvas");return e.width=s,e.height=t,[e,e.getContext("2d")]}function Qn(s,t=!0){let e=new Wr(s);return e.wrapS=e.wrapT=Ii,t&&(e.colorSpace=Te),e.anisotropy=8,e}function cs(s,t,e){let[n,i]=Ra(s,t),r=i.createImageData(s,t);for(let o=0;o<t;o++)for(let a=0;a<s;a++){let[c,l,u]=e(a,o),h=(o*s+a)*4;r.data[h]=c,r.data[h+1]=l,r.data[h+2]=u,r.data[h+3]=255}return i.putImageData(r,0,0),n}function ru(){let e=cs(256,256,(n,i)=>{let r=Mn(n/256*8,i/256*8,5,8),o=as(n,i,256)*.5+.5,a=200+r*50+(o-.75)*18;return[a,a-2,a-7]});return Qn(e)}function ls(s=256,t=16,e=4){return Qn(cs(s,s,(n,i)=>{let r=Mn(n/s*t,i/s*t,e,t)*255;return[r,r,r]}),!1)}function xg(){let[s,t]=Ra(512,256);t.fillStyle="#6f6656",t.fillRect(0,0,512,256);let e=0;for(;e<256;){let n=22+$t()*26,i=-$t()*40;for(;i<512;){let r=34+$t()*60,o=150+$t()*50,a=$t()*20;t.fillStyle=`rgb(${o+a},${o+a*.5-6},${o-22})`,t.beginPath(),t.roundRect(i+2,e+2,r-4,n-4,7),t.fill(),t.fillStyle="rgba(255,255,255,.08)",t.fillRect(i+5,e+4,r-12,3),i+=r}e+=n}return Qn(s)}function _g(){let[s,t]=Ra(256,256);for(let e=0;e<8;e++){let n=120+$t()*30;t.fillStyle=`rgb(${n+30},${n-5},${n-40})`,t.fillRect(e*32,0,32,256);for(let i=0;i<14;i++){t.strokeStyle=`rgba(60,30,10,${.08+$t()*.12})`,t.beginPath();let r=e*32+$t()*32;t.moveTo(r,0),t.bezierCurveTo(r+4,80,r-4,170,r+2,256),t.stroke()}t.fillStyle="rgba(30,15,5,.75)",t.fillRect(e*32,0,2,256)}return Qn(s)}function Ca(s=[110,70,42]){let t=cs(128,256,(e,n)=>{let r=.75+(Mn(e/128*2,n/256*24,3,0)*.6+er(e/3,n/40)*.4)*.45;return[s[0]*r,s[1]*r,s[2]*r]});return Qn(t)}function vg(){let s=cs(256,512,(t,e)=>{let n=Mn(t/256*4,e/512*3,4,4),i=er(t/18,e/60);return n>.56?[205+i*25,196+i*20,178+i*15]:n>.45?[178+i*20,160+i*15,150+i*10]:[150+i*25,150+i*22,140+i*18]});return Qn(s)}function yg(){let s=cs(128,256,(t,e)=>{let i=45+(er(t/6,e/40)*.6+Mn(t/128*4,e/256*4,3,4)*.4)*60;return[i+6,i+2,i-4]});return Qn(s)}function wg(){let s=cs(256,256,(t,e)=>{let n=as(t,e,256),r=168+Mn(t/256*6,e/256*6,3,6)*40+(n-.5)*60;return[r+14,r,r-26]});return Qn(s)}function bg(){let[s,t]=Ra(256,256);t.fillStyle="#857b6c",t.fillRect(0,0,256,256);for(let e=0;e<256;e+=64)for(let n=e/64%2?-32:0;n<256;n+=64){let i=175+$t()*35;t.fillStyle=`rgb(${i+12},${i},${i-18})`,t.beginPath(),t.roundRect(n+3,e+3,58,58,6),t.fill()}return Qn(s)}function Mg(){let s=cs(256,256,(t,e)=>{let n=as(t,e,256),r=50+er(t/3,e/9)*50+n*25;return[r+26,r+8,r-8]});return Qn(s)}function Sg(){return Qn(cs(256,256,(s,t)=>{let e=200+(as(s,t,256)-.5)*70+(Mn(s/256*8,t/256*8,3,8)-.5)*60;return[e,e,e]}))}function ou(s="rgba(255,230,170,1)",t="rgba(255,130,30,.6)"){let[e,n]=Ra(64,64),i=n.createRadialGradient(32,32,0,32,32,32);i.addColorStop(0,s),i.addColorStop(.25,t),i.addColorStop(1,"rgba(255,80,0,0)"),n.fillStyle=i,n.fillRect(0,0,64,64);let r=new Wr(e);return r.colorSpace=Te,r}function Bd(s,{paper:t="#f4efe4",ink:e="#2a2825"}={}){let n=new tn(1,1,{type:Li});n.depthTexture=new Vs(1,1);let i=new tn(1,1),r=new tn(1,1,{type:Li}),o=new On({colorWrite:!1}),a=new Yr,c=ls(256,64,3);c.wrapS=c.wrapT=Ii;let l=new dn({uniforms:{tColor:{value:n.texture},tDepth:{value:n.depthTexture},tNormal:{value:i.texture},tPaper:{value:c},tFx:{value:r.texture},useFx:{value:0},res:{value:new st(1,1)},dpr:{value:1},near:{value:.3},far:{value:4e3},paper:{value:new at(t).convertLinearToSRGB()},ink:{value:new at(e).convertLinearToSRGB()},exposure:{value:1.75},uTint:{value:new at(1,1,1)},uTintK:{value:0},uHaze:{value:new at(1,1,1)},uHazeK:{value:0},uShim:{value:0},uDark:{value:0},uTime:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
      #include <packing>
      uniform sampler2D tColor, tDepth, tNormal, tPaper, tFx;
      uniform vec2 res; uniform float dpr, near, far, exposure, useFx, uDark, uTintK, uHazeK, uShim, uTime; uniform vec3 paper, ink, uTint, uHaze;
      varying vec2 vUv;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
        return mix(mix(hash(i), hash(i+vec2(1.,0.)), f.x), mix(hash(i+vec2(0.,1.)), hash(i+vec2(1.,1.)), f.x), f.y); }
      float vz(vec2 uv){ return -perspectiveDepthToViewZ(texture2D(tDepth, uv).x, near, far); }
      vec3 nrm(vec2 uv){ return texture2D(tNormal, uv).xyz * 2.0 - 1.0; }
      float edgeAt(vec2 uv, float w){
        vec2 px = w / res; float zc = vz(uv); vec3 nc = nrm(uv);
        float de = 0.0, ne = 0.0;
        vec2 o[4]; o[0] = vec2(px.x, 0.); o[1] = vec2(-px.x, 0.); o[2] = vec2(0., px.y); o[3] = vec2(0., -px.y);
        for (int i = 0; i < 4; i++) { float z = vz(uv + o[i]); de += abs(z - zc) / max(zc, 0.5); ne += 1.0 - clamp(dot(nc, nrm(uv + o[i])), 0.0, 1.0); }
        return max(smoothstep(0.035, 0.11, de), smoothstep(0.3, 0.75, ne) * 0.85);
      }
      vec3 toSRGB(vec3 c){ return mix(c * 12.92, 1.055 * pow(c, vec3(1.0/2.4)) - 0.055, step(0.0031308, c)); }
      void main(){
        vec2 uv = vUv; vec2 fc = gl_FragCoord.xy / dpr;
        // heat shimmer: wobble everything just above the flames
        if (uShim > 0.0 && useFx > 0.5) {
          vec2 dy = vec2(0.0, 18.0 * dpr / res.y);
          float hm = texture2D(tFx, uv - dy).a + texture2D(tFx, uv - dy * 2.5).a * 0.8 + texture2D(tFx, uv - dy * 4.5).a * 0.5;
          hm = clamp(hm, 0.0, 1.0) * uShim;
          vec2 sw = vec2(noise(fc / 14.0 + vec2(0.0, -uTime * 3.0)), noise(fc / 14.0 + vec2(5.2, -uTime * 3.4))) - 0.5;
          uv += sw * hm * 5.0 * dpr / res;
        }
        float d0 = texture2D(tDepth, uv).x;
        float grain = texture2D(tPaper, fc / 300.0).r;
        vec3 pap = paper * (0.955 + 0.07 * grain);
        // hand-drawn wobble: two slightly offset strokes
        vec2 w1 = (vec2(noise(fc / 70.0 + 1.3), noise(fc / 70.0 + 7.1)) - 0.5) * 2.0 * 1.3 * dpr / res;
        vec2 w2 = (vec2(noise(fc / 45.0 + 3.7), noise(fc / 45.0 + 9.2)) - 0.5) * 2.0 * 1.8 * dpr / res;
        float e = max(edgeAt(uv + w1, dpr), edgeAt(uv + w2, dpr) * 0.5);
        e *= 0.75 + 0.25 * noise(fc / 9.0);                       // pressure variation along strokes
        vec3 col;
        float z = vz(uv);
        if (d0 >= 0.99999) { col = pap; }
        else {
          vec3 c = texture2D(tColor, uv).rgb;
          c = toSRGB(1.0 - exp(-c * exposure));
          float lum = dot(c, vec3(0.299, 0.587, 0.114));
          vec3 wash = mix(vec3(lum), c, 0.7);
          float wv = 0.85 + 0.3 * noise(fc / 140.0) ;                 // uneven watercolor pooling
          col = mix(pap, wash * pap * 1.1, mix(0.48, 0.85, uDark * smoothstep(0.2, 0.06, lum)) * wv);
          // pencil hatching in shade (45\xB0), cross-hatch in deep shade
          float br = smoothstep(0.25, 0.65, noise(fc / 18.0));
          float jit = noise(fc / 30.0) * 3.0;
          float l1 = smoothstep(0.78, 0.97, abs(fract((fc.x + fc.y + jit) / 5.5) - 0.5) * 2.0);
          float l2 = smoothstep(0.80, 0.97, abs(fract((fc.x - fc.y + jit) / 6.5) - 0.5) * 2.0);
          float h = l1 * smoothstep(0.52, 0.3, lum) + l2 * smoothstep(0.32, 0.12, lum);
          col = mix(col, ink, clamp(h, 0.0, 1.0) * 0.28 * br);
          // atmospheric fade with distance \u2014 drawings get lighter toward the back
          float far = smoothstep(45.0, 150.0, z);
          col = mix(col, pap, far * 0.8);
          e *= 1.0 - far * 0.85;
        }
        col = mix(col, ink, clamp(e, 0.0, 1.0) * 0.9);
        // unfinished-sketch vignette
        vec2 q = (uv - 0.5) * vec2(res.x / res.y, 1.0);
        float v = smoothstep(0.62, 1.08, length(q) * 1.05 + (noise(uv * 7.0) - 0.5) * 0.18);
        col = mix(col, pap, v);
        // smoke-filled air: warm brown cast and heavier haze toward the top of the frame
        if (uTintK > 0.0) {
          col = mix(col, col * uTint, uTintK);
          float hz = uHazeK * (0.35 + 0.65 * smoothstep(0.15, 1.0, vUv.y)) * (0.8 + 0.4 * noise(fc / 160.0 + uTime * 0.05));
          col = mix(col, uHaze, clamp(hz, 0.0, 0.85));
        }
        if (useFx > 0.5) { vec4 fx = texture2D(tFx, uv); if (fx.a > 0.002) { vec3 fc2 = toSRGB(clamp(fx.rgb / fx.a, 0.0, 4.0)); col = col * (1.0 - min(fx.a, 1.0)) + min(fc2, vec3(1.0)) * min(fx.a, 1.0); } }
        gl_FragColor = vec4(col, 1.0);
      }`,depthTest:!1,depthWrite:!1}),u=new su(l);return{atmo(h){let f=l.uniforms;f.uTint.value.copy(h.tint),f.uTintK.value=h.tintK,f.uHaze.value.copy(h.haze),f.uHazeK.value=h.hazeK,f.uShim.value=h.shim,f.uDark.value=1,f.uTime.value=h.time},setSize(h,f,d){let m=Math.max(1,Math.floor(h*d)),x=Math.max(1,Math.floor(f*d));if(n.width===m&&n.height===x){l.uniforms.dpr.value=d;return}for(let g of[n,i,r])g.setSize(m,x),g.depthTexture&&(g.depthTexture.image.width=m,g.depthTexture.image.height=x),g.dispose();l.uniforms.res.value.set(m,x),l.uniforms.dpr.value=d},render(h,f,d=[],m=null){l.uniforms.near.value=f.near,l.uniforms.far.value=f.far;for(let x of d)x.visible=!1;h.overrideMaterial=a,s.setRenderTarget(i),s.setClearColor(8421631,1),s.clear(),s.render(h,f),h.overrideMaterial=null;for(let x of d)x.visible=!0;if(s.shadowMap.needsUpdate=!0,s.setRenderTarget(n),s.setClearColor(16777215,1),s.clear(),s.render(h,f),l.uniforms.useFx.value=m?1:0,m){let x=s.autoClear;s.autoClear=!1,s.setRenderTarget(r),s.setClearColor(0,0),s.clear(),h.overrideMaterial=o,s.render(h,f),h.overrideMaterial=null,m.userData.soft&&m.userData.soft(n.depthTexture,r.width,r.height,f),s.render(m,f),s.autoClear=x}s.setRenderTarget(null),u.render(s)}}}var Eg=`
.wwh3{--g:#1a3a2a;--o:#e85d04;--sh:clamp(480px,74vh,860px);font-family:inherit;color:#fff;background:linear-gradient(180deg,#1a3a2a,#12291d);border-radius:16px;padding:clamp(16px,2.6vw,40px);box-sizing:border-box}
.wwh3 *{box-sizing:border-box}
.wwh3-head{max-width:760px;margin:0 0 28px}
.wwh3-eyebrow{color:var(--o);font-weight:700;letter-spacing:.12em;text-transform:uppercase;font-size:13px;margin:0 0 10px}
.wwh3-title{font-size:clamp(28px,3.6vw,44px);line-height:1.1;margin:0 0 14px;color:#fff;font-weight:700}
.wwh3-lede{font-size:17px;line-height:1.55;color:rgba(255,255,255,.82);margin:0}
.wwh3-grid{display:grid;grid-template-columns:minmax(0,1.6fr) minmax(400px,1fr);gap:24px;align-items:start}
.wwh3-left{display:flex;flex-direction:column;gap:16px;min-width:0}
.wwh3-stage{position:relative;height:var(--sh);border-radius:12px;overflow:hidden;background:#f4efe4}
.wwh3-stage canvas{display:block;width:100%;height:100%;touch-action:pan-y;cursor:grab}
.wwh3-stage canvas:active{cursor:grabbing}
.wwh3-pins{position:absolute;inset:0;pointer-events:none}
.wwh3-pin{position:absolute;left:0;top:0;width:0;height:0;padding:0;margin:0;border:0;background:none;cursor:pointer;pointer-events:auto;transition:opacity .25s;will-change:translate}
.wwh3-pin .d{position:absolute;left:-6px;top:-6px;width:12px;height:12px;border-radius:50%;background:var(--o);border:2px solid #fff;box-shadow:0 0 0 1px rgba(0,0,0,.25)}
.wwh3-pin .s{position:absolute;left:-1px;top:-34px;width:2px;height:30px;background:var(--o)}
.wwh3-pin .b{position:absolute;left:-16px;top:-64px;width:32px;height:32px;border-radius:50%;border:3px solid #fff;background:var(--o);color:#fff;font:700 14px/26px system-ui,sans-serif;text-align:center;box-shadow:0 2px 6px rgba(0,0,0,.28);transition:scale .15s,background .15s,color .15s}
.wwh3-pin .b:after{content:"";position:absolute;inset:-3px;border-radius:50%;border:2.5px solid var(--o);animation:wwh3-pulse 2.4s ease-out infinite;pointer-events:none}
.wwh3-pin:hover .b,.wwh3-pin.is-active .b{scale:1.15}
.wwh3-pin.is-active .b{background:#fff;color:var(--o);border-color:var(--o)}
.wwh3-pin.is-hidden{opacity:.3}
.wwh3-pin:focus-visible .b{outline:3px solid #ffd166;outline-offset:2px}
.wwh3-ui{position:absolute;left:12px;right:12px;bottom:12px;display:flex;justify-content:space-between;align-items:center;gap:8px;pointer-events:none}
.wwh3-hint b{font-weight:inherit}.wwh3-hint{white-space:nowrap;font-size:12.5px;color:rgba(255,255,255,.75);background:rgba(10,25,17,.6);padding:6px 10px;border-radius:99px}
.wwh3-reset{pointer-events:auto;font:inherit;font-size:12.5px;font-weight:600;color:#fff;background:rgba(10,25,17,.7);border:1px solid rgba(255,255,255,.25);border-radius:99px;padding:6px 12px;cursor:pointer}
.wwh3-reset:hover{border-color:var(--o)}
.wwh3-msg{position:absolute;inset:0;display:grid;place-items:center;font-size:14px;color:#6b665c;text-align:center;padding:20px}
.wwh3-panel{background:#fff;color:var(--g);border-radius:12px;padding:30px;line-height:1.5;height:var(--sh);overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin;scrollbar-color:#c9d2cc transparent}
.wwh3-num{font-size:13px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--o);margin:0 0 8px}
.wwh3-ptitle{font-size:clamp(24px,2.1vw,32px);line-height:1.2;margin:0 0 12px;color:var(--g);font-weight:700}
.wwh3-panel p{margin:0 0 18px;font-size:clamp(16px,1.15vw,18px);color:#2c3a31}
.wwh3-panel .wwh3-num{color:var(--o);font-size:13px;margin:0 0 8px}
.wwh3-panel .wwh3-label{font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#6b7a70;margin:0 0 6px}
.wwh3-panel .wwh3-label.fix{color:var(--g)}
.wwh3-label.fix:before{content:"";display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--o);margin-right:7px;vertical-align:1px}
.wwh3-tags{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 16px}
.wwh3-tag{font-size:13px;font-weight:700;padding:4px 10px;border-radius:99px;background:#fde8da;color:#a84000}
.wwh3-tag.flame{background:#fbe0e0;color:#9b2219}
.wwh3-tag.heat{background:#fff1d1;color:#7d5200}
.wwh3-products{list-style:none;padding:0;margin:0 0 20px;display:flex;flex-wrap:wrap;gap:6px}
.wwh3-products li{font-size:13px;font-weight:600;padding:5px 10px;border-radius:6px;background:#eef3ef;color:var(--g);border:1px solid #d5e0d8}
.wwh3-link{display:inline-block;font-weight:700;color:var(--o);text-decoration:none;font-size:15px}
.wwh3-link:hover{text-decoration:underline}
.wwh3-chips{display:flex;flex-wrap:wrap;gap:8px}
.wwh3-chip{font:inherit;font-size:15px;font-weight:600;color:#fff;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.2);border-radius:99px;padding:7px 14px 7px 8px;cursor:pointer;display:inline-flex;align-items:center;gap:8px;transition:background .15s,border-color .15s}
.wwh3-chip span{display:inline-grid;place-items:center;width:22px;height:22px;border-radius:50%;background:var(--o);font-size:12px}
.wwh3-chip:hover,.wwh3-chip.is-active{background:rgba(232,93,4,.22);border-color:var(--o)}
.wwh3-chip:focus-visible,.wwh3-cta:focus-visible{outline:3px solid #ffd166;outline-offset:2px}
.wwh3-foot{display:flex;flex-wrap:wrap;gap:12px;margin-top:24px}
.wwh3-cta2{display:inline-block;color:#fff;font-weight:700;text-decoration:none;padding:13px 20px;border-radius:8px;border:2px solid var(--o);white-space:nowrap}
.wwh3-cta2:hover{background:rgba(232,93,4,.15)}
.wwh3-cta{display:inline-block;background:var(--o);color:#fff;font-weight:700;text-decoration:none;padding:14px 22px;border-radius:8px;white-space:nowrap}
.wwh3-cta:hover{background:#ff6d0f}
@keyframes wwh3-pulse{0%{transform:scale(1);opacity:.9}100%{transform:scale(2);opacity:0}}
@media(max-width:900px){.wwh3-grid{grid-template-columns:1fr;gap:16px}.wwh3-stage{height:auto;aspect-ratio:4/3.6}.wwh3-panel{height:auto;max-height:none;padding:22px}.wwh3-chips{flex-wrap:nowrap;overflow-x:auto;padding-bottom:4px}.wwh3-chip{flex:0 0 auto}.wwh3-foot{justify-content:center}.wwh3-cta2{white-space:normal;text-align:center}.wwh3-hint b{display:none}}
@media(prefers-reduced-motion:reduce){.wwh3-pin .b:after{animation:none;opacity:0}}

.wwh3-panel .wwh3-fix-intro{margin:0 0 10px}
.wwh3-sols{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px}
.wwh3-sol{display:flex;flex-direction:column;gap:12px;padding:10px;border:1px solid #e1e6e2;border-radius:10px;text-decoration:none;color:inherit;background:#fbfaf7;transition:border-color .15s,box-shadow .15s}
.wwh3-sol:hover{border-color:var(--o);box-shadow:0 2px 10px rgba(0,0,0,.07)}
.wwh3-sol:focus-visible{outline:3px solid #ffd166;outline-offset:2px}
.wwh3-sol.noimg{padding:14px 16px}.wwh3-sol-txt{padding:0 4px 4px}
.wwh3-sol-img{position:relative;display:block;aspect-ratio:3/2;border-radius:6px;overflow:hidden;background:#e8e3d8}
.wwh3-sol-img img{position:absolute;left:0;top:0;width:100%;height:100%;object-fit:cover;display:block}
.wwh3-sol-img.rot img{left:50%;top:50%;width:75%;height:133.34%;transform:translate(-50%,-50%) rotate(90deg)}
.wwh3-sol-txt b{display:block;font-size:clamp(15.5px,1.1vw,17.5px);line-height:1.25;color:var(--g);margin:0 0 3px}
.wwh3-sol-txt span{display:block;font-size:clamp(14px,.98vw,15.5px);line-height:1.45;color:#3d4a41}
.wwh3-sol-txt em{display:block;font-style:normal;font-weight:700;font-size:14px;color:var(--o);margin-top:5px}
@media(max-width:900px){.wwh3-sols{grid-template-columns:repeat(auto-fill,minmax(160px,1fr))}}
@media(max-width:420px){.wwh3-sols{grid-template-columns:1fr}}
.wwh3-btns{display:flex;gap:8px}
.wwh3-tour{pointer-events:auto;font:inherit;font-size:12.5px;font-weight:600;color:#fff;background:var(--o);border:1px solid var(--o);border-radius:99px;padding:6px 12px;cursor:pointer}
.wwh3-tour[aria-pressed=true]{background:rgba(10,25,17,.7);border-color:rgba(255,255,255,.25)}
.wwh3-tour:hover{border-color:var(--o)}
.wwh3-prog{position:absolute;left:0;right:0;bottom:0;height:4px;background:transparent;pointer-events:none}
.wwh3-prog i{display:block;height:100%;width:0;background:var(--o)}
.wwh3:not(.is-touring) .wwh3-prog{display:none}
@media(min-width:1500px){.wwh3{--sh:clamp(560px,76vh,900px)}}
`;var Tg=`<div class="wwh3-head">
  <p class="wwh3-eyebrow">Passive home hardening</p>
  <h2 class="wwh3-title">See where wildfire gets into a home</h2>
  <p class="wwh3-lede">Wildfire Warden makes homes ember-, flame-, and radiant heat-resistant. Spin the home and explore seven common weak points we find during assessments, and how we harden each one.</p>
</div>

<div class="wwh3-grid">
  <div class="wwh3-left">
    <div class="wwh3-stage">
      <div class="wwh3-msg">Loading 3D model\u2026</div>
      <div class="wwh3-pins"></div>
      <div class="wwh3-ui"><span class="wwh3-hint">Drag to rotate<b> \xB7 tap a number</b></span><span class="wwh3-btns"><button type="button" class="wwh3-tour" aria-pressed="true">Pause tour</button><button type="button" class="wwh3-reset">Reset view</button></span></div><div class="wwh3-prog" aria-hidden="true"><i></i></div>
    </div>
    <div class="wwh3-chips" role="list"></div>
  </div>
  <div class="wwh3-panel" aria-live="polite"></div>
</div>

<div class="wwh3-foot"><a class="wwh3-cta" href="/free-assessment">Get My Free Home Assessment</a><a class="wwh3-cta2" href="/fire-test">&#128293; Watch it burn: run the wildfire stress test &rarr;</a></div>`;var Ia="https://cdn.prod.website-files.com/69cec73349fef6b9621b7834/",to={mesh:{u:"6af8d4814191fdadf3e1503b_ww-gable-vent-mesh.jpg",a:"Gable vent from inside the attic with ember-resistant mesh installed behind the louvers",c:"Gable vent mesh"},meshFd:{u:"6af8d4f24ca5b69116353c8e_ww-foundation-vent-mesh.jpg",a:"Foundation vent with new ember-resistant mesh on a stucco wall",c:"Foundation vent mesh"},bgGable:{u:"6af8d4aabff5d7914716c503_ww-brandguard-gable-vent.jpg",a:"Brandguard ember- and flame-resistant gable vent on a stucco wall",c:"Brandguard gable vent"},bgFound:{u:"6af8d514666c32990fd34e52_ww-brandguard-foundation-vent.jpg",a:"Brandguard ember- and flame-resistant foundation vent near ground level",pos:"50% 60%",c:"Brandguard foundation vent"},eave:{u:"6ab1916edf6590de2377eb71_IMG_7248.jpg",a:"Boxed eave and soffit enclosure on a Ventura County home",c:"HardieSoffit enclosure"},gutter:{u:"6af8d4cb994d262a711219e3_ww-gutter-guard.jpg",a:"Stainless steel gutter guard installed along a shingle roof edge",c:"FireStorm guard"},fortify:{u:"6ab1955e65da71e47bd4365e_IMG_6716.PNG",a:"Phos-Chek FORTIFY fire retardant applied to exposed eave wood",pos:"50% 38%",c:"FORTIFY application"},ff88:{u:"6ab195f1b985901b08bb0c38_IMG_7237.jpg",a:"FireFree 88 intumescent coating applied to exterior wood",c:"FireFree 88 coating"}};function Ag(s){var t={Embers:"","Flame contact":"flame","Radiant heat":"heat"},e={mesh:{n:"Wildfire Defense Mesh retrofit",i:"mesh",d:'WDM 98 (1/16") or WDM 75 (1/8") mesh fitted behind your existing vent covers. The cost-effective fix that keeps the airflow your home needs.',h:"/ember-resistant-vents"},meshF:{n:"Wildfire Defense Mesh retrofit",i:"meshFd",d:"Foundation and crawl space vents get the same WDM 98 or WDM 75 mesh, cut and sealed to each opening so required ventilation is maintained.",h:"/ember-resistant-vents"},brand:{n:"Brandguard vent replacement",i:"bgGable",d:"Listed ember- and flame-resistant vents for the most exposed openings, damaged or non-compliant vents, and very high fire hazard zones.",h:"/ember-resistant-vents"},brandF:{n:"Brandguard foundation vents",i:"bgFound",d:"Listed ember- and flame-resistant vents for the most exposed openings, damaged or non-compliant vents, and very high fire hazard zones.",h:"/ember-resistant-vents"},eave:{n:"Boxed eave enclosure",i:"eave",d:"Open rafter bays closed in with non-combustible James Hardie fiber-cement soffit, removing the pockets where heat and embers collect.",h:"/eave-enclosures"},ff88:{n:"FireFree 88 + FfE topcoat",i:"ff88",d:"An intumescent coating that swells into an insulating char under high heat, shielding the wood beneath. Finishes like standard exterior paint.",h:"/services#firefree-88"},fortify:{n:"Phos-Chek FORTIFY",i:"fortify",d:"Long-term fire retardant from the same family used in wildland firefighting, applied to exposed wood such as eaves, framing, and fascia in a single visit.",h:"/fire-retardant-spray"},fortifyV:{n:"Phos-Chek FORTIFY for landscaping",i:"fortify",d:"Long-term retardant applied to the plants you keep near the house so they are harder to ignite.",h:"/fire-retardant-spray"},gutter:{n:"FireStorm stainless gutter guards",i:"gutter",d:"Stainless steel guards that keep leaves, needles, and bark out while water flows through. No fuel bed at the roof line.",h:"/ember-resistant-gutter-guards"},deck:{n:"DeckGuard",d:"Fire-resistant coating for wood decks, fences, and attached wood structures, built to handle foot traffic, weather, and UV.",h:"/services#deckguard"},assess:{n:"Free Zone 0 assessment",d:"We map your first five feet and give you a clear list of what to clear, move, or replace. 30 to 45 minutes, at no cost.",h:"/free-assessment"}},n=[{t:"Attic & gable vents",th:["Embers"],v:'Vents are open pathways into your attic. Wind-driven embers pass through standard 1/4" screens and ignite insulation, stored items, and framing from the inside, often well after the fire front has passed.',f:"Two options, sized to keep the attic ventilation your home requires:",s:["mesh","brand"]},{t:"Fascia, trim & exposed wood",th:["Flame contact","Radiant heat"],v:"Wood fascia, trim, and siding sit where heat and flame concentrate. Radiant heat from burning vegetation or a neighboring structure can ignite them without flame ever touching the house.",f:"We protect the wood you already have:",s:["ff88","fortify"]},{t:"Gutters & roof edge",th:["Embers"],v:"Oak leaves, eucalyptus bark, and pine needles collect in gutters and become a fuel bed at the roof line. Embers that land there ignite the debris and put flame directly against the roof edge and fascia.",f:"Keep the fuel out for good:",s:["gutter"]},{t:"Open eaves & soffits",th:["Embers","Radiant heat"],v:"Open eaves trap rising heat and embers in the pockets between rafters, right where the wall meets the roof. Gaps and vents in the eave lead straight into the attic.",f:"Three options, matched to your home:",s:["eave","ff88","fortify"]},{t:"Decks",th:["Embers","Flame contact"],v:"Embers collect on deck boards and drop into the space underneath, where leaves, firewood, and stored items catch. A burning deck puts flame against your walls, doors, and windows.",f:"Protect the deck, and clear what is stored underneath:",s:["deck"]},{t:"Foundation & crawl space vents",th:["Embers"],v:"Foundation vents sit at ground level, next to mulch, leaves, and plants, exactly where embers pile up. Embers that get through can ignite the floor framing from below.",f:"The same proven fixes as attic vents:",s:["meshF","brandF"]},{t:"Zone 0: the first 5 feet",th:["Embers"],v:"The first five feet around your home is where embers land and collect. Bark mulch, dry plants, wood trellises, and fencing touching the house act like a fuse to the walls, vents, and windows above.",f:"Start with a plan, then treat what stays:",s:["assess","fortifyV"]}],i=s.querySelector(".wwh3-panel"),r=s.querySelector(".wwh3-chips");function o(d){return'<div class="wwh3-tags">'+d.map(function(m){return'<span class="wwh3-tag '+t[m]+'">'+m+"</span>"}).join("")+"</div>"}var a=`<p class="wwh3-num">How wildfire gets in</p><h3 class="wwh3-ptitle">Most homes don't burn from a wall of flame.</h3><p>They ignite when embers, flame contact, and radiant heat find weak points, often well ahead of the fire front. Tap a numbered point, or any highlighted part of the house, to see each vulnerability and how we harden it.</p>`+o(["Embers","Flame contact","Radiant heat"]);function c(d){return String(d).replace(/"/g,"&quot;")}function l(d){var m=e[d],x=m.i&&to[m.i],g=x?'<span class="wwh3-sol-img'+(x.r?" rot":"")+'"><img src="'+Ia+x.u+'" alt="'+c(x.a)+'" loading="lazy" decoding="async"'+(x.pos?' style="object-position:'+x.pos+'"':"")+"></span>":"";return'<a class="wwh3-sol'+(x?"":" noimg")+'" href="'+m.h+'">'+g+'<span class="wwh3-sol-txt"><b>'+m.n+"</b><span>"+m.d+"</span><em>Learn more &rarr;</em></span></a>"}function u(d,m){return'<p class="wwh3-num">'+(m+1)+" of "+n.length+'</p><h3 class="wwh3-ptitle">'+d.t+"</h3>"+o(d.th)+'<p class="wwh3-label">The vulnerability</p><p>'+d.v+'</p><p class="wwh3-label fix">How we solve it</p><p class="wwh3-fix-intro">'+d.f+'</p><div class="wwh3-sols">'+d.s.map(l).join("")+"</div>"}setTimeout(function(){for(var d in to){var m=new Image;m.decoding="async",m.src=Ia+to[d].u}},2500);var h=[],f={D:n,pinned:null,cur:-2,ls:[]};return n.forEach(function(d,m){var x=document.createElement("button");x.type="button",x.className="wwh3-chip",x.setAttribute("role","listitem"),x.innerHTML="<span>"+(m+1)+"</span>"+d.t,x.addEventListener("click",function(){f.pin(m)}),r.appendChild(x),h.push(x)}),f.set=function(d,m){if(d!==f.cur){f.cur=d;for(var x=0;x<n.length;x++)h[x].classList.toggle("is-active",x===d),h[x].setAttribute("aria-pressed",x===d);i.innerHTML=d==null?a:u(n[d],d),i.scrollTop=0}f.ls.forEach(function(g){g(d,!!m)})},f.pin=function(d){f.pinned=d,f.set(d,!0)},s._wwh=f,f.set(null),s._wwh}var Rg=`.wwh3.wwh3s{padding:clamp(16px,2.6vw,40px)}
.wwh3s-grid{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(380px,1fr);gap:clamp(20px,2.6vw,40px);align-items:start}
.wwh3s-side{position:sticky;top:var(--wwh3s-top,20px);align-self:start}
.wwh3s .wwh3-stage{height:calc(100vh - var(--wwh3s-top,20px) - 32px);min-height:420px;max-height:900px}
.wwh3s-now{white-space:nowrap;font-size:12.5px;font-weight:700;color:#fff;background:var(--o);padding:6px 12px;border-radius:99px;opacity:0;transition:opacity .25s}
.wwh3s-now.on{opacity:1}
.wwh3s-list{display:flex;flex-direction:column;gap:clamp(28px,6vh,72px);padding:4vh 0 30vh}
.wwh3s-svc{scroll-margin-top:calc(var(--wwh3s-top,20px) + 16px);background:#fff;color:var(--g);border-radius:14px;padding:clamp(22px,2.2vw,34px);line-height:1.5;border:2px solid transparent;opacity:.55;transition:opacity .35s,border-color .35s,box-shadow .35s}
.wwh3s-svc.is-active{opacity:1;border-color:var(--o);box-shadow:0 10px 30px rgba(0,0,0,.25)}
.wwh3s-svc .wwh3-num{margin:0 0 8px}
.wwh3s-svc h3{font-size:clamp(24px,2.1vw,32px);line-height:1.15;margin:0 0 12px;color:var(--g);font-weight:700}
.wwh3s-svc p{margin:0 0 16px;font-size:clamp(16px,1.1vw,17.5px);color:#2c3a31}
.wwh3s-where{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 18px;padding:0;list-style:none}
.wwh3s-where li button{font:inherit;font-size:13.5px;font-weight:600;color:var(--g);background:#eef3ef;border:1px solid #d5e0d8;border-radius:99px;padding:5px 11px 5px 9px;cursor:pointer;display:inline-flex;align-items:center;gap:6px}
.wwh3s-where li button:before{content:"";width:8px;height:8px;border-radius:50%;background:var(--o)}
.wwh3s-where li button:hover{border-color:var(--o)}
.wwh3s-opts{display:grid;gap:10px;margin:0 0 18px}
.wwh3s-opt{background:#f7f5ef;border-radius:10px;padding:12px 14px;font-size:15px;line-height:1.45;color:#2c3a31}
.wwh3s-opt b{display:block;color:var(--g);font-size:16px;margin:0 0 2px}
.wwh3s-gal{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px;margin:0 0 18px}
.wwh3s-gal.one{grid-template-columns:1fr}
.wwh3s-gal figure{margin:0;position:relative;aspect-ratio:4/3;border-radius:10px;overflow:hidden;background:#e8e3d8}
.wwh3s-gal.one figure{aspect-ratio:16/9}
.wwh3s-gal img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}
.wwh3s-gal figcaption{position:absolute;left:8px;bottom:8px;font-size:12px;font-weight:700;color:#fff;background:rgba(10,25,17,.72);padding:3px 8px;border-radius:99px}
.wwh3s-prod{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 20px;padding:0;list-style:none}
.wwh3s-prod li{font-size:13px;font-weight:600;padding:5px 10px;border-radius:6px;background:#fff;color:var(--g);border:1px solid #d5e0d8}
.wwh3s-prod:before{content:"Products";width:100%;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#6b7a70}
.wwh3s-cta{display:inline-block;background:var(--o);color:#fff;font-weight:700;text-decoration:none;padding:13px 20px;border-radius:8px}
.wwh3s-cta:hover{background:#ff6d0f}
.wwh3s .wwh3-pin.is-off{opacity:0;pointer-events:none}
.wwh3s .wwh3-pin .b{left:-11px;top:-52px;width:22px;height:22px;font-size:0;line-height:0}
.wwh3s .wwh3-pin .s{top:-30px;height:26px}
@media(max-width:900px){
 .wwh3s-grid{grid-template-columns:1fr;gap:14px}
 .wwh3s-side{top:var(--wwh3s-top-m,0px);z-index:2}
 .wwh3s .wwh3-stage{height:38vh;min-height:240px;box-shadow:0 8px 20px rgba(0,0,0,.35)}
 .wwh3s-list{padding:2vh 0 10vh}
 .wwh3s-svc{opacity:1;scroll-margin-top:calc(38vh + 80px)}
}
`;var Cg=`<div class="wwh3s-grid">
  <div class="wwh3s-side">
    <div class="wwh3-stage">
      <div class="wwh3-msg">Loading 3D model\u2026</div>
      <div class="wwh3-pins"></div>
      <div class="wwh3-ui"><span class="wwh3-hint">Scroll to explore<b> \xB7 drag to rotate</b></span><span class="wwh3s-now" aria-hidden="true"></span></div>
    </div>
  </div>
  <div class="wwh3s-list"></div>
</div>
`;var BM={Embers:"","Flame contact":"flame","Radiant heat":"heat"},Pg={attic:"Attic & gable vents",wood:"Fascia, trim & exposed wood",gutter:"Gutters & roof edge",eaves:"Open eaves & soffits",deck:"Decks",found:"Foundation & crawl space vents",zone:"Zone 0: the first 5 feet"},OM=["attic","wood","gutter","eaves","deck","found","zone"],nr=[{id:"vents",n:"Ember-Resistant Vents",th:["Embers"],keys:["attic","found"],view:{t:[-.4,3.3,4.2],az:.02,el:.12,d:25},d:"Vents are the easiest way for wind-driven embers to get inside a home. We offer two tiers, matched to your exposure and the condition of your vents.",opts:[["Wildfire Defense Mesh retrofit",'WDM 98 (1/16") or WDM 75 (1/8") mesh fitted behind your existing vent covers. The cost-effective fix that keeps the airflow your home needs.'],["Brandguard vent replacement","Listed ember- and flame-resistant vents for the most exposed openings, damaged or non-compliant vents, and very high fire hazard zones."]],extra:"Low-profile roof vents can also get an intumescent coating on the exposed plywood beneath them.",imgs:["mesh","meshFd","bgGable","bgFound"],prod:["Wildfire Defense Mesh","Brandguard","Firetect WT-102"],cta:["Vent Options & Free Quote","/ember-resistant-vents"]},{id:"eaves",n:"Boxed Eaves",th:["Embers","Radiant heat"],keys:["eaves"],view:{t:[11,3.3,3],az:.42,el:.05,d:13},d:"Open eaves trap rising heat and embers in the pockets between rafters, right where the wall meets the roof. We enclose them with non-combustible HardieSoffit fiber-cement panels, closing the pathway into the roof structure.",imgs:["eave"],prod:["James Hardie HardieSoffit"],cta:["Eave Enclosures & Free Quote","/eave-enclosures"]},{id:"gutters",n:"Gutter Guards",th:["Embers"],keys:["gutter"],view:{t:[10,3.6,1],az:.32,el:.38,d:19},d:"Leaves, needles, and bark collect in gutters and become a fuel bed at the roof line. Stainless steel, ember-blocking guards keep the debris out while water flows through, so there is nothing for embers to ignite. Year-round protection with less upkeep.",imgs:["gutter"],prod:["FireStorm stainless steel gutter guards"],cta:["Gutter Guards & Free Quote","/ember-resistant-gutter-guards"]},{id:"fortify",n:"Phos-Chek FORTIFY",th:["Flame contact","Radiant heat"],keys:["eaves","wood","zone"],view:{t:[4.5,3,3.2],az:.22,el:.2,d:31},d:"A long-term fire retardant from the same product family used in wildland firefighting. We apply it in a single visit to the landscaping near your home and to exposed structural wood such as eaves, rafter tails, and fascia.",imgs:["fortify"],prod:["Phos-Chek FORTIFY"],cta:["FORTIFY Spray & Free Quote","/fire-retardant-spray"]},{id:"firefree-88",n:"FireFree 88 + FfE Topcoat",th:["Flame contact"],keys:["wood","eaves"],view:{t:[5,4.4,4],az:.28,el:.14,d:26},d:"A two-layer coating system for wood and wood-composite siding, trim, and fascia. The intumescent base swells into an insulating char under high heat, and the topcoat finishes like standard exterior paint, so you keep the wood you already have.",imgs:["ff88"],prod:["FireFree 88","FfE Topcoat"],cta:["Get a Free Assessment & Quote","/free-assessment"]},{id:"deckguard",n:"DeckGuard",th:["Embers","Flame contact"],keys:["deck"],view:{t:[-7.5,-.3,0],az:-1.15,el:.22,d:17},d:"Embers collect on deck boards and drop into the space underneath. DeckGuard is a fire-resistant coating for wood decks, fences, and connected wood structures, built to hold up to foot traffic, weather, and UV.",imgs:[],prod:["DeckGuard"],cta:["Get a Free Assessment & Quote","/free-assessment"]}],au=s=>String(s).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;");function zM(s,t){let e='<div class="wwh3-tags">'+s.th.map(o=>'<span class="wwh3-tag '+BM[o]+'">'+o+"</span>").join("")+"</div>",n='<ul class="wwh3s-where" aria-label="Where it protects">'+s.keys.map(o=>'<li><button type="button" data-k="'+o+'">'+Pg[o]+"</button></li>").join("")+"</ul>",i=s.opts?'<div class="wwh3s-opts">'+s.opts.map(o=>'<div class="wwh3s-opt"><b>'+o[0]+"</b>"+au(o[1])+"</div>").join("")+"</div>":"",r=s.imgs.length?'<div class="wwh3s-gal'+(s.imgs.length===1?" one":"")+'">'+s.imgs.map(o=>{let a=to[o];return'<figure><img src="'+Ia+a.u+'" alt="'+au(a.a)+'" loading="lazy" decoding="async"'+(a.pos?' style="object-position:'+a.pos+'"':"")+"><figcaption>"+a.c+"</figcaption></figure>"}).join("")+"</div>":"";return'<article class="wwh3s-svc" id="'+s.id+'" data-i="'+t+'"><p class="wwh3-num">'+String(t+1).padStart(2,"0")+" / "+String(nr.length).padStart(2,"0")+"</p><h3>"+s.n+"</h3>"+e+"<p>"+au(s.d)+"</p>"+i+(s.extra?"<p>"+au(s.extra)+"</p>":"")+'<p class="wwh3-label">Where it protects</p>'+n+r+'<ul class="wwh3s-prod">'+s.prod.map(o=>"<li>"+o+"</li>").join("")+'</ul><a class="wwh3s-cta" href="'+s.cta[1]+'">'+s.cta[0]+" &rarr;</a></article>"}function Ig(s){let t=s.querySelector(".wwh3s-list"),e=s.querySelector(".wwh3s-now");t.innerHTML=nr.map(zM).join("");let n=[...t.querySelectorAll(".wwh3s-svc")],i={D:OM.map(l=>({t:Pg[l]})),pinned:null,cur:-2,ls:[]};i.sel=l=>l==null?null:{keys:nr[l].keys,view:nr[l].view},i.set=(l,u)=>{l!==i.cur&&(i.cur=l,n.forEach((h,f)=>h.classList.toggle("is-active",f===l)),e&&(e.textContent=l==null?"":nr[l].n,e.classList.toggle("on",l!=null))),i.ls.forEach(h=>h(l,!!u))},i.pin=l=>{i.pinned=l,i.set(l,!0)},i.pickKey=l=>{let u=nr.findIndex(h=>h.keys.includes(l));u>=0&&n[u].scrollIntoView({behavior:"smooth",block:"start"})},i.focusKey=null,t.addEventListener("click",l=>{let u=l.target.closest("button[data-k]");if(!u||!i.focusKey)return;let h=+u.closest(".wwh3s-svc").dataset.i;h!==i.cur&&i.pin(h),i.focusKey(u.dataset.k)});let r=null,o=new IntersectionObserver(l=>{l.forEach(u=>{u.isIntersecting&&(r=+u.target.dataset.i)}),r!=null&&r!==i.cur&&i.pin(r)},{rootMargin:"-35% 0px -55% 0px"});n.forEach(l=>o.observe(l)),i.set(null);let a=(location.hash||"").slice(1),c=nr.findIndex(l=>l.id===a);return c>=0&&setTimeout(()=>{n[c].scrollIntoView({block:"start"}),i.pin(c)},300),s._wwh=i,i}var Lg=`.wwh3f-head{margin:0 0 18px}
.wwh3f-title{font-size:clamp(26px,3vw,42px);line-height:1.1;margin:6px 0 10px;color:#fff;font-weight:700}
.wwh3f-sub{margin:0;color:#cfe0d5;font-size:clamp(15px,1.15vw,18px);max-width:900px}
.wwh3f-stage{height:clamp(420px,66vh,820px)}
.wwh3f .wwh3-pins{display:none}
.wwh3f-labels{position:absolute;inset:0;pointer-events:none;z-index:3}
.wwh3f-lab{position:absolute;left:0;top:0;transform:translate(-50%,-100%);max-width:220px;font-size:12.5px;line-height:1.3;font-weight:700;padding:6px 9px;border-radius:8px;color:#fff;background:rgba(150,30,10,.92);box-shadow:0 4px 14px rgba(0,0,0,.3);transition:opacity .25s;white-space:normal}
.wwh3f-lab:after{content:"";position:absolute;left:50%;bottom:-6px;margin-left:-6px;border:6px solid transparent;border-bottom:0;border-top-color:inherit}
.wwh3f-lab.stop{background:rgba(26,100,60,.95)}
.wwh3f-lab.stop:before{content:"\\2713  "}
.wwh3f-lab.big{background:rgba(110,10,5,.95);font-size:14px}
.wwh3f-side{position:absolute;top:12px;z-index:4;pointer-events:none}
.wwh3f-side span{display:inline-block;font-size:13px;font-weight:700;color:#fff;background:rgba(10,25,17,.78);padding:6px 12px;border-radius:99px}
.wwh3f-side.l{left:12px}.wwh3f-side.r{left:calc(50% + 12px)}
.wwh3f:not(.is-cmp) .wwh3f-side.l{display:none}.wwh3f:not(.is-cmp) .wwh3f-side.r{left:12px}
.wwh3f.is-vert .wwh3f-side.r{left:12px;top:calc(50% + 12px)}
.wwh3f-phase{position:absolute;left:50%;bottom:14px;transform:translateX(-50%);z-index:4;font-size:13px;font-weight:700;color:#fff;background:var(--o);padding:7px 14px;border-radius:99px;opacity:0;transition:opacity .3s;pointer-events:none;white-space:nowrap}
.wwh3f-phase.on{opacity:1}
.wwh3f-go{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:5;font:inherit;font-size:clamp(16px,1.4vw,20px);font-weight:700;color:#fff;background:var(--o);border:0;border-radius:12px;padding:16px 28px;cursor:pointer;box-shadow:0 10px 30px rgba(0,0,0,.35)}
.wwh3f-go:hover{background:#ff6d0f}
.wwh3f.is-run .wwh3f-go{display:none}
.wwh3f-bar{display:flex;align-items:center;gap:12px;margin:12px 0 0}
.wwh3f-play{flex:none;width:44px;height:44px;border-radius:50%;border:0;background:var(--o);color:#fff;font-size:16px;cursor:pointer}
.wwh3f-track{position:relative;flex:1;height:44px}
.wwh3f-segs{position:absolute;left:0;right:0;top:0;display:flex;height:16px;font-size:11.5px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:#cfe0d5}
.wwh3f-segs span{border-left:2px solid rgba(255,255,255,.25);padding-left:6px;overflow:hidden;white-space:nowrap}
.wwh3f-range{position:absolute;left:0;right:0;bottom:4px;width:100%;accent-color:var(--o);margin:0}
.wwh3f-clock{flex:none;min-width:88px;text-align:right;font-variant-numeric:tabular-nums;font-weight:700;color:#fff;font-size:14px}
.wwh3f-ctl{display:grid;grid-template-columns:auto 1fr auto;gap:18px 28px;margin:18px 0 0;align-items:start}
.wwh3f-grp .wwh3-label{color:#cfe0d5;margin:0 0 8px}
.wwh3f-presets,.wwh3f-wind{display:flex;flex-wrap:wrap;gap:6px}
.wwh3f-presets button,.wwh3f-wind button{font:inherit;font-size:14px;font-weight:600;color:#fff;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.22);border-radius:99px;padding:8px 14px;cursor:pointer}
.wwh3f-wind button[aria-checked=true],.wwh3f-presets button.on{background:var(--o);border-color:var(--o)}
.wwh3f-ups{display:flex;flex-wrap:wrap;gap:8px}
.wwh3f-up{display:inline-flex;align-items:center;gap:8px;font:inherit;font-size:14px;font-weight:600;color:#fff;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.22);border-radius:10px;padding:8px 12px 8px 8px;cursor:pointer;text-align:left}
.wwh3f-up i{flex:none;font-style:normal;width:22px;height:22px;border-radius:50%;background:rgba(255,255,255,.15);display:grid;place-items:center;font-size:12px;font-weight:800}
.wwh3f-up[aria-pressed=true]{background:#1f6b45;border-color:#3fbf7f}
.wwh3f-up[aria-pressed=true] i{background:#3fbf7f;color:#0d2a1b}
.wwh3f-cmp{display:flex;align-items:center;gap:8px;margin:14px 0 0;color:#fff;font-size:14px;font-weight:600;cursor:pointer}
.wwh3f-cmp input{accent-color:var(--o);width:18px;height:18px}
.wwh3f-res{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:22px 0 0}
.wwh3f:not(.is-cmp) .wwh3f-res{grid-template-columns:1fr}
.wwh3f-card{background:#fff;color:var(--g);border-radius:14px;padding:clamp(18px,2vw,28px);line-height:1.45}
.wwh3f-card h3{margin:4px 0 10px;font-size:clamp(20px,1.7vw,26px);line-height:1.2}
.wwh3f-card.bad{border-top:6px solid #b3261e}.wwh3f-card.ok{border-top:6px solid #2e8b57}.wwh3f-card.mid{border-top:6px solid var(--o)}
.wwh3f-card ul{margin:0 0 14px;padding:0;list-style:none}
.wwh3f-card li{padding:6px 0;border-bottom:1px solid #eee;font-size:15px;display:flex;gap:10px}
.wwh3f-card li b{flex:none;min-width:58px;font-variant-numeric:tabular-nums;color:#6b7a70;font-weight:700}
.wwh3f-card li.x:before{content:"\\2716";color:#b3261e}.wwh3f-card li.v:before{content:"\\2713";color:#2e8b57}
.wwh3f-fix{display:flex;flex-wrap:wrap;gap:8px;margin:6px 0 14px}
.wwh3f-fix a{font-size:14px;font-weight:700;color:var(--g);background:#eef3ef;border:1px solid #d5e0d8;border-radius:8px;padding:7px 11px;text-decoration:none}
.wwh3f-fix a:hover{border-color:var(--o)}
.wwh3f-card .wwh3s-cta{margin-top:4px}
.wwh3f-disc{margin:18px 0 0;font-size:13px;color:#9fb5a7;line-height:1.5;max-width:1100px}
@media(max-width:900px){
 .wwh3f-stage{height:auto;aspect-ratio:3/4}
 .wwh3f-ctl{grid-template-columns:1fr}
 .wwh3f-res{grid-template-columns:1fr}
 .wwh3f-lab{max-width:150px;font-size:11px;padding:4px 7px}
 .wwh3f-segs{font-size:9.5px}
}
.wwh3f .wwh3s-cta{display:inline-block;background:var(--o);color:#fff;font-weight:700;text-decoration:none;padding:12px 18px;border-radius:8px}
.wwh3f .wwh3s-cta:hover{background:#ff6d0f}
@media(max-width:600px){.wwh3f-segs{display:none}.wwh3f-track{height:28px}.wwh3f-range{bottom:8px}}
`;var Dg=`<div class="wwh3f-head">
  <p class="wwh3-eyebrow">Wildfire stress test</p>
  <h2 class="wwh3f-title">Watch what happens when a wildfire reaches the home</h2>
  <p class="wwh3f-sub">Pick the upgrades, set the wind, and run the fire. The left house has no upgrades. The right house has the ones you select.</p>
</div>
<div class="wwh3-stage wwh3f-stage">
  <div class="wwh3-msg">Loading 3D model\u2026</div>
  <div class="wwh3-pins"></div>
  <div class="wwh3f-labels" aria-hidden="true"></div>
  <div class="wwh3f-side l"><span>Typical home</span></div><div class="wwh3f-side r"><span>With your upgrades</span></div>
  <div class="wwh3f-phase" aria-live="polite"></div>
  <button type="button" class="wwh3f-go">&#9654; Start the fire</button>
</div>
<div class="wwh3f-bar">
  <button type="button" class="wwh3f-play" aria-label="Play">&#9654;</button>
  <div class="wwh3f-track"><div class="wwh3f-segs"></div><input type="range" class="wwh3f-range" min="0" max="1000" value="0" aria-label="Simulation time"></div>
  <span class="wwh3f-clock">0:00</span>
</div>
<div class="wwh3f-ctl">
  <div class="wwh3f-grp"><p class="wwh3-label">Start from</p><div class="wwh3f-presets"></div></div>
  <div class="wwh3f-grp wide"><p class="wwh3-label">Upgrades on the right-hand house</p><div class="wwh3f-ups"></div></div>
  <div class="wwh3f-grp"><p class="wwh3-label">Wind</p><div class="wwh3f-wind" role="radiogroup" aria-label="Wind"></div>
    <label class="wwh3f-cmp"><input type="checkbox" checked> Side-by-side comparison</label></div>
</div>
<div class="wwh3f-res" hidden></div>
<p class="wwh3f-disc">Illustrative simulation. It shows the common ways homes ignite during a wildfire, based on published post-fire studies and full-scale testing. It is not a prediction for any specific property. Real outcomes depend on fire behavior, construction, maintenance and defensible space.</p>
`;var Ug=`
float h21(vec2 p){ p=fract(p*vec2(123.34,456.21)); p+=dot(p,p+45.32); return fract(p.x*p.y); }
float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
  return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
float fbm(vec2 p){ float a=0.5, s=0.0; for(int i=0;i<OCT;i++){ s+=a*vn(p); p=p*2.03+vec2(1.7,9.2); a*=0.5; } return s; }
`,us={tSD:{value:null},uSRes:{value:new st(1,1)},uSNear:{value:.3},uSFar:{value:4e3}},Ng=`
#include <packing>
uniform sampler2D tSD; uniform vec2 uSRes; uniform float uSNear, uSFar;
float softK(float w){
  float sz = -perspectiveDepthToViewZ(texture2D(tSD, gl_FragCoord.xy / uSRes).x, uSNear, uSFar);
  float fz = -perspectiveDepthToViewZ(gl_FragCoord.z, uSNear, uSFar);
  return clamp((sz - fz) / w, 0.0, 1.0);
}`,VM=`
uniform float uLean;
varying vec2 vUv;
void main(){
  vUv = uv;
  vec4 mv = modelViewMatrix * vec4(0.0,0.0,0.0,1.0);
  vec2 sc = vec2(length(modelMatrix[0].xyz), length(modelMatrix[1].xyz));
  vec2 p = position.xy * sc;
  vec2 wd = (viewMatrix * vec4(1.0, 0.0, 0.0, 0.0)).xy;   // world wind dir (+x) in view space
  mv.xy += p + wd * (uLean * uv.y * uv.y * sc.y);          // wind bends the tips
  gl_Position = projectionMatrix * mv;
}`,GM=`
uniform float uT, uSeed, uI, uLean;
varying vec2 vUv;
${Ug}
${Ng}
void main(){
  float y = vUv.y, x = (vUv.x - 0.5) * 2.0;
  float t = uT;
  vec2 q = vec2(x * 3.2 + uSeed - t * uLean * 2.2, y * 3.0 - t * (2.6 - uLean * 0.8));
  float w1 = fbm(q * 0.7 + vec2(uSeed * 0.3, -t * 0.9));
  float n  = fbm(q + vec2(w1 * 1.8 - 0.9, w1 * 1.2));          // domain warp -> licking tongues
  float sway = (w1 - 0.5) * 1.3 * y;
  float width = mix(0.95, 0.4, y);
  float d = abs(x + sway) / width;
  float body = 1.0 - d * d;
  float erosion = (1.0 - n) * (0.55 + 1.5 * y);
  float heat = body * 1.3 - erosion - y * 0.3;
  heat *= smoothstep(0.0, 0.1, y) * smoothstep(1.0, 0.75, y);
  heat *= uI;
  if (heat <= 0.01) discard;
  vec3 c = mix(vec3(0.55, 0.06, 0.01), vec3(1.0, 0.3, 0.03), smoothstep(0.05, 0.4, heat));
  c = mix(c, vec3(1.0, 0.62, 0.12), smoothstep(0.35, 0.75, heat));
  c = mix(c, vec3(1.0, 0.9, 0.6), smoothstep(0.7, 1.2, heat));
  float a = smoothstep(0.0, 0.55, heat) * softK(0.9);
  gl_FragColor = vec4(c * 1.05 * a, a * 0.85);
}`,WM=`
uniform float uT, uSeed, uI;
uniform vec3 uCol;
varying vec2 vUv;
${Ug}
${Ng}
void main(){
  vec2 p = vUv - vec2(0.5, 0.5);
  float t = uT * 0.35;
  vec2 q = vUv * 2.4 + vec2(uSeed, -t);
  float n = fbm(q + fbm(q * 0.8 + t * 0.4));
  float r = length(p * vec2(1.0, 0.85)) * 2.0;
  float a = smoothstep(1.0, 0.25, r + (n - 0.5) * 0.9) * uI * softK(2.5);
  if (a <= 0.01) discard;
  vec3 c = uCol * (0.75 + n * 0.5);
  gl_FragColor = vec4(c * a, a);        // premultiplied
}`,XM=new Kn(1,1).translate(0,.5,0),qM=new Kn(1,1);function Fg(s){let t=s?3:4,e={value:0},n=(o,a)=>new dn({uniforms:{...us,uT:e,uSeed:{value:0},uI:{value:1},uLean:{value:0},uCol:{value:new at(.35,.32,.3)}},vertexShader:VM,fragmentShader:o,defines:{OCT:t},transparent:!0,depthWrite:!1,depthTest:!0,blending:$l,blendSrc:Kr,blendDst:a?Os:Kr,blendSrcAlpha:Kr,blendDstAlpha:Os}),i=n(GM,!1),r=n(WM,!0);return{time:e,flame(o){let a=i.clone();Object.assign(a.uniforms,us),a.uniforms.uT=e,a.uniforms.uSeed.value=o;let c=new ee(XM,a);return c.frustumCulled=!1,c.renderOrder=2,c},smoke(o){let a=r.clone();Object.assign(a.uniforms,us),a.uniforms.uT=e,a.uniforms.uSeed.value=o;let c=new ee(qM,a);return c.frustumCulled=!1,c.renderOrder=1,c}}}var ti=["attic","wood","gutter","eaves","deck","found","zone"];var ir=240,zd=[[0,60,"Ember storm"],[60,80,"Fire front"],[80,240,"After the front"]],eo={calm:{f:.6,n:"Light wind"},windy:{f:1,n:"Windy"},santaana:{f:1.5,n:"Santa Ana"}},no={attic:{n:"Attic & gable vents",fix:"Ember-resistant vent mesh or Brandguard vents",svc:"vents"},wood:{n:"Fascia, trim & exposed wood",fix:"FireFree 88 or Phos-Chek FORTIFY",svc:"firefree-88"},gutter:{n:"Gutters & roof edge",fix:"Stainless steel gutter guards",svc:"gutters"},eaves:{n:"Open eaves & soffits",fix:"Boxed eave enclosure",svc:"eaves"},deck:{n:"Deck",fix:"DeckGuard fire-resistant coating",svc:"deckguard"},found:{n:"Foundation & crawl space vents",fix:"Ember-resistant vent mesh or Brandguard vents",svc:"vents"},zone:{n:"Zone 0: the first 5 feet",fix:"Zone 0 clean-up + Phos-Chek FORTIFY",svc:"fortify"}},YM={zone:"Embers ignite mulch and plants against the house",gutter:"Embers ignite leaves and needles in the gutter",attic:'Embers blow through the 1/4" gable vent screen',found:"Embers and flames enter a foundation vent",deck:"Embers lodge between deck boards and ignite",eaves:"Heat and embers collect in the open eaves",wood:"Flames reach the exposed fascia and trim",atticSp:"Attic fire, hidden from view",crawl:"Fire in the crawl space under the floor",struct:"Fire spreads through the house"},ZM={zone:"Clear Zone 0: embers land on nothing that burns",gutter:"Gutter guard: no debris for embers to ignite",attic:"Vent mesh blocks the embers",found:"Vent mesh keeps embers out of the crawl space",deck:"DeckGuard: the deck boards resist ignition",eaves:"Boxed eaves: no pockets to trap heat and embers",wood:"Coated wood resists the flames"},JM=[["gutter",18,"ember",0],["zone",22,"ember",0],["attic",30,"ember",0],["deck",35,"ember",0],["found",40,"ember",1],["eaves",66,"front",0],["wood",72,"front",1.5]],$M=[["gutter","wood",12],["gutter","eaves",18],["zone","found",15],["zone","wood",25],["deck","wood",15],["deck","eaves",25],["wood","eaves",10],["attic","atticSp",8],["eaves","atticSp",12],["wood","atticSp",30],["found","crawl",10],["crawl","struct",60],["atticSp","struct",45]];function kd(s,t){let e=eo[t].f,n={},i={},r={},o={},a=u=>!s.has(u),c=(u,h,f)=>{a(u)?n[u]<=h||(n[u]=h,i[u]=f):r[u]<=h||(r[u]=h)};for(let[u,h,f,d]of JM)if(e>=d){let m=f==="ember"?Math.round(h/e*(u==="attic"&&e<1?1.5:1)):h;f==="ember"&&(o[u]=m),c(u,m,f)}for(let u=0;u<12;u++)for(let[h,f,d]of $M)n[h]!=null&&c(f,n[h]+d,h);let l=[];for(let u in n)l.push({k:u,t:n[u],kind:"ign",text:YM[u],from:i[u]});for(let u in r)l.push({k:u,t:r[u],kind:"stop",text:ZM[u]});return l.sort((u,h)=>u.t-h.t),{ign:n,stop:r,ember:o,ev:l,lost:n.struct!=null}}var fi=[[0,0],[60,18],[80,28],[240,50]],sr=fi[fi.length-1][1];function Da(s){for(let t=1;t<fi.length;t++)if(s<=fi[t][0]){let[e,n]=[fi[t-1],fi[t]];return e[1]+(s-e[0])/(n[0]-e[0])*(n[1]-e[1])}return sr}function Hd(s){for(let t=1;t<fi.length;t++)if(s<=fi[t][1]){let[e,n]=[fi[t-1],fi[t]];return e[0]+(s-e[1])/(n[1]-e[1])*(n[0]-e[0])}return ir}var Od={zone:[[-2.05,.6,3.95],[-1.35,.5,4.1],[-2.7,.4,4.2],[.1,.4,4.3],[4.4,.5,4]],gutter:[[6.5,3.3,3.85],[8.2,3.3,3.82],[10,3.3,3.8],[11.5,3.3,3.8]],attic:[[1.5,6.5,6.2]],found:[[-3.3,.35,3.15],[5.3,.35,3.15]],deck:[[-7,2.1,3.1],[-8.4,2.1,1.6],[-6,2.1,1],[-8,2.1,-.5]],eaves:[[11.85,3.4,3.3],[11.9,3.4,.5],[11.9,3.4,-2.2]],wood:[[-.8,6.1,6.7],[-2.6,6,6.6],[3.2,6,6.6],[4.6,5.9,6.4]],atticSp:[[1.5,8.6,3.2],[-1.2,8.4,2.4],[3.6,8.2,1.6]],crawl:[[-3.3,.6,3.3],[.8,.6,3.3]],struct:[[-3,9.5,1],[1,10.2,0],[4.5,9.5,0],[8.5,6,.5],[10.5,6,-1.5],[-.5,7.6,5.2],[2.5,7.6,5.2],[-2.6,2.2,6.3],[1.8,2.2,6.3],[4.2,4.6,6.3],[7.5,4.4,3.6],[10.4,4.4,3.6]]},La={zone:1.8,gutter:1.3,attic:1.1,found:1,deck:2.4,eaves:1.7,wood:1.8,atticSp:3.4,crawl:1.5,struct:5.5};function Bg({scene:s,reg:t,hgt:e,RM:n,SMALL:i,D:r,TREES:o=[],burn:a=null}){let c=new Nn;c.name="fireFX",s.add(c);let l=Fg(i),u=ou(),h=new Xs({map:u,transparent:!0,depthWrite:!1,blending:Dr,color:new at(.9,.42,.12),opacity:.55}),f=i?2:3,d=[[1,0,0,0],[.78,.22,.12,.6],[.62,-.2,-.1,1.3]],m={};for(let U in Od)m[U]=Od[U].map((H,tt)=>{let pt=[];for(let Tt=0;Tt<f;Tt++){let ht=l.flame(tt*3.1+Tt*7.7+U.length*1.3);ht.visible=!1,c.add(ht),pt.push(ht)}let ut=l.smoke(tt*2.3+U.length);ut.visible=!1,c.add(ut);let mt=new Hr(h);return mt.position.set(...H),mt.visible=!1,c.add(mt),{cards:pt,s:ut,g:mt,p:H,ph:tt*1.7+U.length}});let x=[],g=i?22:40;tr(5);for(let U=0;U<g;U++){let H=Wt(-44,-11),tt=Wt(-12,24),pt=e(H,tt),ut=l.flame(U*1.9+40);ut.position.set(H,pt-.2,tt),ut.visible=!1,c.add(ut);let mt=l.smoke(U*.7+11);mt.position.set(H,pt+4,tt),mt.visible=!1,c.add(mt),x.push({f:ut,s:mt,x:H,ph:U*.37,sz:Wt(4,7.5)})}let p=o.map((U,H)=>{let tt=[0,1,2].slice(0,i?2:3).map(ut=>{let mt=l.flame(H*5.3+ut*2.9+70);return mt.visible=!1,c.add(mt),mt}),pt=l.smoke(H*1.7+30);return pt.visible=!1,c.add(pt),{...U,cards:tt,s:pt,j:H*.618%1*2}}),v=n?0:i?220:520,_=new Float32Array(v*3),y=[];for(let U=0;U<v;U++)y.push([Wt(-40,26),Wt(0,26),Wt(-14,22),Wt(.4,1)]);let S=new Vt;S.setAttribute("position",new Gt(_,3));let b=new Ui(S,new ui({color:new at(.62,.6,.57),size:i?.22:.18,transparent:!0,opacity:0,depthWrite:!1}));b.frustumCulled=!1,c.add(b);let E=i?90:180,C=new Vt,w=new Float32Array(E*3).fill(-999);C.setAttribute("position",new Gt(w,3));let M=new Ui(C,new ui({map:u,color:new at(1.6,.9,.35),size:i?.35:.42,transparent:!0,depthWrite:!1,blending:Dr}));M.frustumCulled=!1,c.add(M);let D=Array.from({length:E},(U,H)=>[Math.sin(H*12.9898)*43758.5453%1,Math.sin(H*78.233)*12543.21%1,Math.sin(H*39.425)*9631.7%1].map(Math.abs)),F=new at(2826264),B=new at(16734720),L=new at(.42,.39,.36),O=new at(.08,.07,.065),z={};for(let U of ti){let H=new Set;(t[U]||[]).forEach(tt=>H.add(tt.material)),z[U]=[...H].map(tt=>(tt.userData.c0=tt.color.clone(),tt))}let j=0,it=1,Z=1,q=()=>Math.min(.8,(.12+Math.max(0,it-.6)*.75)*Z),I=(U,H,tt)=>U.ign[H]==null||tt<U.ign[H]?0:Math.min(1,(tt-U.ign[H])/6),W=(U,H)=>U==="struct"||H<25?1:Math.max(.45,1-(H-25)/60);return{group:c,tick(U){j+=U,l.time.value=n?3.7:j,Z=n?1:1+.28*Math.sin(j*.8)*Math.sin(j*2.1+1)+.08*Math.sin(j*5.3)},apply(U,H){let tt=q(),pt=Math.min(1,tt);for(let ht of ti){let ot=I(U,ht,H),N=U.ign[ht]==null?0:Math.min(1,Math.max(0,(H-U.ign[ht])/40));for(let ct of z[ht])ct.color.copy(ct.userData.c0).lerp(F,N*.75),ot>0?(ct.emissive.copy(B),ct.emissiveIntensity=ot*(.4+.25*Math.sin(j*9+ht.length)*Math.sin(j*5.3))):(ct.emissive.copy(ct.userData.e0),ct.emissiveIntensity=ct.userData.i0)}let ut=U.ign.struct!=null&&H>=U.ign.struct,mt=ut?O:L,Tt=[];for(let ht in m){let ot=I(U,ht,H),N=U.ign[ht]==null?0:H-U.ign[ht],ct=U.ember&&U.ember[ht]!=null&&H>=U.ember[ht]-4&&H<U.ember[ht]+6;m[ht].forEach((Y,rt)=>{let nt=ot>0&&rt<Math.ceil(m[ht].length*Math.min(1,.4+N/20)),gt=ot*W(ht,N),dt=La[ht]*(.55+.45*gt);if(Y.cards.forEach((P,A)=>{if(P.visible=nt,!nt)return;let[X,$,et]=d[A];P.position.set(Y.p[0]+$*dt*.4,Y.p[1]-.05,Y.p[2]+et*dt*.4);let G=ht==="struct"?1:1.25;P.scale.set(dt*.95*X*G*(1+.3*pt),dt*1.6*X*G*(1-.18*pt),1),P.material.uniforms.uI.value=Math.min(1.15,.55+.6*gt),P.material.uniforms.uLean.value=tt}),nt&&Tt.push([Y.p[0],Y.p[1],Y.p[2],dt,gt]),Y.s.visible=nt&&N>3,Y.s.visible){let P=n?.5:(j*.22+Y.ph*.13)%1,A=La[ht]*(ut?1.6:1.2)*(1.2+P*2.4);Y.s.position.set(Y.p[0]+P*(.6+4.5*tt)*La[ht],Y.p[1]+La[ht]*1.1+P*La[ht]*2.4*(1.1-.45*pt),Y.p[2]),Y.s.scale.set(A,A,1),Y.s.material.uniforms.uI.value=(ut?.85:.55)*Math.sin(Math.PI*Math.min(1,P*1.4+.08)),Y.s.material.uniforms.uCol.value.copy(mt)}if(Y.g.visible=ct&&rt===0||nt,Y.g.visible){let P=.6+.4*Math.sin(j*12+Y.ph),A=nt?dt*1.7*(.9+.1*Math.sin(j*14+Y.ph)):2.2*P;Y.g.scale.set(A,A,1),Y.g.position.set(Y.p[0],Y.p[1]+(nt?dt*.35:0),Y.p[2])}})}for(let ht=0;ht<E;ht++){if(!Tt.length||n){w[ht*3+1]=-999;continue}let[ot,N,ct]=D[ht],Y=.9+N*.8,rt=(j+ot*10)/Y%1,nt=Math.floor((j+ot*10)/Y),gt=Tt[(ht*7+nt*13)%Tt.length],dt=gt[3];w[ht*3]=gt[0]+(ct-.5)*dt*.6+rt*rt*dt*(.3+3.2*tt)+Math.sin(j*6+ht)*(.15+.4*pt)*rt,w[ht*3+1]=gt[1]+dt*.3+rt*dt*(1.6+N)*(1-.4*pt),w[ht*3+2]=gt[2]+(ot-.5)*dt*.6}C.attributes.position.needsUpdate=!0,M.material.opacity=Tt.length?1:0,r&&r.apply(U,H,j,Tt,n)},env(U,H){it=H;let tt=-48+Math.max(0,Math.min(1,(U-50)/30))*38;for(let ot of x){let N=U>=50&&ot.x<=tt,ct=tt-ot.x,Y=ct>26;if(ot.f.visible=N&&!Y,ot.f.visible){let rt=Math.min(1,ct/4)*Math.max(.2,1-ct/26);{let nt=q();ot.f.scale.set(ot.sz*(1+.6*nt)*(.5+.5*rt),ot.sz*1.7*(1-.3*nt)*(.4+.6*rt),1)}ot.f.material.uniforms.uI.value=.5+.6*rt,ot.f.material.uniforms.uLean.value=q()}if(ot.s.visible=N&&ct<40,ot.s.visible){let rt=n?.5:(j*.15+ot.ph)%1,nt=7+rt*12;ot.s.position.y=ot.f.position.y+5+rt*11,ot.s.position.x=ot.x+rt*(2+14*q()),ot.s.scale.set(nt,nt,1),ot.s.material.uniforms.uI.value=.55*Math.sin(Math.PI*Math.min(1,rt*1.3+.1))*Math.max(.2,1-ct/40)}}a&&a(tt);for(let ot of p){let N=tt-ot.x-ot.j,ct=N>0&&N<9,Y=ct?Math.min(1,N/1.2)*Math.max(0,Math.min(1,(9-N)/4)):0;if(ot.cards.forEach((rt,nt)=>{if(rt.visible=ct&&Y>.02,!rt.visible)return;let gt=q(),dt=(ot.h*.6+ot.r)*(.6+.5*Y)*(nt?.8:1)*(1-.3*gt);rt.position.set(ot.x+(nt-1)*ot.r*.4,ot.y-ot.h*.3,ot.z+(nt-1)*.5),rt.scale.set(Math.max(ot.r*1.6,dt*.7)*(1+.5*gt),dt,1),rt.material.uniforms.uI.value=.6+.5*Y,rt.material.uniforms.uLean.value=q()}),ot.s.visible=N>.5&&N<26,ot.s.visible){let rt=n?.5:(j*.17+ot.j)%1,nt=ot.r*(2+rt*3);ot.s.position.set(ot.x+rt*(2+12*q()),ot.y+ot.h*.6+rt*9,ot.z),ot.s.scale.set(nt,nt,1),ot.s.material.uniforms.uI.value=.6*Math.sin(Math.PI*Math.min(1,rt*1.3+.1))*Math.max(.2,1-N/26)}}let pt=U<55?0:Math.min(1,(U-55)/25)*(U<160?1:Math.max(.35,1-(U-160)/120));if(b.material.opacity=pt*.85,pt>0)for(let ot=0;ot<v;ot++){let N=y[ot],ct=((N[1]-j*N[3]*.9)%26+26)%26;_[ot*3]=(N[0]+j*N[3]*(.4+1.6*q())+40)%66-40+Math.sin(j*1.3+ot)*.5,_[ot*3+1]=ct,_[ot*3+2]=N[2]+Math.cos(j*1.1+ot*.7)*.5}S.attributes.position.needsUpdate=pt>0;let ut=U<2?U/2:U<80?1:Math.max(.15,1-(U-80)/60),mt=n?1:.88+.12*Math.sin(j*13)*Math.sin(j*7.1+1.3),Tt=U<50?.15+U/50*.35:U<75?.5+(U-50)/25*.5:Math.max(.35,1-(U-75)/110),ht=Math.max(0,Math.min(1,(U-85)/70));return{smoke:Tt,grey:ht,gust:Z,emberLevel:ut*it,frontX:tt,glow:mt*(U<50?U/50*.4:U<80?.4+(U-50)/30*.9:Math.max(.35,1.3-(U-80)/80))}},reset(){r&&r.reset();for(let U of ti)for(let H of z[U])H.color.copy(H.userData.c0),H.emissive.copy(H.userData.e0),H.emissiveIntensity=H.userData.i0},EMIT:Od}}var Vd=[{n:"No upgrades",up:[]},{n:"Vents only",up:["attic","found"]},{n:"Fully hardened",up:ti.slice()}],Og=s=>{let t=Math.floor(s/60),e=Math.floor(s%60);return t+":"+String(e).padStart(2,"0")};function zg(s){let t=y=>s.querySelector(y),e={up:new Set(ti),wind:"santaana",cmp:!0,T:0,play:!1,ran:!1,sims:[]},n={D:ti.map(y=>({t:no[y].n})),ls:[],cur:null,pinned:null,set(){},pin(){},pickKey(){},sel:()=>null};t(".wwh3f-segs").innerHTML=zd.map(([y,S,b])=>'<span style="width:'+((Da(S)-Da(y))/sr*100).toFixed(2)+'%">'+b+"</span>").join("");let i=t(".wwh3f-presets");i.innerHTML=Vd.map((y,S)=>'<button type="button" data-i="'+S+'">'+y.n+"</button>").join("");let r=t(".wwh3f-ups");r.innerHTML=ti.map((y,S)=>'<button type="button" class="wwh3f-up" data-k="'+y+'" aria-pressed="false" title="'+no[y].fix+'"><i>'+(S+1)+"</i>"+no[y].n+"</button>").join("");let o=t(".wwh3f-wind");o.innerHTML=Object.keys(eo).map(y=>'<button type="button" role="radio" data-w="'+y+'" aria-checked="false">'+eo[y].n+"</button>").join("");let a=t(".wwh3f-cmp input"),c=t(".wwh3f-range"),l=t(".wwh3f-clock"),u=t(".wwh3f-play"),h=t(".wwh3f-phase"),f=t(".wwh3f-res"),d=t(".wwh3f-labels");function m(){e.sims=[kd(new Set,e.wind),kd(e.up,e.wind)],r.querySelectorAll(".wwh3f-up").forEach(y=>y.setAttribute("aria-pressed",e.up.has(y.dataset.k))),o.querySelectorAll("button").forEach(y=>y.setAttribute("aria-checked",y.dataset.w===e.wind)),i.querySelectorAll("button").forEach(y=>{let S=Vd[+y.dataset.i].up;y.classList.toggle("on",S.length===e.up.size&&S.every(b=>e.up.has(b)))}),s.classList.toggle("is-cmp",e.cmp),e.T>=ir&&p()}i.addEventListener("click",y=>{let S=y.target.closest("button");S&&(e.up=new Set(Vd[+S.dataset.i].up),m())}),r.addEventListener("click",y=>{let S=y.target.closest(".wwh3f-up");if(!S)return;let b=S.dataset.k;e.up.has(b)?e.up.delete(b):e.up.add(b),m()}),o.addEventListener("click",y=>{let S=y.target.closest("button");S&&(e.wind=S.dataset.w,m())}),a.addEventListener("change",()=>{e.cmp=a.checked,m(),n.onLayout&&n.onLayout()});let x=y=>{e.play=y,u.innerHTML=y?"&#10074;&#10074;":"&#9654;",u.setAttribute("aria-label",y?"Pause":"Play")},g=()=>{e.T>=ir&&(e.T=0,f.hidden=!0),e.ran=!0,s.classList.add("is-run"),x(!0)};t(".wwh3f-go").addEventListener("click",g),u.addEventListener("click",()=>e.play?x(!1):g()),c.addEventListener("input",()=>{e.ran=!0,s.classList.add("is-run"),x(!1),e.T=Hd(+c.value/1e3*sr),f.hidden=e.T<ir,e.T>=ir&&p()});function p(){let y=(S,b,E)=>{let C=S.ev.filter(z=>z.kind==="ign"&&ti.includes(z.k)),w=S.ev.filter(z=>z.kind==="ign"&&!ti.includes(z.k)),M=S.ev.filter(z=>z.kind==="stop"),D=S.lost?"bad":C.length?"mid":"ok",F=S.lost?"Fire got inside. In this scenario the home is lost.":C.length?"Exterior fires, but none reached inside the home.":"No ignition on the home in this scenario.",B=S.ev.map(z=>'<li class="'+(z.kind==="ign"?"x":"v")+'"><b>'+Og(z.t)+"</b>"+z.text+"</li>").join(""),L=[...new Set(C.map(z=>z.k))].filter(z=>!E.has(z)),O=L.length?'<p class="wwh3-label">Fix these to stop it</p><div class="wwh3f-fix">'+L.map(z=>'<a href="/services#'+no[z].svc+'">'+(ti.indexOf(z)+1)+". "+no[z].fix+" &rarr;</a>").join("")+"</div>":"";return'<div class="wwh3f-card '+D+'"><p class="wwh3-num">'+b+"</p><h3>"+F+'</h3><p class="wwh3-label">What happened</p><ul>'+(B||'<li class="v"><b>&mdash;</b>Nothing ignited.</li>')+"</ul>"+O+(M.length,"")+'<a class="wwh3s-cta" href="/free-assessment">Get My Free Home Assessment &rarr;</a></div>'};f.innerHTML=(e.cmp?y(e.sims[0],"Typical home",new Set):"")+y(e.sims[1],e.cmp?"With your upgrades":"Your selection",e.up),f.hidden=!1}let v=[],_=y=>{if(!v[y]){let S=document.createElement("div");S.className="wwh3f-lab",d.appendChild(S),v[y]=S}return v[y]};return n.fire={st:e,tick(y){if(e.play&&!document.hidden){let b=Math.min(sr,Da(e.T)+Math.min(y,.25));e.T=Hd(b),b>=sr&&(e.T=ir,x(!1),p())}c.value=Math.round(Da(e.T)/sr*1e3),l.textContent=e.ran?Og(e.T)+" hr":"";let S=zd.find(([b,E])=>e.T>=b&&e.T<E);h.textContent=S?S[2]:"Hours later",h.classList.toggle("on",e.ran)},labels(y){let S=0;if(e.ran){let b=e.cmp?[0,1]:[1];for(let E of b){let w=e.sims[E].ev.filter(M=>e.T>=M.t&&(M.k==="struct"||e.T<=M.t+14)).slice(s.clientWidth<700?-1:-3);for(let M of w){let D=M.k==="struct",F=y(E,M.k);if(!F)continue;let B=_(S++);B.className="wwh3f-lab "+(M.kind==="stop"?"stop":D?"big":""),B.textContent=M.text,B.style.left=F[0].toFixed(0)+"px";let L=E&&s.classList.contains("is-vert")?B.parentElement.clientHeight/2:0;B.style.top=Math.max(F[1]-10,L+96).toFixed(0)+"px",B.style.opacity=1,B.style.display=""}}}for(let b=S;b<v.length;b++)v[b].style.display="none"}},m(),s._wwh=n,n}function io(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new Vt,l=0;for(let u=0;u<s.length;++u){let h=s[u],f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(e){let u=0,h=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let m=0;m<d.count;++m)h.push(d.getX(m)+u);u+=s[f].attributes.position.count}c.setIndex(h)}for(let u in r){let h=kg(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let x=0;x<o[u].length;++x)d.push(o[u][x][f]);let m=kg(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(m)}}return c}function kg(s){let t,e,n,i=-1,r=0;for(let l=0;l<s.length;++l){let u=s[l];if(u.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.array.length}let o=new t(r),a=0;for(let l=0;l<s.length;++l)o.set(s[l].array,a),a+=s[l].array.length;let c=new Gt(o,e,n);return i!==void 0&&(c.gpuType=i),c}var lu=new Ct,uu=new pe,Hg=new Ze,Vg=new T,Gg=new T,cu=new T;function ie(s={},t=0){let{uvs:e,...n}=s,i=new nn({roughness:.85,...n});return i.userData.uvs=t,i}function KM(s,t){let e=s.attributes.position,n=s.attributes.normal,i=new Float32Array(e.count*2);for(let r=0;r<e.count;r++){cu.fromBufferAttribute(n,r);let o=Math.abs(cu.x),a=Math.abs(cu.y),c=Math.abs(cu.z),l=e.getX(r),u=e.getY(r),h=e.getZ(r),f,d;a>=o&&a>=c?(f=l,d=h):o>=c?(f=h,d=u):(f=l,d=u),i[r*2]=f/t,i[r*2+1]=d/t}s.setAttribute("uv",new Gt(i,2))}var Gd=new Map;function jM(s,t){let e=s.uuid+"|"+t;if(!Gd.has(e)){let n=s.clone();n.userData={...s.userData,e0:n.emissive.clone(),i0:n.emissiveIntensity},Gd.set(e,n)}return Gd.get(e)}var so=class{constructor(){this.groups=new Map}add(t,e,n,i=0,r=0,o=0,a=0,c=0,l=0,u="XYZ",h=1,f=1,d=1){return Hg.set(a,c,l,u),uu.setFromEuler(Hg),lu.compose(Vg.set(i,r,o),uu,Gg.set(h,f,d)),this.addM(t,e,n,lu)}addM(t,e,n,i){let r=t.index?t.toNonIndexed():t.clone();r.applyMatrix4(i);for(let c of Object.keys(r.attributes))["position","normal","uv"].includes(c)||r.deleteAttribute(c);r.attributes.normal||r.computeVertexNormals(),e.userData.uvs?KM(r,e.userData.uvs):r.attributes.uv||r.setAttribute("uv",new Gt(new Float32Array(r.attributes.position.count*2),2)),r.clearGroups();let o=e.uuid+"|"+(n||""),a=this.groups.get(o);return a||(a={mat:e,key:n,geos:[]},this.groups.set(o,a)),a.geos.push(r),r}build(t,e,n,{cast:i=!0,receive:r=!0}={}){let o=[];for(let a of this.groups.values()){let c=a.key?jM(a.mat,a.key):a.mat,l=new ee(io(a.geos),c);l.castShadow=i&&!c.userData.noCast,l.receiveShadow=r,a.key&&(l.userData.k=a.key,(e[a.key]=e[a.key]||[]).push(l)),n&&!c.userData.noSolid&&n.push(l),t.add(l),o.push(l)}return this.groups.clear(),o}};function Wg(s,t){let e=new Fn,n=s/2;return e.moveTo(-n,0),e.lineTo(n,0),e.lineTo(n,t-n),e.absarc(0,t-n,n,0,Math.PI,!1),e.lineTo(-n,0),e}function QM(s,t){let e=new Ni,n=s/2;return e.moveTo(-n,0),e.lineTo(n,0),e.lineTo(n,t-n),e.absarc(0,t-n,n,0,Math.PI,!1),e.lineTo(-n,0),e}function ro(s,t,e,n,i=16){let r=Wg(s+e*2,t+e);return r.holes.push(QM(s,t)),new ss(r,{depth:n,bevelEnabled:!1,curveSegments:i})}function oo(s,t,e,n=16){return new ss(Wg(s,t),{depth:e,bevelEnabled:!1,curveSegments:n})}function Ua(s,t,e){let n=new Fn([new st(-s,0),new st(s,0),new st(0,t)]);return new ss(n,{depth:e,bevelEnabled:!1})}var tS=new T(0,1,0);function Xg(s,t,e,n,i=7){let r=new T().subVectors(t,s),o=r.length(),a=new ns(n,e,o,i,1,!1);return uu.setFromUnitVectors(tS,r.normalize()),lu.compose(Vg.addVectors(s,t).multiplyScalar(.5),uu,Gg.set(1,1,1)),a.applyMatrix4(lu),a}var Na=new T;function Hn(s,t,e,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),c=Math.PI/4;Na.copy(t),Na[n]=0,Na.normalize();let l=.5*o/(o+a),u=1-Na.angleTo(s)/c;return Math.sign(Na[e])===1?u*l:a/(o+a)+l+l*(1-u)}var Fa=class extends ze{constructor(t=1,e=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new T,c=new T,l=new T(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,d=u.length/6,m=new T,x=.5/i;for(let g=0,p=0;g<u.length;g+=3,p+=2)switch(a.fromArray(u,g),c.copy(a),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),u[g+0]=l.x*Math.sign(a.x)+c.x*r,u[g+1]=l.y*Math.sign(a.y)+c.y*r,u[g+2]=l.z*Math.sign(a.z)+c.z*r,h[g+0]=c.x,h[g+1]=c.y,h[g+2]=c.z,Math.floor(g/d)){case 0:m.set(1,0,0),f[p+0]=Hn(m,c,"z","y",r,n),f[p+1]=1-Hn(m,c,"y","z",r,e);break;case 1:m.set(-1,0,0),f[p+0]=1-Hn(m,c,"z","y",r,n),f[p+1]=1-Hn(m,c,"y","z",r,e);break;case 2:m.set(0,1,0),f[p+0]=1-Hn(m,c,"x","z",r,t),f[p+1]=Hn(m,c,"z","x",r,n);break;case 3:m.set(0,-1,0),f[p+0]=1-Hn(m,c,"x","z",r,t),f[p+1]=1-Hn(m,c,"z","x",r,n);break;case 4:m.set(0,0,1),f[p+0]=1-Hn(m,c,"x","y",r,t),f[p+1]=1-Hn(m,c,"y","x",r,e);break;case 5:m.set(0,0,-1),f[p+0]=Hn(m,c,"x","y",r,t),f[p+1]=1-Hn(m,c,"y","x",r,e);break}}};var ke=(s,t,e)=>new T(s,t,e),qd=!1,fu=s=>s<=0?0:s>=1?1:s*s*(3-2*s);function hu(s,t){return Math.max(-5-s,-9.3-t,t-14,s-17,0)}function di(s,t){let e=0,n=-5-s,i=-9.3-t,r=t-14,o=s-17;n>0&&(e-=Math.min(n,20)*.5-Math.max(0,n-20)*.05),i>0&&(e+=1.3+Math.min(i,24)*.36),r>0&&(e-=r*.1),o>0&&(e+=o*.16),t<-34&&(e+=(-34-t)*.55*(.6+.6*Mn(s*.02+3,t*.02,3)));let a=hu(s,t);return e+(Mn(s*.06+10,t*.06,4)-.5)*3.2*fu(a/6)+(er(s*.4,t*.4)-.5)*.25*fu(a/3)}var Wd=new Map;function hs(s,t=0,e=2,n=.28){let i=s.toFixed(2)+"|"+(t%7|0)+"|"+e+"|"+n;if(Wd.has(i))return Wd.get(i);let r=new qr(1,e),o=r.attributes.position,a=(t%7|0)*3.1;for(let c=0;c<o.count;c++){let l=o.getX(c),u=o.getY(c),h=o.getZ(c),f=Mn(l*1.6+a+u*.7,h*1.6-a+u*1.3,3),d=s*(1+(f-.5)*2*n);o.setXYZ(c,l*d,u*d,h*d)}return r.computeVertexNormals(),Wd.set(i,r),r}function Xd(s,t,e=.18,n=.06){s=s.index?s.toNonIndexed():s.clone();let i=s.attributes.position,r=new Float32Array(i.count*3),o=new at(t),a=new at;s.computeBoundingBox();let c=s.boundingBox.min.y,l=s.boundingBox.max.y,u=($t()-.5)*n;for(let h=0;h<i.count;h++){let f=(i.getY(h)-c)/(l-c||1);a.copy(o).offsetHSL(0,0,-e*.9+f*e*1.4+u),r[h*3]=a.r,r[h*3+1]=a.g,r[h*3+2]=a.b}if(s.setAttribute("color",new Gt(r,3)),qd){let h=new T;s.boundingBox.getCenter(h);let f=new Float32Array(i.count*3);for(let d=0;d<i.count;d++)f[d*3]=h.x,f[d*3+1]=h.y,f[d*3+2]=h.z;s.setAttribute("ctr",new Gt(f,3))}return s}var Ba=(s,t,e,n,i=1,r=1,o=1,a=0)=>(s=s.clone(),s.applyMatrix4(new Ct().compose(ke(t,e,n),new pe().setFromEuler(new Ze(0,a,0)),ke(i,r,o))),s);function qg(s,{small:t,fire:e=!1}){qd=e;let n=[],i=[],r=220,o=t?120:160,a=new Kn(r,r,o,o);a.rotateX(-Math.PI/2);let c=a.attributes.position,l=new Float32Array(c.count*3),u=new at("#5d7d3c"),h=new at("#4c6c33"),f=new at("#b59a5e"),d=new at("#8f7a46"),m=new at("#5e6638"),x=new at;for(let $=0;$<c.count;$++){let et=c.getX($),G=c.getZ($);c.setY($,di(et,G));let xt=hu(et,G),ft=Mn(et*.05,G*.05,4),_t=Mn(et*.15+5,G*.15,3);x.copy(u).lerp(h,(Math.sin(et*1.1)*.5+.5)*.35+_t*.3);let yt=new at().copy(f).lerp(d,_t).lerp(m,fu((ft-.5)*3));x.lerp(yt,fu(xt/2.2)),l[$*3]=x.r,l[$*3+1]=x.g,l[$*3+2]=x.b}a.setAttribute("color",new Gt(l,3)),a.computeVertexNormals();let g=Sg();g.repeat.set(70,70);let p=new ee(a,new nn({vertexColors:!0,map:g,roughness:1}));p.receiveShadow=!0,s.add(p);let v=new so,_=ie({map:xg(),roughness:.95},3.2),y=ie({color:"#d9ccb0",map:ru(),roughness:.9},1.3),S=ie({color:"#c9b79a",map:wg(),roughness:1},2.5),b=ie({map:bg(),roughness:.95},1.6);v.add(new ze(22.6,2,.8),_,null,5.75,.55,-9.7),v.add(new ze(22.8,.14,.95),y,null,5.75,1.6,-9.7),v.add(new ze(6.6,.06,11.5),S,null,9.5,.03,9);for(let $ of[6.15,12.85])v.add(new ze(.2,.1,11.5),b,null,$,.05,9);v.add(new ze(1.5,.06,7.5),b,null,1.5,.03,10.8),v.add(new ze(5.2,.06,2.2),b,null,-2.8,.03,7.6);let E=-2.9,C=11.2,w=4.2,M=3.6;v.add(new ze(w+.7,.1,.35),y,null,E,.07,C-M/2-.17),v.add(new ze(w+.7,.1,.35),y,null,E,.07,C+M/2+.17);for(let $ of[-1,1])v.add(new ze(.35,.1,M),y,null,E+$*(w/2+.17),.07,C);v.add(new ze(w+2.2,.05,M+2.2),b,null,E,.025,C),v.build(s,{},null);let D=new ee(new Kn(w,M),new nn({color:"#1e7e9a",roughness:.04,metalness:.15,envMapIntensity:2.2,emissive:"#0b3a48",emissiveIntensity:.6}));D.rotation.x=-Math.PI/2,D.position.set(E,.06,C),s.add(D);let F=new nn({color:"#3d5c2a",roughness:.95,bumpMap:ls(128,24,3),bumpScale:6}),B=[];for(let $ of[.4,2.6])B.push(Ba(new Fa(.55,.7,5.6,3,.22),$,.35,11.4));B.push(Ba(new Fa(.55,.7,9,3,.22),13.4,.35,9.6));let L=new ee(io(B),F);L.castShadow=L.receiveShadow=!0,s.add(L);let O=new nn({vertexColors:!0,roughness:.92,bumpMap:ls(128,32,2),bumpScale:1.2}),z=new nn({map:yg(),roughness:.95});z.map.repeat.set(2,2);let j=new nn({map:vg(),roughness:.8});j.map.repeat.set(1,3);let it=[],Z=[],q=[],I={can:[],oakW:[],eucW:[]},W={can:[],oakW:[],eucW:[]},U=($,et)=>{let G=Math.hypot($-3,et)<30?I:W;it=G.can,Z=G.oakW,q=G.eucW};function H($,et,G,xt){let ft=et.length-1;for(let _t=0;_t<ft;_t++){let yt=G+(xt-G)*(_t/ft),Et=G+(xt-G)*((_t+1)/ft);if($.push(Xg(et[_t],et[_t+1],yt,Et,8)),_t<ft-1){let lt=new Ys(Et,8,6);lt.translate(et[_t+1].x,et[_t+1].y,et[_t+1].z),$.push(lt)}}}function tt($,et,G,xt={}){U($,et);let ft=ke($,di($,et)-.15,et),_t=xt.leaf||"#34451f",yt=xt.lift||0,Et=ke(Wt(-.5,.5)*G,(2+yt*.6)*G,Wt(-.5,.5)*G).add(ft);H(Z,[ft.clone(),ke(ft.x+Wt(-.2,.2)*G,ft.y+1.1*G,ft.z+Wt(-.2,.2)*G),Et],.5*G,.36*G);let lt=xt.limbs||5,Xt=[];for(let Dt=0;Dt<lt;Dt++){let Ut=Dt/lt*Math.PI*2+Wt(-.4,.4),At=Wt(2.6,4.2)*G*(xt.spread||1),Ot=Wt(1,2.2)*G,Jt=ke(Et.x+Math.cos(Ut)*At*.45,Et.y+Ot*.55+Wt(-.3,.3)*G,Et.z+Math.sin(Ut)*At*.45),ce=ke(Et.x+Math.cos(Ut)*At,Et.y+Ot+Wt(-.2,.4)*G,Et.z+Math.sin(Ut)*At);H(Z,[Et.clone(),Jt,ce],.3*G,.1*G),Xt.push(ce,Jt)}let Zt=(Dt,Ut,At)=>{for(let Ot=0;Ot<At;Ot++){let Jt=$t()*6.28,ce=Wt(-.2,1),Ht=Math.sqrt($t())*Ut,wt=Wt(.55,.95)*G*(xt.blob||1);it.push(Xd(Ba(hs(1,Math.floor($t()*7),1,.3),Dt.x+Math.cos(Jt)*Ht,Dt.y+ce*Ut*.45,Dt.z+Math.sin(Jt)*Ht,wt,wt*.75,wt,$t()*6),_t,.26,.08))}};for(let Dt of Xt)Zt(ke(Dt.x,Dt.y+.5*G,Dt.z),1.7*G*(xt.blob||1),10);Zt(ke(Et.x,Et.y+2*G,Et.z),2.4*G*(xt.blob||1),12),$<-8&&n.push({x:Et.x,y:Et.y+.6*G,z:Et.z,r:3.6*G*(xt.blob||1),h:3.4*G})}function pt($,et,G){U($,et);let xt=ke($,di($,et)-.2,et),ft=Wt(15,19)*G,_t=ke(Wt(-1,1),0,Wt(-1,1)).multiplyScalar(.06*ft),yt=[];for(let lt=0;lt<=5;lt++){let Xt=lt/5;yt.push(ke(xt.x+_t.x*Xt*Xt+Math.sin(Xt*5+$)*.3*G,xt.y+ft*.6*Xt,xt.z+_t.z*Xt*Xt+Math.cos(Xt*4+et)*.3*G))}H(q,yt,.42*G,.24*G);let Et=yt[5];$<-8&&n.push({x:Et.x,y:Et.y-ft*.05,z:Et.z,r:2.6*G,h:ft*.45});for(let lt=0;lt<3;lt++){let Xt=lt*2.1+Wt(-.4,.4),Zt=Wt(1.4,2.8)*G,Dt=ke(Et.x+Math.cos(Xt)*Zt,Et.y+ft*Wt(.3,.42),Et.z+Math.sin(Xt)*Zt),Ut=Et.clone().lerp(Dt,.5).add(ke(0,.4,0));H(q,[Et.clone(),Ut,Dt],.22*G,.07*G);for(let At of[Ut,Dt])for(let Ot=0;Ot<(At===Dt?26:12);Ot++){let Jt=Wt(.28,.5)*G;it.push(Xd(Ba(hs(1,Ot,0,.3),At.x+Wt(-2,2)*G,At.y-Wt(-.6,2.8)*G,At.z+Wt(-2,2)*G,Jt*.85,Jt*1.7,Jt*.85,$t()*6),["#7d8c6f","#6c7c60","#8b9a7c"][Ot%3],.18,.08))}}}function ut($,et,G){U($,et);let xt=di($,et);it.push(Xd(Ba(hs(1,3,2,.12),$,xt+3.6*G,et,.85*G,3.9*G,.85*G),"#2c4a2a",.08))}tr(4242),tt(15.8,-5.6,1.15,{lift:1.4,limbs:6,spread:1.15}),tt(-9.5,13,1,{limbs:5}),tt(-18,-11,1.3),tt(23,-4,1.1),tt(6,-17,1.25),tt(27,15,1),tt(-31,19,1.15),tt(-26,-2,1.2),tt(-7.6,9.8,.42,{leaf:"#808f6c",limbs:4,blob:.7});for(let[$,et,G]of[[-3,-16,1],[1.5,-20,1.15],[-7.5,-21,1.05],[11,-21,1.1],[16,-16,.95],[-20,-16,1.1],[-22,-7,1.2],[-13,-15,1],[27,-15,1.05],[-36,2,1.2],[34,-6,1.1]])pt($,et,G);ut(14.7,3.8,1),ut(14.7,-1.6,.9),ut(-5.6,-6.6,.85);for(let[$,et]of[[I,!0],[W,!1]]){if($.can.length){let G=new ee(io($.can),O);G.castShadow=et,G.receiveShadow=!0,s.add(G),i.push(G)}for(let[G,xt]of[[$.oakW,z],[$.eucW,j]]){if(!G.length)continue;let ft=G.map(yt=>{yt=yt.index?yt.toNonIndexed():yt;for(let Et of Object.keys(yt.attributes))["position","normal","uv"].includes(Et)||yt.deleteAttribute(Et);return yt}),_t=new ee(io(ft),xt);_t.castShadow=et,_t.receiveShadow=!0,s.add(_t)}}let mt=t?160:320,Tt=new ci(hs(1,2),new nn({roughness:.95,bumpMap:ls(128,32,2),bumpScale:3}),mt),ht=new ci(hs(1,5,1,.35),new nn({color:"#a39478",roughness:.95}),40),ot=new Ct,N=new pe,ct=new at,Y=0,rt=0,nt=0;for(;(Y<mt||rt<40)&&nt++<2e4;){let $=Wt(-70,70),et=Wt(-60,70);if(hu($,et)<2)continue;let xt=di($,et);if(Y<mt){let ft=Wt(.45,1.2);ot.compose(ke($,xt+ft*.45,et),N.setFromEuler(new Ze(0,$t()*6,0)),ke(ft*Wt(1,1.4),ft*.95,ft)),Tt.setMatrixAt(Y,ot),Tt.setColorAt(Y++,ct.set(["#56603a","#6a6a3e","#4a5832","#7a7446"][Y%4]).offsetHSL(0,0,Wt(-.04,.04)))}else if($t()<.3){let ft=Wt(.4,1.3);ot.compose(ke($,xt+ft*.2,et),N.setFromEuler(new Ze($t(),$t()*6,0)),ke(ft*1.3,ft*.7,ft)),ht.setMatrixAt(rt++,ot)}}Tt.count=Y,ht.count=rt,Tt.castShadow=Tt.receiveShadow=ht.castShadow=ht.receiveShadow=!0,s.add(Tt,ht);let gt=new Vt,dt=[];for(let $=0;$<5;$++){let et=$/5*Math.PI,G=Math.cos(et)*.05,xt=Math.sin(et)*.05,ft=Math.cos(et+1.3)*.15,_t=Math.sin(et+1.3)*.15;dt.push(-G,0,-xt,G,0,xt,ft,.55,_t)}gt.setAttribute("position",new It(dt,3)),gt.computeVertexNormals();let P=t?1500:4e3,A=new ci(gt,new nn({roughness:1,side:un}),P),X=0;for(nt=0;X<P&&nt++<6e4;){let $=Wt(-55,60),et=Wt(-45,60);if(hu($,et)<1.2)continue;let xt=Wt(.45,1.05);ot.compose(ke($,di($,et)-.02,et),N.setFromEuler(new Ze(0,$t()*6,0)),ke(xt,xt*Wt(.8,1.4),xt)),A.setMatrixAt(X,ot),A.setColorAt(X++,ct.set($t()<.7?"#a8905a":"#8a7a4a").offsetHSL(0,0,Wt(-.05,.05)))}return A.count=X,A.receiveShadow=!0,A.name="grass",s.add(A),qd=!1,{TREES:n,burn:e?eS({terr:p,canopies:i,sh:Tt,grass:A}):null}}function eS({terr:s,canopies:t,sh:e,grass:n}){let r=(C,w)=>{let M=Math.sin(C*12.9898+w*78.233)*43758.5453;return M-Math.floor(M)},o=new at(.075,.064,.055),a=new at(1,.42,.1),c=new at(.32,.3,.28),l=new at,u=s.geometry.attributes.color,h=s.geometry.attributes.position,f=u.array.slice(),d=[];for(let C=0;C<h.count;C++)h.getX(C)<-6&&d.push(C);let m=d.map(C=>(r(h.getX(C),h.getZ(C))-.5)*3+(Mn(h.getX(C)*.08,h.getZ(C)*.08,3)-.5)*8),x=t.map(C=>{let w=C.geometry,M=w.attributes.position,D=w.attributes.color,F=w.attributes.ctr,B=[];for(let L=0;L<M.count;L++)F.getX(L)<-8&&B.push(L);return{g:w,P:M,C:D,Q:F,I:B,p0:M.array.slice(),c0:D.array.slice(),j:B.map(L=>r(F.getX(L),F.getZ(L))*4)}}),g=C=>{let w=[],M=new Ct,D=new T,F=new pe,B=new T,L=new at;for(let O=0;O<C.count;O++)C.getMatrixAt(O,M),M.decompose(D,F,B),D.x<-8&&(C.getColorAt(O,L),w.push({i:O,p:D.clone(),q:F.clone(),s:B.clone(),c:L.clone(),j:r(D.x,D.z)*3}));return w},p=g(e),v=g(n),_=new Ct,y=new T,S=new T,b=null,E=C=>C<0?0:C<2.5?1:2;return function(w){if(!(b!==null&&Math.abs(w-b)<.02)){b=w;for(let M=0;M<d.length;M++){let D=d[M],F=w-h.getX(D)+m[M];if(F<0){u.setXYZ(D,f[D*3],f[D*3+1],f[D*3+2]);continue}l.setRGB(f[D*3],f[D*3+1],f[D*3+2]),F<1.5?l.lerp(a,.85*(1-F/1.5)+.15):l.lerp(o,Math.min(1,.6+F/6)).lerp(c,Math.max(0,Math.min(.35,(F-14)/30))),u.setXYZ(D,l.r,l.g,l.b)}u.needsUpdate=!0;for(let M of x){let{P:D,C:F,Q:B,I:L,p0:O,c0:z,j}=M;for(let it=0;it<L.length;it++){let Z=L[it],q=w-B.getX(Z)-j[it]-1.5,I=B.getX(Z),W=B.getY(Z),U=B.getZ(Z);if(q<0){D.setXYZ(Z,O[Z*3],O[Z*3+1],O[Z*3+2]),F.setXYZ(Z,z[Z*3],z[Z*3+1],z[Z*3+2]);continue}let H=q<3?1:Math.max(.3,1-(q-3)/9);D.setXYZ(Z,I+(O[Z*3]-I)*H,W+(O[Z*3+1]-W)*H-(1-H)*.8,U+(O[Z*3+2]-U)*H),l.setRGB(z[Z*3],z[Z*3+1],z[Z*3+2]),q<3?l.lerp(a,.4+.5*Math.sin(Math.PI*q/3)):l.lerp(o,Math.min(1,.7+(q-3)/8)),F.setXYZ(Z,l.r,l.g,l.b)}L.length&&(D.needsUpdate=!0,F.needsUpdate=!0)}for(let[M,D,F]of[[e,p,.35],[n,v,.25]]){for(let B of D){let L=w-B.p.x-B.j,O=E(L);if(O===0){_.compose(B.p,B.q,B.s),M.setMatrixAt(B.i,_),M.setColorAt(B.i,B.c);continue}let z=O===1?1:Math.max(F,1-(L-2.5)/4);y.set(B.s.x*(.6+.4*z),B.s.y*z,B.s.z*(.6+.4*z)),S.copy(B.p),S.y-=B.s.y*(1-z)*.4,_.compose(S,B.q,y),M.setMatrixAt(B.i,_),l.copy(B.c).lerp(O===1?a:o,O===1?.75:.92),M.setColorAt(B.i,l)}M.instanceMatrix.needsUpdate=!0,M.instanceColor&&(M.instanceColor.needsUpdate=!0)}}}}var{BoxGeometry:Ce,CylinderGeometry:Oi,SphereGeometry:Oa,ConeGeometry:Yg,CircleGeometry:Yd}=kn,Sn=(s,t,e)=>new T(s,t,e),se=Math.PI,fs=Math.atan2(1.6,3.5),ao=Math.atan2(1.3,3);function Zg(s,t,e,n){let i=new so,r=ru(),o=ls(256,32,3),a={stucco:ie({color:"#f6f0e4",map:r,bumpMap:o,bumpScale:2,roughness:.95},2.4),base:ie({color:"#dccfb7",map:r,bumpMap:o,bumpScale:2,roughness:.95},2.4),cast:ie({color:"#ddd0b4",map:r,roughness:.9},1.3),roofDeck:ie({color:"#5e2a14",roughness:.95}),wood:ie({map:Ca([118,76,44]),roughness:.7},1.2),woodDk:ie({map:Ca([82,52,30]),roughness:.65},1.2),iron:ie({color:"#1d1b19",roughness:.45,metalness:.7}),bronze:ie({color:"#2b2621",roughness:.4,metalness:.6}),glass:ie({color:"#10171b",roughness:.05,metalness:.3,emissive:"#ffad5a",emissiveIntensity:1.1,envMapIntensity:2}),glassDim:ie({color:"#10171b",roughness:.05,metalness:.3,emissive:"#ff9a45",emissiveIntensity:.22,envMapIntensity:2}),lamp:ie({color:"#ffe2b0",emissive:"#ffbf66",emissiveIntensity:6}),copper:ie({color:"#c07a3c",roughness:.3,metalness:.9}),vent:ie({color:"#2a2622",roughness:.6,metalness:.3}),terracotta:ie({color:"#b5562d",roughness:.8}),dark:ie({color:"#0d0a08",roughness:1}),deck:ie({map:_g(),roughness:.8},1.4),post:ie({map:Ca([108,70,44]),roughness:.8},1.2),mulch:ie({map:Mg(),roughness:1},1),leafA:ie({color:"#8a6a2c",roughness:.9}),leafB:ie({color:"#5f5424",roughness:.9}),leafC:ie({color:"#a8742f",roughness:.9}),log:ie({map:Ca([128,86,54]),roughness:.9},.8),shrub:ie({color:"#3f5f2c",roughness:.9}),shrubDry:ie({color:"#8a7a3c",roughness:.95}),bougLeaf:ie({color:"#2f5a26",roughness:.85}),boug:ie({color:"#c42a6e",roughness:.7}),cushion:ie({color:"#e9e2d0",roughness:1})};for(let I of["glass","glassDim","lamp"])a[I].userData.noCast=!0;let c=[a.leafA,a.leafB,a.leafC],l=(I,W,U,H,tt,pt,ut,mt,Tt=0,ht=0,ot=0,N="XYZ")=>i.add(new Ce(I,W,U),H,mt,tt,pt,ut,Tt,ht,ot,N),u=I=>new Ct().compose(Sn(I.x,I.y,I.z),new pe().setFromEuler(new Ze(0,I.ry||0,0)),Sn(1,1,1)),h=(I,W,U,H,tt=0,pt=0,ut=0,mt=0,Tt=0,ht=0)=>{let ot=new Ct().compose(Sn(tt,pt,ut),new pe().setFromEuler(new Ze(mt,Tt,ht)),Sn(1,1,1));i.addM(W,U,H,u(I).multiply(ot))},f=0;function d(I,W,U,{grille:H=!1,lit:tt}={}){let pt=tt??f++%3!==2;h(I,ro(W,U,.17,.1),a.cast),h(I,ro(W-.08,U-.04,.04,.05),a.bronze,null,0,0,.015),h(I,oo(W-.08,U-.04,.02),pt?a.glass:a.glassDim,null,0,0,.005);let ut=U-W/2;for(let mt of[-W/6,W/6]){let Tt=ut+Math.sqrt(Math.max(0,(W/2)**2-mt*mt))-.06;h(I,new Ce(.035,Tt,.03),a.bronze,null,mt,Tt/2,.04)}for(let mt of[ut/3,2*ut/3,ut])h(I,new Ce(W-.08,.035,.03),a.bronze,null,0,mt,.04);if(h(I,new Ce(W+.55,.09,.28),a.cast,null,0,-.045,.1),H){for(let mt=-W/2+.12;mt<W/2-.05;mt+=.14)h(I,new Oi(.014,.014,ut+.1,6),a.iron,null,mt,ut/2,.2);for(let mt of[.05,ut*.5,ut])h(I,new Ce(W+.1,.03,.03),a.iron,null,0,mt,.2)}}function m(I,W,U,H=0){let tt={x:I,y:W,z:U,ry:H};h(tt,new Ce(.05,.05,.22),a.iron,null,0,.32,.11),h(tt,new Ce(.24,.38,.24),a.iron,null,0,0,.26),h(tt,new Ce(.19,.31,.25),a.lamp,null,0,0,.26),h(tt,new Ce(.19,.31,.19),a.lamp,null,0,0,.26),h(tt,new Yg(.2,.14,4),a.iron,null,0,.26,.26,0,se/4)}function x(I,W){let U={x:I,y:0,z:W};h(U,ro(2,2.85,.2,.1),a.cast),h(U,oo(2,2.85,.08),a.wood,null,0,0,-.03);for(let H=-3;H<=3;H++)h(U,new Ce(.02,2.55,.02),a.dark,null,H*.26,1.27,.05);h(U,new Ce(.035,2.8,.03),a.dark,null,0,1.4,.06);for(let H of[.45,1.3,2])for(let tt of[-1,1])h(U,new Ce(.7,.07,.025),a.iron,null,tt*.58,H,.065);for(let H of[-1,1])h(U,new Ce(.04,.3,.04),a.iron,null,H*.12,1.25,.08)}l(10,6,7,a.stucco,1,3,-.5),l(10.08,.65,7.08,a.base,1,.325,-.5),i.add(Ua(3.5,1.6,.2),a.stucco,null,-4,6,-.5,0,se/2,0),i.add(Ua(3.5,1.6,.2),a.stucco,null,5.8,6,-.5,0,se/2,0);let g=[],p=[],v=(I,W,U,H,tt,pt,ut)=>{l(I,.2,W,a.roofDeck,U,H,tt,null,pt,ut,0,"YXZ"),g.push({len:I,slope:W,x:U,y:H,z:tt,tilt:pt,ry:ut})};v(11.2,4.45,1,6.775,1.57,fs,0),v(11.2,4.45,1,6.775,-2.57,fs,se),p.push({len:11.2,x:1,y:7.78,z:-.5,alongZ:!1});for(let I=-4.3;I<=6.35;I+=.6)I>-1.4&&I<4.4||l(.13,.2,.72,a.woodDk,I,5.79,3.28,"eaves",fs),l(.13,.2,.72,a.woodDk,I,5.79,-4.28,"eaves",-fs);for(let[I,W]of[[-.85,6.38],[-.15,6.38],[-.5,6.82]])i.add(new Oi(.12,.12,.32,14),a.terracotta,"attic",-4.02,W,I,0,0,se/2),i.add(new Yd(.085,14),a.dark,"attic",-4.19,W,I,0,-se/2,0);l(1.25,4.1,1.25,a.stucco,-2.6,7.35,-2.6),l(1.55,.16,1.55,a.cast,-2.6,9.45,-2.6),l(1,.6,1,a.stucco,-2.6,9.83,-2.6);for(let I=0;I<4;I++){let W=I*se/2;i.add(oo(.3,.42,.03),a.dark,null,-2.6+Math.sin(W)*.5,9.6,-2.6+Math.cos(W)*.5,0,W,0)}i.add(new Yg(.95,.45,4),a.terracotta,null,-2.6,10.35,-2.6,0,se/4,0),l(5,6,3,a.stucco,1.5,3,4.5),l(5.08,.65,3.08,a.base,1.5,.325,4.5),i.add(Ua(2.5,1.14,.2),a.stucco,null,1.5,6,5.8),v(4.4,3.25,-.024,6.565,4.4,fs,-se/2),v(4.4,3.25,3.024,6.565,4.4,fs,se/2),p.push({len:4.4,x:1.5,y:7.3,z:4.4,alongZ:!0});for(let I of[-1,1])l(3.25,.28,.14,a.woodDk,1.5+I*1.524,6.43,6.62,"wood",0,0,-I*fs);for(let I=3.3;I<=6.4;I+=.6)for(let W of[-1,1])l(.62,.18,.13,a.woodDk,1.5+W*2.75,5.86,I,"eaves",0,0,-W*fs);l(1.3,.8,.14,a.cast,1.5,6.46,6,"attic"),l(1.06,.58,.04,a.dark,1.5,6.46,6.08,"attic");for(let I=0;I<6;I++)l(1.06,.04,.11,a.vent,1.5,6.22+I*.095,6.12,"attic",.6);let _={x:1.5,y:.3,z:6};h(_,ro(1.45,2.75,.24,.13),a.cast),h(_,oo(1.45,2.75,.1),a.woodDk,null,0,0,-.05);for(let I=-2;I<=2;I++)h(_,new Ce(.018,2.4,.02),a.dark,null,I*.26,1.2,.055);for(let I=.35;I<2.3;I+=.5)for(let W=-.5;W<=.51;W+=.25)h(_,new Oa(.022,6,4),a.iron,null,W,I,.06);for(let I of[.5,2])h(_,new Ce(.65,.06,.02),a.iron,null,-.35,I,.065);h(_,new Ce(.04,.32,.05),a.iron,null,.5,1.15,.08),l(2.8,.15,1.2,a.cast,1.5,.075,6.62),l(2.2,.15,.62,a.cast,1.5,.225,6.33),m(.38,2.45,6),m(2.62,2.45,6),d({x:1.5,y:3.4,z:6},1.25,2.1,{lit:!0}),d({x:-2.5,y:3.6,z:3},1.1,1.9,{lit:!0}),d({x:-2.5,y:1,z:3},1.1,2,{grille:!0,lit:!1}),d({x:5.1,y:3.7,z:3},.8,1.75),d({x:5.1,y:1,z:3},.8,2,{grille:!0,lit:!0}),d({x:-4,y:3.6,z:-2.3,ry:-se/2},1,1.8),d({x:-4,y:3.6,z:2,ry:-se/2},1,1.8,{lit:!0}),l(1.8,.12,.5,a.cast,-2.5,3.5,3.25);for(let I of[-1,1])l(.14,.28,.4,a.cast,-2.5+I*.7,3.3,3.2);l(1.8,.045,.045,a.iron,-2.5,4.25,3.47);for(let I=-3.36;I<=-1.63;I+=.12)i.add(new Oi(.012,.012,.69,5),a.iron,null,I,3.9,3.47);for(let I of[-1,1])l(.045,.045,.45,a.iron,-2.5+I*.9,4.25,3.25),i.add(new Oa(.045,8,6),a.iron,null,-2.5+I*.9,4.3,3.47);let y={x:-4,y:1.08,z:.3,ry:-se/2};h(y,ro(1.7,2.6,.17,.1),a.cast),h(y,oo(1.7,2.6,.02),a.glass,null,0,0,.005),h(y,new Ce(.06,2.55,.05),a.bronze,null,0,1.27,.03);for(let I of[.9,1.75])h(y,new Ce(1.7,.035,.03),a.bronze,null,0,I,.03);m(-4,2.6,-1,-se/2);let S=I=>{h(I,new Ce(.98,.42,.06),a.cast,"found"),h(I,new Ce(.82,.28,.03),a.dark,"found",0,0,.035);for(let W=-5;W<=5;W++)h(I,new Ce(.025,.28,.025),a.vent,"found",W*.07,0,.055);h(I,new Ce(.82,.025,.025),a.vent,"found",0,0,.055)};S({x:-3.3,y:.33,z:3.04}),S({x:5.3,y:.33,z:3.04}),S({x:-.6,y:.33,z:6.04}),S({x:3.6,y:.33,z:6.04}),S({x:-4.04,y:.33,z:-2.6,ry:-se/2}),S({x:13.04,y:.33,z:-1.5,ry:se/2}),l(7,3.6,6,a.stucco,9.5,1.8,0),l(7.08,.65,6.08,a.base,9.5,.325,0),i.add(Ua(3,1.3,.2),a.stucco,null,12.8,3.6,0,0,se/2,0),v(7.6,3.87,9.8,4.23,1.82,ao,0),v(7.6,3.87,9.8,4.23,-1.82,ao,se),p.push({len:7.6,x:9.8,y:4.98,z:0,alongZ:!1}),l(7.6,.24,.08,a.woodDk,9.8,3.28,3.47,"wood"),i.add(new Oi(.15,.15,7.7,16,1,!0,se,se),a.copper,"gutter",9.8,3.24,3.66,0,0,se/2);for(let I of[5.95,13.65])i.add(new Yd(.15,12,se,se),a.copper,"gutter",I,3.24,3.66,0,se/2,0);i.add(new Oi(.065,.065,3.1,10),a.copper,"gutter",13.45,1.68,3.66),i.add(new Oi(.065,.065,.4,10),a.copper,"gutter",13.45,.08,3.85,se/2.6);for(let I=0;I<46;I++){let W=6.1+$t()*7.5;i.add(new Oa(.09,6,4),c[I%3],"gutter",W,3.27+$t()*.05,3.66+($t()-.5)*.16,$t(),$t()*3,0,"XYZ",1.7,.3,1)}for(let I=0;I<70;I++){let W=9+$t()*4.5,U=-.4-$t()*3;i.add(new Oa(.09,6,4),c[I%3],null,W,4.85- -U*Math.tan(ao)+.03,U,-ao,$t()*3,0,"YXZ",1.7,.3,1)}for(let I=6.3;I<=13.4;I+=.55)l(.13,.2,.7,a.woodDk,I,3.39,3.27,"eaves",ao),l(.13,.2,.7,a.woodDk,I,3.39,-3.27,"eaves",-ao);for(let I of[7.3,9.5,11.7])x(I,3);m(8.4,2.5,3),m(10.6,2.5,3),d({x:13,y:1.2,z:0,ry:se/2},.9,1.6);for(let[I,W]of[[-.3,3.9],[.3,3.9],[0,4.25]])i.add(new Oi(.1,.1,.3,12),a.terracotta,"attic",13.02,W,I,0,0,se/2),i.add(new Yd(.07,12),a.dark,"attic",13.18,W,I,0,se/2,0);let b=n.hgt;l(6,.08,6.2,a.deck,-7,1,0,"deck");for(let I of[-3.1,3.1])l(6,.28,.1,a.post,-7,.83,I,"deck");l(.1,.28,6.2,a.post,-10,.83,0,"deck");for(let I=-9.7;I<-4;I+=.6)l(.06,.22,6.2,a.post,I,.84,0,"deck");for(let I of[-9.8,-6.9])for(let W of[-2.9,0,2.9]){let U=b(I,W)-.2,H=.86-U;l(.22,H,.22,a.post,I,U+H/2,W,"deck")}for(let[I,W]of[[-2.9,0],[0,2.9]]){let U=b(-9.8,I)+.4,H=.75-U,tt=W-I,pt=Math.hypot(H,tt),ut=Math.atan2(H,tt);l(.08,.14,pt,a.post,-9.86,U+H/2,(I+W)/2,"deck",-ut),l(.08,.14,pt,a.post,-9.74,U+H/2,(I+W)/2,"deck",ut)}let E=(I,W,U,H)=>{let tt=U-I,pt=H-W,ut=Math.hypot(tt,pt),mt=Math.atan2(tt,pt),Tt=(I+U)/2,ht=(W+H)/2;l(.1,.06,ut,a.post,Tt,2,ht,"deck",0,mt),l(.16,.04,ut+.1,a.post,Tt,2.05,ht,"deck",0,mt),l(.06,.06,ut,a.post,Tt,1.14,ht,"deck",0,mt);let ot=Math.round(ut/.12);for(let N=0;N<=ot;N++){let ct=N/ot;l(.04,.84,.04,a.post,I+tt*ct,1.56,W+pt*ct,"deck",0,mt)}for(let N of[0,.5,1])l(.1,1.04,.1,a.post,I+tt*N,1.52,W+pt*N,"deck")};E(-9.95,-3.05,-9.95,3.05),E(-9.95,3.05,-4.1,3.05),E(-9.95,-3.05,-4.1,-3.05);for(let[I,W,U]of[[-8.6,1.3,.4],[-8.6,-.6,-.3]]){l(.7,.08,1.3,a.post,I,1.38,W,"deck",0,U),l(.62,.08,1.2,a.cushion,I,1.45,W,"deck",0,U);let H=I-Math.sin(U)*.6,tt=W-Math.cos(U)*.6;l(.7,.7,.08,a.post,H,1.72,tt,"deck",-.35,U,0,"YXZ");for(let pt of[-1,1])l(.06,.34,1.2,a.post,I+Math.cos(U)*pt*.33,1.2,W-Math.sin(U)*pt*.33,"deck",0,U)}let C=b(-6.2,1.4);for(let I=0;I<4;I++)for(let W=0;W<5-I;W++)i.add(new Oi(.12,.12,1,9),a.log,"deck",-6.9+W*.25+I*.12,C+.13+I*.21,1.4,se/2,0,0);for(let I=0;I<40;I++){let W=-9.6+$t()*5.4,U=-2.8+$t()*5.6;i.add(new Oa(.1,6,4),c[I%3],"deck",W,b(W,U)+.03,U,0,$t()*3,0,"XYZ",1.8,.25,1)}l(3,.06,1.4,a.mulch,-2.5,.03,3.72,"zone"),l(2,.06,1.4,a.mulch,5,.03,3.72,"zone"),l(1.5,.06,1.25,a.mulch,-.22,.03,6.66,"zone"),l(1.5,.06,1.25,a.mulch,3.22,.03,6.66,"zone"),l(7,.06,1.2,a.mulch,9.5,.03,-3.65,"zone");let w=(I,W,U,H,tt,pt=.8)=>i.add(hs(W,U*7+tt),I,"zone",U,H,tt,0,$t()*3,0,"XYZ",1,pt,1);w(a.shrub,.55,-2.05,.42,3.8),w(a.shrubDry,.45,-1.35,.34,3.85),w(a.shrub,.42,4.4,.34,3.8);for(let I=0;I<6;I++)w(I%2?a.shrub:a.shrubDry,.45,7+I*1.1,.32,-3.65);for(let I of[-.25,.35])l(.06,3.2,.06,a.post,I,1.6,6.1,"zone");for(let I of[1.2,2,2.8])l(.8,.05,.05,a.post,.05,I,6.1,"zone");for(let I=0;I<26;I++){let W=1.15+$t()*2.4,U=-.35+$t()*.8;i.add(hs(.18+$t()*.12,I),I%3?a.boug:a.bougLeaf,"zone",U,W,6.12+$t()*.15)}let M=i.build(s,t,e),D=new Oi(.13,.155,.5,9,1,!0,-se/2,se);D.rotateX(-se/2);let F=ie({roughness:.62,side:un,envMapIntensity:.8}),B=0;for(let I of g)B+=Math.floor(I.len/.3)*Math.ceil(I.slope/.42);for(let I of p)B+=Math.ceil(I.len/.45);let L=new ci(D,F,B);L.castShadow=L.receiveShadow=!0;let O=new Ct,z=new Ct,j=new pe,it=new at,Z=0,q=()=>it.setHSL(.035+$t()*.025,.5+$t()*.2,.3+$t()*.12);for(let I of g){O.compose(Sn(I.x,I.y,I.z),j.setFromEuler(new Ze(I.tilt,I.ry,0,"YXZ")),Sn(1,1,1));let W=Math.floor(I.len/.3),U=Math.ceil(I.slope/.42);for(let H=0;H<W;H++)for(let tt=0;tt<U;tt++)z.compose(Sn(-I.len/2+.15+H*.3+(I.len-W*.3)/2,.1,-I.slope/2+.22+tt*.42),new pe().setFromEuler(new Ze(-.07,($t()-.5)*.04,0)),Sn(1,1,1)),L.setMatrixAt(Z,O.clone().multiply(z)),L.setColorAt(Z++,q())}for(let I of p){let W=Math.ceil(I.len/.45);for(let U=0;U<W;U++){let H=-I.len/2+.22+U*.45,tt=I.alongZ?Sn(I.x,I.y,I.z+H):Sn(I.x+H,I.y,I.z);z.compose(tt,j.setFromEuler(new Ze(0,I.alongZ?0:se/2,0)),Sn(1.35,1.35,1)),L.setMatrixAt(Z,z.clone()),L.setColorAt(Z++,q())}}return L.count=Z,s.add(L),{M:a,tiles:L,lights:[Sn(1.5,2.4,6.6),Sn(9.5,2.4,3.6),Sn(-4.5,2.5,-1)]}}var nS=`
float dh(vec2 p){ p=fract(p*vec2(123.34,456.21)); p+=dot(p,p+45.32); return fract(p.x*p.y); }
float dn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
  return mix(mix(dh(i),dh(i+vec2(1,0)),f.x), mix(dh(i+vec2(0,1)),dh(i+vec2(1,1)),f.x), f.y); }
float dfbm(vec2 p){ return dn(p)*0.55 + dn(p*2.1+3.1)*0.3 + dn(p*4.3+7.7)*0.15; }
`;function Jg(s,t,e){s.onBeforeCompile=n=>{Object.assign(n.uniforms,t),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vDWP;`).replace("#include <project_vertex>",`#include <project_vertex>
{ vec4 dw = vec4(transformed, 1.0);
#ifdef USE_INSTANCING
 dw = instanceMatrix * dw;
#endif
 vDWP = (modelMatrix * dw).xyz; }`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vDWP;
`+Object.keys(t).map(i=>`uniform ${typeof t[i].value=="number"?"float":"vec3"} ${i};`).join(`
`)+nS).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
`+e)},s.customProgramCacheKey=()=>"dmg"+e.length,s.needsUpdate=!0}function $g({scene:s,M:t,tiles:e,SMALL:n}){let i={uScH:{value:-1},uScK:{value:0}},r=`
  { float edge = uScH + (dfbm(vec2(vDWP.x + vDWP.z, vDWP.y * 0.3) * 0.9) - 0.5) * 2.4;
    float soot = smoothstep(edge, edge - 1.6, vDWP.y) * uScK;
    soot *= 0.75 + 0.25 * dn(vDWP.xy * 3.0 + vDWP.z);
    diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.05, 0.043, 0.038), clamp(soot, 0.0, 0.92)); }`;for(let b of["stucco","base","cast"])Jg(t[b],i,r);let o={uCrack:{value:0}},a=`
  { vec2 q = vec2(vDWP.x + vDWP.z, vDWP.y) * 2.2;
    float n = dfbm(q) ; float cr = 1.0 - smoothstep(0.0, 0.035, abs(n - 0.5));
    float n2 = dfbm(q * 1.7 + 9.0); cr = max(cr, 1.0 - smoothstep(0.0, 0.03, abs(n2 - 0.5)));
    cr *= uCrack;
    totalEmissiveRadiance += vec3(1.0, 0.55, 0.2) * cr * 2.5;
    diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.75, 0.72, 0.68), cr * 0.6); }`;for(let b of["glass","glassDim"])Jg(t[b],o,a),t[b].userData.e0=t[b].emissive.clone(),t[b].userData.i0=t[b].emissiveIntensity;t.roofDeck.userData.e0=t.roofDeck.emissive.clone(),t.roofDeck.userData.i0=t.roofDeck.emissiveIntensity,t.roofDeck.userData.c0=t.roofDeck.color.clone();let c=e.count,l=[],u=new Ct,h=new at;for(let b=0;b<c;b++){e.getMatrixAt(b,u);let E=new T,C=new pe,w=new T;u.decompose(E,C,w),e.getColorAt(b,h);let M=Math.hypot((E.x-1.2)/4.6,(E.z+.5)/3.4),D=Math.abs(Math.sin(E.x*12.9898+E.z*78.233)*43758.5453)%1;l.push({p:E,q:C,s:w,c:h.clone(),bell:E.z<2.6?Math.max(0,1-M*M):0,hole:E.z<2.6&&M<.62+D*.25,j:D})}let f=new at(.1,.07,.055),d=new T,m=new T,x=new at,g="";function p(b,E,C){let w=b.toFixed(3)+E.toFixed(3)+C.toFixed(3);if(w!==g){g=w;for(let M=0;M<c;M++){let D=l[M],F=D.hole&&E>D.j*.8+.1;d.copy(D.p),d.y-=b*1.6*D.bell,m.copy(D.s),F&&m.setScalar(1e-4),u.compose(d,D.q,m),e.setMatrixAt(M,u),x.copy(D.c).lerp(f,Math.min(.9,C*(.5+D.bell*.6))),e.setColorAt(M,x)}e.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0)}}let v=n?3:5,_=[];for(let b=0;b<v;b++){let E=new Jr(16742954,0,14,1.6);E.castShadow=!1,s.add(E),_.push(E)}let y=new at(16738842),S=new at(16726536);return{apply(b,E,C,w,M){let D=q=>M?1:.8+.2*Math.sin(C*11+q*2.3)*Math.sin(C*6.7+q),F=b.ign.struct,B=F==null||E<F?-1:E-F,L=-1,O=0,z=["zone","found","deck","crawl"].map(q=>b.ign[q]).filter(q=>q!=null&&E>=q);if(z.length){let q=E-Math.min(...z);L=Math.min(1.4,q/12),O=Math.min(.7,q/15)}b.ign.wood!=null&&E>=b.ign.wood&&(L=Math.max(L,Math.min(3,(E-b.ign.wood)/10)),O=Math.max(O,.6)),B>=0&&(L=Math.max(L,1+Math.min(10,B/6)),O=Math.min(.95,.7+B/60)),i.uScH.value=L,i.uScK.value=O;let j=B<0?0:Math.min(1,B/12);o.uCrack.value=j;for(let q of["glass","glassDim"]){let I=t[q];B>=0?(I.emissive.copy(y).lerp(S,Math.min(1,B/80)),I.emissiveIntensity=(2.2+Math.min(2.5,B/10))*D(q.length)):(I.emissive.copy(I.userData.e0),I.emissiveIntensity=I.userData.i0)}let it=B<25?0:Math.min(1,(B-25)/70),Z=B<50?0:Math.min(1,(B-50)/60);p(it,Z,B<0?0:Math.min(1,B/50)),t.roofDeck.color.copy(t.roofDeck.userData.c0).lerp(f,B<0?0:Math.min(1,B/40)),Z>0?(t.roofDeck.emissive.copy(y),t.roofDeck.emissiveIntensity=1.6*D(9)):(t.roofDeck.emissive.copy(t.roofDeck.userData.e0),t.roofDeck.emissiveIntensity=t.roofDeck.userData.i0),w.sort((q,I)=>I[3]*I[4]-q[3]*q[4]);for(let q=0;q<v;q++){let I=_[q],W=w[q];if(!W){I.intensity=0;continue}I.position.set(W[0],W[1]+W[3]*.35,W[2]+.6),I.distance=6+W[3]*2.4,I.intensity=(14+W[3]*14)*W[4]*D(q)}},reset(){i.uScH.value=-1,i.uScK.value=0,o.uCrack.value=0,p(0,0,0);for(let b of["glass","glassDim","roofDeck"])t[b].emissive.copy(t[b].userData.e0),t[b].emissiveIntensity=t[b].userData.i0;t.roofDeck.color.copy(t.roofDeck.userData.c0),_.forEach(b=>b.intensity=0)}}}var Kg=Math.pow(2,-24),du=Symbol("SKIP_GENERATION");function iS(s){return s.index?s.index.count:s.attributes.position.count}function pi(s){return iS(s)/3}function sS(s,t=ArrayBuffer){return s>65535?new Uint32Array(new t(4*s)):new Uint16Array(new t(2*s))}function jg(s,t){if(!s.index){let e=s.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=sS(e,n);s.setIndex(new Gt(i,1));for(let r=0;r<e;r++)i[r]=r}}function Zd(s,t){let e=pi(s),n=t||s.drawRange,i=n.start/3,r=(n.start+n.count)/3,o=Math.max(0,i),a=Math.min(e,r)-o;return[{offset:Math.floor(o),count:Math.floor(a)}]}function Jd(s,t){if(!s.groups||!s.groups.length)return Zd(s,t);let e=[],n=new Set,i=t||s.drawRange,r=i.start/3,o=(i.start+i.count)/3;for(let c of s.groups){let l=c.start/3,u=(c.start+c.count)/3;n.add(Math.max(r,l)),n.add(Math.min(o,u))}let a=Array.from(n.values()).sort((c,l)=>c-l);for(let c=0;c<a.length-1;c++){let l=a[c],u=a[c+1];e.push({offset:Math.floor(l),count:Math.floor(u-l)})}return e}function Qg(s,t){let e=pi(s),n=Jd(s,t).sort((o,a)=>o.offset-a.offset),i=n[n.length-1];i.count=Math.min(e-i.offset,i.count);let r=0;return n.forEach(({count:o})=>r+=o),e!==r}function pu(s,t,e,n,i){let r=1/0,o=1/0,a=1/0,c=-1/0,l=-1/0,u=-1/0,h=1/0,f=1/0,d=1/0,m=-1/0,x=-1/0,g=-1/0;for(let p=t*6,v=(t+e)*6;p<v;p+=6){let _=s[p+0],y=s[p+1],S=_-y,b=_+y;S<r&&(r=S),b>c&&(c=b),_<h&&(h=_),_>m&&(m=_);let E=s[p+2],C=s[p+3],w=E-C,M=E+C;w<o&&(o=w),M>l&&(l=M),E<f&&(f=E),E>x&&(x=E);let D=s[p+4],F=s[p+5],B=D-F,L=D+F;B<a&&(a=B),L>u&&(u=L),D<d&&(d=D),D>g&&(g=D)}n[0]=r,n[1]=o,n[2]=a,n[3]=c,n[4]=l,n[5]=u,i[0]=h,i[1]=f,i[2]=d,i[3]=m,i[4]=x,i[5]=g}function tx(s,t=null,e=null,n=null){let i=s.attributes.position,r=s.index?s.index.array:null,o=pi(s),a=i.normalized,c;t===null?(c=new Float32Array(o*6*4),e=0,n=o):(c=t,e=e||0,n=n||o);let l=i.array,u=i.offset||0,h=3;i.isInterleavedBufferAttribute&&(h=i.data.stride);let f=["getX","getY","getZ"];for(let d=e;d<e+n;d++){let m=d*3,x=d*6,g=m+0,p=m+1,v=m+2;r&&(g=r[g],p=r[p],v=r[v]),a||(g=g*h+u,p=p*h+u,v=v*h+u);for(let _=0;_<3;_++){let y,S,b;a?(y=i[f[_]](g),S=i[f[_]](p),b=i[f[_]](v)):(y=l[g+_],S=l[p+_],b=l[v+_]);let E=y;S<E&&(E=S),b<E&&(E=b);let C=y;S>C&&(C=S),b>C&&(C=b);let w=(C-E)/2,M=_*2;c[x+M+0]=E+w,c[x+M+1]=w+(Math.abs(E)+w)*Kg}}return c}function me(s,t,e){return e.min.x=t[s],e.min.y=t[s+1],e.min.z=t[s+2],e.max.x=t[s+3],e.max.y=t[s+4],e.max.z=t[s+5],e}function $d(s){let t=-1,e=-1/0;for(let n=0;n<3;n++){let i=s[n+3]-s[n];i>e&&(e=i,t=n)}return t}function Kd(s,t){t.set(s)}function jd(s,t,e){let n,i;for(let r=0;r<3;r++){let o=r+3;n=s[r],i=t[r],e[r]=n<i?n:i,n=s[o],i=t[o],e[o]=n>i?n:i}}function za(s,t,e){for(let n=0;n<3;n++){let i=t[s+2*n],r=t[s+2*n+1],o=i-r,a=i+r;o<e[n]&&(e[n]=o),a>e[n+3]&&(e[n+3]=a)}}function co(s){let t=s[3]-s[0],e=s[4]-s[1],n=s[5]-s[2];return 2*(t*e+e*n+n*t)}var zi=32,oS=(s,t)=>s.candidate-t.candidate,ds=new Array(zi).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),mu=new Float32Array(6);function ix(s,t,e,n,i,r){let o=-1,a=0;if(r===0)o=$d(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(r===1)o=$d(s),o!==-1&&(a=aS(e,n,i,o));else if(r===2){let c=co(s),l=1.25*i,u=n*6,h=(n+i)*6;for(let f=0;f<3;f++){let d=t[f],g=(t[f+3]-d)/zi;if(i<zi/4){let p=[...ds];p.length=i;let v=0;for(let y=u;y<h;y+=6,v++){let S=p[v];S.candidate=e[y+2*f],S.count=0;let{bounds:b,leftCacheBounds:E,rightCacheBounds:C}=S;for(let w=0;w<3;w++)C[w]=1/0,C[w+3]=-1/0,E[w]=1/0,E[w+3]=-1/0,b[w]=1/0,b[w+3]=-1/0;za(y,e,b)}p.sort(oS);let _=i;for(let y=0;y<_;y++){let S=p[y];for(;y+1<_&&p[y+1].candidate===S.candidate;)p.splice(y+1,1),_--}for(let y=u;y<h;y+=6){let S=e[y+2*f];for(let b=0;b<_;b++){let E=p[b];S>=E.candidate?za(y,e,E.rightCacheBounds):(za(y,e,E.leftCacheBounds),E.count++)}}for(let y=0;y<_;y++){let S=p[y],b=S.count,E=i-S.count,C=S.leftCacheBounds,w=S.rightCacheBounds,M=0;b!==0&&(M=co(C)/c);let D=0;E!==0&&(D=co(w)/c);let F=1+1.25*(M*b+D*E);F<l&&(o=f,l=F,a=S.candidate)}}else{for(let _=0;_<zi;_++){let y=ds[_];y.count=0,y.candidate=d+g+_*g;let S=y.bounds;for(let b=0;b<3;b++)S[b]=1/0,S[b+3]=-1/0}for(let _=u;_<h;_+=6){let b=~~((e[_+2*f]-d)/g);b>=zi&&(b=zi-1);let E=ds[b];E.count++,za(_,e,E.bounds)}let p=ds[zi-1];Kd(p.bounds,p.rightCacheBounds);for(let _=zi-2;_>=0;_--){let y=ds[_],S=ds[_+1];jd(y.bounds,S.rightCacheBounds,y.rightCacheBounds)}let v=0;for(let _=0;_<zi-1;_++){let y=ds[_],S=y.count,b=y.bounds,C=ds[_+1].rightCacheBounds;S!==0&&(v===0?Kd(b,mu):jd(b,mu,mu)),v+=S;let w=0,M=0;v!==0&&(w=co(mu)/c);let D=i-v;D!==0&&(M=co(C)/c);let F=1+1.25*(w*v+M*D);F<l&&(o=f,l=F,a=y.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:a}}function aS(s,t,e,n){let i=0;for(let r=t,o=t+e;r<o;r++)i+=s[r*6+n*2];return i/e}var lo=class{constructor(){this.boundingData=new Float32Array(6)}};function sx(s,t,e,n,i,r){let o=n,a=n+i-1,c=r.pos,l=r.axis*2;for(;;){for(;o<=a&&e[o*6+l]<c;)o++;for(;o<=a&&e[a*6+l]>=c;)a--;if(o<a){for(let u=0;u<3;u++){let h=t[o*3+u];t[o*3+u]=t[a*3+u],t[a*3+u]=h}for(let u=0;u<6;u++){let h=e[o*6+u];e[o*6+u]=e[a*6+u],e[a*6+u]=h}o++,a--}else return o}}function rx(s,t,e,n,i,r){let o=n,a=n+i-1,c=r.pos,l=r.axis*2;for(;;){for(;o<=a&&e[o*6+l]<c;)o++;for(;o<=a&&e[a*6+l]>=c;)a--;if(o<a){let u=s[o];s[o]=s[a],s[a]=u;for(let h=0;h<6;h++){let f=e[o*6+h];e[o*6+h]=e[a*6+h],e[a*6+h]=f}o++,a--}else return o}}function Me(s,t){return t[s+15]===65535}function Be(s,t){return t[s+6]}function He(s,t){return t[s+14]}function $e(s){return s+8}function Ke(s,t){return t[s+6]}function gu(s,t){return t[s+7]}var ox,ka,xu,ax,cS=Math.pow(2,32);function _u(s){return"count"in s?1:1+_u(s.left)+_u(s.right)}function cx(s,t,e){return ox=new Float32Array(e),ka=new Uint32Array(e),xu=new Uint16Array(e),ax=new Uint8Array(e),Qd(s,t)}function Qd(s,t){let e=s/4,n=s/2,i="count"in t,r=t.boundingData;for(let o=0;o<6;o++)ox[e+o]=r[o];if(i)if(t.buffer){let o=t.buffer;ax.set(new Uint8Array(o),s);for(let a=s,c=s+o.byteLength;a<c;a+=32){let l=a/2;Me(l,xu)||(ka[a/4+6]+=e)}return s+o.byteLength}else{let o=t.offset,a=t.count;return ka[e+6]=o,xu[n+14]=a,xu[n+15]=65535,s+32}else{let o=t.left,a=t.right,c=t.splitAxis,l;if(l=Qd(s+32,o),l/4>cS)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return ka[e+6]=l/4,l=Qd(l,a),ka[e+7]=c,l}}function lS(s,t){let e=(s.index?s.index.count:s.attributes.position.count)/3,n=e>2**16,i=n?4:2,r=t?new SharedArrayBuffer(e*i):new ArrayBuffer(e*i),o=n?new Uint32Array(r):new Uint16Array(r);for(let a=0,c=o.length;a<c;a++)o[a]=a;return o}function uS(s,t,e,n,i){let{maxDepth:r,verbose:o,maxLeafTris:a,strategy:c,onProgress:l,indirect:u}=i,h=s._indirectBuffer,f=s.geometry,d=f.index?f.index.array:null,m=u?rx:sx,x=pi(f),g=new Float32Array(6),p=!1,v=new lo;return pu(t,e,n,v.boundingData,g),y(v,e,n,g),v;function _(S){l&&l(S/x)}function y(S,b,E,C=null,w=0){if(!p&&w>=r&&(p=!0,o&&(console.warn(`MeshBVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`),console.warn(f))),E<=a||w>=r)return _(b+E),S.offset=b,S.count=E,S;let M=ix(S.boundingData,C,t,b,E,c);if(M.axis===-1)return _(b+E),S.offset=b,S.count=E,S;let D=m(h,d,t,b,E,M);if(D===b||D===b+E)_(b+E),S.offset=b,S.count=E;else{S.splitAxis=M.axis;let F=new lo,B=b,L=D-b;S.left=F,pu(t,B,L,F.boundingData,g),y(F,B,L,g,w+1);let O=new lo,z=D,j=E-L;S.right=O,pu(t,z,j,O.boundingData,g),y(O,z,j,g,w+1)}return S}}function lx(s,t){let e=s.geometry;t.indirect&&(s._indirectBuffer=lS(e,t.useSharedArrayBuffer),Qg(e,t.range)&&!t.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),s._indirectBuffer||jg(e,t);let n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=tx(e),r=t.indirect?Zd(e,t.range):Jd(e,t.range);s._roots=r.map(o=>{let a=uS(s,i,o.offset,o.count,t),c=_u(a),l=new n(32*c);return cx(0,a,l),l})}var En=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,i=-1/0;for(let r=0,o=t.length;r<o;r++){let c=t[r][e];n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}setFromPoints(t,e){let n=1/0,i=-1/0;for(let r=0,o=e.length;r<o;r++){let a=e[r],c=t.dot(a);n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}isSeparated(t){return this.min>t.max||t.min>this.max}};En.prototype.setFromBox=(function(){let s=new T;return function(e,n){let i=n.min,r=n.max,o=1/0,a=-1/0;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let u=0;u<=1;u++){s.x=i.x*c+r.x*(1-c),s.y=i.y*l+r.y*(1-l),s.z=i.z*u+r.z*(1-u);let h=e.dot(s);o=Math.min(h,o),a=Math.max(h,a)}this.min=o,this.max=a}})();var HE=(function(){let s=new En;return function(e,n){let i=e.points,r=e.satAxes,o=e.satBounds,a=n.points,c=n.satAxes,l=n.satBounds;for(let u=0;u<3;u++){let h=o[u],f=r[u];if(s.setFromPoints(f,a),h.isSeparated(s))return!1}for(let u=0;u<3;u++){let h=l[u],f=c[u];if(s.setFromPoints(f,i),h.isSeparated(s))return!1}}})();var hS=(function(){let s=new T,t=new T,e=new T;return function(i,r,o){let a=i.start,c=s,l=r.start,u=t;e.subVectors(a,l),s.subVectors(i.end,i.start),t.subVectors(r.end,r.start);let h=e.dot(u),f=u.dot(c),d=u.dot(u),m=e.dot(c),g=c.dot(c)*d-f*f,p,v;g!==0?p=(h*f-m*d)/g:p=0,v=(h+p*f)/d,o.x=p,o.y=v}})(),Va=(function(){let s=new st,t=new T,e=new T;return function(i,r,o,a){hS(i,r,s);let c=s.x,l=s.y;if(c>=0&&c<=1&&l>=0&&l<=1){i.at(c,o),r.at(l,a);return}else if(c>=0&&c<=1){l<0?r.at(0,a):r.at(1,a),i.closestPointToPoint(a,!0,o);return}else if(l>=0&&l<=1){c<0?i.at(0,o):i.at(1,o),r.closestPointToPoint(o,!0,a);return}else{let u;c<0?u=i.start:u=i.end;let h;l<0?h=r.start:h=r.end;let f=t,d=e;if(i.closestPointToPoint(h,!0,t),r.closestPointToPoint(u,!0,e),f.distanceToSquared(h)<=d.distanceToSquared(u)){o.copy(f),a.copy(h);return}else{o.copy(u),a.copy(d);return}}}})(),ux=(function(){let s=new T,t=new T,e=new yn,n=new xn;return function(r,o){let{radius:a,center:c}=r,{a:l,b:u,c:h}=o;if(n.start=l,n.end=u,n.closestPointToPoint(c,!0,s).distanceTo(c)<=a||(n.start=l,n.end=h,n.closestPointToPoint(c,!0,s).distanceTo(c)<=a)||(n.start=u,n.end=h,n.closestPointToPoint(c,!0,s).distanceTo(c)<=a))return!0;let x=o.getPlane(e);if(Math.abs(x.distanceToPoint(c))<=a){let p=x.projectPoint(c,t);if(o.containsPoint(p))return!0}return!1}})();var fS=1e-15;function tp(s){return Math.abs(s)<fS}var sn=class extends fn{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new T),this.satBounds=new Array(4).fill().map(()=>new En),this.points=[this.a,this.b,this.c],this.sphere=new Re,this.plane=new yn,this.needsUpdate=!0}intersectsSphere(t){return ux(t,this)}update(){let t=this.a,e=this.b,n=this.c,i=this.points,r=this.satAxes,o=this.satBounds,a=r[0],c=o[0];this.getNormal(a),c.setFromPoints(a,i);let l=r[1],u=o[1];l.subVectors(t,e),u.setFromPoints(l,i);let h=r[2],f=o[2];h.subVectors(e,n),f.setFromPoints(h,i);let d=r[3],m=o[3];d.subVectors(n,t),m.setFromPoints(d,i),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}};sn.prototype.closestPointToSegment=(function(){let s=new T,t=new T,e=new xn;return function(i,r=null,o=null){let{start:a,end:c}=i,l=this.points,u,h=1/0;for(let f=0;f<3;f++){let d=(f+1)%3;e.start.copy(l[f]),e.end.copy(l[d]),Va(e,i,s,t),u=s.distanceToSquared(t),u<h&&(h=u,r&&r.copy(s),o&&o.copy(t))}return this.closestPointToPoint(a,s),u=a.distanceToSquared(s),u<h&&(h=u,r&&r.copy(s),o&&o.copy(a)),this.closestPointToPoint(c,s),u=c.distanceToSquared(s),u<h&&(h=u,r&&r.copy(s),o&&o.copy(c)),Math.sqrt(h)}})();sn.prototype.intersectsTriangle=(function(){let s=new sn,t=new Array(3),e=new Array(3),n=new En,i=new En,r=new T,o=new T,a=new T,c=new T,l=new T,u=new xn,h=new xn,f=new xn,d=new T;function m(x,g,p){let v=x.points,_=0,y=-1;for(let S=0;S<3;S++){let{start:b,end:E}=u;b.copy(v[S]),E.copy(v[(S+1)%3]),u.delta(o);let C=tp(g.distanceToPoint(b));if(tp(g.normal.dot(o))&&C){p.copy(u),_=2;break}let w=g.intersectLine(u,d);if(!w&&C&&d.copy(b),(w||C)&&!tp(d.distanceTo(E))){if(_<=1)(_===1?p.start:p.end).copy(d),C&&(y=_);else if(_>=2){(y===1?p.start:p.end).copy(d),_=2;break}if(_++,_===2&&y===-1)break}}return _}return function(g,p=null,v=!1){this.needsUpdate&&this.update(),g.isExtendedTriangle?g.needsUpdate&&g.update():(s.copy(g),s.update(),g=s);let _=this.plane,y=g.plane;if(Math.abs(_.normal.dot(y.normal))>1-1e-10){let S=this.satBounds,b=this.satAxes;e[0]=g.a,e[1]=g.b,e[2]=g.c;for(let w=0;w<4;w++){let M=S[w],D=b[w];if(n.setFromPoints(D,e),M.isSeparated(n))return!1}let E=g.satBounds,C=g.satAxes;t[0]=this.a,t[1]=this.b,t[2]=this.c;for(let w=0;w<4;w++){let M=E[w],D=C[w];if(n.setFromPoints(D,t),M.isSeparated(n))return!1}for(let w=0;w<4;w++){let M=b[w];for(let D=0;D<4;D++){let F=C[D];if(r.crossVectors(M,F),n.setFromPoints(r,t),i.setFromPoints(r,e),n.isSeparated(i))return!1}}return p&&(v||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),p.start.set(0,0,0),p.end.set(0,0,0)),!0}else{let S=m(this,y,h);if(S===1&&g.containsPoint(h.end))return p&&(p.start.copy(h.end),p.end.copy(h.end)),!0;if(S!==2)return!1;let b=m(g,_,f);if(b===1&&this.containsPoint(f.end))return p&&(p.start.copy(f.end),p.end.copy(f.end)),!0;if(b!==2)return!1;if(h.delta(a),f.delta(c),a.dot(c)<0){let B=f.start;f.start=f.end,f.end=B}let E=h.start.dot(a),C=h.end.dot(a),w=f.start.dot(a),M=f.end.dot(a),D=C<w,F=E<M;return E!==M&&w!==C&&D===F?!1:(p&&(l.subVectors(h.start,f.start),l.dot(a)>0?p.start.copy(h.start):p.start.copy(f.start),l.subVectors(h.end,f.end),l.dot(a)<0?p.end.copy(h.end):p.end.copy(f.end)),!0)}}})();sn.prototype.distanceToPoint=(function(){let s=new T;return function(e){return this.closestPointToPoint(e,s),e.distanceTo(s)}})();sn.prototype.distanceToTriangle=(function(){let s=new T,t=new T,e=["a","b","c"],n=new xn,i=new xn;return function(o,a=null,c=null){let l=a||c?n:null;if(this.intersectsTriangle(o,l))return(a||c)&&(a&&l.getCenter(a),c&&l.getCenter(c)),0;let u=1/0;for(let h=0;h<3;h++){let f,d=e[h],m=o[d];this.closestPointToPoint(m,s),f=m.distanceToSquared(s),f<u&&(u=f,a&&a.copy(s),c&&c.copy(m));let x=this[d];o.closestPointToPoint(x,s),f=x.distanceToSquared(s),f<u&&(u=f,a&&a.copy(x),c&&c.copy(s))}for(let h=0;h<3;h++){let f=e[h],d=e[(h+1)%3];n.set(this[f],this[d]);for(let m=0;m<3;m++){let x=e[m],g=e[(m+1)%3];i.set(o[x],o[g]),Va(n,i,s,t);let p=s.distanceToSquared(t);p<u&&(u=p,a&&a.copy(s),c&&c.copy(t))}}return Math.sqrt(u)}})();var Pe=class{constructor(t,e,n){this.isOrientedBox=!0,this.min=new T,this.max=new T,this.matrix=new Ct,this.invMatrix=new Ct,this.points=new Array(8).fill().map(()=>new T),this.satAxes=new Array(3).fill().map(()=>new T),this.satBounds=new Array(3).fill().map(()=>new En),this.alignedSatBounds=new Array(3).fill().map(()=>new En),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}};Pe.prototype.update=(function(){return function(){let t=this.matrix,e=this.min,n=this.max,i=this.points;for(let l=0;l<=1;l++)for(let u=0;u<=1;u++)for(let h=0;h<=1;h++){let f=1*l|2*u|4*h,d=i[f];d.x=l?n.x:e.x,d.y=u?n.y:e.y,d.z=h?n.z:e.z,d.applyMatrix4(t)}let r=this.satBounds,o=this.satAxes,a=i[0];for(let l=0;l<3;l++){let u=o[l],h=r[l],f=1<<l,d=i[f];u.subVectors(a,d),h.setFromPoints(u,i)}let c=this.alignedSatBounds;c[0].setFromPointsField(i,"x"),c[1].setFromPointsField(i,"y"),c[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();Pe.prototype.intersectsBox=(function(){let s=new En;return function(e){this.needsUpdate&&this.update();let n=e.min,i=e.max,r=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(s.min=n.x,s.max=i.x,a[0].isSeparated(s)||(s.min=n.y,s.max=i.y,a[1].isSeparated(s))||(s.min=n.z,s.max=i.z,a[2].isSeparated(s)))return!1;for(let c=0;c<3;c++){let l=o[c],u=r[c];if(s.setFromBox(l,e),u.isSeparated(s))return!1}return!0}})();Pe.prototype.intersectsTriangle=(function(){let s=new sn,t=new Array(3),e=new En,n=new En,i=new T;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(s.copy(o),s.update(),o=s);let a=this.satBounds,c=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let f=0;f<3;f++){let d=a[f],m=c[f];if(e.setFromPoints(m,t),d.isSeparated(e))return!1}let l=o.satBounds,u=o.satAxes,h=this.points;for(let f=0;f<3;f++){let d=l[f],m=u[f];if(e.setFromPoints(m,h),d.isSeparated(e))return!1}for(let f=0;f<3;f++){let d=c[f];for(let m=0;m<4;m++){let x=u[m];if(i.crossVectors(d,x),e.setFromPoints(i,t),n.setFromPoints(i,h),e.isSeparated(n))return!1}}return!0}})();Pe.prototype.closestPointToPoint=(function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}})();Pe.prototype.distanceToPoint=(function(){let s=new T;return function(e){return this.closestPointToPoint(e,s),e.distanceTo(s)}})();Pe.prototype.distanceToBox=(function(){let s=["x","y","z"],t=new Array(12).fill().map(()=>new xn),e=new Array(12).fill().map(()=>new xn),n=new T,i=new T;return function(o,a=0,c=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(c||l)&&(o.getCenter(i),this.closestPointToPoint(i,n),o.closestPointToPoint(n,i),c&&c.copy(n),l&&l.copy(i)),0;let u=a*a,h=o.min,f=o.max,d=this.points,m=1/0;for(let g=0;g<8;g++){let p=d[g];i.copy(p).clamp(h,f);let v=p.distanceToSquared(i);if(v<m&&(m=v,c&&c.copy(p),l&&l.copy(i),v<u))return Math.sqrt(v)}let x=0;for(let g=0;g<3;g++)for(let p=0;p<=1;p++)for(let v=0;v<=1;v++){let _=(g+1)%3,y=(g+2)%3,S=p<<_|v<<y,b=1<<g|p<<_|v<<y,E=d[S],C=d[b];t[x].set(E,C);let M=s[g],D=s[_],F=s[y],B=e[x],L=B.start,O=B.end;L[M]=h[M],L[D]=p?h[D]:f[D],L[F]=v?h[F]:f[D],O[M]=f[M],O[D]=p?h[D]:f[D],O[F]=v?h[F]:f[D],x++}for(let g=0;g<=1;g++)for(let p=0;p<=1;p++)for(let v=0;v<=1;v++){i.x=g?f.x:h.x,i.y=p?f.y:h.y,i.z=v?f.z:h.z,this.closestPointToPoint(i,n);let _=i.distanceToSquared(n);if(_<m&&(m=_,c&&c.copy(n),l&&l.copy(i),_<u))return Math.sqrt(_)}for(let g=0;g<12;g++){let p=t[g];for(let v=0;v<12;v++){let _=e[v];Va(p,_,n,i);let y=n.distanceToSquared(i);if(y<m&&(m=y,c&&c.copy(n),l&&l.copy(i),y<u))return Math.sqrt(y)}}return Math.sqrt(m)}})();var ps=class{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){let t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}};var ep=class extends ps{constructor(){super(()=>new sn)}},_n=new ep;var np=class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;let t=[],e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}},re=new np;var ms,ho,uo=[],yu=new ps(()=>new ae);function hx(s,t,e,n,i,r){ms=yu.getPrimitive(),ho=yu.getPrimitive(),uo.push(ms,ho),re.setBuffer(s._roots[t]);let o=ip(0,s.geometry,e,n,i,r);re.clearBuffer(),yu.releasePrimitive(ms),yu.releasePrimitive(ho),uo.pop(),uo.pop();let a=uo.length;return a>0&&(ho=uo[a-1],ms=uo[a-2]),o}function ip(s,t,e,n,i=null,r=0,o=0){let{float32Array:a,uint16Array:c,uint32Array:l}=re,u=s*2;if(Me(u,c)){let f=Be(s,l),d=He(u,c);return me(s,a,ms),n(f,d,!1,o,r+s,ms)}else{let M=function(F){let{uint16Array:B,uint32Array:L}=re,O=F*2;for(;!Me(O,B);)F=$e(F),O=F*2;return Be(F,L)},D=function(F){let{uint16Array:B,uint32Array:L}=re,O=F*2;for(;!Me(O,B);)F=Ke(F,L),O=F*2;return Be(F,L)+He(O,B)},f=$e(s),d=Ke(s,l),m=f,x=d,g,p,v,_;if(i&&(v=ms,_=ho,me(m,a,v),me(x,a,_),g=i(v),p=i(_),p<g)){m=d,x=f;let F=g;g=p,p=F,v=_}v||(v=ms,me(m,a,v));let y=Me(m*2,c),S=e(v,y,g,o+1,r+m),b;if(S===2){let F=M(m),L=D(m)-F;b=n(F,L,!0,o+1,r+m,v)}else b=S&&ip(m,t,e,n,i,r,o+1);if(b)return!0;_=ho,me(x,a,_);let E=Me(x*2,c),C=e(_,E,p,o+1,r+x),w;if(C===2){let F=M(x),L=D(x)-F;w=n(F,L,!0,o+1,r+x,_)}else w=C&&ip(x,t,e,n,i,r,o+1);return!!w}}var Ga=new T,rp=new T;function fx(s,t,e={},n=0,i=1/0){let r=n*n,o=i*i,a=1/0,c=null;if(s.shapecast({boundsTraverseOrder:u=>(Ga.copy(t).clamp(u.min,u.max),Ga.distanceToSquared(t)),intersectsBounds:(u,h,f)=>f<a&&f<o,intersectsTriangle:(u,h)=>{u.closestPointToPoint(t,Ga);let f=t.distanceToSquared(Ga);return f<a&&(rp.copy(Ga),a=f,c=h),f<r}}),a===1/0)return null;let l=Math.sqrt(a);return e.point?e.point.copy(rp):e.point=rp.clone(),e.distance=l,e.faceIndex=c,e}var fo=new T,po=new T,mo=new T,wu=new st,bu=new st,Mu=new st,dx=new T,px=new T,mx=new T,Su=new T;function pS(s,t,e,n,i,r,o,a){let c;if(r===Qe?c=s.intersectTriangle(n,e,t,!0,i):c=s.intersectTriangle(t,e,n,r!==un,i),c===null)return null;let l=s.origin.distanceTo(i);return l<o||l>a?null:{distance:l,point:i.clone()}}function mS(s,t,e,n,i,r,o,a,c,l,u){fo.fromBufferAttribute(t,r),po.fromBufferAttribute(t,o),mo.fromBufferAttribute(t,a);let h=pS(s,fo,po,mo,Su,c,l,u);if(h){n&&(wu.fromBufferAttribute(n,r),bu.fromBufferAttribute(n,o),Mu.fromBufferAttribute(n,a),h.uv=fn.getInterpolation(Su,fo,po,mo,wu,bu,Mu,new st)),i&&(wu.fromBufferAttribute(i,r),bu.fromBufferAttribute(i,o),Mu.fromBufferAttribute(i,a),h.uv1=fn.getInterpolation(Su,fo,po,mo,wu,bu,Mu,new st)),e&&(dx.fromBufferAttribute(e,r),px.fromBufferAttribute(e,o),mx.fromBufferAttribute(e,a),h.normal=fn.getInterpolation(Su,fo,po,mo,dx,px,mx,new T),h.normal.dot(s.direction)>0&&h.normal.multiplyScalar(-1));let f={a:r,b:o,c:a,normal:new T,materialIndex:0};fn.getNormal(fo,po,mo,f.normal),h.face=f,h.faceIndex=r}return h}function go(s,t,e,n,i,r,o){let a=n*3,c=a+0,l=a+1,u=a+2,h=s.index;s.index&&(c=h.getX(c),l=h.getX(l),u=h.getX(u));let{position:f,normal:d,uv:m,uv1:x}=s.attributes,g=mS(e,f,d,m,x,c,l,u,t,r,o);return g?(g.faceIndex=n,i&&i.push(g),g):null}function ge(s,t,e,n){let i=s.a,r=s.b,o=s.c,a=t,c=t+1,l=t+2;e&&(a=e.getX(a),c=e.getX(c),l=e.getX(l)),i.x=n.getX(a),i.y=n.getY(a),i.z=n.getZ(a),r.x=n.getX(c),r.y=n.getY(c),r.z=n.getZ(c),o.x=n.getX(l),o.y=n.getY(l),o.z=n.getZ(l)}function gx(s,t,e,n,i,r,o,a){let{geometry:c,_indirectBuffer:l}=s;for(let u=n,h=n+i;u<h;u++)go(c,t,e,u,r,o,a)}function xx(s,t,e,n,i,r,o){let{geometry:a,_indirectBuffer:c}=s,l=1/0,u=null;for(let h=n,f=n+i;h<f;h++){let d;d=go(a,t,e,h,null,r,o),d&&d.distance<l&&(u=d,l=d.distance)}return u}function _x(s,t,e,n,i,r,o){let{geometry:a}=e,{index:c}=a,l=a.attributes.position;for(let u=s,h=t+s;u<h;u++){let f;if(f=u,ge(o,f*3,c,l),o.needsUpdate=!0,n(o,f,i,r))return!0}return!1}function vx(s,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=s.geometry,n=e.index?e.index.array:null,i=e.attributes.position,r,o,a,c,l=0,u=s._roots;for(let f=0,d=u.length;f<d;f++)r=u[f],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),h(0,l),l+=r.byteLength;function h(f,d,m=!1){let x=f*2;if(a[x+15]===65535){let p=o[f+6],v=a[x+14],_=1/0,y=1/0,S=1/0,b=-1/0,E=-1/0,C=-1/0;for(let w=3*p,M=3*(p+v);w<M;w++){let D=n[w],F=i.getX(D),B=i.getY(D),L=i.getZ(D);F<_&&(_=F),F>b&&(b=F),B<y&&(y=B),B>E&&(E=B),L<S&&(S=L),L>C&&(C=L)}return c[f+0]!==_||c[f+1]!==y||c[f+2]!==S||c[f+3]!==b||c[f+4]!==E||c[f+5]!==C?(c[f+0]=_,c[f+1]=y,c[f+2]=S,c[f+3]=b,c[f+4]=E,c[f+5]=C,!0):!1}else{let p=f+8,v=o[f+6],_=p+d,y=v+d,S=m,b=!1,E=!1;t?S||(b=t.has(_),E=t.has(y),S=!b&&!E):(b=!0,E=!0);let C=S||b,w=S||E,M=!1;C&&(M=h(p,d,S));let D=!1;w&&(D=h(v,d,S));let F=M||D;if(F)for(let B=0;B<3;B++){let L=p+B,O=v+B,z=c[L],j=c[L+3],it=c[O],Z=c[O+3];c[f+B]=z<it?z:it,c[f+B+3]=j>Z?j:Z}return F}}}function Vn(s,t,e,n,i){let r,o,a,c,l,u,h=1/e.direction.x,f=1/e.direction.y,d=1/e.direction.z,m=e.origin.x,x=e.origin.y,g=e.origin.z,p=t[s],v=t[s+3],_=t[s+1],y=t[s+3+1],S=t[s+2],b=t[s+3+2];return h>=0?(r=(p-m)*h,o=(v-m)*h):(r=(v-m)*h,o=(p-m)*h),f>=0?(a=(_-x)*f,c=(y-x)*f):(a=(y-x)*f,c=(_-x)*f),r>c||a>o||((a>r||isNaN(r))&&(r=a),(c<o||isNaN(o))&&(o=c),d>=0?(l=(S-g)*d,u=(b-g)*d):(l=(b-g)*d,u=(S-g)*d),r>u||l>o)?!1:((l>r||r!==r)&&(r=l),(u<o||o!==o)&&(o=u),r<=i&&o>=n)}function yx(s,t,e,n,i,r,o,a){let{geometry:c,_indirectBuffer:l}=s;for(let u=n,h=n+i;u<h;u++){let f=l?l[u]:u;go(c,t,e,f,r,o,a)}}function wx(s,t,e,n,i,r,o){let{geometry:a,_indirectBuffer:c}=s,l=1/0,u=null;for(let h=n,f=n+i;h<f;h++){let d;d=go(a,t,e,c?c[h]:h,null,r,o),d&&d.distance<l&&(u=d,l=d.distance)}return u}function bx(s,t,e,n,i,r,o){let{geometry:a}=e,{index:c}=a,l=a.attributes.position;for(let u=s,h=t+s;u<h;u++){let f;if(f=e.resolveTriangleIndex(u),ge(o,f*3,c,l),o.needsUpdate=!0,n(o,f,i,r))return!0}return!1}function Mx(s,t,e,n,i,r,o){re.setBuffer(s._roots[t]),op(0,s,e,n,i,r,o),re.clearBuffer()}function op(s,t,e,n,i,r,o){let{float32Array:a,uint16Array:c,uint32Array:l}=re,u=s*2;if(Me(u,c)){let f=Be(s,l),d=He(u,c);gx(t,e,n,f,d,i,r,o)}else{let f=$e(s);Vn(f,a,n,r,o)&&op(f,t,e,n,i,r,o);let d=Ke(s,l);Vn(d,a,n,r,o)&&op(d,t,e,n,i,r,o)}}var gS=["x","y","z"];function Sx(s,t,e,n,i,r){re.setBuffer(s._roots[t]);let o=ap(0,s,e,n,i,r);return re.clearBuffer(),o}function ap(s,t,e,n,i,r){let{float32Array:o,uint16Array:a,uint32Array:c}=re,l=s*2;if(Me(l,a)){let h=Be(s,c),f=He(l,a);return xx(t,e,n,h,f,i,r)}else{let h=gu(s,c),f=gS[h],m=n.direction[f]>=0,x,g;m?(x=$e(s),g=Ke(s,c)):(x=Ke(s,c),g=$e(s));let v=Vn(x,o,n,i,r)?ap(x,t,e,n,i,r):null;if(v){let S=v.point[f];if(m?S<=o[g+h]:S>=o[g+h+3])return v}let y=Vn(g,o,n,i,r)?ap(g,t,e,n,i,r):null;return v&&y?v.distance<=y.distance?v:y:v||y||null}}var Eu=new ae,xo=new sn,_o=new sn,Wa=new Ct,Ex=new Pe,Tu=new Pe;function Tx(s,t,e,n){re.setBuffer(s._roots[t]);let i=cp(0,s,e,n);return re.clearBuffer(),i}function cp(s,t,e,n,i=null){let{float32Array:r,uint16Array:o,uint32Array:a}=re,c=s*2;if(i===null&&(e.boundingBox||e.computeBoundingBox(),Ex.set(e.boundingBox.min,e.boundingBox.max,n),i=Ex),Me(c,o)){let u=t.geometry,h=u.index,f=u.attributes.position,d=e.index,m=e.attributes.position,x=Be(s,a),g=He(c,o);if(Wa.copy(n).invert(),e.boundsTree)return me(s,r,Tu),Tu.matrix.copy(Wa),Tu.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:v=>Tu.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(n),v.b.applyMatrix4(n),v.c.applyMatrix4(n),v.needsUpdate=!0;for(let _=x*3,y=(g+x)*3;_<y;_+=3)if(ge(_o,_,h,f),_o.needsUpdate=!0,v.intersectsTriangle(_o))return!0;return!1}});for(let p=x*3,v=(g+x)*3;p<v;p+=3){ge(xo,p,h,f),xo.a.applyMatrix4(Wa),xo.b.applyMatrix4(Wa),xo.c.applyMatrix4(Wa),xo.needsUpdate=!0;for(let _=0,y=d.count;_<y;_+=3)if(ge(_o,_,d,m),_o.needsUpdate=!0,xo.intersectsTriangle(_o))return!0}}else{let u=s+8,h=a[s+6];return me(u,r,Eu),!!(i.intersectsBox(Eu)&&cp(u,t,e,n,i)||(me(h,r,Eu),i.intersectsBox(Eu)&&cp(h,t,e,n,i)))}}var Au=new Ct,lp=new Pe,Xa=new Pe,xS=new T,_S=new T,vS=new T,yS=new T;function Ax(s,t,e,n={},i={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),lp.set(t.boundingBox.min,t.boundingBox.max,e),lp.needsUpdate=!0;let a=s.geometry,c=a.attributes.position,l=a.index,u=t.attributes.position,h=t.index,f=_n.getPrimitive(),d=_n.getPrimitive(),m=xS,x=_S,g=null,p=null;i&&(g=vS,p=yS);let v=1/0,_=null,y=null;return Au.copy(e).invert(),Xa.matrix.copy(Au),s.shapecast({boundsTraverseOrder:S=>lp.distanceToBox(S),intersectsBounds:(S,b,E)=>E<v&&E<o?(b&&(Xa.min.copy(S.min),Xa.max.copy(S.max),Xa.needsUpdate=!0),!0):!1,intersectsRange:(S,b)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:C=>Xa.distanceToBox(C),intersectsBounds:(C,w,M)=>M<v&&M<o,intersectsRange:(C,w)=>{for(let M=C,D=C+w;M<D;M++){ge(d,3*M,h,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let F=S,B=S+b;F<B;F++){ge(f,3*F,l,c),f.needsUpdate=!0;let L=f.distanceToTriangle(d,m,g);if(L<v&&(x.copy(m),p&&p.copy(g),v=L,_=F,y=M),L<r)return!0}}}});{let E=pi(t);for(let C=0,w=E;C<w;C++){ge(d,3*C,h,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let M=S,D=S+b;M<D;M++){ge(f,3*M,l,c),f.needsUpdate=!0;let F=f.distanceToTriangle(d,m,g);if(F<v&&(x.copy(m),p&&p.copy(g),v=F,_=M,y=C),F<r)return!0}}}}}),_n.releasePrimitive(f),_n.releasePrimitive(d),v===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=v,n.faceIndex=_,i&&(i.point?i.point.copy(p):i.point=p.clone(),i.point.applyMatrix4(Au),x.applyMatrix4(Au),i.distance=x.sub(i.point).length(),i.faceIndex=y),n)}function Rx(s,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=s.geometry,n=e.index?e.index.array:null,i=e.attributes.position,r,o,a,c,l=0,u=s._roots;for(let f=0,d=u.length;f<d;f++)r=u[f],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),h(0,l),l+=r.byteLength;function h(f,d,m=!1){let x=f*2;if(a[x+15]===65535){let p=o[f+6],v=a[x+14],_=1/0,y=1/0,S=1/0,b=-1/0,E=-1/0,C=-1/0;for(let w=p,M=p+v;w<M;w++){let D=3*s.resolveTriangleIndex(w);for(let F=0;F<3;F++){let B=D+F;B=n?n[B]:B;let L=i.getX(B),O=i.getY(B),z=i.getZ(B);L<_&&(_=L),L>b&&(b=L),O<y&&(y=O),O>E&&(E=O),z<S&&(S=z),z>C&&(C=z)}}return c[f+0]!==_||c[f+1]!==y||c[f+2]!==S||c[f+3]!==b||c[f+4]!==E||c[f+5]!==C?(c[f+0]=_,c[f+1]=y,c[f+2]=S,c[f+3]=b,c[f+4]=E,c[f+5]=C,!0):!1}else{let p=f+8,v=o[f+6],_=p+d,y=v+d,S=m,b=!1,E=!1;t?S||(b=t.has(_),E=t.has(y),S=!b&&!E):(b=!0,E=!0);let C=S||b,w=S||E,M=!1;C&&(M=h(p,d,S));let D=!1;w&&(D=h(v,d,S));let F=M||D;if(F)for(let B=0;B<3;B++){let L=p+B,O=v+B,z=c[L],j=c[L+3],it=c[O],Z=c[O+3];c[f+B]=z<it?z:it,c[f+B+3]=j>Z?j:Z}return F}}}function Cx(s,t,e,n,i,r,o){re.setBuffer(s._roots[t]),up(0,s,e,n,i,r,o),re.clearBuffer()}function up(s,t,e,n,i,r,o){let{float32Array:a,uint16Array:c,uint32Array:l}=re,u=s*2;if(Me(u,c)){let f=Be(s,l),d=He(u,c);yx(t,e,n,f,d,i,r,o)}else{let f=$e(s);Vn(f,a,n,r,o)&&up(f,t,e,n,i,r,o);let d=Ke(s,l);Vn(d,a,n,r,o)&&up(d,t,e,n,i,r,o)}}var wS=["x","y","z"];function Px(s,t,e,n,i,r){re.setBuffer(s._roots[t]);let o=hp(0,s,e,n,i,r);return re.clearBuffer(),o}function hp(s,t,e,n,i,r){let{float32Array:o,uint16Array:a,uint32Array:c}=re,l=s*2;if(Me(l,a)){let h=Be(s,c),f=He(l,a);return wx(t,e,n,h,f,i,r)}else{let h=gu(s,c),f=wS[h],m=n.direction[f]>=0,x,g;m?(x=$e(s),g=Ke(s,c)):(x=Ke(s,c),g=$e(s));let v=Vn(x,o,n,i,r)?hp(x,t,e,n,i,r):null;if(v){let S=v.point[f];if(m?S<=o[g+h]:S>=o[g+h+3])return v}let y=Vn(g,o,n,i,r)?hp(g,t,e,n,i,r):null;return v&&y?v.distance<=y.distance?v:y:v||y||null}}var Ru=new ae,vo=new sn,yo=new sn,qa=new Ct,Ix=new Pe,Cu=new Pe;function Lx(s,t,e,n){re.setBuffer(s._roots[t]);let i=fp(0,s,e,n);return re.clearBuffer(),i}function fp(s,t,e,n,i=null){let{float32Array:r,uint16Array:o,uint32Array:a}=re,c=s*2;if(i===null&&(e.boundingBox||e.computeBoundingBox(),Ix.set(e.boundingBox.min,e.boundingBox.max,n),i=Ix),Me(c,o)){let u=t.geometry,h=u.index,f=u.attributes.position,d=e.index,m=e.attributes.position,x=Be(s,a),g=He(c,o);if(qa.copy(n).invert(),e.boundsTree)return me(s,r,Cu),Cu.matrix.copy(qa),Cu.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:v=>Cu.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(n),v.b.applyMatrix4(n),v.c.applyMatrix4(n),v.needsUpdate=!0;for(let _=x,y=g+x;_<y;_++)if(ge(yo,3*t.resolveTriangleIndex(_),h,f),yo.needsUpdate=!0,v.intersectsTriangle(yo))return!0;return!1}});for(let p=x,v=g+x;p<v;p++){let _=t.resolveTriangleIndex(p);ge(vo,3*_,h,f),vo.a.applyMatrix4(qa),vo.b.applyMatrix4(qa),vo.c.applyMatrix4(qa),vo.needsUpdate=!0;for(let y=0,S=d.count;y<S;y+=3)if(ge(yo,y,d,m),yo.needsUpdate=!0,vo.intersectsTriangle(yo))return!0}}else{let u=s+8,h=a[s+6];return me(u,r,Ru),!!(i.intersectsBox(Ru)&&fp(u,t,e,n,i)||(me(h,r,Ru),i.intersectsBox(Ru)&&fp(h,t,e,n,i)))}}var Pu=new Ct,dp=new Pe,Ya=new Pe,bS=new T,MS=new T,SS=new T,ES=new T;function Dx(s,t,e,n={},i={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),dp.set(t.boundingBox.min,t.boundingBox.max,e),dp.needsUpdate=!0;let a=s.geometry,c=a.attributes.position,l=a.index,u=t.attributes.position,h=t.index,f=_n.getPrimitive(),d=_n.getPrimitive(),m=bS,x=MS,g=null,p=null;i&&(g=SS,p=ES);let v=1/0,_=null,y=null;return Pu.copy(e).invert(),Ya.matrix.copy(Pu),s.shapecast({boundsTraverseOrder:S=>dp.distanceToBox(S),intersectsBounds:(S,b,E)=>E<v&&E<o?(b&&(Ya.min.copy(S.min),Ya.max.copy(S.max),Ya.needsUpdate=!0),!0):!1,intersectsRange:(S,b)=>{if(t.boundsTree){let E=t.boundsTree;return E.shapecast({boundsTraverseOrder:C=>Ya.distanceToBox(C),intersectsBounds:(C,w,M)=>M<v&&M<o,intersectsRange:(C,w)=>{for(let M=C,D=C+w;M<D;M++){let F=E.resolveTriangleIndex(M);ge(d,3*F,h,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let B=S,L=S+b;B<L;B++){let O=s.resolveTriangleIndex(B);ge(f,3*O,l,c),f.needsUpdate=!0;let z=f.distanceToTriangle(d,m,g);if(z<v&&(x.copy(m),p&&p.copy(g),v=z,_=B,y=M),z<r)return!0}}}})}else{let E=pi(t);for(let C=0,w=E;C<w;C++){ge(d,3*C,h,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let M=S,D=S+b;M<D;M++){let F=s.resolveTriangleIndex(M);ge(f,3*F,l,c),f.needsUpdate=!0;let B=f.distanceToTriangle(d,m,g);if(B<v&&(x.copy(m),p&&p.copy(g),v=B,_=M,y=C),B<r)return!0}}}}}),_n.releasePrimitive(f),_n.releasePrimitive(d),v===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=v,n.faceIndex=_,i&&(i.point?i.point.copy(p):i.point=p.clone(),i.point.applyMatrix4(Pu),x.applyMatrix4(Pu),i.distance=x.sub(i.point).length(),i.faceIndex=y),n)}function Ux(){return typeof SharedArrayBuffer<"u"}var Za=new re.constructor,Iu=new re.constructor,gs=new ps(()=>new ae),wo=new ae,bo=new ae,pp=new ae,mp=new ae,gp=!1;function Nx(s,t,e,n){if(gp)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");gp=!0;let i=s._roots,r=t._roots,o,a=0,c=0,l=new Ct().copy(e).invert();for(let u=0,h=i.length;u<h;u++){Za.setBuffer(i[u]),c=0;let f=gs.getPrimitive();me(0,Za.float32Array,f),f.applyMatrix4(l);for(let d=0,m=r.length;d<m&&(Iu.setBuffer(r[d]),o=ei(0,0,e,l,n,a,c,0,0,f),Iu.clearBuffer(),c+=r[d].length,!o);d++);if(gs.releasePrimitive(f),Za.clearBuffer(),a+=i[u].length,o)break}return gp=!1,o}function ei(s,t,e,n,i,r=0,o=0,a=0,c=0,l=null,u=!1){let h,f;u?(h=Iu,f=Za):(h=Za,f=Iu);let d=h.float32Array,m=h.uint32Array,x=h.uint16Array,g=f.float32Array,p=f.uint32Array,v=f.uint16Array,_=s*2,y=t*2,S=Me(_,x),b=Me(y,v),E=!1;if(b&&S)u?E=i(Be(t,p),He(t*2,v),Be(s,m),He(s*2,x),c,o+t,a,r+s):E=i(Be(s,m),He(s*2,x),Be(t,p),He(t*2,v),a,r+s,c,o+t);else if(b){let C=gs.getPrimitive();me(t,g,C),C.applyMatrix4(e);let w=$e(s),M=Ke(s,m);me(w,d,wo),me(M,d,bo);let D=C.intersectsBox(wo),F=C.intersectsBox(bo);E=D&&ei(t,w,n,e,i,o,r,c,a+1,C,!u)||F&&ei(t,M,n,e,i,o,r,c,a+1,C,!u),gs.releasePrimitive(C)}else{let C=$e(t),w=Ke(t,p);me(C,g,pp),me(w,g,mp);let M=l.intersectsBox(pp),D=l.intersectsBox(mp);if(M&&D)E=ei(s,C,e,n,i,r,o,a,c+1,l,u)||ei(s,w,e,n,i,r,o,a,c+1,l,u);else if(M)if(S)E=ei(s,C,e,n,i,r,o,a,c+1,l,u);else{let F=gs.getPrimitive();F.copy(pp).applyMatrix4(e);let B=$e(s),L=Ke(s,m);me(B,d,wo),me(L,d,bo);let O=F.intersectsBox(wo),z=F.intersectsBox(bo);E=O&&ei(C,B,n,e,i,o,r,c,a+1,F,!u)||z&&ei(C,L,n,e,i,o,r,c,a+1,F,!u),gs.releasePrimitive(F)}else if(D)if(S)E=ei(s,w,e,n,i,r,o,a,c+1,l,u);else{let F=gs.getPrimitive();F.copy(mp).applyMatrix4(e);let B=$e(s),L=Ke(s,m);me(B,d,wo),me(L,d,bo);let O=F.intersectsBox(wo),z=F.intersectsBox(bo);E=O&&ei(w,B,n,e,i,o,r,c,a+1,F,!u)||z&&ei(w,L,n,e,i,o,r,c,a+1,F,!u),gs.releasePrimitive(F)}}return E}var Lu=new Pe,Fx=new ae,TS={strategy:0,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null},Du=class s{static serialize(t,e={}){e={cloneBuffers:!0,...e};let n=t.geometry,i=t._roots,r=t._indirectBuffer,o=n.getIndex(),a;return e.cloneBuffers?a={roots:i.map(c=>c.slice()),index:o?o.array.slice():null,indirectBuffer:r?r.slice():null}:a={roots:i,index:o?o.array:null,indirectBuffer:r},a}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};let{index:i,roots:r,indirectBuffer:o}=t,a=new s(e,{...n,[du]:!0});if(a._roots=r,a._indirectBuffer=o||null,n.setIndex){let c=e.getIndex();if(c===null){let l=new Gt(t.index,1,!1);e.setIndex(l)}else c.array!==i&&(c.array.set(i),c.needsUpdate=!0)}return a}get indirect(){return!!this._indirectBuffer}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(e=Object.assign({...TS,[du]:!1},e),e.useSharedArrayBuffer&&!Ux())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=t,this._roots=null,this._indirectBuffer=null,e[du]||(lx(this,e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new ae))),this.resolveTriangleIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n}refit(t=null){return(this.indirect?Rx:vx)(this,t)}traverse(t,e=0){let n=this._roots[e],i=new Uint32Array(n),r=new Uint16Array(n);o(0);function o(a,c=0){let l=a*2,u=r[l+15]===65535;if(u){let h=i[a+6],f=r[l+14];t(c,u,new Float32Array(n,a*4,6),h,f)}else{let h=a+32/4,f=i[a+6],d=i[a+7];t(c,u,new Float32Array(n,a*4,6),d)||(o(h,c+1),o(f,c+1))}}}raycast(t,e=Bn,n=0,i=1/0){let r=this._roots,o=this.geometry,a=[],c=e.isMaterial,l=Array.isArray(e),u=o.groups,h=c?e.side:e,f=this.indirect?Cx:Mx;for(let d=0,m=r.length;d<m;d++){let x=l?e[u[d].materialIndex].side:h,g=a.length;if(f(this,d,x,t,a,n,i),l){let p=u[d].materialIndex;for(let v=g,_=a.length;v<_;v++)a[v].face.materialIndex=p}}return a}raycastFirst(t,e=Bn,n=0,i=1/0){let r=this._roots,o=this.geometry,a=e.isMaterial,c=Array.isArray(e),l=null,u=o.groups,h=a?e.side:e,f=this.indirect?Px:Sx;for(let d=0,m=r.length;d<m;d++){let x=c?e[u[d].materialIndex].side:h,g=f(this,d,x,t,n,i);g!=null&&(l==null||g.distance<l.distance)&&(l=g,c&&(g.face.materialIndex=u[d].materialIndex))}return l}intersectsGeometry(t,e){let n=!1,i=this._roots,r=this.indirect?Lx:Tx;for(let o=0,a=i.length;o<a&&(n=r(this,o,t,e),!n);o++);return n}shapecast(t){let e=_n.getPrimitive(),n=this.indirect?bx:_x,{boundsTraverseOrder:i,intersectsBounds:r,intersectsRange:o,intersectsTriangle:a}=t;if(o&&a){let h=o;o=(f,d,m,x,g)=>h(f,d,m,x,g)?!0:n(f,d,this,a,m,x,e)}else o||(a?o=(h,f,d,m)=>n(h,f,this,a,d,m,e):o=(h,f,d)=>d);let c=!1,l=0,u=this._roots;for(let h=0,f=u.length;h<f;h++){let d=u[h];if(c=hx(this,h,r,o,i,l),c)break;l+=d.byteLength}return _n.releasePrimitive(e),c}bvhcast(t,e,n){let{intersectsRanges:i,intersectsTriangles:r}=n,o=_n.getPrimitive(),a=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?m=>{let x=this.resolveTriangleIndex(m);ge(o,x*3,a,c)}:m=>{ge(o,m*3,a,c)},u=_n.getPrimitive(),h=t.geometry.index,f=t.geometry.attributes.position,d=t.indirect?m=>{let x=t.resolveTriangleIndex(m);ge(u,x*3,h,f)}:m=>{ge(u,m*3,h,f)};if(r){let m=(x,g,p,v,_,y,S,b)=>{for(let E=p,C=p+v;E<C;E++){d(E),u.a.applyMatrix4(e),u.b.applyMatrix4(e),u.c.applyMatrix4(e),u.needsUpdate=!0;for(let w=x,M=x+g;w<M;w++)if(l(w),o.needsUpdate=!0,r(o,u,w,E,_,y,S,b))return!0}return!1};if(i){let x=i;i=function(g,p,v,_,y,S,b,E){return x(g,p,v,_,y,S,b,E)?!0:m(g,p,v,_,y,S,b,E)}}else i=m}return Nx(this,t,e,i)}intersectsBox(t,e){return Lu.set(t.min,t.max,e),Lu.needsUpdate=!0,this.shapecast({intersectsBounds:n=>Lu.intersectsBox(n),intersectsTriangle:n=>Lu.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},i={},r=0,o=1/0){return(this.indirect?Dx:Ax)(this,t,e,n,i,r,o)}closestPointToPoint(t,e={},n=0,i=1/0){return fx(this,t,e,n,i)}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{me(0,new Float32Array(n),Fx),t.union(Fx)}),t}};function xp(s,t,e){return s===null?null:(s.point.applyMatrix4(t.matrixWorld),s.distance=s.point.distanceTo(e.ray.origin),s.object=t,s)}var Bx=Vr||null,t2=parseInt("160")>=166,Uu=new ai,Ox=new T,zx=new Ct,AS=ee.prototype.raycast,RS=Bx!==null?Bx.prototype.raycast:null,kx=new T,rn=new ee,Nu=[];function Hx(s,t){this.isBatchedMesh?CS.call(this,s,t):PS.call(this,s,t)}function CS(s,t){if(this.boundsTrees){let e=this.boundsTrees,n=this._drawInfo,i=this._drawRanges,r=this.matrixWorld;rn.material=this.material,rn.geometry=this.geometry;let o=rn.geometry.boundsTree,a=rn.geometry.drawRange;rn.geometry.boundingSphere===null&&(rn.geometry.boundingSphere=new Re);for(let c=0,l=n.length;c<l;c++){if(!this.getVisibleAt(c))continue;let u=n[c].geometryIndex;if(rn.geometry.boundsTree=e[u],this.getMatrixAt(c,rn.matrixWorld).premultiply(r),!rn.geometry.boundsTree){this.getBoundingBoxAt(u,rn.geometry.boundingBox),this.getBoundingSphereAt(u,rn.geometry.boundingSphere);let h=i[u];rn.geometry.setDrawRange(h.start,h.count)}rn.raycast(s,Nu);for(let h=0,f=Nu.length;h<f;h++){let d=Nu[h];d.object=this,d.batchId=c,t.push(d)}Nu.length=0}rn.geometry.boundsTree=o,rn.geometry.drawRange=a,rn.material=null,rn.geometry=null}else RS.call(this,s,t)}function PS(s,t){if(this.geometry.boundsTree){if(this.material===void 0)return;zx.copy(this.matrixWorld).invert(),Uu.copy(s.ray).applyMatrix4(zx),kx.setFromMatrixScale(this.matrixWorld),Ox.copy(Uu.direction).multiply(kx);let e=Ox.length(),n=s.near/e,i=s.far/e,r=this.geometry.boundsTree;if(s.firstHitOnly===!0){let o=xp(r.raycastFirst(Uu,this.material,n,i),this,s);o&&t.push(o)}else{let o=r.raycast(Uu,this.material,n,i);for(let a=0,c=o.length;a<c;a++){let l=xp(o[a],this,s);l&&t.push(l)}}}else AS.call(this,s,t)}function Vx(s={}){return this.boundsTree=new Du(this,s),this.boundsTree}Vt.prototype.computeBoundsTree=Vx;ee.prototype.raycast=Hx;var IS="3.8.0",Gx=document.getElementById("wwh3"),Wx=document.getElementById("wwh3s"),LS=document.getElementById("wwh3f"),ni=Gx||Wx||LS,ye=Gx?"h":Wx?"s":"f";if(ni){ni.classList.add("wwh3"),ye!=="h"&&ni.classList.add("wwh3"+ye),ni.setAttribute("aria-label",ye==="s"?"Interactive 3D map of where each service protects a home":ye==="f"?"Interactive wildfire simulation comparing a home with and without hardening upgrades":"Interactive 3D home vulnerability map"),ni.innerHTML="<style>"+Eg+(ye==="s"?Rg:ye==="f"?Lg:"")+"</style>"+(ye==="s"?Cg:ye==="f"?Dg:Tg),ni.dataset.version=IS;let s=ye==="s"?Ig(ni):ye==="f"?zg(ni):Ag(ni);DS(ni,s).catch(t=>{let e=ni.querySelector(".wwh3-msg");e&&(e.textContent="3D view unavailable on this device. Use the list below to explore."),console.warn("[wwh3]",t)})}async function DS(s,t){let e=s.querySelector(".wwh3-stage"),n=s.querySelector(".wwh3-msg"),i=s.querySelector(".wwh3-pins"),r=matchMedia("(prefers-reduced-motion: reduce)").matches,o=matchMedia("(max-width:900px)").matches||(navigator.hardwareConcurrency||8)<=4,a=o?0:2,c=!o;await new Promise(vt=>requestAnimationFrame(vt));let l=[{k:"attic",p:[1.5,6.46,6.16],v:{t:[1.5,5.6,5],az:.12,el:.14,d:15}},{k:"wood",p:[-.8,6.08,6.7],v:{t:[.6,5.6,5.5],az:-.38,el:.2,d:15}},{k:"gutter",p:[8.2,3.2,3.82],v:{t:[10,3.6,1],az:.32,el:.38,d:19}},{k:"eaves",p:[11.85,3.33,3.3],v:{t:[11,3.3,3],az:.42,el:.03,d:11.5}},{k:"deck",p:[-7,2.05,3.12],v:{t:[-7.5,-.3,0],az:-1.15,el:.22,d:17}},{k:"found",p:[-3.3,.33,3.12],v:{t:[-2.6,.9,3],az:-.15,el:.14,d:9.5}},{k:"zone",p:[-2.05,.7,3.95],v:{t:[-.6,.9,4.6],az:.05,el:.35,d:14}}],u={t:[2.5,2.6,.5],az:.5,el:.25,d:36},h=new kr({antialias:!1,powerPreference:"high-performance"});h.setPixelRatio(Math.min(devicePixelRatio,c?1.5:2)),h.shadowMap.enabled=!0,h.shadowMap.type=Jl,h.shadowMap.autoUpdate=!1,h.toneMapping=Jn,e.insertBefore(h.domElement,i);let f=new Gs,d=new Fe(32,1.6,.3,4e3),m=new T().setFromSphericalCoords(1,eu.degToRad(66),eu.degToRad(40)),x=new Zr(16774890,9075296,1.25);f.add(x);let g=new Qs(16773340,2.4);g.position.copy(m).multiplyScalar(70),g.castShadow=!0;let p=c?2048:1024;g.shadow.mapSize.set(p,p),Object.assign(g.shadow.camera,{left:-30,right:30,top:30,bottom:-30,near:10,far:160}),g.shadow.bias=-3e-4,g.shadow.normalBias=.03,f.add(g),f.add(g.target);let v=new Qs(16751194,.25);v.position.set(-60,8,18),f.add(v);let _=new Nn;f.add(_);let y={},S=[];tr(11);let b=qg(f,{small:o,fire:ye==="f"});tr(77);let{lights:E,M:C,tiles:w}=Zg(_,y,S,{hgt:di});for(let vt of S)vt.geometry.computeBoundsTree();let M=ou(),D=[],F=r?0:ye==="f"?o?400:900:o?140:260,B=new Float32Array(F*3),L=[];for(let vt=0;vt<F;vt++)B[vt*3]=Wt(-45,25),B[vt*3+1]=ye==="f"?Wt(0,14):Wt(-3,22),B[vt*3+2]=ye==="f"?Wt(-12,18):Wt(-20,30),L.push(Wt(.02,.07));let O=new Vt;O.setAttribute("position",new Gt(B,3));let z=new Ui(O,new ui({map:M,color:16742938,size:.26,transparent:!0,depthWrite:!1}));f.add(z);let j=Bd(h),it=[z],Z=ye==="f"?$g({scene:f,M:C,tiles:w,SMALL:o}):null,q=ye==="f"?Bg({scene:f,reg:y,hgt:di,RM:r,SMALL:o,D:Z,TREES:b.TREES,burn:b.burn}):null,I=g.color.clone(),W=g.intensity,U=x.color.clone(),H=x.groundColor.clone(),tt=x.intensity,pt=new at(1,.5,.24),ut=new at(.78,.76,.74),mt={tint:new at,tintK:0,haze:new at,hazeK:0,shim:o?0:1,time:0},Tt=new at(1,.8,.64),ht=new at(.82,.8,.78),ot=new at(.6,.5,.42),N=new at(.66,.64,.61),ct=q?Bd(h):null,Y=q?new Gs:null;Y&&(Y.userData.soft=(vt,Bt,R,V)=>{us.tSD.value=vt,us.uSRes.value.set(Bt,R),us.uSNear.value=V.near,us.uSFar.value=V.far}),q&&(f.remove(z),f.remove(q.group),Y.add(z),Y.add(q.group),Object.assign(z.material,{opacity:0,size:o?1.6:2,color:new at(1.6,.85,.3),blending:Ai,sizeAttenuation:!0}));let rt={t:[1.5,3.2,1.5],az:.32,el:.2,d:40},nt=l.map((vt,Bt)=>{let R=document.createElement("button");return R.type="button",R.className="wwh3-pin",R.innerHTML='<span class="d"></span><span class="s"></span><span class="b">'+(Bt+1)+"</span>",R.setAttribute("aria-label",Bt+1+": "+t.D[Bt].t),ye==="h"?(R.addEventListener("mouseenter",()=>t.set(Bt)),R.addEventListener("mouseleave",()=>t.set(t.pinned)),R.addEventListener("click",()=>t.pin(Bt))):R.addEventListener("click",()=>t.pickKey(l[Bt].k)),i.appendChild(R),vt.v3=new T(...vt.p),R});q&&(u=rt);let gt={az:u.az,el:u.el,d:u.d,t:new T(...u.t)},dt={az:gt.az,el:gt.el,d:gt.d,t:gt.t.clone()},P=!1,A=!1,X=[],$=vt=>Math.min(.95,Math.max(.02,vt)),et=vt=>Math.min(1.45,Math.max(-1.45,vt)),G=vt=>{dt.az=vt.az,dt.el=vt.el,dt.d=vt.d,dt.t.set(...vt.t),P=!0},xt=vt=>y[vt]&&y[vt].forEach(Bt=>{Bt.material.emissive.copy(Bt.material.userData.e0),Bt.material.emissiveIntensity=Bt.material.userData.i0});t.ls.push((vt,Bt)=>{let R=t.sel?t.sel(vt):vt==null?null:{keys:[l[vt].k],view:l[vt].v},V=R?R.keys:[];X.forEach(J=>{V.includes(J)||xt(J)}),X=V,nt.forEach((J,Q)=>{let K=V.includes(l[Q].k);J.classList.toggle("is-active",K),ye==="s"&&J.classList.toggle("is-off",!K)}),Bt&&(A=vt!=null,G(R?R.view:u))}),t.focusKey=vt=>{let Bt=l.find(R=>R.k===vt);Bt&&G(Bt.v)},ye==="s"&&nt.forEach(vt=>vt.classList.add("is-off")),t.cur!=null&&t.cur>=0&&t.set(t.cur,!0);let ft=s.querySelector(".wwh3-reset");ft&&ft.addEventListener("click",()=>{t.pin(null),A=!1});let _t=7,yt={on:ye==="h",i:-1,t:0,hold:!1},Et=s.querySelector(".wwh3-tour"),lt=s.querySelector(".wwh3-prog i"),Xt=t.pin,Zt=()=>{Et&&(Et.textContent=yt.on?"Pause tour":"\u25B6 Play tour",Et.setAttribute("aria-pressed",yt.on),s.classList.toggle("is-touring",yt.on),yt.on||(lt.style.width="0"))},Dt=()=>{yt.on&&(yt.on=!1,Zt())},Ut=()=>{yt.i=(yt.i+1)%l.length,yt.t=0,Xt(yt.i)};t.pin=vt=>{Dt(),Xt(vt)},Et&&Et.addEventListener("click",()=>{yt.on?Dt():(yt.on=!0,yt.i=t.pinned==null?-1:t.pinned,Zt(),Ut())});let At=s.querySelector(".wwh3-panel");At&&["wheel","pointerdown","touchstart"].forEach(vt=>At.addEventListener(vt,Dt,{passive:!0})),Zt();let Ot=h.domElement,Jt=new Ea,ce=new st;Jt.firstHitOnly=!0;let Ht=null,wt=!1,k=vt=>{Jt.far=1/0;let Bt=Ot.getBoundingClientRect();ce.set((vt.clientX-Bt.left)/Bt.width*2-1,-((vt.clientY-Bt.top)/Bt.height)*2+1),Jt.setFromCamera(ce,d);let R=Jt.intersectObjects(S,!1)[0];return R&&R.object.userData.k?l.findIndex(V=>V.k===R.object.userData.k):-1};Ot.addEventListener("pointerdown",vt=>{Dt(),Ht={x:vt.clientX,y:vt.clientY,m:0},dt.az=gt.az,dt.el=gt.el,dt.d=gt.d,dt.t.copy(gt.t),P=!1,A=!0}),Ot.addEventListener("pointermove",vt=>{if(Ht){let Bt=vt.clientX-Ht.x,R=vt.clientY-Ht.y;Ht.m+=Math.abs(Bt)+Math.abs(R),Ht.x=vt.clientX,Ht.y=vt.clientY,dt.az=et(dt.az-Bt*.006),dt.el=$(dt.el+R*.004)}else if(vt.pointerType==="mouse"&&ye==="h"){if(wt)return;wt=!0,requestAnimationFrame(()=>wt=!1);let Bt=k(vt);Ot.style.cursor=Bt>=0?"pointer":"",Bt>=0&&Bt!==t.cur?t.set(Bt):Bt<0&&t.cur!==t.pinned&&t.set(t.pinned)}}),Ot.addEventListener("pointerup",vt=>{if(Ht&&Ht.m<6){let Bt=k(vt);Bt>=0&&(ye==="h"?t.pin(Bt):t.pickKey(l[Bt].k))}Ht=null}),Ot.addEventListener("pointercancel",()=>Ht=null),Ot.addEventListener("pointerleave",()=>{ye==="h"&&!Ht&&t.cur!==t.pinned&&t.set(t.pinned)});let Rt=!0;new IntersectionObserver(vt=>Rt=vt[0].isIntersecting).observe(e);let St=f.getObjectByName("grass"),qt=St?St.count:0;function zt(vt){a=Math.max(0,Math.min(2,vt)),h.setPixelRatio(Math.min(devicePixelRatio,[1,1.25,1.5][a]));let Bt=[1024,1024,2048][a];g.shadow.mapSize.x!==Bt&&(g.shadow.mapSize.set(Bt,Bt),g.shadow.map&&(g.shadow.map.dispose(),g.shadow.map=null)),St&&(St.count=Math.floor(qt*[.35,.7,1][a])),xs()}let Qt={n:0,acc:0,settleAt:0,drops:0},ue=new Uint8Array(4),Ie=()=>q&&t.fire.st.cmp?xe/Le<.95?"v":"h":null,Xe=()=>{let vt=Ie();return vt==="h"?[[0,0,xe/2,Le],[xe/2,0,xe/2,Le]]:vt==="v"?[[0,Le/2,xe,Le/2],[0,0,xe,Le/2]]:[null,[0,0,xe,Le]]},oe=q?()=>{let vt=t.fire.st,Bt=Xe();if(!Bt[0]){q.apply(vt.sims[1],vt.T),j.render(f,d,it,Y);return}h.setScissorTest(!0),[0,1].forEach(R=>{let[V,J,Q,K]=Bt[R];q.apply(vt.sims[R],vt.T),h.setViewport(V,J,Q,K),h.setScissor(V,J,Q,K),(R?ct:j).render(f,d,it,Y)}),h.setScissorTest(!1),h.setViewport(0,0,xe,Le)}:()=>j.render(f,d,it),je=(vt=10)=>{let Bt={},R=a;for(let V of[2,1,0]){zt(V);for(let Q=0;Q<2;Q++)oe();h.getContext().readPixels(0,0,1,1,6408,5121,ue);let J=performance.now();for(let Q=0;Q<vt;Q++)oe(),h.getContext().readPixels(0,0,1,1,6408,5121,ue);Bt["tier"+V+"Ms"]=+((performance.now()-J)/vt).toFixed(1)}return zt(R),Bt};window.__wwh3={setTier:zt,get tier(){return a},perf:Qt,renderer:h,bench:je,cam:d,H:l,project:(vt,Bt,R)=>{let V=new T(vt,Bt,R).project(d);return[Math.round((V.x+1)/2*xe),Math.round((1-V.y)/2*Le)]}};let xe=0,Le=0;function xs(){let vt=e.getBoundingClientRect();xe=vt.width,Le=vt.height,h.setSize(xe,Le,!1);let Bt=q?Ie():null,R=Bt==="h"?xe/2:xe,V=Bt==="v"?Le/2:Le;d.aspect=R/V,d.updateProjectionMatrix(),j.setSize(R,V,h.getPixelRatio()),ct&&ct.setSize(R,V,h.getPixelRatio()),q&&s.classList.toggle("is-vert",Bt==="v")}if(q&&(t.onLayout=()=>xs()),new ResizeObserver(xs).observe(e),xs(),zt(a),a>0)try{let vt=h.getContext(),Bt=new Uint8Array(4),R=J=>{zt(J),oe(),vt.readPixels(0,0,1,1,vt.RGBA,vt.UNSIGNED_BYTE,Bt);let Q=performance.now();for(let K=0;K<3;K++)oe(),vt.readPixels(0,0,1,1,vt.RGBA,vt.UNSIGNED_BYTE,Bt);return(performance.now()-Q)/3},V=0;for(let J of[2,1])if(R(J)<24){V=J;break}zt(V),Qt.start=V}catch{zt(1)}let _s=new T,ii=new T,rr=new $r,ki=0,Mo=!0;function Ja(){if(requestAnimationFrame(Ja),!Rt)return;let vt=rr.getDelta(),Bt=Math.min(vt,.05);ki+=Bt,yt.on&&!yt.hold&&!document.hidden&&(yt.t+=Math.min(vt,.5),(yt.i<0?yt.t>1.5:yt.t>=_t)&&Ut(),lt&&(lt.style.width=(yt.i<0?0:Math.min(100,yt.t/_t*100)).toFixed(1)+"%"));let R=1,V=1;if(q){t.fire.tick(vt),q.tick(Bt),R=eo[t.fire.st.wind].f;let bt=q.env(t.fire.st.ran?t.fire.st.T:0,R);V=bt.gust,z.material.opacity=t.fire.st.ran?Math.min(1,bt.emberLevel):.15,v.intensity=.25+(t.fire.st.ran?bt.glow:0);let Lt=t.fire.st.ran?bt.smoke:0,Nt=t.fire.st.ran?bt.grey:0;g.color.copy(I).lerp(pt,Lt*(1-Nt)).lerp(ut,Lt*Nt),g.intensity=W*(1-.72*Lt),x.color.copy(U).lerp(pt,.55*Lt*(1-Nt)).lerp(ut,.6*Lt*Nt),x.groundColor.copy(H).lerp(new at(.25,.2,.17),Lt),x.intensity=tt*(1-.4*Lt),mt.tint.copy(Tt).lerp(ht,Nt),mt.tintK=Lt*.6,mt.haze.copy(ot).lerp(N,Nt),mt.hazeK=Lt*.38,mt.time=ki,j.atmo(mt),ct.atmo(mt)}let J=r&&P?1:1-Math.pow(.02,Bt);gt.az+=(dt.az-gt.az)*J,gt.el+=(dt.el-gt.el)*J,gt.d+=(dt.d-gt.d)*J,gt.t.lerp(dt.t,J);let Q=gt.d*(d.aspect<1.4?1.15+(1.4-Math.max(.7,d.aspect))*.55:1);_s.set(Math.sin(gt.az)*Math.cos(gt.el),Math.sin(gt.el),Math.cos(gt.az)*Math.cos(gt.el)).multiplyScalar(Q),d.position.copy(gt.t).add(_s);let K=di(d.position.x,d.position.z)+.6;if(d.position.y<K&&(d.position.y=K),d.lookAt(gt.t),X.length){let bt=.7+.3*Math.sin(ki*4);X.forEach(Lt=>y[Lt]&&y[Lt].forEach(Nt=>{Nt.material.emissive.set(15228164),Nt.material.emissiveIntensity=bt}))}if(!r){let bt=O.attributes.position.array,Lt=q?R*R*V:1,Nt=q?.6+.5*R:1,kt=q?.004+.006/R:.006;for(let Ft=0;Ft<F;Ft++)bt[Ft*3]+=L[Ft]*Bt*60*Lt,bt[Ft*3+1]+=Math.sin(ki*2+Ft)*.008*Nt+kt,bt[Ft*3+2]+=Math.cos(ki*(.8+R)+Ft)*.006*Nt,(bt[Ft*3]>28||bt[Ft*3+1]>24)&&(bt[Ft*3]=-45,bt[Ft*3+1]=Wt(ye==="f"?0:-3,14));O.attributes.position.needsUpdate=!0}if(oe(),Qt.n++,Qt.n>30&&a>0&&vt<.2&&(Qt.acc+=vt,Qt.n-30>=40)){let bt=Qt.acc/40;Qt.last=bt,bt>1/32&&(zt(a-1),Qt.drops++),Qt.n=0,Qt.acc=0}if(Mo&&(Mo=!1,n&&n.remove()),Qt.n%30===1&&(Math.abs(e.clientWidth-xe)>1||Math.abs(e.clientHeight-Le)>1)&&xs(),q){let bt=Xe();t.fire.labels((Lt,Nt)=>{let kt=bt[Lt];if(!kt)return null;let Ft=q.EMIT[Nt]&&q.EMIT[Nt][0];if(!Ft||(ii.set(Ft[0],Ft[1],Ft[2]).project(d),ii.z>1))return null;let Yt=kt[0]+(ii.x+1)/2*kt[2],ve=Le-kt[1]-kt[3]+(1-ii.y)/2*kt[3];return Yt<kt[0]||Yt>kt[0]+kt[2]||ve<Le-kt[1]-kt[3]||ve>Le-kt[1]?null:[Yt,ve]});return}let Pt=Qt.n%4===0;l.forEach((bt,Lt)=>{ii.copy(bt.v3).project(d);let Nt=(ii.x+1)/2*xe,kt=(1-ii.y)/2*Le;if(nt[Lt].style.translate=Nt.toFixed(1)+"px "+kt.toFixed(1)+"px",!Pt)return;let Ft=d.position.distanceTo(bt.v3);Jt.set(d.position,bt.v3.clone().sub(d.position).normalize()),Jt.far=Ft;let Yt=Jt.intersectObjects(S,!1)[0];nt[Lt].classList.toggle("is-hidden",!!Yt&&Yt.distance<Ft-.45)})}Ja()}

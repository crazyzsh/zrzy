define(["exports","./when-54c2dc71","./Check-6c0211bc","./Math-fc8cecf5","./Cartesian2-bddc1162","./Transforms-43808565","./GeometryAttribute-49698167"],function(t,p,n,b,O,a,x){"use strict";var G=Math.cos,f=Math.sin,R=Math.sqrt,r={computePosition:function(t,n,a,r,e,o,s){var i,g=n.radiiSquared,c=t.nwCorner,h=t.boundingRectangle,u=c.latitude-t.granYCos*r+e*t.granXSin,C=G(u),l=f(u),S=g.z*l,d=c.longitude+r*t.granYSin+e*t.granXCos,w=C*G(d),M=C*f(d),X=g.x*w,Y=g.y*M,m=R(X*w+Y*M+S*l);o.x=X/m,o.y=Y/m,o.z=S/m,a&&(i=t.stNwCorner,p.defined(i)?(u=i.latitude-t.stGranYCos*r+e*t.stGranXSin,d=i.longitude+r*t.stGranYSin+e*t.stGranXCos,s.x=(d-t.stWest)*t.lonScalar,s.y=(u-t.stSouth)*t.latScalar):(s.x=(d-h.west)*t.lonScalar,s.y=(u-h.south)*t.latScalar))}},y=new x.Matrix2,v=new O.Cartesian3,P=new O.Cartographic,W=new O.Cartesian3,_=new a.GeographicProjection;function T(t,n,a,r,e,o,s){var i=Math.cos(n),g=r*i,c=a*i,h=Math.sin(n),u=r*h,C=a*h;v=_.project(t,v),v=O.Cartesian3.subtract(v,W,v);var l=x.Matrix2.fromRotation(n,y);v=x.Matrix2.multiplyByVector(l,v,v),v=O.Cartesian3.add(v,W,v),--o,--s;var S=(t=_.unproject(v,t)).latitude,d=S+o*C,w=S-g*s,M=S-g*s+o*C,X=Math.max(S,d,w,M),Y=Math.min(S,d,w,M),m=t.longitude,p=m+o*c,G=m+s*u,f=m+s*u+o*c;return{north:X,south:Y,east:Math.max(m,p,G,f),west:Math.min(m,p,G,f),granYCos:g,granYSin:u,granXCos:c,granXSin:C,nwCorner:t}}r.computeOptions=function(t,n,a,r,e,o,s){var i=t.east,g=t.west,c=t.north,h=t.south,u=!1,C=!1;c===b.CesiumMath.PI_OVER_TWO&&(u=!0),h===-b.CesiumMath.PI_OVER_TWO&&(C=!0);var l,S,d,w=c-h,M=(l=i<g?b.CesiumMath.TWO_PI-g+i:i-g)/((S=Math.ceil(l/n)+1)-1),X=w/((d=Math.ceil(w/n)+1)-1),Y=O.Rectangle.northwest(t,o),m=O.Rectangle.center(t,P);0===a&&0===r||(m.longitude<Y.longitude&&(m.longitude+=b.CesiumMath.TWO_PI),W=_.project(m,W));var p,G,f,x=X,R=M,y=O.Rectangle.clone(t,e),v={granYCos:x,granYSin:0,granXCos:R,granXSin:0,nwCorner:Y,boundingRectangle:y,width:S,height:d,northCap:u,southCap:C};return 0!==a&&(c=(p=T(Y,a,M,X,0,S,d)).north,h=p.south,i=p.east,g=p.west,v.granYCos=p.granYCos,v.granYSin=p.granYSin,v.granXCos=p.granXCos,v.granXSin=p.granXSin,y.north=c,y.south=h,y.east=i,y.west=g),0!==r&&(a-=r,f=T(G=O.Rectangle.northwest(y,s),a,M,X,0,S,d),v.stGranYCos=f.granYCos,v.stGranXCos=f.granXCos,v.stGranYSin=f.granYSin,v.stGranXSin=f.granXSin,v.stNwCorner=G,v.stWest=f.west,v.stSouth=f.south),v},t.RectangleGeometryLibrary=r});

"use strict";const UP=-1,DOWN=1,LEFT=-1,RIGHT=1,STAGE_WIDTH=304,STAGE_HEIGHT=384,BKG_BOTTOM_SPEED=2,BKG_BOTTOM_SRC="sprites/ocean.png",BKG_CLOUDS_SPEED=3,BKG_CLOUDS_SRC="sprites/clouds.png",BKG_DEATH_SPEED=0,BKG_DEATH_SRC="sprites/deathScreen.png",B_STATE_DEFAULT=0,B_STATE_ENEMY=1,B_STANDARD_SPRITE_SRC="sprites/Bullet.png",B_STANDARD_SPEED_X=0,B_STANDARD_SPEED_Y=200,B_STANDARD_HITBOX_HEIGHT=9,B_STANDARD_HITBOX_WIDTH=7,B_STANDARD_ANIMATION_FRAMES=1,B_STANDARD_SPRITE_WIDTH=16,B_STANDARD_SPRITE_HEIGHT=16,B_STANDARD_SCALE=1,B_TRISHOT_SPRITE_SRC="sprites/TriShotBullet.png",B_TRISHOT_SPEED_X_MID=0,B_TRISHOT_SPEED_X_SIDE=150,B_TRISHOT_SPEED_Y=200,B_TRISHOT_HITBOX_HEIGHT=5,B_TRISHOT_HITBOX_WIDTH=5,B_TRISHOT_ANIMATION_FRAMES=1,B_TRISHOT_SPRITE_WIDTH=16,B_TRISHOT_SPRITE_HEIGHT=16,B_TRISHOT_SCALE=2,B_BIGSHOT_SPRITE_SRC="sprites/Missile.png",B_BIGSHOT_SPEED_X=0,B_BIGSHOT_SPEED_Y=200,B_BIGSHOT_HITBOX_HEIGHT=11,B_BIGSHOT_HITBOX_WIDTH=7,B_BIGSHOT_ANIMATION_FRAMES=1,B_BIGSHOT_SPRITE_WIDTH=16,B_BIGSHOT_SPRITE_HEIGHT=16,B_BIGSHOT_SCALE=1.5,B_LASER_SPRITE_SRC="sprites/Laser shot.png",B_LASER_SPEED_X=0,B_LASER_SPEED_Y=350,B_LASER_HITBOX_HEIGHT=10,B_LASER_HITBOX_WIDTH=3,B_LASER_ANIMATION_FRAMES=6,B_LASER_SPRITE_WIDTH=16,B_LASER_SPRITE_HEIGHT=16,B_LASER_SCALE=1,DRAW_HITBOXES=!1,HITBOX_COLOR="rgba(225, 0, 0, .4)",E_STATE_DEFAULT=0,E_STATE_DEATH=1,E_BASIC_ANIMATION_FRAMES=8,E_BASIC_SPRITE_WIDTH=16,E_BASIC_SPRITE_HEIGHT=16,E_BASIC_SPRITE_SRC="sprites/enemy.png",E_BASIC_SCALE=1.5,E_BASIC_HITBOX_HEIGHT=15,E_BASIC_HITBOX_WIDTH=15,E_BASIC_START_HEALTH=1,E_BASIC_SPEED=90,E_BASIC_SCORE=100,E_BASIC_CHANCE_TO_SHOOT=.01,E_BASIC_CHANCE_TO_DROP=.25,E_NOSHOOT_STATE_LEFT=2,E_NOSHOOT_STATE_DEATH_LEFT=3,E_NOSHOOT_ANIMATION_FRAMES=12,E_NOSHOOT_SPRITE_WIDTH=16,E_NOSHOOT_SPRITE_HEIGHT=16,E_NOSHOOT_SPRITE_SRC="sprites/snake.png",E_NOSHOOT_SCALE=3,E_NOSHOOT_HITBOX_HEIGHT=5,E_NOSHOOT_HITBOX_WIDTH=15,E_NOSHOOT_START_HEALTH=1,E_NOSHOOT_SPEED=100,E_NOSHOOT_SCORE=100,E_NOSHOOT_CHANCE_TO_SHOOT=0,E_NOSHOOT_CHANCE_TO_DROP=.2,E_BIGBOY_ANIMATION_FRAMES=8,E_BIGBOY_SPRITE_WIDTH=24,E_BIGBOY_SPRITE_HEIGHT=16,E_BIGBOY_SPRITE_SRC="sprites/BigPlane.png",E_BIGBOY_SCALE=3,E_BIGBOY_HITBOX_HEIGHT=15,E_BIGBOY_HITBOX_WIDTH=23,E_BIGBOY_START_HEALTH=5,E_BIGBOY_SPEED=50,E_BIGBOY_SCORE=500,E_BIGBOY_CHANCE_TO_SHOOT=.25,E_BIGBOY_CHANCE_TO_DROP=.5,E_BOSS_STATE_DEFAULT=0,E_BOSS_STATE_ATTACK=1,E_BOSS_STATE_DEATH=2,E_BOSS_ANIMATION_FRAMES=30,E_BOSS_SPRITE_WIDTH=89,E_BOSS_SPRITE_HEIGHT=115,E_BOSS_SPRITE_SRC="sprites/face.png",E_BOSS_SCALE=1.5,E_BOSS_HITBOX_HEIGHT=114,E_BOSS_HITBOX_WIDTH=88,E_BOSS_START_HEALTH=120,E_BOSS_SPEED=0,E_BOSS_SCORE=1e6,E_BOSS_CHANCE_TO_SHOOT=1,E_BOSS_CHANCE_TO_DROP=0,E_LASER_ANIMATION_FRAMES=8,E_LASER_SPRITE_WIDTH=16,E_LASER_SPRITE_HEIGHT=16,E_LASER_SPRITE_SRC="sprites/Stealth Plane.png",E_LASER_SCALE=2,E_LASER_HITBOX_HEIGHT=15,E_LASER_HITBOX_WIDTH=15,E_LASER_START_HEALTH=2,E_LASER_SPEED=250,E_LASER_SCORE=200,E_LASER_CHANCE_TO_SHOOT=1,E_LASER_CHANCE_TO_DROP=.4,LEVEL_WIN=-2,LEVEL_DEATH_SCREEN=-1,LEVEL_MENU=0,LEVEL_ONE=1,LEVEL_TWO=2,LEVEL_THREE=3,MT_YES="YES",MT_NO="NO",MT_START="START",MT_HITBOX_HEIGHT=25,MT_LEFT_POS=57,MT_RIGHT_POS=202,MT_FONT="25px'Hanalei Fill'",MT_COLOR="red",MT_COLOR_MAINMENU="white",MT_ALIGN="left",MT_ALIGN_MAINMENU="left",PLAYER_SPRITE_WIDTH=16,PLAYER_SPRITE_HEIGHT=16,PLAYER_SCALE=1.5,PLAYER_STATE_DEFAULT=0,PLAYER_STATE_DEATH=1,PLAYER_STATE_ENTER=2,PLAYER_SPRITE_SRC="sprites/Plane.png",PLAYER_START_HEALTH=15,PLAYER_ANIMATION_FRAMES=6,PLAYER_SPEED=200,PLAYER_HITBOX_HEIGHT=15,PLAYER_HITBOX_WIDTH=15,PU_SPEED=50,PU_SCORE=50,PU_SPRITE_WIDTH=16,PU_SPRITE_HEIGHT=16,PU_SCALE=1.5,PU_STATE_DEFAULT=0,PU_ANIMATION_FRAMES=6,PU_HITBOX_HEIGHT=15,PU_HITBOX_WIDTH=10,PU_STANDARD_SPRITE_SRC="sprites/PowerUp.png",PU_TRISHOT_SPRITE_SRC="sprites/TriShot PowerUp.png",PU_BIGSHOT_SPRITE_SRC="sprites/Big Powerup.png",PU_LASER_SPRITE_SRC="sprites/Lase Powerup.png",FPS=30,TIME_SCALE=.001,FRAME_INTERVAL=1e3/30,UI_SCORE_X=0,UI_SCORE_Y=20,UI_SCORE_TEXT="Score: ",UI_SCORE_FONT="20px monospace",UI_SCORE_COLOR="black",UI_SCORE_ALIGN="left",UI_SCORE_NUMBER_X=75,UI_SCORE_NUMBER_Y=20,UI_WEAPON_X=0,UI_WEAPON_Y=363,UI_WEAPON_FONT="15px monospace",UI_WEAPON_COLOR="black",UI_WEAPON_ALIGN="left",UI_HEALTH_X=1,UI_HEALTH_HEIGHT=10,UI_HEALTH_Y=373,UI_HEALTH_WIDTH_PER_TICK=5,UI_HEALTH_COLOR="red",UI_TITLE_FONT="60px 'Hanalei Fill'",UI_TITLE_COLOR_TOP="yellow",UI_TITLE_COLOR_BOTTOM="orangered",UI_TITLE_TEXT="2019",UI_TITLE_ALIGN="center",UI_CLEAR_FONT="40px 'Hanalei Fill'",UI_CLEAR_COLOR="black",UI_CLEAR_TEXT="LEVEL CLEAR",UI_CLEAR_ALIGN="center",UI_START_TEXT=" START",UI_START_FONT="30px 'Hanalei Fill'",W_STANDARD_NAME="Pea Shooter",W_STANDARD_DAMAGE=1,W_STANDARD_SHOOTINTERVAL=.25,W_TRISHOT_NAME="TriShot",W_TRISHOT_DAMAGE=1,W_TRISHOT_SHOOTINTERVAL=.45,W_BIGSHOT_NAME="BIG",W_BIGSHOT_DAMAGE=3,W_BIGSHOT_SHOOTINTERVAL=.75,W_LASER_NAME="Laser",W_LASER_DAMAGE=.5,W_LASER_SHOOTINTERVAL=.05;function setAssetReady(){console.log("An asset is ready"),this.ready=!0}function onKeyDown(a){keysPressed[a.keyCode]=!0}function onKeyUp(a){keysPressed[a.keyCode]=!1}function readyAllImages(c,d){for(var a=0;a<c.length;a++)d[c[a]]=new Image,d[c[a]].ready=!1,d[c[a]].onload=setAssetReady,d[c[a]].src=c[a];d.none={ready:!1}}var stage=document.getElementById("gameCanvas");stage.width=304,stage.height=384;var ctx=stage.getContext("2d");ctx.imageSmoothingEnabled=!1;var dt,t0,keysPressed=[],loadedImages={},powerUpData=[];readyAllImages(["sprites/ocean.png","sprites/clouds.png","sprites/deathScreen.png","sprites/Bullet.png","sprites/TriShotBullet.png","sprites/Missile.png","sprites/Laser shot.png","sprites/Plane.png","sprites/enemy.png","sprites/snake.png","sprites/BigPlane.png","sprites/Stealth Plane.png","sprites/face.png","sprites/PowerUp.png","sprites/TriShot PowerUp.png","sprites/Big Powerup.png","sprites/Lase Powerup.png"],loadedImages),window.addEventListener("keydown",onKeyDown,!0),window.addEventListener("keyup",onKeyUp,!0),console.log("Utils loaded"),"use strict";class Weapon{constructor(c,d,a){this.name=c,this.shootInterval=a,this.damage=d,this.timeSinceShot=0}shootFunc(){console.log("Shoot function not defined")}}class Entity{constructor(n,o,a,b,c,d,e,f,g,h,i,j,k,l){this.x=n,this.y=o,this.vx=a,this.vy=b,this.state=c,this.spriteSheet=loadedImages[d],this.hitbox={width:e*k,height:f*k},this.spriteWidth=h,this.spriteHeight=i,this.animationLength=g,this.animationStep=0,this.damagesPlayer=j,this.scale=k,this.sensitive=l,this.dying=!1,this.dead=!1}draw(){this.spriteSheet.ready&&ctx.drawImage(this.spriteSheet,this.spriteWidth*this.animationStep,this.spriteHeight*this.state,this.spriteWidth-1,this.spriteHeight-1,this.x,this.y,(this.spriteWidth-1)*this.scale,(this.spriteHeight-1)*this.scale),DRAW_HITBOXES&&(ctx.fillStyle=HITBOX_COLOR,ctx.fillRect(this.x,this.y,this.hitbox.width,this.hitbox.height))}updateAll(){this.updatePos(),this.updateAnim()}updatePos(){this.x+=this.vx,this.y+=this.vy}updateAnim(){this.animationStep+=1,this.animationStep>=this.animationLength&&(this.animationStep=0)}behavior(){}deathBehavior(){this.dead=!0}checkCollisions(){}}class PowerUp extends Entity{constructor(d,e,a,b){super(d,e,0,PU_SPEED,PU_STATE_DEFAULT,b,PU_HITBOX_WIDTH,PU_HITBOX_HEIGHT,PU_ANIMATION_FRAMES,PU_SPRITE_WIDTH,PU_SPRITE_HEIGHT,!1,PU_SCALE,!0),this.weapon=a,this.speedX=this.vx,this.speedY=this.vy,this.score=PU_SCORE}updatePos(){this.vy*=dt,super.updatePos(),this.vy=this.speedY}checkCollisions(k){let l=k.entities,a=this.x,b=this.x+this.hitbox.width,c=this.y,d=this.y+this.hitbox.height;for(var e=0;e<l.length;e++){let f=l[e].x,g=l[e].x+l[e].hitbox.width,h=l[e].y,i=l[e].y+l[e].hitbox.height;l[e]instanceof Player&&a<g&&b>f&&d>h&&c<i&&(l[e].weapon=this.weapon,this.health=0,k.score+=this.score)}}behavior(){}deathBehavior(){super.deathBehavior()}}class Player extends Entity{constructor(d,e,a,b){super(d,e,a,b,PLAYER_STATE_DEFAULT,PLAYER_SPRITE_SRC,PLAYER_HITBOX_WIDTH,PLAYER_HITBOX_HEIGHT,PLAYER_ANIMATION_FRAMES,PLAYER_SPRITE_WIDTH,PLAYER_SPRITE_HEIGHT,!1,PLAYER_SCALE,!0),this.health=PLAYER_START_HEALTH,this.weapon=new StandardWeapon}updatePos(){this.vx*=dt,this.vy*=dt,0>this.x+this.vx?this.vx=0-this.x:this.x+this.vx*dt+this.hitbox.width>STAGE_WIDTH&&(this.vx=STAGE_WIDTH-this.x-this.hitbox.width),0>this.y+this.vy?this.vy=0-this.y:this.y+this.vy+this.hitbox.height>STAGE_HEIGHT&&(this.vy=STAGE_HEIGHT-this.y-this.hitbox.height),super.updatePos()}updateAnim(){this.dying?this.animationStep+=this.deathAnimationTimer%2:super.updateAnim()}updateAll(){super.updateAll(),this.weapon.timeSinceShot+=dt}checkCollisions(k){let l=k.entities,a=this.x,b=this.x+this.hitbox.width,c=this.y,d=this.y+this.hitbox.height;for(var e=0;e<l.length;e++){let f=l[e].x,g=l[e].x+l[e].hitbox.width,h=l[e].y,i=l[e].y+l[e].hitbox.height;l[e].damagesPlayer&&a<g&&b>f&&d>h&&c<i&&(this.health-=l[e].damage,k.killEntity(e),e--)}}behavior(a){keysPressed[38]&&(this.vy=-200),keysPressed[40]&&(this.vy=PLAYER_SPEED),keysPressed[37]&&(this.vx=-200),keysPressed[39]&&(this.vx=PLAYER_SPEED),keysPressed[32]&&this.weapon.timeSinceShot>=this.weapon.shootInterval&&(this.weapon.shootFunc(this.x,this.y,a,!0),this.weapon.timeSinceShot=0)}deathBehavior(a){this.dying||(this.state=PLAYER_STATE_DEATH,this.animationStep=0,this.deathAnimationTimer=0),this.deathAnimationTimer+=1,12<=this.deathAnimationTimer&&(this.dead=!0,a.levelEnd=!0,a.level=LEVEL_DEATH_SCREEN)}}class Enemy extends Entity{constructor(o,p,a,b,c,d,e,f,g,h,i,j,k,l,m){super(o,p,a,b,E_STATE_DEFAULT,c,d,e,f,g,h,!0,i,!0),this.health=j,this.speedX=this.vx,this.speedY=this.vy,this.weapon=k,this.damage=this.weapon.damage,this.timer=0,this.score=l,this.chanceToDrop=m,console.log(this.chanceToDrop)}updatePos(){this.vx*=dt,this.vy*=dt,super.updatePos(),this.vx=this.speedX,this.vy=this.speedY}updateAll(){super.updateAll(),this.weapon.timeSinceShot+=dt,this.timer+=1}checkCollisions(k){let l=k.entities,a=this.x,b=this.x+this.hitbox.width,c=this.y,d=this.y+this.hitbox.height;for(var e=0;e<l.length;e++){let f=l[e].x,g=l[e].x+l[e].hitbox.width,h=l[e].y,i=l[e].y+l[e].hitbox.height;!l[e].damagesPlayer&&a<g&&b>f&&d>h&&c<i&&(l[e]instanceof PowerUp||(l[e]instanceof Player?(l[e].health-=this.damage,this.health=0):(this.health-=l[e].damage||this.health,k.killEntity(e),e--)))}}deathBehavior(b){if(this.dying||(this.state=E_STATE_DEATH,this.animationStep=0,this.deathAnimationTimer=0),this.deathAnimationTimer+=1,this.deathAnimationTimer>=this.animationLength){if(Math.random()<this.chanceToDrop){let c=Math.floor(Math.random()*powerUpData.length);b.createEntity(new PowerUp(this.x,this.y,powerUpData[c].weapon,powerUpData[c].src))}this.dead=!0}}}class Bullet extends Entity{constructor(n,o,a,b,c,d,e,f,g,h,i,j,k,l){super(n,o,a,b,B_STATE_DEFAULT,c,d,e,f,g,h,i,j,!1),this.damage=k,this.vy*=l,this.speedX=this.vx,this.speedY=this.vy,this.score=0}updatePos(){this.vx*=dt,this.vy*=dt,super.updatePos(),this.vx=this.speedX,this.vy=this.speedY}behavior(){}deathBehavior(){this.dead=!0}}class MenuText extends Entity{constructor(g,h,a,b,c,d){ctx.save(),ctx.font=b,ctx.textAlign=d;let e=ctx.measureText(g);ctx.restore(),super(h,a,0,0,0,"none",e.width,MT_HITBOX_HEIGHT,0,0,0,!1,1,!0),this.text=g,this.font=b,this.color=c,this.align=d}draw(){super.draw(),ctx.font=this.font,ctx.textAlign=this.align,ctx.fillStyle=this.color,ctx.fillText(this.text,this.x,this.y)}behavior(){}checkCollisions(k){let l=k.entities,a=this.x,b=this.x+this.hitbox.width,c=this.y,d=this.y+this.hitbox.height;for(var e=0;e<l.length;e++){let f=l[e].x,g=l[e].x+l[e].hitbox.width,h=l[e].y,i=l[e].y+l[e].hitbox.height;!l[e].damagesPlayer&&l[e]!==this&&a<g&&b>f&&d>h&&c<i&&(this.text===MT_NO?(k.level=LEVEL_MENU,k.levelEnd=!0):(this.text===MT_YES||this.text===MT_START)&&(k.level=LEVEL_ONE,k.levelEnd=!0))}}updateAll(){}}class Background{constructor(b,c){this.image=loadedImages[b],this.scrollPos=0,this.scrollSpeed=c}draw(){0===this.scrollPos?ctx.drawImage(this.image,0,this.scrollPos):(ctx.drawImage(this.image,0,0,STAGE_WIDTH,STAGE_HEIGHT-this.scrollPos,0,this.scrollPos,STAGE_WIDTH,STAGE_HEIGHT-this.scrollPos),ctx.drawImage(this.image,0,STAGE_HEIGHT-this.scrollPos,STAGE_WIDTH,this.scrollPos,0,0,STAGE_WIDTH,this.scrollPos))}updatePos(){this.scrollPos+=this.scrollSpeed,this.scrollPos>=STAGE_HEIGHT&&(this.scrollPos=0)}}class UIText{constructor(f,g,a,b,c,d){this.text=f,this.x=g,this.y=a,this.font=b,this.color=c,this.align=d}draw(){ctx.font=this.font,ctx.fillStyle=this.color,ctx.textAlign=this.align,ctx.fillText(this.text,this.x,this.y)}}class GameManager{constructor(){this.score=0,this.level=LEVEL_MENU,this.levelEnd=!0,this.entities=[],this.backgroundLayers=[],this.ui=[],this.dyingEntities=[],this.timers=[]}destroyEntity(a){this.entities[a]=this.entities[this.entities.length-1],this.entities.pop()}destroyDyingEntity(a){this.dyingEntities[a]=this.dyingEntities[this.dyingEntities.length-1],this.dyingEntities.pop()}createEntity(a){this.entities.push(a)}killEntity(a){this.dyingEntities.push(this.entities[a]),this.destroyEntity(a)}addTimer(a){this.timers.push(a)}createEntityLater(b,c){this.addTimer(setTimeout(()=>{this.createEntity(b)},c))}clearLevel(){for(;0<this.timers.length;)clearTimeout(this.timers[this.timers.length-1]),this.timers.pop();for(;0<this.entities.length;)this.entities.pop();for(;0<this.dyingEntities.length;)this.dyingEntities.pop();for(;0<this.backgroundLayers.length;)this.backgroundLayers.pop();for(;0<this.ui.length;)this.ui.pop()}}class StandardBullet extends Bullet{constructor(e,f,a,b){let c=1;a||(c=-1),super(e,f,B_STANDARD_SPEED_X,B_STANDARD_SPEED_Y,B_STANDARD_SPRITE_SRC,B_STANDARD_HITBOX_WIDTH,B_STANDARD_SPRITE_HEIGHT,B_STANDARD_ANIMATION_FRAMES,B_STANDARD_SPRITE_WIDTH,B_STANDARD_SPRITE_HEIGHT,a,B_STANDARD_SCALE,b,c)}}class TriBullet extends Bullet{constructor(f,g,a,b,c){let d=1;b||(d=-1),super(f,g,a,B_TRISHOT_SPEED_Y,B_TRISHOT_SPRITE_SRC,B_TRISHOT_HITBOX_WIDTH,B_TRISHOT_SPRITE_HEIGHT,B_TRISHOT_ANIMATION_FRAMES,B_TRISHOT_SPRITE_WIDTH,B_TRISHOT_SPRITE_HEIGHT,b,B_TRISHOT_SCALE,c,d)}}class BigBullet extends Bullet{constructor(e,f,a,b){let c=1;a||(c=-1),super(e,f,B_BIGSHOT_SPEED_X,B_BIGSHOT_SPEED_Y,B_BIGSHOT_SPRITE_SRC,B_BIGSHOT_HITBOX_WIDTH,B_BIGSHOT_SPRITE_HEIGHT,B_BIGSHOT_ANIMATION_FRAMES,B_BIGSHOT_SPRITE_WIDTH,B_BIGSHOT_SPRITE_HEIGHT,a,B_BIGSHOT_SCALE,b,c)}}class LaserBullet extends Bullet{constructor(e,f,a,b){let c=1;a||(c=-1),super(e,f,B_LASER_SPEED_X,B_LASER_SPEED_Y,B_LASER_SPRITE_SRC,B_LASER_HITBOX_WIDTH,B_LASER_SPRITE_HEIGHT,B_LASER_ANIMATION_FRAMES,B_LASER_SPRITE_WIDTH,B_LASER_SPRITE_HEIGHT,a,B_LASER_SCALE,b,c)}}class StandardWeapon extends Weapon{constructor(){super(W_STANDARD_NAME,W_STANDARD_DAMAGE,W_STANDARD_SHOOTINTERVAL)}shootFunc(d,e,a,b){a.createEntity(new StandardBullet(d+8,e,!b,this.damage)),b||(a.entities[a.entities.length-1].state=B_STATE_ENEMY)}}class TriShotWeapon extends Weapon{constructor(){super(W_TRISHOT_NAME,W_TRISHOT_DAMAGE,W_TRISHOT_SHOOTINTERVAL)}shootFunc(d,e,a,b){a.createEntity(new TriBullet(d+4,e,B_TRISHOT_SPEED_X_MID,!b,this.damage)),a.createEntity(new TriBullet(d+4,e,-150,!b,this.damage)),a.createEntity(new TriBullet(d+4,e,150,!b,this.damage)),b||(a.entities[a.entities.length-1].state=B_STATE_ENEMY)}}class BigWeapon extends Weapon{constructor(){super(W_BIGSHOT_NAME,W_BIGSHOT_DAMAGE,W_BIGSHOT_SHOOTINTERVAL)}shootFunc(d,e,a,b){a.createEntity(new BigBullet(d+6,e,!b,this.damage)),b||(a.entities[a.entities.length-1].state=B_STATE_ENEMY)}}class LaserWeapon extends Weapon{constructor(){super(W_LASER_NAME,W_LASER_DAMAGE,W_LASER_SHOOTINTERVAL)}shootFunc(d,e,a,b){console.log("shootin'"),a.createEntity(new LaserBullet(d+8,e,!b,this.damage)),b||(a.entities[a.entities.length-1].state=B_STATE_ENEMY)}}class BasicEnemy extends Enemy{constructor(d,e,a,b){super(d,e,E_BASIC_SPEED*a,E_BASIC_SPEED*b,E_BASIC_SPRITE_SRC,E_BASIC_HITBOX_WIDTH,E_BASIC_HITBOX_HEIGHT,E_BASIC_ANIMATION_FRAMES,E_BASIC_SPRITE_WIDTH,E_BASIC_SPRITE_HEIGHT,E_BASIC_SCALE,E_BASIC_START_HEALTH,new StandardWeapon,E_BASIC_SCORE,E_BASIC_CHANCE_TO_DROP)}behavior(a){this.weapon.timeSinceShot>=this.weapon.shootInterval&&Math.random()<E_BASIC_CHANCE_TO_SHOOT&&(this.weapon.shootFunc(this.x,this.y,a,!1),this.weapon.timeSinceShot=0),this.timer===FPS?this.speedY*=-1:60===this.timer&&(this.speedX*=-1)}}class BasicEnemyTwo extends Enemy{constructor(d,e,a,b){super(d,e,E_BASIC_SPEED*a,E_BASIC_SPEED*b,E_BASIC_SPRITE_SRC,E_BASIC_HITBOX_WIDTH,E_BASIC_HITBOX_HEIGHT,E_BASIC_ANIMATION_FRAMES,E_BASIC_SPRITE_WIDTH,E_BASIC_SPRITE_HEIGHT,E_BASIC_SCALE,E_BASIC_START_HEALTH,new StandardWeapon,E_BASIC_SCORE,E_BASIC_CHANCE_TO_DROP)}behavior(a){this.weapon.timeSinceShot>=this.weapon.shootInterval&&Math.random()<E_BASIC_CHANCE_TO_SHOOT&&(this.weapon.shootFunc(this.x,this.y,a,!1),this.weapon.timeSinceShot=0),this.timer===FPS&&(this.speedY=0)}}class BasicEnemyThree extends Enemy{constructor(d,e,a,b){super(d,e,E_BASIC_SPEED*a,E_BASIC_SPEED*b,E_BASIC_SPRITE_SRC,E_BASIC_HITBOX_WIDTH,E_BASIC_HITBOX_HEIGHT,E_BASIC_ANIMATION_FRAMES,E_BASIC_SPRITE_WIDTH,E_BASIC_SPRITE_HEIGHT,E_BASIC_SCALE,E_BASIC_START_HEALTH,new StandardWeapon,E_BASIC_SCORE,E_BASIC_CHANCE_TO_DROP),this.xDir=a}behavior(a){this.weapon.timeSinceShot>=this.weapon.shootInterval&&Math.random()<E_BASIC_CHANCE_TO_SHOOT&&(this.weapon.shootFunc(this.x,this.y,a,!1),this.weapon.timeSinceShot=0),10===this.timer?this.speedX=0:this.timer===FPS?this.speedX=E_BASIC_SPEED*this.xDir:35===this.timer?this.speedX*=-1:40===this.timer?this.speedX*=-1:45===this.timer?this.speedX*=-1:50===this.timer&&(this.speedX*=-1)}}class NoShootEnemy extends Enemy{constructor(d,e,a,b){super(d,e,E_NOSHOOT_SPEED*a,E_NOSHOOT_SPEED*b,E_NOSHOOT_SPRITE_SRC,E_NOSHOOT_HITBOX_WIDTH,E_NOSHOOT_HITBOX_HEIGHT,E_NOSHOOT_ANIMATION_FRAMES,E_NOSHOOT_SPRITE_WIDTH,E_NOSHOOT_SPRITE_HEIGHT,E_NOSHOOT_SCALE,E_NOSHOOT_START_HEALTH,new StandardWeapon,E_NOSHOOT_SCORE,E_NOSHOOT_CHANCE_TO_DROP),0>=this.vx&&(this.state=E_NOSHOOT_STATE_LEFT)}deathBehavior(a){super.deathBehavior(a),this.state===E_STATE_DEATH&&0>=this.vx&&(this.state=E_NOSHOOT_STATE_DEATH_LEFT)}}class BigBoyEnemy extends Enemy{constructor(d,e,a,b){super(d,e,E_BIGBOY_SPEED*a,E_BIGBOY_SPEED*b,E_BIGBOY_SPRITE_SRC,E_BIGBOY_HITBOX_WIDTH,E_BIGBOY_HITBOX_HEIGHT,E_BIGBOY_ANIMATION_FRAMES,E_BIGBOY_SPRITE_WIDTH,E_BIGBOY_SPRITE_HEIGHT,E_BIGBOY_SCALE,E_BIGBOY_START_HEALTH,new BigWeapon,E_BIGBOY_SCORE,E_BIGBOY_CHANCE_TO_DROP)}behavior(a){this.weapon.timeSinceShot>=this.weapon.shootInterval&&Math.random()<E_BIGBOY_CHANCE_TO_SHOOT&&(this.weapon.shootFunc(this.x,this.y,a,!1),this.weapon.shootFunc(this.x+45,this.y,a,!1),this.weapon.timeSinceShot=0)}}class LaserEnemy extends Enemy{constructor(d,e,a,b){super(d,e,E_LASER_SPEED*a,E_LASER_SPEED*b,E_LASER_SPRITE_SRC,E_LASER_HITBOX_WIDTH,E_LASER_HITBOX_HEIGHT,E_LASER_ANIMATION_FRAMES,E_LASER_SPRITE_WIDTH,E_LASER_SPRITE_HEIGHT,E_LASER_SCALE,E_LASER_START_HEALTH,new LaserWeapon,E_LASER_SCORE,E_LASER_CHANCE_TO_DROP),this.xDir=a,this.yDir=b}behavior(a){this.weapon.timeSinceShot>=this.weapon.shootInterval&&Math.random()<E_LASER_CHANCE_TO_SHOOT&&(this.weapon.shootFunc(this.x+10,this.y+this.hitbox.height,a,!1),this.weapon.shootFunc(this.x+10,this.y+this.hitbox.height+B_LASER_HITBOX_HEIGHT,a,!1),this.weapon.shootFunc(this.x+10,this.y+this.hitbox.height+20,a,!1),this.weapon.timeSinceShot=-.5),15===this.timer?(this.speedY=0,this.speedX=0):60===this.timer&&(this.speedX=E_LASER_SPEED*this.xDir,this.speedY=E_LASER_SPEED*this.yDir)}}class LaserEnemyTwo extends Enemy{constructor(d,e,a,b){super(d,e,E_LASER_SPEED*a,E_LASER_SPEED*b,E_LASER_SPRITE_SRC,E_LASER_HITBOX_WIDTH,E_LASER_HITBOX_HEIGHT,E_LASER_ANIMATION_FRAMES,E_LASER_SPRITE_WIDTH,E_LASER_SPRITE_HEIGHT,E_LASER_SCALE,E_LASER_START_HEALTH,new LaserWeapon,E_LASER_SCORE,E_LASER_CHANCE_TO_DROP),this.xDir=a,this.yDir=b}behavior(a){this.weapon.timeSinceShot>=this.weapon.shootInterval&&Math.random()<E_LASER_CHANCE_TO_SHOOT&&(this.weapon.shootFunc(this.x+10,this.y+this.hitbox.height,a,!1),this.weapon.shootFunc(this.x+10,this.y+this.hitbox.height+B_LASER_HITBOX_HEIGHT,a,!1),this.weapon.shootFunc(this.x+10,this.y+this.hitbox.height+20,a,!1),this.weapon.timeSinceShot=-.5),15===this.timer?(this.speedY=0,this.speedX=0):60===this.timer&&(this.speedX=-1*(E_LASER_SPEED*this.xDir))}}class BossEnemy extends Enemy{constructor(b,c){super(b,c,E_BOSS_SPEED,E_BOSS_SPEED,E_BOSS_SPRITE_SRC,E_BOSS_HITBOX_WIDTH,E_BOSS_HITBOX_HEIGHT,E_BOSS_ANIMATION_FRAMES,E_BOSS_SPRITE_WIDTH,E_BOSS_SPRITE_HEIGHT,E_BOSS_SCALE,E_BOSS_START_HEALTH,new StandardWeapon,E_BOSS_SCORE,E_BOSS_CHANCE_TO_DROP)}behavior(a){if(this.weapon.timeSinceShot>=this.weapon.shootInterval&&this.state===E_BOSS_STATE_ATTACK)this.weapon instanceof LaserWeapon?(this.weapon.shootFunc(this.x+57,this.y+this.hitbox.height-30,a,!1),this.weapon.shootFunc(this.x+57,this.y+this.hitbox.height-30+B_LASER_HITBOX_HEIGHT,a,!1),this.weapon.shootFunc(this.x+57,this.y+this.hitbox.height-30+20,a,!1),this.weapon.timeSinceShot=-.5):(this.weapon.shootFunc(this.x+57,this.y+this.hitbox.height-30,a,!1),this.weapon.timeSinceShot=0),0==this.timer%25&&(this.state=E_BOSS_STATE_DEFAULT);else if(this.state===E_BOSS_STATE_DEFAULT)if(0==this.timer%50){this.state=E_BOSS_STATE_ATTACK;let a=powerUpData[Math.floor(Math.random()*powerUpData.length)].weapon;a.timeSinceShot=this.weapon.timeSinceShot,this.weapon=a}else 0==this.timer%56?this.speedX=-50:0==1.5*(this.timer%28)&&(this.speedX=50);(this.x+this.vx*dt+this.hitbox.width>=STAGE_WIDTH||0>=this.x+dt*this.vx)&&(this.speedX*=-1)}deathBehavior(a){this.dying||(this.state=E_BOSS_STATE_DEATH,this.animationStep=0,this.deathAnimationTimer=0),this.deathAnimationTimer+=1,12===this.deathAnimationTimer&&(this.dead=!0,a.ui.push(new UIText(UI_CLEAR_TEXT,152,192,UI_CLEAR_FONT,UI_CLEAR_COLOR,UI_CLEAR_ALIGN)),a.addTimer(setTimeout(()=>{a.levelEnd=!0,a.level=LEVEL_WIN},4e3)))}}powerUpData.push({src:"sprites/PowerUp.png",weapon:new StandardWeapon}),powerUpData.push({src:"sprites/TriShot PowerUp.png",weapon:new TriShotWeapon}),powerUpData.push({src:"sprites/Big Powerup.png",weapon:new BigWeapon}),powerUpData.push({src:"sprites/Lase Powerup.png",weapon:new LaserWeapon}),console.log("Classes loaded"),"use strict";function allLevels(a){a.createEntity(new Player(152-PLAYER_HITBOX_WIDTH*PLAYER_SCALE/2,330,0,0)),a.ui.push(new UIText(UI_SCORE_TEXT,UI_SCORE_X,UI_SCORE_Y,UI_SCORE_FONT,UI_SCORE_COLOR,UI_SCORE_ALIGN)),a.ui.push(new UIText("00000000",UI_SCORE_NUMBER_X,UI_SCORE_NUMBER_Y,UI_SCORE_FONT,UI_SCORE_COLOR,UI_SCORE_ALIGN)),a.ui.push(new UIText("",UI_WEAPON_X,UI_WEAPON_Y,UI_WEAPON_FONT,UI_WEAPON_COLOR,UI_WEAPON_ALIGN)),a.backgroundLayers.push(new Background(BKG_BOTTOM_SRC,BKG_BOTTOM_SPEED)),a.backgroundLayers.push(new Background(BKG_CLOUDS_SRC,BKG_CLOUDS_SPEED)),a.addTimer(setTimeout(()=>{a.ui.push(new UIText("LEVEL "+a.level+UI_START_TEXT,152,192,UI_START_FONT,UI_CLEAR_COLOR,UI_CLEAR_ALIGN))},100)),a.addTimer(setTimeout(()=>{a.ui.pop()},1100))}function loadDeathScreen(a){a.createEntity(new Player(152,330,0,0)),a.createEntity(new MenuText(MT_YES,MT_LEFT_POS,192,MT_FONT,MT_COLOR,MT_ALIGN)),a.createEntity(new MenuText(MT_NO,MT_RIGHT_POS,192,MT_FONT,MT_COLOR,MT_ALIGN)),a.ui.push(new UIText("Try Again?",152,120,"30px","red","center")),a.backgroundLayers.push(new Background(BKG_DEATH_SRC,BKG_DEATH_SPEED)),a.score=0}function loadMainMenu(a){a.createEntity(new Player(152,330,0,0)),a.createEntity(new MenuText(MT_START,122,192,MT_FONT,MT_COLOR_MAINMENU,MT_ALIGN_MAINMENU)),a.ui.push(new UIText(UI_TITLE_TEXT,154,62,UI_TITLE_FONT,UI_TITLE_COLOR_BOTTOM,UI_TITLE_ALIGN)),a.ui.push(new UIText(UI_TITLE_TEXT,152,60,UI_TITLE_FONT,UI_TITLE_COLOR_TOP,UI_TITLE_ALIGN)),a.backgroundLayers.push(new Background(BKG_BOTTOM_SRC,BKG_BOTTOM_SPEED))}function loadLevelOne(b){allLevels(b),b.addTimer(setTimeout(()=>{b.level++,b.levelEnd=!0},6e4)),b.addTimer(setTimeout(()=>{b.ui.push(new UIText(UI_CLEAR_TEXT,152,192,UI_CLEAR_FONT,UI_CLEAR_COLOR,UI_CLEAR_ALIGN))},55e3)),b.createEntityLater(new BasicEnemy(0,96,RIGHT,DOWN),2e3),b.createEntityLater(new BasicEnemy(288,96,LEFT,DOWN),2e3),b.createEntityLater(new BasicEnemy(0,96,RIGHT,DOWN),2500),b.createEntityLater(new BasicEnemy(288,96,LEFT,DOWN),2500),b.createEntityLater(new BasicEnemy(0,96,RIGHT,DOWN),3e3),b.createEntityLater(new BasicEnemy(288,96,LEFT,DOWN),3e3),b.createEntityLater(new NoShootEnemy(0,40,RIGHT,0),6200),b.createEntityLater(new NoShootEnemy(256,70,LEFT,0),6350),b.createEntityLater(new NoShootEnemy(0,100,RIGHT,0),6500),b.createEntityLater(new NoShootEnemy(256,130,LEFT,0),6650),b.createEntityLater(new NoShootEnemy(0,160,RIGHT,0),6800),b.createEntityLater(new BigBoyEnemy(0,0,0,DOWN),8100),b.createEntityLater(new BigBoyEnemy(232,0,0,DOWN),8100),b.createEntityLater(new BasicEnemyTwo(280,120,LEFT,DOWN),15e3),b.createEntityLater(new BasicEnemyTwo(280,150,LEFT,DOWN),15200),b.createEntityLater(new BasicEnemyTwo(280,120,LEFT,DOWN),15400),b.createEntityLater(new BasicEnemyTwo(280,150,LEFT,DOWN),15600),b.createEntityLater(new BasicEnemyTwo(280,120,LEFT,DOWN),15800),b.createEntityLater(new BasicEnemyTwo(280,150,LEFT,DOWN),16e3),b.createEntityLater(new BasicEnemyTwo(280,120,LEFT,DOWN),16200),b.createEntityLater(new BasicEnemyTwo(280,150,LEFT,DOWN),16400),b.createEntityLater(new BasicEnemyTwo(24,120,RIGHT,DOWN),17100),b.createEntityLater(new BasicEnemyTwo(24,150,RIGHT,DOWN),17300),b.createEntityLater(new BasicEnemyTwo(24,120,RIGHT,DOWN),17500),b.createEntityLater(new BasicEnemyTwo(24,150,RIGHT,DOWN),17700),b.createEntityLater(new BasicEnemyTwo(24,120,RIGHT,DOWN),17900),b.createEntityLater(new BasicEnemyTwo(24,150,RIGHT,DOWN),18100),b.createEntityLater(new BasicEnemyTwo(24,120,RIGHT,DOWN),18300),b.createEntityLater(new BasicEnemyTwo(24,150,RIGHT,DOWN),18500),b.createEntityLater(new BigBoyEnemy(152-69/2,15,0,DOWN),19500),b.createEntityLater(new NoShootEnemy(45,344,RIGHT,0),19800),b.createEntityLater(new NoShootEnemy(259,344,LEFT,0),19800);for(var c=0;3>c;c++)b.createEntityLater(new NoShootEnemy(0,40+60*c,RIGHT,0),26e3+300*c),b.createEntityLater(new NoShootEnemy(259,70+60*c,LEFT,0),26150+300*c);b.createEntityLater(new BasicEnemy(76-E_BASIC_HITBOX_WIDTH*E_BASIC_SCALE/2,0,0,DOWN),27900),b.createEntityLater(new BasicEnemy(152-E_BASIC_HITBOX_WIDTH*E_BASIC_SCALE/2,0,0,DOWN),27900),b.createEntityLater(new BasicEnemy(228-E_BASIC_HITBOX_WIDTH*E_BASIC_SCALE/2,0,0,DOWN),27900),b.createEntityLater(new BasicEnemy(E_BASIC_HITBOX_WIDTH*E_BASIC_SCALE,100,RIGHT,0),3e4),b.createEntityLater(new BasicEnemy(E_BASIC_HITBOX_WIDTH*E_BASIC_SCALE,140,RIGHT,0),3e4),b.createEntityLater(new BasicEnemy(E_BASIC_HITBOX_WIDTH*E_BASIC_SCALE,180,RIGHT,0),3e4),b.createEntityLater(new BasicEnemy(STAGE_WIDTH-E_BASIC_HITBOX_WIDTH*E_BASIC_SCALE,100,LEFT,0),33e3),b.createEntityLater(new BasicEnemy(STAGE_WIDTH-E_BASIC_HITBOX_WIDTH*E_BASIC_SCALE,140,LEFT,0),33e3),b.createEntityLater(new BasicEnemy(STAGE_WIDTH-E_BASIC_HITBOX_WIDTH*E_BASIC_SCALE,180,LEFT,0),33e3),b.createEntityLater(new LaserEnemy(30,1,0,DOWN),36e3),b.createEntityLater(new LaserEnemy(244,1,0,DOWN),36e3),b.createEntityLater(new BasicEnemy(E_BASIC_HITBOX_WIDTH*E_BASIC_SCALE,100,RIGHT,0),39100),b.createEntityLater(new BasicEnemy(E_BASIC_HITBOX_WIDTH*E_BASIC_SCALE,140,RIGHT,0),39100),b.createEntityLater(new BasicEnemy(E_BASIC_HITBOX_WIDTH*E_BASIC_SCALE,180,RIGHT,0),39100),b.createEntityLater(new BasicEnemy(STAGE_WIDTH-E_BASIC_HITBOX_WIDTH*E_BASIC_SCALE,100,LEFT,0),39100),b.createEntityLater(new BasicEnemy(STAGE_WIDTH-E_BASIC_HITBOX_WIDTH*E_BASIC_SCALE,140,LEFT,0),39100),b.createEntityLater(new BasicEnemy(STAGE_WIDTH-E_BASIC_HITBOX_WIDTH*E_BASIC_SCALE,180,LEFT,0),39100),b.createEntityLater(new BasicEnemy(E_BASIC_HITBOX_WIDTH*E_BASIC_SCALE,160,RIGHT,UP),42e3),b.createEntityLater(new BasicEnemy(STAGE_WIDTH-E_BASIC_HITBOX_WIDTH*E_BASIC_SCALE,160,LEFT,UP),42e3),b.createEntityLater(new BasicEnemy(E_BASIC_HITBOX_WIDTH*E_BASIC_SCALE,160,RIGHT,DOWN),42e3),b.createEntityLater(new BasicEnemy(STAGE_WIDTH-E_BASIC_HITBOX_WIDTH*E_BASIC_SCALE,160,LEFT,DOWN),42e3),b.createEntityLater(new BigBoyEnemy(235,0,0,DOWN),45e3),b.createEntityLater(new BigBoyEnemy(152-69/2,0,0,DOWN),45e3),b.createEntityLater(new BigBoyEnemy(0,0,0,DOWN),45e3)}function loadLevelTwo(b){allLevels(b),b.addTimer(setTimeout(()=>{b.level++,b.levelEnd=!0},6e4)),b.addTimer(setTimeout(()=>{b.ui.push(new UIText(UI_CLEAR_TEXT,152,192,UI_CLEAR_FONT,UI_CLEAR_COLOR,UI_CLEAR_ALIGN))},55e3)),b.createEntityLater(new BasicEnemy(0,0,0,DOWN),2e3),b.createEntityLater(new BasicEnemy(STAGE_WIDTH-E_BASIC_HITBOX_WIDTH*E_BASIC_SCALE,0,0,DOWN),2e3),b.createEntityLater(new BasicEnemy(0,STAGE_HEIGHT-E_BASIC_HITBOX_WIDTH*E_BASIC_SCALE,0,UP),2e3),b.createEntityLater(new BasicEnemy(STAGE_WIDTH-E_BASIC_HITBOX_WIDTH*E_BASIC_SCALE,STAGE_HEIGHT-E_BASIC_HITBOX_WIDTH*E_BASIC_SCALE,0,UP),2e3),b.createEntityLater(new BasicEnemy(0,0,RIGHT,DOWN),2700),b.createEntityLater(new BasicEnemy(STAGE_WIDTH-E_BASIC_HITBOX_WIDTH*E_BASIC_SCALE,0,LEFT,DOWN),2700),b.createEntityLater(new BasicEnemy(0,STAGE_HEIGHT-E_BASIC_HITBOX_WIDTH*E_BASIC_SCALE,RIGHT,UP),2700),b.createEntityLater(new BasicEnemy(STAGE_WIDTH-E_BASIC_HITBOX_WIDTH*E_BASIC_SCALE,STAGE_HEIGHT-E_BASIC_HITBOX_WIDTH*E_BASIC_SCALE,LEFT,UP),2700),b.createEntityLater(new BigBoyEnemy(152-E_BIGBOY_HITBOX_WIDTH/2*E_BIGBOY_SCALE,0,0,DOWN),5500),b.createEntityLater(new LaserEnemy(0,0,RIGHT,DOWN),5500),b.createEntityLater(new LaserEnemy(274,0,LEFT,DOWN),5500);for(var c=0;6>c;c++)b.createEntityLater(new NoShootEnemy(0,50+45*c,RIGHT,0),8e3);b.createEntityLater(new BasicEnemyTwo(280,150,LEFT,DOWN),9e3),b.createEntityLater(new BasicEnemyTwo(280,150,LEFT,DOWN),9300),b.createEntityLater(new BasicEnemyTwo(280,150,LEFT,DOWN),9600),b.createEntityLater(new BasicEnemyTwo(280,150,LEFT,DOWN),9900),b.createEntityLater(new BasicEnemyTwo(280,150,LEFT,UP),10200),b.createEntityLater(new BasicEnemyTwo(280,150,LEFT,UP),10500),b.createEntityLater(new BasicEnemyTwo(280,150,LEFT,UP),10800),b.createEntityLater(new BasicEnemyTwo(280,150,LEFT,UP),11100),b.createEntityLater(new LaserEnemyTwo(0,0,RIGHT,DOWN),14e3),b.createEntityLater(new LaserEnemyTwo(274,0,LEFT,DOWN),14e3),b.createEntityLater(new BigBoyEnemy(-67,192,RIGHT,0),15200),b.createEntityLater(new BigBoyEnemy(STAGE_WIDTH,192,LEFT,0),15200),b.createEntityLater(new BasicEnemy(STAGE_WIDTH,192,LEFT,DOWN),16500),b.createEntityLater(new BasicEnemy(0,192,RIGHT,UP),16500),b.createEntityLater(new BasicEnemy(152-E_BASIC_HITBOX_WIDTH/2*E_BASIC_SCALE,192,RIGHT,DOWN),22e3),b.createEntityLater(new BasicEnemy(152-E_BASIC_HITBOX_WIDTH/2*E_BASIC_SCALE,192,RIGHT,UP),22e3),b.createEntityLater(new BasicEnemy(152-E_BASIC_HITBOX_WIDTH/2*E_BASIC_SCALE,192,LEFT,DOWN),22e3),b.createEntityLater(new BasicEnemy(152-E_BASIC_HITBOX_WIDTH/2*E_BASIC_SCALE,192,LEFT,UP),22e3),b.createEntityLater(new BasicEnemy(-(E_BASIC_HITBOX_WIDTH*E_BASIC_SCALE),256,RIGHT,DOWN),25e3),b.createEntityLater(new BasicEnemy(-(E_BASIC_HITBOX_WIDTH*E_BASIC_SCALE),128,RIGHT,UP),25e3),b.createEntityLater(new BasicEnemy(STAGE_WIDTH,256,LEFT,DOWN),25e3),b.createEntityLater(new BasicEnemy(STAGE_WIDTH,128,LEFT,UP),25e3),b.createEntityLater(new BasicEnemyThree(STAGE_WIDTH/3-E_BASIC_HITBOX_WIDTH*E_BASIC_SCALE/2,0,LEFT,DOWN),27e3),b.createEntityLater(new BasicEnemyThree(152-E_BASIC_HITBOX_WIDTH*E_BASIC_SCALE/2,0,0,DOWN),27e3),b.createEntityLater(new BasicEnemyThree(2*(STAGE_WIDTH/3)-E_BASIC_HITBOX_WIDTH*E_BASIC_SCALE/2,0,RIGHT,DOWN),27e3),b.createEntityLater(new BasicEnemyThree(0-E_BASIC_HITBOX_WIDTH*E_BASIC_SCALE,60,RIGHT,DOWN),3e4),b.createEntityLater(new BasicEnemyThree(STAGE_WIDTH,60,LEFT,DOWN),3e4),b.createEntityLater(new BasicEnemyThree(0-E_BASIC_HITBOX_WIDTH*E_BASIC_SCALE,90,RIGHT,DOWN),3e4),b.createEntityLater(new BasicEnemyThree(STAGE_WIDTH,90,LEFT,DOWN),3e4),b.createEntityLater(new LaserEnemy(-30,192,RIGHT,UP),32e3),b.createEntityLater(new LaserEnemy(STAGE_WIDTH,192,LEFT,UP),32e3),b.createEntityLater(new BigBoyEnemy(152-E_BIGBOY_HITBOX_WIDTH/2*E_BIGBOY_SCALE,0,0,DOWN),35e3),b.createEntityLater(new BasicEnemyTwo(-(E_BASIC_HITBOX_WIDTH*E_BASIC_SCALE),30,RIGHT,DOWN),36e3),b.createEntityLater(new BasicEnemyTwo(STAGE_WIDTH,30,LEFT,DOWN),36e3),b.createEntityLater(new BigBoyEnemy(-69,96,RIGHT,DOWN),38e3),b.createEntityLater(new BigBoyEnemy(STAGE_WIDTH,96,LEFT,DOWN),38e3),b.createEntityLater(new LaserEnemyTwo(167,STAGE_HEIGHT/7,LEFT,DOWN),42e3),b.createEntityLater(new LaserEnemyTwo(107,STAGE_HEIGHT/7,RIGHT,DOWN),42e3),b.createEntityLater(new LaserEnemyTwo(197,STAGE_HEIGHT/7,LEFT,DOWN),42500),b.createEntityLater(new LaserEnemyTwo(77,STAGE_HEIGHT/7,RIGHT,DOWN),42500),b.createEntityLater(new LaserEnemyTwo(227,STAGE_HEIGHT/7,LEFT,DOWN),43e3),b.createEntityLater(new LaserEnemyTwo(47,STAGE_HEIGHT/7,RIGHT,DOWN),43e3),b.createEntityLater(new LaserEnemyTwo(167,STAGE_HEIGHT/7,LEFT,DOWN),46e3),b.createEntityLater(new LaserEnemyTwo(107,STAGE_HEIGHT/7,RIGHT,DOWN),46e3),b.createEntityLater(new LaserEnemyTwo(197,STAGE_HEIGHT/7,LEFT,DOWN),46500),b.createEntityLater(new LaserEnemyTwo(77,STAGE_HEIGHT/7,RIGHT,DOWN),46500),b.createEntityLater(new LaserEnemyTwo(227,STAGE_HEIGHT/7,LEFT,DOWN),47e3),b.createEntityLater(new LaserEnemyTwo(47,STAGE_HEIGHT/7,RIGHT,DOWN),47e3),b.createEntityLater(new BasicEnemyThree(152-E_BASIC_HITBOX_WIDTH/2*E_BASIC_SCALE,192,RIGHT,DOWN),53e3),b.createEntityLater(new BasicEnemyThree(152-E_BASIC_HITBOX_WIDTH/2*E_BASIC_SCALE,192,RIGHT,UP),53e3),b.createEntityLater(new BasicEnemyThree(152-E_BASIC_HITBOX_WIDTH/2*E_BASIC_SCALE,192,LEFT,DOWN),53e3),b.createEntityLater(new BasicEnemyThree(152-E_BASIC_HITBOX_WIDTH/2*E_BASIC_SCALE,192,LEFT,UP),53e3),b.createEntityLater(new BasicEnemyThree(-(E_BASIC_HITBOX_WIDTH*E_BASIC_SCALE),256,RIGHT,DOWN),5e4),b.createEntityLater(new BasicEnemyThree(-(E_BASIC_HITBOX_WIDTH*E_BASIC_SCALE),128,RIGHT,UP),5e4),b.createEntityLater(new BasicEnemyThree(STAGE_WIDTH,256,LEFT,DOWN),5e4),b.createEntityLater(new BasicEnemyThree(STAGE_WIDTH,128,LEFT,UP),5e4)}function loadLevelThree(a){allLevels(a),a.addTimer(setTimeout(()=>{a.ui.push(new UIText("A Creature Approches!",152,192,"17px monospace","black","center"))},2e3)),a.addTimer(setTimeout(()=>{a.ui.pop()},4500)),a.createEntityLater(new BossEnemy(101,30,0,0),5e3)}console.log("Levels loaded"),"use strict";let manager=new GameManager;function update(){if(ctx.clearRect(0,0,STAGE_WIDTH,STAGE_HEIGHT),manager.levelEnd)return manager.levelEnd=!1,manager.clearLevel(),void(manager.level===LEVEL_MENU?loadMainMenu(manager):manager.level===LEVEL_ONE?loadLevelOne(manager):manager.level===LEVEL_DEATH_SCREEN?loadDeathScreen(manager):manager.level===LEVEL_TWO?loadLevelTwo(manager):4===manager.level?(manager.level=LEVEL_WIN,manager.levelEnd=!0):manager.level===LEVEL_THREE?loadLevelThree(manager):(manager.level=LEVEL_MENU,manager.levelEnd=!0));for(var b=0;b<manager.backgroundLayers.length;b++)manager.backgroundLayers[b].draw(),manager.backgroundLayers[b].updatePos();if(0<manager.level){let c=manager.score.toString(),a="";for(var b=c.length;9>b;b++)a+="0";a+=c,manager.ui[1].text=a,manager.entities[0]instanceof Player&&(manager.ui[2].text=manager.entities[0].weapon.name)}for(var b=0;b<manager.ui.length;b++)manager.ui[b].draw();0<manager.level&&(ctx.fillStyle=UI_HEALTH_COLOR,ctx.fillRect(UI_HEALTH_X,UI_HEALTH_Y,UI_HEALTH_WIDTH_PER_TICK*manager.entities[0].health,UI_HEALTH_HEIGHT));for(var b=0;b<manager.entities.length;b++)manager.entities[b].behavior(manager),manager.entities[b].updateAll(),manager.entities[b].sensitive&&manager.entities[b].checkCollisions(manager);for(var b=0;b<manager.entities.length;b++)manager.entities[b].draw();for(var b=0;b<manager.dyingEntities.length;b++)manager.dyingEntities[b].updateAnim(),manager.dyingEntities[b].draw();for(var b=0;b<manager.entities.length;b++)(0>manager.entities[b].x+manager.entities[b].hitbox.width||manager.entities[b].x>STAGE_WIDTH||0>manager.entities[b].y+manager.entities[b].hitbox.height||manager.entities[b].y>STAGE_HEIGHT)&&(manager.destroyEntity(b),b--);for(var b=0;b<manager.entities.length;b++)manager.entities[b].sensitive&&0>=manager.entities[b].health&&(manager.killEntity(b),b--);for(var b=0;b<manager.dyingEntities.length;b++)manager.dyingEntities[b].deathBehavior(manager),manager.dyingEntities[b].dying||(manager.dyingEntities[b].dying=!0),manager.dyingEntities[b].dead&&(manager.dyingEntities[b].damagesPlayer&&(manager.score+=manager.dyingEntities[b].score),manager.destroyDyingEntity(b),b--)}function animate(){let a=new Date().getTime();dt=a-t0,dt>FRAME_INTERVAL&&(dt*=TIME_SCALE,t0=a-dt%FRAME_INTERVAL,update()),requestAnimationFrame(animate,stage)}t0=new Date().getTime(),animate();
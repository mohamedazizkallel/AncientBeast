(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{320:function(e,t,i){"use strict";i.r(t);var a=i(114),r=i(28),s=i(45),n=i(5),f=i(987);t.default=function(e){e.abilities[9]=[{trigger:"onEndPhase",_effectName:"Frostified",_getOffenseBuff:function(){return this.isUpgraded()?5:0},require:function(){var e=this;return this.creature.effects.forEach((function(t){t.name===e._effectName&&(t.alterations.offense=e._getOffenseBuff())})),this.creature.remainingMove<this.creature.stats.movement?(this.message="The creature moved this round.",!1):this.testRequirements()},activate:function(){this.creature.addEffect(new f.a(this._effectName,this.creature,this.creature,"",{alterations:{frost:5,defense:5,offense:this._getOffenseBuff()},stackable:!0},e))}},{trigger:"onQuery",_targetTeam:r.a.enemy,require:function(){return!!this.testRequirements()&&!!this.atLeastOneTarget(this.creature.getHexMap(s.i),{team:this._targetTeam})},query:function(){var t=this;e.grid.queryCreature({fnOnConfirm:function(){t.animation.apply(t,arguments)},team:this._targetTeam,id:this.creature.id,flipped:this.creature.flipped,hexes:this.creature.getHexMap(s.i)})},activate:function(t){this.end();var i=this.damages;this.isUpgraded()&&t.size<this.creature.size||(i.pierce=0);var r=new a.a(this.creature,i,1,[new f.a(this.title,this.creature,this.target,"",{alterations:{frost:-1},stackable:!0},e)],e);t.takeDamage(r)}},{trigger:"onQuery",_targetTeam:r.a.enemy,require:function(){return!!this.testRequirements()&&!!this.atLeastOneTarget(this.creature.getHexMap(s.i),{team:this._targetTeam})},query:function(){var t=this;e.grid.queryCreature({fnOnConfirm:function(){t.animation.apply(t,arguments)},team:this._targetTeam,id:this.creature.id,flipped:this.creature.flipped,hexes:this.creature.getHexMap(s.i)})},activate:function(t){this.end();var i=[];this.isUpgraded()&&i.push(new f.a(this.title,this.creature,t,"",{alterations:{defense:-10},stackable:!0,turnLifetime:1,deleteTrigger:"onStartPhase"},e));var r=new a.a(this.creature,this.damages,1,i,e),s=t.takeDamage(r);s.kill||""!==s.damageObj.status||t.delay()}},{trigger:"onQuery",directions:[1,1,1,1,1,1],_targetTeam:r.a.both,_getDistance:function(){return this.isUpgraded()?0:6},require:function(){if(!this.testRequirements())return!1;var e=this.creature,t=e.player.flipped?e.x-e.size+1:e.x;return!!this.testDirection({team:this._targetTeam,x:t,directions:this.directions,distance:this._getDistance(),stopOnCreature:!1})},query:function(){var t=this,i=this.creature,a=i.player.flipped?i.x-i.size+1:i.x;e.grid.queryDirection({fnOnConfirm:function(){t.animation.apply(t,arguments)},team:this._targetTeam,id:i.id,requireCreature:!0,x:a,y:i.y,directions:this.directions,distance:this._getDistance(),stopOnCreature:!1})},activate:function(t){this.end();for(var i=0;i<t.length;i++)if(t[i].creature instanceof n.a){var r=t[i].creature,s={pierce:this.damages.pierce,frost:6-i};s.frost<0&&(s.frost=0);var f=new a.a(this.creature,s,1,[],e),c=r.takeDamage(f);if("Shielded"===c.damageObj.status||c.damages&&c.damages.total<=0)break}}}]}},987:function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));var a=i(3),r=i.n(a),s=i(4),n=i.n(s),f=i(0),c=i(5),u=function(){function e(t,i,a,s,n,c){r()(this,e),this.id=c.effectId++,this.game=c,this.name=t,this.owner=i,this.target=a,this.trigger=s,this.creationTurn=c.turn;var u=f.extend({requireFn:function(){return!0},effectFn:function(){},alterations:{},turnLifetime:0,deleteTrigger:"onStartOfRound",stackable:!0,noLog:!1,specialHint:void 0,deleteOnOwnerDeath:!1},n);f.extend(this,u),c.effects.push(this)}return n()(e,[{key:"animation",value:function(){this.activate.apply(this,arguments)}},{key:"activate",value:function(e){if(!this.requireFn(e))return!1;this.noLog||console.log("Effect "+this.name+" triggered"),e instanceof c.a&&e.addEffect(this),this.effectFn(this,e)}},{key:"deleteEffect",value:function(){var e=this.target.effects.indexOf(this);this.target.effects[e]?this.target.effects.splice(e,1):console.warn("Failed to find effect on target.",this);var t=this.game.effects.indexOf(this);this.game.effects[t]?this.game.effects.splice(t,1):console.warn("Failed to find effect on game.",this),this.target.updateAlteration()}}]),e}()}}]);
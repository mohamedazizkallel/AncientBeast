(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{309:function(e,t,i){"use strict";i.r(t);var r=i(112),a=i(26),n=i(42),s=i(10),c=i(2),u=i(113);t.default=function(e){e.abilities[39]=[{trigger:"onStartPhase onEndPhase",_targetTeam:a.a.enemy,_getHexes:function(){return this.creature.getHexMap(n.n)},require:function(){return!!this.atLeastOneTarget(this._getHexes(),{team:this._targetTeam})&&this.testRequirements()},activate:function(){var t=this,i=this.creature;if(!this.atLeastOneTarget(this._getHexes(),{team:this._targetTeam}))return!1;this.end(),this.setUsed(!1),this.getTargets(this._getHexes()).forEach((function(r){if(r.target instanceof c.a){var a=r.target;t.isUpgraded()&&a.addFatigue(a.endurance);var n=new u.a(t.title,i,a,"onStartPhase",{effectFn:function(){a.addEffect(new u.a("",i,a,"",{deleteTrigger:"",stackable:!0,alterations:{endurance:-5}},e)),r.trigger="",r.deleteEffect()}},e);a.addEffect(n,"%CreatureName"+a.id+"% has been infested")}}))}},{trigger:"onQuery",_targetTeam:a.a.enemy,require:function(){var e=this.creature;return!!this.testRequirements()&&!!this.atLeastOneTarget(e.getHexMap(n.i),{team:this._targetTeam})},query:function(){var t=this,i=this.creature;e.grid.queryCreature({fnOnConfirm:function(){t.animation.apply(t,arguments)},team:this._targetTeam,id:i.id,flipped:i.flipped,hexes:i.getHexMap(n.i)})},activate:function(t){this.end();var i={pierce:11};if(i.pierce=t.endurance<=0?2*i.pierce:i.pierce,this.isUpgraded()){var a=this.creature.stats.endurance-t.stats.endurance;a>0&&(i.pierce+=a)}var n=new r.a(this.creature,i,1,[],e);t.takeDamage(n)}},{trigger:"onQuery",directions:[0,1,0,0,1,0],_minDistance:2,_getMaxDistance:function(){return this.isUpgraded()?8:6},_targetTeam:a.a.both,_getValidDirections:function(){for(var t=this.creature,i=t.player.flipped?t.x-t.size+1:t.x,r=[0,0,0,0,0,0],a=0;a<this.directions.length;a++)if(0!==this.directions[a]){var n=[0,0,0,0,0,0];n[a]=1;var c=this.testDirection({team:this._targetTeam,x:i,directions:n,distance:this._minDistance,sourceCreature:t}),u=this.testDirection({team:this._targetTeam,x:i,directions:n,distance:this._getMaxDistance(),sourceCreature:t});if(!c&&u){var h=0;(!this.creature.player.flipped&&a>2||this.creature.player.flipped&&a<3)&&(h=-1*(this.creature.size-1));var o=e.grid.getHexLine(this.creature.x+h,this.creature.y,a,this.creature.player.flipped);this._getMaxDistance()>0&&(o=o.slice(0,this._getMaxDistance()+1)),o=s.b(o,!0,!0,this.creature.id),s.d(o).creature.stats.moveable&&(r[a]=1)}}return r},require:function(){return!!this.testRequirements()&&(this.creature.stats.moveable?this._getValidDirections().some((function(e){return 1===e}))?(this.message="",!0):(this.message=e.msg.abilities.noTarget,!1):(this.message=e.msg.abilities.notMoveable,!1))},query:function(){var t=this,i=this.creature;e.grid.queryDirection({fnOnConfirm:function(){t.animation.apply(t,arguments)},team:this._targetTeam,id:i.id,requireCreature:!0,sourceCreature:i,x:i.x,y:i.y,directions:this._getValidDirections(),distance:this._getMaxDistance()})},activate:function(t,i){var r=this.creature,a=s.d(t).creature;t=t.filter((function(e){return!e.creature})),this.end(),s.b(t,!1,!1);var n,c,u=null,h=null;if(1===a.size)h=t.first();else if(2===a.size){var o=Math.floor((t.length-1)/2);u=t[o],o<t.length-1&&(h=t[o+1])}else u=s.d(t);null!==u&&(n=4===i.direction?u.x+r.size-1:u.x,c=e.grid.hexes[u.y][n],r.moveTo(c,{ignoreMovementPoint:!0,ignorePath:!0,callback:function(){var t=setInterval((function(){e.freezedInput||(clearInterval(t),e.activeCreature.queryMove())}),100)}})),null!==h&&(n=1===i.direction?h.x+a.size-1:h.x,c=e.grid.hexes[h.y][n],a.moveTo(c,{ignoreMovementPoint:!0,ignorePath:!0,callback:function(){var t=setInterval((function(){e.freezedInput||(clearInterval(t),e.activeCreature.queryMove())}),100)}}))}},{trigger:"onQuery",damages:{slash:10,crush:5},_getHexes:function(){return this.isUpgraded()?n.l:n.k},require:function(){return!!this.testRequirements()},query:function(){var t=this,i=this.creature,r=this._getHexes();e.grid.queryChoice({fnOnConfirm:function(){t.animation.apply(t,arguments)},team:a.a.both,requireCreature:0,id:i.id,flipped:i.player.flipped,choices:[i.getHexMap(r),i.getHexMap(r,!0)]})},activate:function(e){var t={slash:10};this.end(),this.areaDamage(this.creature,t,[],this.getTargets(e),!0),this.areaDamage(this.creature,t,[],this.getTargets(e))}}]}}}]);
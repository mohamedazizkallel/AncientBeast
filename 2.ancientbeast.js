(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{310:function(e,t,a){"use strict";a.r(t);var r=a(114),i=a(28),n=a(5),s=a(987),c=a(11);t.default=function(e){e.abilities[7]=[{trigger:"onOtherDamage",require:function(e){return!!this.testRequirements()&&(void 0===e&&(e={type:"target"}),!0)},activate:function(t,a){this.creature.id===t.attacker.id&&(a.addEffect(new s.a("Burning Spirit",this.creature,a,"",{alterations:{burn:-1}},e)),a.stats.burn-=1,this.isUpgraded()&&this.creature.addEffect(new s.a("Burning Heart",this.creature,this.creature,"",{alterations:{burn:1}},e)))}},{trigger:"onQuery",distance:3,_targetTeam:i.a.enemy,require:function(){return!!this.testRequirements()&&!!this.testDirection({team:this._targetTeam,distance:this.distance,sourceCreature:this.creature})},query:function(){var t=this,a=this.creature;this.isUpgraded()&&(this.distance=5),e.grid.queryDirection({fnOnConfirm:function(){t.animation.apply(t,arguments)},flipped:a.player.flipped,team:this._targetTeam,id:this.creature.id,requireCreature:!0,x:a.x,y:a.y,distance:this.distance,sourceCreature:a})},activate:function(t,a){var i=this,n=c.d(t).creature,s=i.creature.sprite.scale.x>0?232:52,u=e.animations.projectile(this,n,"effects_fiery-touch",t,a,s,-20),o=u[0],f=u[1];o.onComplete.add((function(){var t=new r.a(i.creature,i.damages,1,[],e);n.takeDamage(t),i.end(),this.destroy()}),f)},getAnimationData:function(){return{duration:425}}},{trigger:"onQuery",range:6,require:function(){return this.testRequirements()},query:function(){var t=this,a=this.creature;a.queryMove({noPath:!0,isAbility:!0,range:e.grid.getFlyingRange(a.x,a.y,this.range,a.size,a.id),callback:function(e,a){e.x!=a.creature.x||e.y!=a.creature.y?(delete arguments[1],t.animation.apply(t,arguments)):t.query()}})},activate:function(t){var a=this;a.end(),this.isUpgraded()&&(this.range+=1),a.getTargets(a.creature.adjacentHexes(1)).forEach((function(e){e.target,n.a}));var i=function(t,i){var s=i;i instanceof n.a||(s=i.creature),s.takeDamage(new r.a(t.attacker,a.damages,1,[],e),{isFromTrap:!0}),this.trap.destroy(),t.deleteEffect()},c=function(){var e=this.trap.hex.creature,t=e&&e.type||null;return 0!==e&&t!==a.creature.type},u=this.creature;u.hexagons.forEach((function(t){t.createTrap("firewall",[new s.a("Firewall",u,t,"onStepIn",{requireFn:c,effectFn:i,attacker:u},e)],u.player,{turnLifetime:1,ownerCreature:u,fullTurnLifetime:!0})})),a.creature.moveTo(t,{ignoreMovementPoint:!0,ignorePath:!0,animation:"teleport",callback:function(){e.activeCreature.queryMove()}})}},{trigger:"onQuery",require:function(){return this.testRequirements()},query:function(){var t=this,a=this.creature.adjacentHexes(1);e.grid.queryHexes({fnOnConfirm:function(){t.animation.apply(t,arguments)},fnOnSelect:function(t){a.forEach((function(t){t.cleanOverlayVisualState(),t.overlayVisualState("creature selected player"+e.activeCreature.team)})),t.cleanOverlayVisualState(),t.overlayVisualState("creature selected player"+e.activeCreature.team)},id:this.creature.id,hexes:a,hideNonTarget:!0})},activate:function(){var t=this;t.end();var a=this.creature.adjacentHexes(1),i=t.getTargets(a);this.isUpgraded()&&(this.damages.burn=30),i.forEach((function(a){a.target.takeDamage(new r.a(t.creature,t.damages,1,[],e))}))}}]}},987:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a(3),i=a.n(r),n=a(4),s=a.n(n),c=a(0),u=a(5),o=function(){function e(t,a,r,n,s,u){i()(this,e),this.id=u.effectId++,this.game=u,this.name=t,this.owner=a,this.target=r,this.trigger=n,this.creationTurn=u.turn;var o=c.extend({requireFn:function(){return!0},effectFn:function(){},alterations:{},turnLifetime:0,deleteTrigger:"onStartOfRound",stackable:!0,noLog:!1,specialHint:void 0,deleteOnOwnerDeath:!1},s);c.extend(this,o),u.effects.push(this)}return s()(e,[{key:"animation",value:function(){this.activate.apply(this,arguments)}},{key:"activate",value:function(e){if(!this.requireFn(e))return!1;this.noLog||console.log("Effect "+this.name+" triggered"),e instanceof u.a&&e.addEffect(this),this.effectFn(this,e)}},{key:"deleteEffect",value:function(){var e=this.target.effects.indexOf(this);this.target.effects[e]?this.target.effects.splice(e,1):console.warn("Failed to find effect on target.",this);var t=this.game.effects.indexOf(this);this.game.effects[t]?this.game.effects.splice(t,1):console.warn("Failed to find effect on game.",this),this.target.updateAlteration()}}]),e}()}}]);
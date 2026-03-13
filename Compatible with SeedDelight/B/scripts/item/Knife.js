var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { world } from "@minecraft/server";
import { methodEventSub } from "../lib/eventHelper";
import { EntityUtil } from "../lib/EntityUtil";
import { ItemUtil } from "../lib/ItemUtil";

function spawnLoot(path, dimenion, location) {
    return dimenion.runCommand(`loot spawn ${location.x} ${location.y} ${location.z} loot "${path}"`);
}

export class Knife {
    break(args) {
        const player = args.player;
        const itemStack = args.itemStackAfterBreak;
        const block = args.block;
        const blockTypeId = args.brokenBlockPermutation.type.id;

        if (!itemStack?.hasTag("farmersdelight:is_knife"))
            return;

        if (EntityUtil.gameMode(player)) {
            const inventory = player?.getComponent("inventory");
            const container = inventory?.container;
            if (!container)
                return;

            ItemUtil.damageItem(container, player.selectedSlotIndex);

            if (blockTypeId == "minecraft:pitcher_crop") {
                spawnLoot('sunflower_delight/pitcher_pod_pulp', block.dimension, block.location);
            }
        }
    }
}

__decorate([
    methodEventSub(world.afterEvents.playerBreakBlock),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Knife.prototype, "break", null);

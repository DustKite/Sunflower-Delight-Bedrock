var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
import { ItemStopUseAfterEvent, world } from "@minecraft/server";
import { EventAPI } from "../lib/EventAPI";
export class FoodRegister {
    eat(args) {
        const itemStack = args.itemStack;
        const player = args.source;
        const useDuration = args.useDuration;
        if (itemStack && useDuration == 0) {
            switch (itemStack.typeId) {
                case "sunflowerdelight:pitcher_pod_pulp":
                    player.addEffect('nausea', 8 * 20, { amplifier: 0 });
                    player.addEffect('poison', 4 * 20, { amplifier: 1 });
                    break;
                case "sunflowerdelight:lilac_tincture":
                    player.addEffect('haste', 60 * 20, { amplifier: 0 });
                    break;
                case "sunflowerdelight:peony_syrup":
                    player.addEffect('levitation', 60 * 20, { amplifier: 0 });
                    break;
                case "sunflowerdelight:pitcher_plant_drink":
                    player.addEffect('resistance', 60 * 20, { amplifier: 0 });
                    break;
                case "sunflowerdelight:pitcher_pod_decoction":
                    player.addEffect('jump_boost', 60 * 20, { amplifier: 1 });
                    break;
                case "sunflowerdelight:starving_tisan":
                    player.addEffect('regeneration', 60 * 20, { amplifier: 0 });
                    break;
                case "sunflowerdelight:golden_sunflower_seed":
                    player.addEffect('speed', 30 * 20, { amplifier: 0 });
                    break;
                case "sunflowerdelight:blooming_salad":
                    player.addEffect('regeneration', 5 * 20, { amplifier: 0 });
                    break;
                case "sunflowerdelight:flavored_milkshake":
                    player.addEffect('strength', 15 * 20, { amplifier: 0 });
                    break;
                case "sunflowerdelight:glowy_milkshake":
                    player.addEffect('night_vision', 15 * 20, { amplifier: 0 });
                    break;
                case "sunflowerdelight:mystery_ice_cream":
                    player.addEffect('invisibility', 30 * 20, { amplifier: 0 });
                    player.addEffect('slowness', 5 * 20, { amplifier: 0 });
                    break;
                case "sunflowerdelight:mystery_milkshake":
                    player.addEffect('invisibility', 15 * 20, { amplifier: 0 });
                    break;
                case "sunflowerdelight:flavored_ice_cream":
                    player.addEffect('strength', 30 * 20, { amplifier: 0 });
                    player.addEffect('slowness', 5 * 20, { amplifier: 0 });
                    break;
                case "sunflowerdelight:glowy_ice_cream":
                    player.addEffect('night_vision', 30 * 20, { amplifier: 0 });
                    player.addEffect('slowness', 5 * 20, { amplifier: 0 });
                    break;
                case "sunflowerdelight:tricolored_ice_cream":
                    player.addEffect('slowness', 5 * 20, { amplifier: 0 });
                    break;
                case "sunflowerdelight:taiga_custard":
                    player.addEffect('slowness', 5 * 20, { amplifier: 0 });
                    break;
                case "sunflowerdelight:rose_lemonade":
                    player.addEffect('instant_health', 0.1 * 20, { amplifier: 0 });
            }
        }
    }
}
__decorate([
    EventAPI.register(world.afterEvents.itemStopUse),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof ItemStopUseAfterEvent !== "undefined" && ItemStopUseAfterEvent) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], FoodRegister.prototype, "eat", null);
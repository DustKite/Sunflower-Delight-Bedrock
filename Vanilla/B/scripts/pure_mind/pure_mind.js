import { world, system } from "@minecraft/server";
world.afterEvents.itemCompleteUse.subscribe((event) => {
    if (event.itemStack.typeId === "sunflowerdelight:tricolored_ice_cream") {
        const player = event.source;
        player.runCommand("kill @e[type=phantom]");
        player.onScreenDisplay.setActionBar({
            translate: "sunflowerdelight.pure_mind.activate",
            with: ["10"]
        });
        let secondsLeft = 10;
        const interval = system.runInterval(() => {
            player.runCommand("kill @e[type=phantom]");
            if (system.currentTick % 40 === 0) {
                secondsLeft -= 2;

                if (secondsLeft > 0) {
                    player.onScreenDisplay.setActionBar({
                        translate: "sunflowerdelight.pure_mind.countdown",
                        with: [secondsLeft.toString()]
                    });
                } else {
                    player.onScreenDisplay.setActionBar({
                        translate: "sunflowerdelight.pure_mind.expire"
                    });
                    system.clearRun(interval);
                }
            }
        }, 1);
    }
});
import { App } from "../../LauncherServer"
import { AbstractCommand, Category } from "../AbstractCommand"

export class SyncUpdatesCommand extends AbstractCommand {
    constructor() {
        super({
            name: "syncupdates",
            description: App.LangManager.getTranslate().CommandsManager.commands.updates.SyncUpdatesCommand,
            category: Category.UPDATES,
        })
    }

    invoke(): void {
        App.UpdatesManager.hashUpdatesDir()
    }
}

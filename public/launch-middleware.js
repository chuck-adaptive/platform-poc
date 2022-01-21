const myPlatformUUID = 'example_platform';

const launchTargetOnExistingPlatform = () => {
    // wrap the target platform
    const existingPlatform = await fin.Platform.wrap({ uuid: myPlatformUUID })
    // create a new view from the platform
    await fin.Platform.createView({ name: fin.me.name, url: window.location.href })
}

const launchTargetAlongWithPlatform = () => {
    console.log('launchTargetAlongWithPlatform')
    // fin.Platform.startFromManifest()
}

const launchLogic = async () => {
    try {
        if (fin.me.isView) {
            // already on platform
            return;
        }

        const allApps = fin.System.getAllApplications();
        const myPlatform = allApps.find(app => app.uuid === myPlatformUUID);

        if (myPlatform) {
            // the platform is already running - launch this app on that platform
            await launchTargetOnExistingPlatform()
        } else {
            // the platform is not running - start the platform with this view
            await launchTargetAlongWithPlatform()
        }
    } catch (e) {
        console.error('Unexpected error!', e)
    }
}
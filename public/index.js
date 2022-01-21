const launchPlatformButton = document.getElementById('launch-platform-app')
const launchPlatformButton2 = document.getElementById('launch-platform-app-two')
const launchAppOntoPlatformButton = document.getElementById('launch-app-onto-platform')
const launchOtherPlatformButton = document.getElementById('launch-other-platform-app')
const middlewareLauncherButton = document.getElementById('middleware-app')

const launchPlatforButtonOnClick = async () => {
    try {
        fin.Application.startFromManifest(`${window.location.origin}/platform_app.json`)
    } catch (e) {
        console.error('Error in startFromManifest', e)
    }
}

const launchPlatformSecondButtonOnClick = async () => {
    try {
        fin.Application.startFromManifest(`${window.location.origin}/platform_app_new.json`)
    } catch (e) {
        console.error('Error in startFromManifest', e)
    }
}

launchPlatformButton.onclick = launchPlatforButtonOnClick
launchPlatformButton2.onclick = launchPlatformSecondButtonOnClick

// This is the target platform UUID - it is in the platform_app.json
const TARGET_PLATFORM_UUDI = 'example_platform'

const launchAppOntoPlatformButtonOnClick = async () => {
    try {
        // see if the existing platform is up
        const allRunningApps = await fin.System.getAllApplications();
    } catch (e) {

    }
}

const launchMiddleware = () => {
    fin.Application.start({
        name: 'ok',
        url: 'http://localhost:8080/launch-middleware.html',
        uuid: 'middleware-yah'
    })
}

middlewareLauncherButton.onclick = launchMiddleware

const platformStatusHeadline = document.getElementById('platform-status')

const onLoad = () => {
    if (fin.me.isView) {
        platformStatusHeadline.innerText = 'Hello From Platform'
    } else {
        platformStatusHeadline.innerText = 'Hello From A Window'
    }
}
onLoad()
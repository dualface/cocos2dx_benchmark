#include "main.h"
#include "SimulatorWin.h"
#include <shellapi.h>

#if _MSC_VER > 1800
#pragma comment(lib,"libcocos2d_2015.lib")
#pragma comment(lib,"libbox2d_2015.lib")
#pragma comment(lib,"libSpine_2015.lib")
#pragma comment(lib,"librecast_2015.lib")
#pragma comment(lib,"libbullet_2015.lib")
#pragma comment(lib,"libluacocos2d_2015")
#pragma comment(lib,"libsimulator_2015")
#else
#pragma comment(lib,"libcocos2d_2013.lib")
#pragma comment(lib,"libbox2d_2013.lib")
#pragma comment(lib,"libSpine_2013.lib")
#pragma comment(lib,"librecast_2013.lib")
#pragma comment(lib,"libbullet_2013.lib")
#pragma comment(lib,"libluacocos2d_2013")
#pragma comment(lib,"libsimulator_2013")
#endif

int APIENTRY _tWinMain(HINSTANCE hInstance,
	HINSTANCE hPrevInstance,
	LPTSTR    lpCmdLine,
	int       nCmdShow)
{
	UNREFERENCED_PARAMETER(hPrevInstance);
	UNREFERENCED_PARAMETER(lpCmdLine);
    return SimulatorWin::getInstance()->run();
}

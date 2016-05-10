#ifndef __HELLOWORLD_SCENE_H__
#define __HELLOWORLD_SCENE_H__

#include "cocos2d.h"

#include <vector>

using namespace std;
using namespace cocos2d;

typedef struct {
    Sprite *sprite;
    float speedX;
    float speedY;
} Bunny;

class HelloWorld : public cocos2d::Layer
{
public:
    // there's no 'id' in cpp, so we recommend returning the class instance pointer
    static cocos2d::Scene* createScene();

    // Here's a difference. Method 'init' in cocos2d-x returns bool, instead of returning 'id' in cocos2d-iphone
    virtual bool init();

    // implement the "static create()" method manually
    CREATE_FUNC(HelloWorld);

    virtual void update(float dt);

private:
    float width = 640;
    float height = 960;

    vector<Bunny*> bunnys;
    float gravity = 0.5;

    float maxX = width;
    float minX = 0;
    float maxY = height;
    float minY = 0;

    float startBunnyCount = 10000;
    float isAdding = false;
    float count = 0;
    float container;
    float pixiLogo;
    float clickImage;
    
    float amount = 100;
};

#endif // __HELLOWORLD_SCENE_H__

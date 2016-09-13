#ifndef __HELLOWORLD_SCENE_H__
#define __HELLOWORLD_SCENE_H__

#include "cocos2d.h"

#include <vector>

using namespace std;
using namespace cocos2d;

typedef struct {
    Sprite *sprite;
    float x;
    float y;
    int i;
    float o;
    float oi;
} Star;

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
    void addStars(int count);

    float width = 640;
    float height = 960;

    float maxX = width;
    float minX = 0;
    float maxY = height;
    float minY = 0;

    float starsCountOffset = 1000;
    int offsetCount = 60;

    vector<float> offsetsX;
    vector<float> offsetsY;
    vector<Star> stars;

    Layer *starsLayer;
    Label *countLabel;
};

#endif // __HELLOWORLD_SCENE_H__

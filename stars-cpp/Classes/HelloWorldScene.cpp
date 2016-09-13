#include "HelloWorldScene.h"

#include <stdlib.h>

USING_NS_CC;

#define M_PI 3.14159265358979323846

inline float randomf1()
{
    return (float)rand() / (float)RAND_MAX;
}

inline float randomf(float from, float to)
{
    return randomf1() * (to - from) + from;
}

Scene* HelloWorld::createScene()
{
    auto scene = Scene::create();
    auto layer = HelloWorld::create();
    scene->addChild(layer);
    return scene;
}

bool HelloWorld::init()
{
    if (!Layer::init()) {
        return false;
    }

    timeval t;
    gettimeofday(&t, NULL);
    srand(t.tv_sec * 10000 + t.tv_usec);

    auto size = Director::getInstance()->getOpenGLView()->getDesignResolutionSize();
    maxX = size.width;
    maxY = size.height;

    starsLayer = Layer::create();
    addChild(starsLayer);

    auto listener = EventListenerTouchOneByOne::create();
    listener->onTouchBegan = [this](Touch* touch, Event* event) {
        addStars(starsCountOffset);
        return false;
    };
    Director::getInstance()->getEventDispatcher()->addEventListenerWithSceneGraphPriority(listener, starsLayer);

    countLabel = Label::createWithSystemFont("0 stars", "sans", 24);
    countLabel->setTextColor(Color4B(255, 0, 0, 255));
    countLabel->setAnchorPoint(Vec2(0, 1));
    countLabel->setPosition(Vec2(10, maxY - 10));
    addChild(countLabel);

    float roundStep = 360.0f / offsetCount;
    for (int i = 0; i < offsetCount; i++) {
        offsetsX.push_back(sinf(i * roundStep * M_PI / 180.0f) * 4.0f);
        offsetsY.push_back(cosf(i * roundStep * M_PI / 180.0f) * 4.0f);
    }

    addStars(starsCountOffset);

    scheduleUpdate();

    return true;
}

void HelloWorld::addStars(int count)
{
    for (int i = 0; i < count; i++) {
        Star star;
        star.sprite = Sprite::create("res/star.png");
        star.x = randomf(0, maxX);
        star.y = randomf(0, maxY);
        star.i = floor(randomf(0, offsetCount));
        star.o = randomf1();
        star.oi = 1.0f / 60.0f;

        star.sprite->setPosition(Vec2(star.x, star.y));
        star.sprite->setOpacity(star.o * 255);
        starsLayer->addChild(star.sprite);

        stars.push_back(star);
    }

    countLabel->setString(to_string(stars.size()));
}

void HelloWorld::update(float dt)
{
    size_t count = stars.size();
    for (size_t i = 0; i < count; i++) {
        Star &star = stars.at(i);

        star.i++;
        star.i %= offsetCount;

        star.o += star.oi;
        if (star.o > 1.0f) {
            star.o = 1.0f;
            star.oi = -star.oi;
        } else if (star.o < 0.0f) {
            star.o = 0.0f;
            star.oi = -star.oi;
        }

        star.sprite->setPosition(Vec2(star.x + offsetsX[star.i], star.y + offsetsY[star.i]));
        star.sprite->setOpacity(star.o * 255);
    }
}

//
//  TwitterDemoAppDelegate_iPad.m
//  TwitterDemo
//
//  Created by Zachary Hariton on 6/8/11.
//  Copyright 2011 __MyCompanyName__. All rights reserved.
//

#import "TwitterDemoAppDelegate_iPad.h"

@implementation TwitterDemoAppDelegate_iPad
@synthesize Circles;

- (void)dealloc
{
	[super dealloc];
}

- (void)applicationDidBecomeActive:(UIApplication *)application {
    [Circles loadRequest:[NSURLRequest requestWithURL:[NSURL fileURLWithPath:[[NSBundle mainBundle] pathForResource:@"Circles" ofType:@"html"]isDirectory:NO]]];
}

@end

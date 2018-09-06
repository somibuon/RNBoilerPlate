//  Created by react-native-create-bridge

#import "EnvConfig.h"

#import <React/RCTBridge.h>
#import <React/RCTEventDispatcher.h>

@implementation EnvConfig
@synthesize bridge = _bridge;

RCT_EXPORT_MODULE();

+ (BOOL)requiresMainQueueSetup
{
  return YES;
}

- (NSDictionary *)constantsToExport
{
  return @{
#if STAGING
           @"ENV": @"staging"
#else
#if DEBUG
           @"ENV": @"debug"
#else
           @"ENV": @"production"
#endif
#endif
         };
}
@end

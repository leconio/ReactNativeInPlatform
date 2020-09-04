//
//  MainViewController.m
//  AppPlatform
//
//  Created by spawn on 2020/8/7.
//

#import "MainViewController.h"

@interface MainViewController ()

@end

@implementation MainViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
  
  UIButton *simpleBtn = [[UIButton alloc] initWithFrame:CGRectMake(0, 0, 400, 50)];
  [simpleBtn setTitle:@"Simple" forState: UIControlStateNormal];
  
  [self.view addSubview:simpleBtn];
  [self.view setBackgroundColor:[[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1]];
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end

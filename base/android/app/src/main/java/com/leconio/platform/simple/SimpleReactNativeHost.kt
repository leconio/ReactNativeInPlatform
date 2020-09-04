package com.leconio.platform.simple

import android.app.Application
import com.facebook.react.PackageList
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.leconio.platform.BuildConfig
import com.leconio.platform.MainApplication


class SimpleReactNativeHost(application: Application?) : ReactNativeHost(application) {

    override fun getPackages(): MutableList<ReactPackage> {
        return PackageList(this).packages;
    }

    override fun getUseDeveloperSupport(): Boolean {
        return BuildConfig.DEBUG
    }

    override fun getJSMainModuleName(): String {
        return "simple"
    }

    override fun getBundleAssetName(): String? {
        return "simple/simple.android.bundle"
    }
}
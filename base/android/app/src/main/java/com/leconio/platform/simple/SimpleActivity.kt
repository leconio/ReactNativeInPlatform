package com.leconio.platform.simple

import android.content.Context
import android.os.Bundle
import android.view.KeyEvent
import android.widget.FrameLayout
import androidx.appcompat.app.AppCompatActivity
import com.facebook.react.ReactInstanceManager
import com.facebook.react.ReactRootView
import com.facebook.react.bridge.CatalystInstance
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler
import com.leconio.platform.BuildConfig
import com.leconio.platform.R
import java.lang.reflect.InvocationTargetException

class SimpleActivity : AppCompatActivity(), DefaultHardwareBackBtnHandler {

    private var instance: CatalystInstance? = null
    private lateinit var reactInstanceManager: ReactInstanceManager
    private lateinit var host: SimpleReactNativeHost

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_simple)
        initReactNative()
    }

    private fun initReactNative() {
        host = SimpleReactNativeHost(application)
        initializeFlipper()
        reactInstanceManager = host.reactInstanceManager
        buildView()
    }

    override fun onKeyUp(keyCode: Int, event: KeyEvent?): Boolean {
        return shouldShowDevMenuOrReload(keyCode, event) || super.onKeyUp(keyCode, event)
    }

    private fun shouldShowDevMenuOrReload(keyCode: Int, event: KeyEvent?): Boolean {
        if (keyCode == KeyEvent.KEYCODE_MENU) {
            host.reactInstanceManager.showDevOptionsDialog()
            return true
        }
        return false
    }


    private fun buildView() {
        val rootView = ReactRootView(this)
        rootView.startReactApplication(reactInstanceManager, BUNDLE_NAME)
        findViewById<FrameLayout>(R.id.container).addView(rootView)
    }


    private fun initializeFlipper() {
        ReactNativeFlipper.initializeFlipper(application, host.reactInstanceManager)
    }

    override fun onResume() {
        super.onResume()
        onHostResume()
    }

    private fun onHostResume() {
        if (host.hasInstance()) {
            host.reactInstanceManager
                    .onHostResume(this, this as DefaultHardwareBackBtnHandler?)
        }
    }

    companion object {
        const val BUNDLE_NAME = "simple"
        const val BUNDLE_PATH = "assets://simple/simple.android.bundle"
    }

    override fun invokeDefaultOnBackPressed() {
        super.onBackPressed()
    }

}
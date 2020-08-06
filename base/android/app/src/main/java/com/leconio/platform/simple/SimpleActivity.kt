package com.leconio.platform.simple

import android.os.Bundle
import android.view.KeyEvent
import android.widget.FrameLayout
import androidx.appcompat.app.AppCompatActivity
import com.facebook.infer.annotation.Assertions
import com.facebook.react.ReactInstanceManager
import com.facebook.react.ReactRootView
import com.facebook.react.bridge.CatalystInstance
import com.facebook.react.devsupport.DoubleTapReloadRecognizer
import com.leconio.platform.R

class SimpleActivity : AppCompatActivity() {

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

    companion object {
        const val BUNDLE_NAME = "simple"
        const val BUNDLE_PATH = "assets://simple/simple.android.bundle"
    }

}